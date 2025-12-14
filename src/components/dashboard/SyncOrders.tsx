import React, { useState, useEffect } from 'react'
import { Card } from '../ui/Card'
import { RefreshCw, CheckCircle, XCircle, Clock } from 'lucide-react'

interface Order {
  id: string
  symbol: string
  side: 'BUY' | 'SELL'
  price: string
  quantity: string
  status: 'PENDING' | 'SENT' | 'FAILED'
  timestamp: string
}

export const SyncOrders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = () => {
    setIsLoading(true)
    // Mock data for demo
    setOrders([
      {
        id: '1',
        symbol: 'BTC/USDT',
        side: 'BUY',
        price: '43250.00',
        quantity: '0.1',
        status: 'SENT',
        timestamp: new Date().toISOString(),
      },
      {
        id: '2',
        symbol: 'ETH/USDT',
        side: 'SELL',
        price: '2650.00',
        quantity: '2.5',
        status: 'PENDING',
        timestamp: new Date().toISOString(),
      },
    ])
    setIsLoading(false)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'SENT':
        return <CheckCircle className="w-4 h-4 text-emerald-400" />
      case 'FAILED':
        return <XCircle className="w-4 h-4 text-red-400" />
      default:
        return <Clock className="w-4 h-4 text-yellow-400" />
    }
  }

  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Sync Orders</h2>
          <p className="text-gray-400">Orders fetched from TradingView</p>
        </div>
        <button
          onClick={fetchOrders}
          disabled={isLoading}
          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
        >
          <RefreshCw className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      <div className="space-y-3">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center justify-between"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                {getStatusIcon(order.status)}
                <span className="font-semibold text-white">{order.symbol}</span>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  order.side === 'BUY' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {order.side}
                </span>
              </div>
              <div className="text-sm text-gray-400">
                Price: {order.price} | Quantity: {order.quantity}
              </div>
            </div>
            <div className="text-xs text-gray-500">
              {new Date(order.timestamp).toLocaleTimeString()}
            </div>
          </div>
        ))}
      </div>

      {orders.length === 0 && !isLoading && (
        <div className="text-center py-12 text-gray-400">
          <p>No orders found</p>
        </div>
      )}
    </Card>
  )
}

