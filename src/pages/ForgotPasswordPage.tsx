import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { BackgroundEffects } from '../components/auth/BackgroundEffects'

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setMessage('')
    setIsLoading(true)

    // Mock: Send reset email
    setTimeout(() => {
      setMessage('Password reset instructions have been sent to your email.')
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background-dark">
      <BackgroundEffects />

      <main className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <h1 className="font-display text-5xl text-white mb-2">
              Reset Password
            </h1>
            <p className="text-gray-400">
              Enter your email to receive reset instructions
            </p>
          </div>

          <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-500/10 border border-red-500/50 rounded-md p-3 text-sm text-red-400">
                  {error}
                </div>
              )}

              {message && (
                <div className="bg-emerald-500/10 border border-emerald-500/50 rounded-md p-3 text-sm text-emerald-400">
                  {message}
                </div>
              )}

              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />

              <Button type="submit" className="w-full" isLoading={isLoading}>
                Send Reset Link
              </Button>

              <div className="text-center">
                <Link to="/login" className="text-sm text-emerald-400 hover:text-emerald-300">
                  Back to Login
                </Link>
              </div>
            </form>
          </Card>
        </div>
      </main>
    </div>
  )
}

export default ForgotPasswordPage

