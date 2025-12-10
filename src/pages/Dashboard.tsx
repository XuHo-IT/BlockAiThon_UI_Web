import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Sidebar } from '../components/dashboard/Sidebar'
import { StatsCards } from '../components/dashboard/StatsCards'
import { FavoriteCoins } from '../components/dashboard/FavoriteCoins'
import { TelegramSettings } from '../components/dashboard/TelegramSettings'
import { SyncOrders } from '../components/dashboard/SyncOrders'
import { SyncLogs } from '../components/dashboard/SyncLogs'

const Dashboard: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<'overview' | 'coins' | 'telegram' | 'sync'>('overview')

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/login')
    }
  }, [isAuthenticated, isLoading, navigate])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background-dark flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-background-dark text-white flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

          {activeTab === 'overview' && (
            <div className="space-y-8">
              <StatsCards />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <SyncOrders />
                <SyncLogs />
              </div>
            </div>
          )}

          {activeTab === 'coins' && <FavoriteCoins />}
          {activeTab === 'telegram' && <TelegramSettings />}
          {activeTab === 'sync' && (
            <div className="space-y-6">
              <SyncOrders />
              <SyncLogs />
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default Dashboard

