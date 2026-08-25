import { useEffect, useState } from 'react'
import { Layout } from '../components/Layout'
import { Link } from 'react-router-dom'

export const WishlistPage = () => {

  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem('wishlist')
    if (saved) {
      const wishlistArray = JSON.parse(saved)
      setWishlist(wishlistArray)
    }
  }, [])

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-orange-500 text-[11px] font-bold tracking-[0.2em] uppercase mb-2">
              Your saved items
            </p>
            <h1 className="text-3xl sm:text-4xl font-black tracking-[-0.04em]">
              Wishlist
            </h1>
          </div>
          <span className="text-sm text-gray-500">
            {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'}
          </span>
        </div>

        {wishlist.length === 0 ? (
          
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

            <Link to="/">
              <button className="mt-6 bg-black text-white px-8 py-3.5 text-xs font-bold uppercase tracking-[0.12em] hover:bg-orange-500 transition-colors">
                Continue Shopping
              </button>
            </Link>

          </div>
          
        ) : (
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            
            {wishlist.map((product) => (
              <div key={product.id} className="bg-white border border-gray-100 group">
                
                <div className="relative aspect-square overflow-hidden bg-[#f0f0f0]">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-medium line-clamp-1">
                    {product.title}
                  </h3>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">
                    {product.category}
                  </p>
                  <p className="text-[15px] font-bold mt-2">
                    ${product.price}
                  </p>
                </div>

              </div>
            ))}

            <Link to="/">
              <button className="mt-6 bg-black text-white px-8 py-3.5 text-xs font-bold uppercase tracking-[0.12em] hover:bg-orange-500 transition-colors">
                Continue Shopping
              </button>
            </Link>

          </div>
        )}

      </div>
    </Layout>
  )
}