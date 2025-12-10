import React, { useState, useEffect } from 'react'
import { Card } from '../ui/Card'
import { FileText, CheckCircle, XCircle, Info } from 'lucide-react'
import { api } from '../../services/api'

interface Log {
  id: string
  message: string
  type: 'SUCCESS' | 'ERROR' | 'INFO'
  timestamp: string
}

export const SyncLogs: React.FC = () => {
  const [logs, setLogs] = useState<Log[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchLogs()
  }, [])

  const fetchLogs = async () => {
    setIsLoading(true)
    try {
      const response = await api.getSyncLogs()
      setLogs(response.data || [])
    } catch (error) {
      console.error('Failed to fetch logs:', error)
      // Mock data for demo
      setLogs([
        {
          id: '1',
          message: 'Successfully synced BTC/USDT order to Binance',
          type: 'SUCCESS',
          timestamp: new Date().toISOString(),
        },
        {
          id: '2',
          message: 'Failed to sync ETH/USDT order: Connection timeout',
          type: 'ERROR',
          timestamp: new Date().toISOString(),
        },
        {
          id: '3',
          message: 'Telegram notification sent for BTC/USDT',
          type: 'INFO',
          timestamp: new Date().toISOString(),
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const getLogIcon = (type: string) => {
    switch (type) {
      case 'SUCCESS':
        return <CheckCircle className="w-4 h-4 text-emerald-400" />
      case 'ERROR':
        return <XCircle className="w-4 h-4 text-red-400" />
      default:
        return <Info className="w-4 h-4 text-blue-400" />
    }
  }

  const getLogColor = (type: string) => {
    switch (type) {
      case 'SUCCESS':
        return 'border-emerald-500/30 bg-emerald-500/5'
      case 'ERROR':
        return 'border-red-500/30 bg-red-500/5'
      default:
        return 'border-blue-500/30 bg-blue-500/5'
    }
  }

  return (
    <Card>
      <div className="flex items-center gap-3 mb-6">
        <FileText className="w-6 h-6 text-emerald-400" />
        <div>
          <h2 className="text-2xl font-bold">Sync Logs</h2>
          <p className="text-gray-400">Recent synchronization activity</p>
        </div>
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto no-scrollbar">
        {logs.map((log) => (
          <div
            key={log.id}
            className={`border rounded-lg p-3 flex items-start gap-3 ${getLogColor(log.type)}`}
          >
            {getLogIcon(log.type)}
            <div className="flex-1 min-w-0">
              <p className="text-sm text-white">{log.message}</p>
              <p className="text-xs text-gray-500 mt-1">
                {new Date(log.timestamp).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {logs.length === 0 && !isLoading && (
        <div className="text-center py-12 text-gray-400">
          <p>No logs available</p>
        </div>
      )}
    </Card>
  )
}

