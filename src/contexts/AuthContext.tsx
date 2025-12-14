import React, { createContext, useContext, useState, useEffect } from 'react'

interface User {
  id: string
  email: string
  name?: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  signup: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  isLoading: boolean
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('token')
    if (token) {
      fetchProfile()
    } else {
      setIsLoading(false)
    }
  }, [])

  const fetchProfile = () => {
    // Mock: Check if user is logged in
    const token = localStorage.getItem('token')
    if (token) {
      setUser({ id: '1', email: 'user@example.com', name: 'User' })
    }
    setIsLoading(false)
  }

  const login = async (email: string, _password: string) => {
    // Mock: Login
    const mockToken = 'mock-token-' + Date.now()
    localStorage.setItem('token', mockToken)
    setUser({ id: '1', email, name: 'User' })
  }

  const signup = async (name: string, email: string, _password: string) => {
    // Mock: Signup
    const mockToken = 'mock-token-' + Date.now()
    localStorage.setItem('token', mockToken)
    setUser({ id: '1', email, name })
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        isLoading,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

