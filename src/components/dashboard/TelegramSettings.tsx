import React, { useState } from 'react'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { MessageSquare, Send, ToggleLeft, ToggleRight } from 'lucide-react'

export const TelegramSettings: React.FC = () => {
  const [chatId, setChatId] = useState('')
  const [isEnabled, setIsEnabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSave = () => {
    setIsLoading(true)
    // Mock: Save settings
    setTimeout(() => {
      setMessage('Telegram account updated successfully!')
      setTimeout(() => setMessage(''), 3000)
      setIsLoading(false)
    }, 500)
  }

  const handleTestMessage = () => {
    setIsLoading(true)
    // Mock: Send test message
    setTimeout(() => {
      setMessage('Test message sent! Check your Telegram.')
      setTimeout(() => setMessage(''), 3000)
      setIsLoading(false)
    }, 500)
  }

  const handleToggle = () => {
    const newState = !isEnabled
    setIsLoading(true)
    // Mock: Toggle Telegram
    setTimeout(() => {
      setIsEnabled(newState)
      setMessage(`Telegram ${newState ? 'enabled' : 'disabled'}`)
      setTimeout(() => setMessage(''), 3000)
      setIsLoading(false)
    }, 500)
  }

  return (
    <Card>
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <MessageSquare className="w-6 h-6 text-emerald-400" />
          <h2 className="text-2xl font-bold">Telegram Settings</h2>
        </div>
        <p className="text-gray-400">Configure Telegram notifications for trading alerts</p>
      </div>

      {message && (
        <div className={`mb-4 p-3 rounded-md text-sm ${
          message.includes('success') || message.includes('sent') || message.includes('enabled') || message.includes('disabled')
            ? 'bg-emerald-500/10 border border-emerald-500/50 text-emerald-400'
            : 'bg-red-500/10 border border-red-500/50 text-red-400'
        }`}>
          {message}
        </div>
      )}

      <div className="space-y-6">
        <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
          <div>
            <h3 className="font-semibold text-white mb-1">Telegram Notifications</h3>
            <p className="text-sm text-gray-400">Enable or disable Telegram alerts</p>
          </div>
          <button
            onClick={handleToggle}
            disabled={isLoading}
            className="text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            {isEnabled ? (
              <ToggleRight className="w-8 h-8" />
            ) : (
              <ToggleLeft className="w-8 h-8" />
            )}
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Telegram Chat ID
          </label>
          <Input
            type="text"
            placeholder="Enter your Telegram Chat ID"
            value={chatId}
            onChange={(e) => setChatId(e.target.value)}
          />
          <p className="mt-2 text-xs text-gray-500">
            Find your Chat ID by messaging @userinfobot on Telegram
          </p>
        </div>

        <div className="flex gap-3">
          <Button onClick={handleSave} isLoading={isLoading}>
            Save Settings
          </Button>
          <Button variant="outline" onClick={handleTestMessage} isLoading={isLoading}>
            <Send className="w-4 h-4 mr-2" />
            Send Test Message
          </Button>
        </div>
      </div>
    </Card>
  )
}

