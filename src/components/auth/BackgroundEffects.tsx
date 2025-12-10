import React from 'react'

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Top gradient pattern */}
      <div 
        className="absolute inset-x-0 top-0 h-[40vh] bg-repeat-x opacity-30"
        style={{
          backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMjAwIDAgTCAwIDAgMCAyMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')`,
          backgroundSize: 'auto 300px',
          maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)',
        }}
      ></div>
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(5, 242, 141, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(5, 242, 141, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '3rem 3rem',
        }}
      ></div>
      
      {/* Top gradient */}
      <div className="absolute top-0 left-0 h-96 w-full bg-gradient-to-b from-primary/10 via-transparent to-transparent"></div>
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
  )
}

