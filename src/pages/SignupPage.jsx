import { Layout } from '../components/Layout'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const SignupPage = () => {

  // ============================================
  // 🧠 STATE (You will implement the logic)
  // ============================================
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // ============================================
  // 🧠 HANDLE SIGNUP (You will implement this)
  // ============================================
  
  const handleSignup = (e) => {
    e.preventDefault()
    
    // TODO: Implement signup logic
    // 1. Validate all fields
    // 2. Check if passwords match
    // 3. Call API or save to localStorage
    // 4. Handle success/error
    // 5. Redirect to login on success
    
    console.log('Signup attempt:', { name, email, password })
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        {/* ============================================
        🧠 SIGNUP FORM
        ============================================ */}
        
        <div className="max-w-md mx-auto">
          
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-black tracking-[-0.04em] mb-2">
              Create Account
            </h1>
            <p className="text-gray-500 text-sm">
              Join us and start shopping today
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSignup} className="bg-white border border-gray-100 p-8">
            
            {/* Error Message */}
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-sm">
                {error}
              </div>
            )}

            {/* Full Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Kholofelo Ntsoane"
                required
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
              />
            </div>

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
                placeholder="igamalakho@example.com"
                required
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                required
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="*******"
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
              {loading ? 'Creating account...' : 'Create Account'}
            </button>

            {/* Login Link */}
            <p className="text-center text-sm text-gray-500 mt-6">
              Already have an account?{' '}
              <Link to="/login" className="text-black font-bold hover:text-orange-500 transition-colors">
                Sign In
              </Link>
            </p>

          </form>
        </div>

      </div>
    </Layout>
  )
}