import { Layout } from '../components/Layout'
import { Link } from 'react-router-dom'  // 👈 ADD THIS

export const WishlistPage = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        {/* PAGE HEADER */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-orange-500 text-[11px] font-bold tracking-[0.2em] uppercase mb-2">
              Your saved items
            </p>
            <h1 className="text-3xl sm:text-4xl font-black tracking-[-0.04em]">
              Wishlist
            </h1>
          </div>
          {/* 👇 NUMBER 2: SHOWS 0 ITEMS */}
          <span className="text-sm text-gray-500">
            0 items
          </span>
        </div>

        {/* EMPTY STATE */}
        <div className="bg-white border border-gray-100 p-8 sm:p-12 text-center">
          
          <div className="flex justify-center mb-6">
            <svg 
              className="w-16 h-16 text-gray-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
              />
            </svg>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Your wishlist is empty
          </h2>
          
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Start saving your favorite items by clicking the heart icon on any product.
          </p>

          {/* 👇 NUMBER 1: CONTINUE SHOPPING - TAKES YOU HOME */}
          <Link to="/">
            <button className="mt-6 bg-black text-white px-8 py-3.5 text-xs font-bold uppercase tracking-[0.12em] hover:bg-orange-500 transition-colors">
              Continue Shopping
            </button>
          </Link>

        </div>

      </div>
    </Layout>
  )
}