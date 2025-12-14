import React, { useState, useEffect } from 'react'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { Plus, X } from 'lucide-react'

interface Coin {
  id: string
  symbol: string
  name: string
}

export const FavoriteCoins: React.FC = () => {
  const [coins, setCoins] = useState<Coin[]>([])
  const [newCoin, setNewCoin] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchCoins()
  }, [])

  const fetchCoins = () => {
    // Mock data for demo
    setCoins([
      { id: '1', symbol: 'BTC', name: 'Bitcoin' },
      { id: '2', symbol: 'ETH', name: 'Ethereum' },
      { id: '3', symbol: 'BNB', name: 'Binance Coin' },
    ])
  }

  const handleAddCoin = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newCoin.trim()) return

    setIsLoading(true)
    // Mock: Add coin to list
    const newCoinData = {
      id: Date.now().toString(),
      symbol: newCoin.toUpperCase(),
      name: newCoin.toUpperCase(),
    }
    setCoins([...coins, newCoinData])
    setNewCoin('')
    setIsLoading(false)
  }

  const handleRemoveCoin = (coinId: string) => {
    setCoins(coins.filter(coin => coin.id !== coinId))
  }

  return (
    <Card>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Favorite Coins</h2>
        <p className="text-gray-400">Manage your favorite coins for quick access</p>
      </div>

      <form onSubmit={handleAddCoin} className="mb-6 flex gap-3">
        <Input
          placeholder="Enter coin symbol (e.g., BTC)"
          value={newCoin}
          onChange={(e) => setNewCoin(e.target.value)}
          className="flex-1"
        />
        <Button type="submit" isLoading={isLoading}>
          <Plus className="w-4 h-4 mr-2" />
          Add Coin
        </Button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {coins.map((coin) => (
          <div
            key={coin.id}
            className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center justify-between hover:bg-white/10 transition-colors"
          >
            <div>
              <h3 className="font-semibold text-white">{coin.symbol}</h3>
              <p className="text-sm text-gray-400">{coin.name}</p>
            </div>
            <button
              onClick={() => handleRemoveCoin(coin.id)}
              className="text-red-400 hover:text-red-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      {coins.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <p>No favorite coins yet. Add your first coin above.</p>
        </div>
      )}
    </Card>
  )
}

