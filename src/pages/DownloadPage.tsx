import React from 'react'
import { Link } from 'react-router-dom'
import { Download, FileArchive, Upload, Puzzle, BarChart3, ExternalLink, Key, CheckCircle2 } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { ScrollToTop } from '../components/ui/ScrollToTop'

const DownloadPage: React.FC = () => {
  const downloadLink = "https://drive.google.com/uc?export=download&id=1qelkV1VXL8PlFopIlqjlxsZheKVKx9_I"

  const steps = [
    {
      number: 1,
      title: "Download Extension",
      description: "Click the button below to download the MEI extension from Google Drive",
      icon: Download,
      content: (
        <div className="space-y-4">
          <a 
            href={downloadLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button size="lg" className="flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Extension from Google Drive
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
          <p className="text-gray-400 text-sm">
            The file will be downloaded as <code className="bg-black/50 px-2 py-1 rounded text-emerald-400">MEI.rar</code>
          </p>
        </div>
      )
    },
    {
      number: 2,
      title: "Extract the File",
      description: "Extract the downloaded RAR file to get the MEI folder",
      icon: FileArchive,
      content: (
        <div className="space-y-4">
          <div className="bg-black/50 border border-white/10 rounded-lg p-4">
            <p className="text-gray-300 mb-2">After downloading:</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-400 text-sm">
              <li>Locate the downloaded <code className="bg-black/50 px-2 py-1 rounded text-emerald-400">MEI.rar</code> file</li>
              <li>Right-click on the file and select "Extract Here" or "Extract to MEI"</li>
              <li>You should now have a folder named <code className="bg-black/50 px-2 py-1 rounded text-emerald-400">MEI</code></li>
            </ol>
          </div>
        </div>
      )
    },
    {
      number: 3,
      title: "Upload to Chrome Extensions",
      description: "Load the MEI folder as an unpacked extension in Chrome",
      icon: Upload,
      content: (
        <div className="space-y-4">
          <div className="bg-black/50 border border-white/10 rounded-lg p-4 space-y-3">
            <p className="text-gray-300 mb-2">Follow these steps:</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-400 text-sm">
              <li>Open Chrome and navigate to <code className="bg-black/50 px-2 py-1 rounded text-emerald-400">chrome://extensions/</code></li>
              <li>Enable <strong className="text-white">Developer mode</strong> (toggle in the top-right corner)</li>
              <li>Click <strong className="text-white">"Load unpacked"</strong> button</li>
              <li>Select the <code className="bg-black/50 px-2 py-1 rounded text-emerald-400">MEI</code> folder that you extracted</li>
              <li>The extension should now appear in your extensions list</li>
            </ol>
          </div>
          <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-lg p-3">
            <p className="text-emerald-400 text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Make sure Developer mode is enabled before loading the extension
            </p>
          </div>
        </div>
      )
    },
    {
      number: 4,
      title: "Add Extension to Navbar",
      description: "Pin the MEI extension to your Chrome toolbar for easy access",
      icon: Puzzle,
      content: (
        <div className="space-y-4">
          <div className="bg-black/50 border border-white/10 rounded-lg p-4">
            <p className="text-gray-300 mb-2">To add the extension to your navbar:</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-400 text-sm">
              <li>Click the <strong className="text-white">puzzle piece icon</strong> (extensions menu) in Chrome's toolbar</li>
              <li>Find the <strong className="text-white">MEI</strong> extension in the list</li>
              <li>Click the <strong className="text-white">pin icon</strong> next to MEI to pin it to your toolbar</li>
              <li>The MEI extension icon should now be visible in your Chrome navbar</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      number: 5,
      title: "Add Indicators on TradingView",
      description: "Add RSI and MA indicators to your TradingView chart, then save using the extension",
      icon: BarChart3,
      content: (
        <div className="space-y-4">
          <div className="bg-black/50 border border-white/10 rounded-lg p-4">
            <p className="text-gray-300 mb-2">On TradingView:</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-400 text-sm">
              <li>Open <a href="https://www.tradingview.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 underline">TradingView</a> and create or open a chart</li>
              <li>Click on <strong className="text-white">"Indicators"</strong> button at the top of the chart</li>
              <li>Search for and add <code className="bg-black/50 px-2 py-1 rounded text-emerald-400">RSI</code> (Relative Strength Index) or your own indicators</li>       
              <li>Configure the indicators as needed (default settings work fine)</li>
              <li>Click on the <strong className="text-white">MEI extension icon</strong> in your Chrome navbar</li>
              <li>Click the <strong className="text-white">"Save"</strong> button in the extension popup</li>
            </ol>
          </div>
          <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-lg p-3">
            <p className="text-emerald-400 text-sm">
              The extension will capture your chart setup including the indicators you've added
            </p>
          </div>
        </div>
      )
    },
    {
      number: 6,
      title: "Apply Chart to Binance",
      description: "Navigate to Binance and apply your saved chart configuration",
      icon: ExternalLink,
      content: (
        <div className="space-y-4">
          <div className="bg-black/50 border border-white/10 rounded-lg p-4">
            <p className="text-gray-300 mb-2">To apply the chart on Binance:</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-400 text-sm">
              <li>Go to <a href="https://www.binance.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 underline">Binance</a> and log in to your account</li>
              <li>Navigate to the <strong className="text-white">Trading</strong> section and open a chart</li>
              <li>Click the <strong className="text-white">MEI extension icon</strong> in your Chrome navbar</li>
              <li>Select your saved chart configuration from the extension</li>
              <li>The chart with your indicators (RSI, MA) will be applied automatically</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      number: 7,
      title: "Configure AI API Key",
      description: "Add your AI API key to enable AI-powered trading suggestions",
      icon: Key,
      content: (
        <div className="space-y-4">
          <div className="bg-black/50 border border-white/10 rounded-lg p-4">
            <p className="text-gray-300 mb-2">To enable AI suggestions:</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-400 text-sm">
              <li>Click the <strong className="text-white">MEI extension icon</strong> in your Chrome navbar</li>
              <li>Navigate to the <strong className="text-white">Settings</strong> or <strong className="text-white">API Key</strong> section</li>
              <li>Find the <code className="bg-black/50 px-2 py-1 rounded text-emerald-400">API Key</code> input field</li>
              <li>Paste your AI API key into the field</li>
              <li>Click <strong className="text-white">Save</strong> to store your API key</li>
              <li>The AI will now provide suggestions on where to set commands based on your chart analysis</li>
            </ol>
          </div>
          <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-lg p-3">
            <p className="text-emerald-400 text-sm flex items-center gap-2">
              <Key className="w-4 h-4" />
              Your API key is stored securely and used only for AI-powered trading suggestions
            </p>
          </div>
        </div>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-background-dark text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/30 via-black to-black"></div>
        <div className="absolute inset-0 grid-bg"></div>
        <div className="absolute top-0 left-0 h-96 w-full bg-gradient-to-b from-emerald-500/20 via-emerald-500/10 to-transparent"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <div className="bg-gray-950/80 backdrop-blur-md border border-white/10 rounded-full pl-2 pr-2 py-1.5 flex items-center gap-6 shadow-2xl shadow-black/50">
          <Link to="/" className="flex items-center gap-2 px-3 group">
            <div className="w-5 h-5 bg-gradient-to-tr from-emerald-600 to-green-400 rounded-md flex items-center justify-center relative overflow-hidden shadow-inner">
              <div className="absolute inset-0 bg-white/20 skew-x-12 -translate-x-4 group-hover:translate-x-4 transition-transform duration-500"></div>
            </div>
            <span className="text-sm font-semibold text-white tracking-tight">MEI</span>
          </Link>

          <Link to="/" className="px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-white transition-colors duration-200">
            Home
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 via-emerald-500 to-green-600 text-glow">
                Extension Setup Tutorial
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Follow these step-by-step instructions to install and configure the MEI extension for seamless trading signal synchronization
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={step.number}
                  className="bg-black/50 backdrop-blur-lg border border-white/10 rounded-lg p-6 hover:bg-white/[0.04] transition-all duration-300 animate-enter"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/30">
                        <Icon className="w-6 h-6 text-emerald-400" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold text-emerald-400 bg-emerald-950/30 px-3 py-1 rounded-full border border-emerald-500/30">
                          Step {step.number}
                        </span>
                        <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                      </div>
                      <p className="text-gray-400">{step.description}</p>
                      <div className="pt-2">
                        {step.content}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Footer CTA */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-emerald-950/30 via-black to-emerald-950/30 border border-emerald-500/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Trading?</h3>
              <p className="text-gray-400 mb-6">
                Once you've completed the setup, log in to your dashboard to manage your trading signals
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <Link to="/login">
                  <Button size="lg">Go to Dashboard</Button>
                </Link> */}
                <Link to="/">
                  <Button size="lg">Back to Home</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}

export default DownloadPage

