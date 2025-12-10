const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

interface ApiResponse<T> {
  data: T
  token?: string
  user?: {
    id: string
    email: string
    name?: string
  }
}

class ApiService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const token = localStorage.getItem('token')
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'An error occurred' }))
      throw new Error(error.message || 'Request failed')
    }

    return response.json()
  }

  // Auth endpoints
  async signup(name: string, email: string, password: string) {
    return this.request<{ user: any; token: string }>('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    })
  }

  async login(email: string, password: string) {
    return this.request<{ user: any; token: string }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })
  }

  async googleLogin(token: string) {
    return this.request<{ user: any; token: string }>('/auth/google', {
      method: 'POST',
      body: JSON.stringify({ token }),
    })
  }

  async forgotPassword(email: string) {
    return this.request('/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email }),
    })
  }

  async getProfile() {
    return this.request<{ id: string; email: string; name?: string }>('/auth/profile')
  }

  // Favorite Coins
  async getFavoriteCoins() {
    return this.request('/coins/favorites')
  }

  async addFavoriteCoin(coinId: string) {
    return this.request('/coins/favorites', {
      method: 'POST',
      body: JSON.stringify({ coinId }),
    })
  }

  async removeFavoriteCoin(coinId: string) {
    return this.request(`/coins/favorites/${coinId}`, {
      method: 'DELETE',
    })
  }

  // Telegram
  async getTelegramAccount() {
    return this.request('/telegram/account')
  }

  async updateTelegramAccount(chatId: string) {
    return this.request('/telegram/account', {
      method: 'POST',
      body: JSON.stringify({ chatId }),
    })
  }

  async testTelegramMessage() {
    return this.request('/telegram/test-message', {
      method: 'POST',
    })
  }

  async toggleTelegram(enabled: boolean) {
    return this.request('/telegram/toggle', {
      method: 'POST',
      body: JSON.stringify({ enabled }),
    })
  }

  // Sync
  async getSyncOrders() {
    return this.request('/sync/orders')
  }

  async getSyncLogs() {
    return this.request('/sync/logs')
  }
}

export const api = new ApiService()

