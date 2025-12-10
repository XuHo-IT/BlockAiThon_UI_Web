import React, { useEffect, useRef } from 'react'

export const TradingChart: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const width = canvas.width = 600
    const height = canvas.height = 300
    const padding = 40

    // Generate sample price data
    const dataPoints = 50
    const prices: number[] = []
    let basePrice = 45000

    for (let i = 0; i < dataPoints; i++) {
      basePrice += (Math.random() - 0.5) * 1000
      prices.push(Math.max(40000, Math.min(50000, basePrice)))
    }

    const drawChart = () => {
      // Clear canvas
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'
      ctx.fillRect(0, 0, width, height)

      // Draw grid
      ctx.strokeStyle = 'rgba(5, 242, 141, 0.1)'
      ctx.lineWidth = 1
      for (let i = 0; i <= 5; i++) {
        const y = padding + (i * (height - 2 * padding)) / 5
        ctx.beginPath()
        ctx.moveTo(padding, y)
        ctx.lineTo(width - padding, y)
        ctx.stroke()
      }

      // Draw price line
      const minPrice = Math.min(...prices)
      const maxPrice = Math.max(...prices)
      const priceRange = maxPrice - minPrice

      ctx.strokeStyle = '#05F28D'
      ctx.lineWidth = 2
      ctx.beginPath()

      prices.forEach((price, index) => {
        const x = padding + (index * (width - 2 * padding)) / (dataPoints - 1)
        const y = height - padding - ((price - minPrice) / priceRange) * (height - 2 * padding)

        if (index === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      })

      ctx.stroke()

      // Fill area under line
      ctx.fillStyle = 'rgba(5, 242, 141, 0.1)'
      ctx.lineTo(width - padding, height - padding)
      ctx.lineTo(padding, height - padding)
      ctx.closePath()
      ctx.fill()

      // Draw price points
      prices.forEach((price, index) => {
        const x = padding + (index * (width - 2 * padding)) / (dataPoints - 1)
        const y = height - padding - ((price - minPrice) / priceRange) * (height - 2 * padding)

        ctx.fillStyle = '#05F28D'
        ctx.beginPath()
        ctx.arc(x, y, 3, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw labels
      ctx.fillStyle = 'rgba(5, 242, 141, 0.6)'
      ctx.font = '12px Inter'
      ctx.fillText(`$${Math.round(maxPrice).toLocaleString()}`, width - padding - 80, padding + 15)
      ctx.fillText(`$${Math.round(minPrice).toLocaleString()}`, width - padding - 80, height - padding - 5)
    }

    drawChart()

    // Animate chart update
    const interval = setInterval(() => {
      // Update last price
      const lastPrice = prices[prices.length - 1]
      const newPrice = lastPrice + (Math.random() - 0.5) * 500
      prices.push(Math.max(40000, Math.min(50000, newPrice)))
      prices.shift()
      drawChart()
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full bg-black/30 rounded-lg border border-emerald-500/20 p-4 backdrop-blur-sm">
      <div className="absolute top-4 left-4 text-emerald-400 text-sm font-semibold">
        BTC/USDT
      </div>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}

