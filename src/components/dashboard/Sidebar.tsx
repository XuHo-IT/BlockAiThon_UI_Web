import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { LayoutDashboard, Coins, MessageSquare, RefreshCw, LogOut, Zap } from 'lucide-react'
import { cn } from '../../utils/cn'

interface SidebarProps {
  activeTab: 'overview' | 'coins' | 'telegram' | 'sync'
  setActiveTab: (tab: 'overview' | 'coins' | 'telegram' | 'sync') => void
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const menuItems = [
    { id: 'overview' as const, label: 'Overview', icon: LayoutDashboard },
    { id: 'coins' as const, label: 'Favorite Coins', icon: Coins },
    { id: 'telegram' as const, label: 'Telegram', icon: MessageSquare },
    { id: 'sync' as const, label: 'Sync Logs', icon: RefreshCw },
  ]

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-black/50 backdrop-blur-lg border-r border-white/10 p-6 flex flex-col">
      <Link to="/" className="flex items-center gap-2 mb-8 group">
        <div className="w-8 h-8 bg-gradient-to-tr from-emerald-600 to-green-400 rounded-md flex items-center justify-center relative overflow-hidden shadow-inner">
          <div className="absolute inset-0 bg-white/20 skew-x-12 -translate-x-4 group-hover:translate-x-4 transition-transform duration-500"></div>
          <Zap className="w-5 h-5 text-black relative z-10" />
        </div>
        <span className="text-lg font-semibold text-white">MEI</span>
      </Link>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200',
                activeTab === item.id
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          )
        })}
      </nav>

      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
      >
        <LogOut className="w-5 h-5" />
        <span className="font-medium">Logout</span>
      </button>
    </aside>
  )
}

