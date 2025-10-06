"use client";

export default function AnimatedBackground() {
  return (
    <>
      <style jsx global>{`
        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-30px) translateX(20px);
          }
          66% {
            transform: translateY(-10px) translateX(-20px);
          }
        }

        .animated-gradient {
          background: linear-gradient(-45deg, #e0f2fe, #bae6fd, #7dd3fc, #38bdf8);
          background-size: 400% 400%;
          animation: gradient-shift 15s ease infinite;
        }

        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          opacity: 0.4;
        }

        .shape-1 {
          width: 400px;
          height: 400px;
          background: #22d3ee;
          top: 10%;
          left: 10%;
          animation: float 10s ease-in-out infinite;
        }

        .shape-2 {
          width: 300px;
          height: 300px;
          background: #67e8f9;
          top: 50%;
          right: 10%;
          animation: float 12s ease-in-out infinite;
          animation-delay: 2s;
        }

        .shape-3 {
          width: 350px;
          height: 350px;
          background: #a5f3fc;
          bottom: 15%;
          left: 45%;
          animation: float 14s ease-in-out infinite;
          animation-delay: 4s;
        }
      `}</style>

      <div className="fixed inset-0 -z-10 animated-gradient">
        <div className="absolute inset-0 bg-white/20"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
    </>
  );
}
