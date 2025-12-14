import React, { useState, useEffect } from 'react'
import { Card } from '../ui/Card'
import { TrendingUp, MessageSquare, BarChart3, Activity } from 'lucide-react'

export const StatsCards: React.FC = () => {
  const [stats, setStats] = useState({
    syncedSignals: 0,
    telegramAlerts: 0,
    importedCharts: 0,
    activeSyncs: 0,
  })

  useEffect(() => {
    // Fetch stats from API
    const fetchStats = async () => {
      try {
        // Mock data - replace with actual API calls
        setStats({
          syncedSignals: 1247,
          telegramAlerts: 892,
          importedCharts: 156,
          activeSyncs: 12,
        })
      } catch (error) {
        console.error('Failed to fetch stats:', error)
      }
    }

    fetchStats()
  }, [])

  const statItems = [
    {
      label: 'Synced Signals',
      value: stats.syncedSignals.toLocaleString(),
      icon: TrendingUp,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
    },
    {
      label: 'Telegram Alerts',
      value: stats.telegramAlerts.toLocaleString(),
      icon: MessageSquare,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
    },
    {
      label: 'Imported Charts',
      value: stats.importedCharts.toLocaleString(),
      icon: BarChart3,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
    },
    {
      label: 'Active Syncs',
      value: stats.activeSyncs.toLocaleString(),
      icon: Activity,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statItems.map((item) => {
        const Icon = item.icon
        return (
          <Card key={item.label} variant="glass">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                <p className="text-2xl font-bold text-white">{item.value}</p>
              </div>
              <div className={`${item.bgColor} p-3 rounded-lg`}>
                <Icon className={`w-6 h-6 ${item.color}`} />
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}

