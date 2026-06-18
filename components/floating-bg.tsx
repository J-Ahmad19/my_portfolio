'use client'

export function FloatingBg() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-background"></div>

      {/* Animated orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-blob opacity-20"></div>
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] animate-blob animation-delay-2000 opacity-20"></div>
      <div className="absolute bottom-0 left-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[120px] animate-blob animation-delay-4000 opacity-10"></div>

      {/* Grid pattern - subtle */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-b from-primary/10 to-transparent"></div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}
