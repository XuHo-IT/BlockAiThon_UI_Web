import React from 'react'

interface AnimatedCircleProps {
  position?: 'left' | 'right'
}

export const AnimatedCircle: React.FC<AnimatedCircleProps> = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
        {/* Outer glow ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500/20 via-emerald-400/10 to-transparent blur-2xl"></div>
        
        {/* Glassmorphism backing */}
        <div className="absolute inset-4 bg-white/5 backdrop-blur-md rounded-full border border-emerald-500/30 shadow-[0_0_40px_rgba(5,242,141,0.2)]"></div>
        
        {/* Radar rings - more visible */}
        <div className="absolute inset-8 rounded-full border-2 border-dashed border-emerald-500/40 animate-[spin_25s_linear_infinite]"></div>
        <div className="absolute inset-16 rounded-full border border-emerald-500/30"></div>
        <div className="absolute inset-24 rounded-full border border-emerald-500/20"></div>
        <div className="absolute inset-32 rounded-full border border-emerald-500/10"></div>
        
        {/* Scanner effect - more prominent */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-emerald-500/20 to-transparent animate-[spin_5s_linear_infinite]"></div>
        
        {/* Inner glass circle */}
        <div className="absolute inset-16 rounded-full bg-black/40 backdrop-blur-sm border border-emerald-500/20 flex items-center justify-center shadow-2xl">
          {/* Center dot with stronger glow */}
          <div className="relative z-10">
            <div className="w-6 h-6 bg-primary rounded-full shadow-[0_0_30px_rgba(5,242,141,1),0_0_60px_rgba(5,242,141,0.5)] relative">
              <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
              <div className="absolute inset-0 bg-primary rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
        
        {/* Decorative ticks - more visible */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-6 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(5,242,141,0.8)]"></div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-6 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(5,242,141,0.8)]"></div>
        <div className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-1 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(5,242,141,0.8)]"></div>
        <div className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-1 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(5,242,141,0.8)]"></div>
        
        {/* Floating particles around circle */}
        <div className="absolute top-8 left-8 w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(5,242,141,0.8)]"></div>
        <div className="absolute top-16 right-12 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse shadow-[0_0_6px_rgba(5,242,141,0.6)]" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-12 left-12 w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(5,242,141,0.8)]" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-8 right-8 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse shadow-[0_0_6px_rgba(5,242,141,0.6)]" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </div>
  )
}

