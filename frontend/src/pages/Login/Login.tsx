import { useState } from 'react'
import { Eye, EyeOff, Lock, User, PlaneTakeoff } from 'lucide-react'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login:', username, password)
  }

  return (
    <div className="min-h-screen bg-[#0a0f1e] flex flex-col items-center justify-center px-4">

      <div className="w-full max-w-md bg-[#161B22] border border-[#30363D] rounded-2xl p-4 shadow-2xl">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-[#2563EB] p-3 rounded-xl mb-4">
            <PlaneTakeoff size={28} className="text-white" />
          </div>
          <h1 className="text-white text-3xl font-black tracking-widest">AEROCODE</h1>
          <p className="text-[#8B949E] text-xs tracking-[0.2em] mt-1">
            AIRCRAFT PRODUCTION MANAGEMENT
          </p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">

          {/* Username */}
          <div className="flex flex-col gap-1">
            <label className="text-[#8B949E] text-sm font-medium">Username</label>
            <div className="flex items-center gap-3 bg-[#0D1117] border border-[#30363D] rounded-lg px-4 py-3 focus-within:border-[#2563EB] transition-colors">
              <User size={16} className="text-[#8B949E]" />
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="bg-transparent text-white placeholder-[#8B949E] text-sm outline-none w-full"
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <label className="text-[#8B949E] text-sm font-medium">Password</label>
              <button type="button" className="text-[#2563EB] text-xs hover:underline">
                Forgot?
              </button>
            </div>
            <div className="flex items-center gap-3 bg-[#0D1117] border border-[#30363D] rounded-lg px-4 py-3 focus-within:border-[#2563EB] transition-colors">
              <Lock size={16} className="text-[#8B949E]" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="bg-transparent text-white placeholder-[#8B949E] text-sm outline-none w-full"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-[#8B949E] hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="w-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 mt-1"
          >
            Sign In to Aerocode →
          </button>

          {/* Aviso */}
          <div className="flex items-center justify-center gap-2">
            <Lock size={12} className="text-[#F97316]" />
            <p className="text-[#8B949E] text-xs tracking-widest">
              ACESSO RESTRITO A FUNCIONÁRIOS AUTORIZADOS
            </p>
          </div>

        </form>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between w-full max-w-md mt-6 px-1">
        <div className="flex gap-4">
          <button className="text-[#8B949E] text-xs hover:text-white transition-colors">
            System Status
          </button>
          <button className="text-[#8B949E] text-xs hover:text-white transition-colors">
            Contact Support
          </button>
        </div>
        <span className="text-[#8B949E] text-xs border border-[#30363D] px-2 py-1 rounded">
          VERSION v2.4.0
        </span>
      </div>

    </div>
  )
}