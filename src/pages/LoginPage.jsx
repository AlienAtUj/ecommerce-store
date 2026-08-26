import { Layout } from '../components/Layout'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const LoginPage = () => {

  // ============================================
  // 🧠 STATE (You will implement the logic)
  // ============================================
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // ============================================
  // 🧠 HANDLE LOGIN (You will implement this)
  // ============================================
  
  const handleLogin = (e) => {
    e.preventDefault()
    
    // TODO: Implement login logic
    // 1. Validate email and password
    // 2. Call API or check localStorage
    // 3. Handle success/error
    // 4. Redirect to homepage on success
    
    console.log('Login attempt:', { email, password })
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        {/* ============================================
        🧠 LOGIN FORM
        ============================================ */}
        
        <div className="max-w-md mx-auto">
          
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-black tracking-[-0.04em] mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-500 text-sm">
              Sign in to your account to continue shopping
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="bg-white border border-gray-100 p-8">
            
            {/* Error Message */}
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-sm">
                {error}
              </div>
            )}

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-black text-white font-bold uppercase tracking-[0.12em] text-sm hover:bg-orange-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>

            {/* Signup Link */}
            <p className="text-center text-sm text-gray-500 mt-6">
              Don't have an account?{' '}
              <Link to="/signup" className="text-black font-bold hover:text-orange-500 transition-colors">
                Create Account
              </Link>
            </p>

            {/* Demo Credentials (for testing) */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-xs text-gray-400 text-center">
                Demo: <span className="font-mono">user@example.com</span> / <span className="font-mono">password123</span>
              </p>
            </div>

          </form>
        </div>

      </div>
    </Layout>
  )
}