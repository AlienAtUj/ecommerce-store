import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {

const [nWishlist, setnWishlist] = useState(0);
const [cartItems, setcartItems] = useState(0);

useEffect(() => {
    const loadWishlist = localStorage.getItem('wishlist');
    const loadCart = localStorage.getItem('cart');

    const wishlistArray = loadWishlist ? JSON.parse(loadWishlist) : [];
    const cartArray = loadCart ? JSON.parse(loadCart) : [];

    setnWishlist(wishlistArray.length);
    setcartItems(cartArray.length);
}, []);
  return (
    <>
      {/* TOP PROMOTION BAR */}
      <div className="bg-black text-white text-center py-2.5 px-4 text-[11px] sm:text-xs tracking-[0.15em] font-medium w-full">
        FREE SHIPPING ON ORDERS OVER $50
      </div>

      {/* MAIN HEADER */}
      <header className="bg-white border-b border-gray-100 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          
          {/* HEADER ROW */}
          <div className="h-[82px] flex items-center justify-between gap-8">
            
            {/* LOGO */}
            <div className="flex-shrink-0">
              <h1 className="text-[28px] sm:text-[32px] font-black tracking-[-0.07em]" >
                NOVA<span className="text-orange-500">.</span>
              </h1>
            </div>

            {/* SEARCH BAR - Desktop */}
            <div className="hidden md:flex flex-1 max-w-[650px]">
              <div className="relative w-full group">
                <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-400 group-focus-within:text-black transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 6.05 6.05a7.5 7.5 0 0 0 10.6 10.6Z" />
                </svg>
                <input
                  placeholder="Search products..."
                  className="w-full h-12 rounded-full bg-[#f5f5f5] border border-transparent pl-12 pr-5 text-sm outline-none transition-all focus:bg-white focus:border-black"
                />
              </div>
            </div>

            {/* RIGHT SIDE: Action Buttons */}
            <div className="flex items-center gap-5 sm:gap-7">
              
              {/* ===== ACCOUNT (Link to Login) ===== */}
              <Link 
                to="/login"
                className="hidden sm:flex flex-col items-center gap-1 text-gray-700 hover:text-black transition"
              >
                <svg className="w-[21px] h-[21px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M20 21a8 8 0 0 0-16 0m8-11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                </svg>
                <span className="text-[10px]">Account</span>
              </Link>

              {/* ===== WISHLIST ===== */}
              <Link 
                to="/wishlist"
                className="hidden sm:flex flex-col items-center gap-1 text-gray-700 hover:text-black transition relative"
              >
                <svg className="w-[21px] h-[21px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
                </svg>
                <span className="text-[10px]">Wishlist</span>
                
                {/* Badge */}
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {nWishlist}
                </span>
              </Link>

              {/* ===== CART ===== */}
              <Link 
                to="/cart" 
                className="flex flex-col items-center gap-1 text-gray-700 hover:text-black transition relative"
              >
                <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6M10 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm9 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                </svg>
                <span className="text-[10px]">Cart</span>
                
                {/* Badge */}
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartItems}
                </span>
              </Link>

            </div>
          </div>

          {/* MOBILE SEARCH */}
          <div className="md:hidden pb-5">
            <input
              placeholder="Search products..."
              className="w-full h-11 bg-[#f5f5f5] rounded-full px-5 text-sm outline-none border border-transparent focus:bg-white focus:border-black"
            />
          </div>

        </div>
      </header>
    </>
  )
}