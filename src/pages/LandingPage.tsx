import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Zap, MessageSquare, BarChart3, Shield } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { ScrollToTop } from '../components/ui/ScrollToTop'
import { FallingParticles } from '../components/landing/FallingParticles'
import { TradingChart } from '../components/landing/TradingChart'

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-dark text-white relative overflow-hidden">
      {/* Background Effects with Green Trading Theme */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Green gradient overlay for trading theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/30 via-black to-black"></div>
        <div className="absolute inset-0 grid-bg"></div>
        <div className="absolute top-0 left-0 h-96 w-full bg-gradient-to-b from-emerald-500/20 via-emerald-500/10 to-transparent"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 h-[600px] w-[600px] md:h-[800px] md:w-[800px] bg-[radial-gradient(circle,rgba(5,242,141,0.15)_0%,rgba(5,242,141,0)_70%)]"></div>
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] bg-[radial-gradient(circle,rgba(16,185,129,0.1)_0%,transparent_70%)]"></div>
      </div>

      {/* Falling Particles Effect */}
      <FallingParticles />

      {/* Navigation */}
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <div className="bg-gray-950/80 backdrop-blur-md border border-white/10 rounded-full pl-2 pr-2 py-1.5 flex items-center gap-6 shadow-2xl shadow-black/50">
          <Link to="/" className="flex items-center gap-2 px-3 group">
            <div className="w-5 h-5 bg-gradient-to-tr from-emerald-600 to-green-400 rounded-md flex items-center justify-center relative overflow-hidden shadow-inner">
              <div className="absolute inset-0 bg-white/20 skew-x-12 -translate-x-4 group-hover:translate-x-4 transition-transform duration-500"></div>
            </div>
            <span className="text-sm font-semibold text-white tracking-tight">MEI</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <a href="#features" className="px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-white transition-colors duration-200">
              Features
            </a>
            <a href="#how-it-works" className="px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-white transition-colors duration-200">
              How It Works
            </a>
            <Link to="/download" className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 hover:bg-gray-200 transition-colors shadow-lg shadow-emerald-500/10">
              Download
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* <Link to="/login" className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 hover:bg-gray-200 transition-colors shadow-lg shadow-emerald-500/10">
            Login
            <ArrowRight className="w-3 h-3" />
          </Link> */}
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] tracking-[0.2em] text-emerald-500/80 font-semibold uppercase">
                  System Operational
                </span>
              </div>

              <h1 className="font-serif-italic text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 via-emerald-500 to-green-600 text-glow">
                  Sync Trading Signals
                </span>
                <br />
                <span className="text-white">Across Exchanges.</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 font-normal max-w-xl leading-relaxed">
                Extract trading setups from TradingView and apply them automatically to exchanges like Binance. 
                Manage alerts, detect support/resistance, and generate price tags with precision.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/tutorial">
                  <Button size="lg" className="w-full sm:w-auto">
                    Install Extension
                  </Button>
                </Link>
                {/* <Link to="/login">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    View Dashboard
                  </Button>
                </Link> */}
              </div>
            </div>

            {/* Right Column - Trading Chart */}
            <div className="lg:col-span-5 relative h-[400px] lg:h-[600px] w-full flex items-center justify-center">
              <div className="relative w-full h-full max-w-2xl">
                {/* Enhanced Circle Visualization */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500/30 via-emerald-400/15 to-transparent blur-3xl"></div>
                    
                    {/* Glassmorphism backing */}
                    <div className="absolute inset-4 bg-white/5 backdrop-blur-md rounded-full border border-emerald-500/40 shadow-[0_0_50px_rgba(5,242,141,0.3)]"></div>
                    
                    {/* Radar rings */}
                    <div className="absolute inset-8 rounded-full border-2 border-dashed border-emerald-500/50 animate-[spin_25s_linear_infinite]"></div>
                    <div className="absolute inset-16 rounded-full border border-emerald-500/40"></div>
                    <div className="absolute inset-24 rounded-full border border-emerald-500/30"></div>
                    <div className="absolute inset-32 rounded-full border border-emerald-500/20"></div>
                    
                    {/* Scanner effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-emerald-500/25 to-transparent animate-[spin_5s_linear_infinite]"></div>
                    
                    {/* Inner glass circle */}
                    <div className="absolute inset-16 rounded-full bg-black/50 backdrop-blur-sm border border-emerald-500/30 flex items-center justify-center shadow-2xl">
                      <div className="relative z-10">
                        <div className="w-8 h-8 bg-primary rounded-full shadow-[0_0_40px_rgba(5,242,141,1),0_0_80px_rgba(5,242,141,0.6)] relative">
                          <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                          <div className="absolute inset-0 bg-primary rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative ticks */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-8 bg-emerald-400 rounded-full shadow-[0_0_15px_rgba(5,242,141,1)]"></div>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-8 bg-emerald-400 rounded-full shadow-[0_0_15px_rgba(5,242,141,1)]"></div>
                    <div className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-1 bg-emerald-400 rounded-full shadow-[0_0_15px_rgba(5,242,141,1)]"></div>
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-1 bg-emerald-400 rounded-full shadow-[0_0_15px_rgba(5,242,141,1)]"></div>
                  </div>
                </div>

                {/* Trading Chart Overlay */}
                <div className="absolute inset-0 flex items-end justify-center z-10 pb-8">
                  <div className="w-full max-w-md h-[200px] md:h-[250px]">
                    <TradingChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Trading Chart Section */}
      <section className="relative z-10 py-24 bg-gradient-to-b from-black/60 via-emerald-950/30 to-black/60">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Live Trading Data</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real-time market insights powered by MEI
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="h-[400px] md:h-[500px]">
              <TradingChart />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative z-10 py-24 bg-gradient-to-b from-black/40 via-emerald-950/20 to-black/40">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How MEI Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A seamless flow from TradingView to your exchange
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold">1. TradingView</h3>
              <p className="text-gray-400">Extract trading setups and signals from your TradingView charts</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold">2. MEI Sync</h3>
              <p className="text-gray-400">MEI processes and syncs signals automatically</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto">
                <BarChart3 className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold">3. Binance</h3>
              <p className="text-gray-400">Apply signals directly to Binance and other exchanges</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-24 bg-gradient-to-b from-black/40 via-emerald-950/10 to-black/40">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything you need to sync and manage your trading signals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-black/50 backdrop-blur-lg border border-white/10 rounded-lg p-6 hover:bg-white/[0.04] transition-colors">
              <Zap className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Multi-Exchange Sync</h3>
              <p className="text-gray-400">Sync signals across multiple exchanges simultaneously</p>
            </div>

            <div className="bg-black/50 backdrop-blur-lg border border-white/10 rounded-lg p-6 hover:bg-white/[0.04] transition-colors">
              <Shield className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">S/R Detection</h3>
              <p className="text-gray-400">Automatically detect support and resistance levels</p>
            </div>

            <div className="bg-black/50 backdrop-blur-lg border border-white/10 rounded-lg p-6 hover:bg-white/[0.04] transition-colors">
              <TrendingUp className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Price Tag Generator</h3>
              <p className="text-gray-400">Generate price up/down tags automatically</p>
            </div>

            <div className="bg-black/50 backdrop-blur-lg border border-white/10 rounded-lg p-6 hover:bg-white/[0.04] transition-colors">
              <MessageSquare className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Telegram Integration</h3>
              <p className="text-gray-400">Receive alerts and notifications via Telegram</p>
            </div>

            <div className="bg-black/50 backdrop-blur-lg border border-white/10 rounded-lg p-6 hover:bg-white/[0.04] transition-colors">
              <BarChart3 className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
              <p className="text-gray-400">Track synced signals and performance metrics</p>
            </div>

            <div className="bg-black/50 backdrop-blur-lg border border-white/10 rounded-lg p-6 hover:bg-white/[0.04] transition-colors">
              <Shield className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-gray-400">Enterprise-grade security for your trading data</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 bg-gradient-to-b from-black/60 via-emerald-950/30 to-black/60">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Join thousands of traders syncing their signals with MEI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tutorial">
              <Button size="lg">Install Extension</Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg">Login to Dashboard</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}

export default LandingPage

