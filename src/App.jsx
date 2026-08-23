import { useState, useEffect } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f8f8f8] flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-black rounded-full animate-spin mx-auto mb-4" />
          <p className="text-sm text-gray-500">Loading products...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full bg-[#f7f7f7] text-[#111] overflow-x-hidden">

      {/* TOP PROMOTION BAR */}
      <div className="bg-black text-white text-center py-2.5 px-4 text-[11px] sm:text-xs tracking-[0.15em] font-medium w-full">
        FREE SHIPPING ON ORDERS OVER $50
      </div>

      {/* HEADER */}
      <header className="bg-white border-b border-gray-100 w-full">

        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">

          {/* MAIN HEADER */}
          <div className="h-[82px] flex items-center justify-between gap-8">

            {/* LOGO */}
            <div className="flex-shrink-0">
              <h1 className="text-[28px] sm:text-[32px] font-black tracking-[-0.07em]">
                NOVA
                <span className="text-orange-500">.</span>
              </h1>
            </div>

            {/* SEARCH */}
            <div className="hidden md:flex flex-1 max-w-[650px]">

              <div className="relative w-full group">

                <svg
                  className="absolute left-5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-400 group-focus-within:text-black transition"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 6.05 6.05a7.5 7.5 0 0 0 10.6 10.6Z"
                  />
                </svg>

                <input
                  placeholder="Search products..."
                  className="
                    w-full
                    h-12
                    rounded-full
                    bg-[#f5f5f5]
                    border
                    border-transparent
                    pl-12
                    pr-5
                    text-sm
                    outline-none
                    transition-all
                    focus:bg-white
                    focus:border-black
                  "
                />

              </div>

            </div>

            {/* HEADER ACTIONS */}
            <div className="flex items-center gap-5 sm:gap-7">

              <button className="hidden sm:flex flex-col items-center gap-1 text-gray-700 hover:text-black transition">
                <svg
                  className="w-[21px] h-[21px]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                    d="M20 21a8 8 0 0 0-16 0m8-11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                  />
                </svg>
                <span className="text-[10px]">Account</span>
              </button>

              <button className="hidden sm:flex flex-col items-center gap-1 text-gray-700 hover:text-black transition">
                <svg
                  className="w-[21px] h-[21px]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
                  />
                </svg>
                <span className="text-[10px]">Wishlist</span>
              </button>

              <button className="flex flex-col items-center gap-1 text-gray-700 hover:text-black transition relative">

                <svg
                  className="w-[22px] h-[22px]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                    d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6M10 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm9 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                  />
                </svg>

                <span className="text-[10px]">Cart</span>

                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  0
                </span>

              </button>

            </div>

          </div>

          {/* MOBILE SEARCH */}
          <div className="md:hidden pb-5">
            <input
              placeholder="Search products..."
              className="
                w-full
                h-11
                bg-[#f5f5f5]
                rounded-full
                px-5
                text-sm
                outline-none
                border
                border-transparent
                focus:bg-white
                focus:border-black
              "
            />
          </div>

          {/* NAVIGATION */}
          <nav className="hidden md:flex items-center justify-center gap-8 lg:gap-12 h-[52px] border-t border-gray-50">

            {[
              'New Arrivals',
              'Women',
              'Men',
              'Beauty',
              'Electronics',
              'Home',
              'Sale'
            ].map((item, index) => (
              <button
                key={item}
                className={`
                  relative
                  h-full
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.08em]
                  transition
                  ${
                    item === 'Sale'
                      ? 'text-orange-500'
                      : 'text-gray-700 hover:text-black'
                  }
                `}
              >
                {item}

                {index === 0 && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />
                )}
              </button>
            ))}

          </nav>

        </div>

      </header>

      {/* HERO */}
      <section className="w-full px-0 pt-5">

        <div className="
          relative
          min-h-[360px]
          sm:min-h-[430px]
          lg:min-h-[500px]
          overflow-hidden
          bg-[#e9e4df]
          w-full
        ">

          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1800&q=85"
            alt="Fashion collection"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

          {/* HERO CONTENT */}
          <div className="
            relative
            z-10
            h-full
            min-h-[360px]
            sm:min-h-[430px]
            lg:min-h-[500px]
            flex
            items-center
            px-7
            sm:px-12
            lg:px-20
          ">

            <div className="max-w-[550px] text-white">

              <p className="text-[11px] sm:text-xs tracking-[0.3em] font-semibold mb-5">
                NEW SEASON 2026
              </p>

              <h2 className="
                text-4xl
                sm:text-5xl
                lg:text-[68px]
                leading-[0.95]
                font-black
                tracking-[-0.045em]
              ">
                STYLE
                <br />
                WITHOUT
                <br />
                LIMITS.
              </h2>

              <p className="
                mt-6
                text-sm
                sm:text-base
                text-white/80
                max-w-[390px]
                leading-relaxed
              ">
                Discover new arrivals, everyday essentials and
                trending products curated for you.
              </p>

              <button className="
                mt-7
                bg-white
                text-black
                px-8
                py-3.5
                text-xs
                font-bold
                uppercase
                tracking-[0.12em]
                hover:bg-black
                hover:text-white
                transition-all
              ">
                Shop Collection
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURE STRIP */}
      <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">

        <div className="
          grid
          grid-cols-2
          lg:grid-cols-4
          bg-white
          mt-5
          border
          border-gray-100
          w-full
        ">

          {[
            ['01', 'New Arrivals', 'Fresh styles every week'],
            ['02', 'Best Sellers', 'Loved by our customers'],
            ['03', 'Premium Quality', 'Products you can trust'],
            ['04', 'Daily Deals', 'Great prices every day']
          ].map(([number, title, text]) => (

            <div
              key={number}
              className="
                px-5
                py-6
                sm:px-8
                border-r
                border-b
                lg:border-b-0
                border-gray-100
                last:border-r-0
              "
            >

              <span className="text-[10px] text-gray-400 font-bold tracking-widest">
                {number}
              </span>

              <h3 className="font-semibold text-sm mt-2">
                {title}
              </h3>

              <p className="text-[11px] text-gray-500 mt-1">
                {text}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* PRODUCTS */}
      <main className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-14">

        {/* SECTION TITLE */}
        <div className="flex items-end justify-between mb-8">

          <div>
            <p className="text-orange-500 text-[11px] font-bold tracking-[0.2em] uppercase mb-2">
              Curated for you
            </p>

            <h2 className="
              text-3xl
              sm:text-4xl
              font-black
              tracking-[-0.04em]
            ">
              Trending Products
            </h2>
          </div>

          <button className="
            hidden sm:block
            text-xs
            font-semibold
            border-b
            border-black
            pb-1
            hover:text-orange-500
            hover:border-orange-500
            transition
          ">
            VIEW ALL
          </button>

        </div>

        {/* PRODUCT GRID */}
        <div className="
          grid
          grid-cols-2
          sm:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          gap-x-3
          sm:gap-x-5
          gap-y-10
        ">

          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#111] text-white mt-10 w-full">

        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-14">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

            <div className="col-span-2 md:col-span-1">

              <h2 className="text-3xl font-black tracking-[-0.06em]">
                NOVA<span className="text-orange-500">.</span>
              </h2>

              <p className="text-gray-400 text-xs leading-relaxed mt-4 max-w-[240px]">
                Modern products. Better prices.
                Designed for the way you shop today.
              </p>

            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-5">
                Shop
              </h3>

              <div className="space-y-3 text-xs text-gray-400">
                <p>New Arrivals</p>
                <p>Women</p>
                <p>Men</p>
                <p>Beauty</p>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-5">
                Help
              </h3>

              <div className="space-y-3 text-xs text-gray-400">
                <p>Customer Service</p>
                <p>Shipping</p>
                <p>Returns</p>
                <p>FAQ</p>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-5">
                Follow Us
              </h3>

              <div className="space-y-3 text-xs text-gray-400">
                <p>Instagram</p>
                <p>TikTok</p>
                <p>Facebook</p>
                <p>X</p>
              </div>
            </div>

          </div>

          <div className="border-t border-white/10 mt-12 pt-6 text-[10px] text-gray-500 flex justify-between">
            <span>© 2026 NOVA. All rights reserved.</span>
            <span>Premium shopping experience</span>
          </div>

        </div>

      </footer>

    </div>
  )
}

function ProductCard({ product }) {

  const discount = Math.round(product.discountPercentage)

  return (
    <div className="group cursor-pointer">

      {/* IMAGE CONTAINER */}
      <div className="
        relative
        overflow-hidden
        bg-[#f0f0f0]
        aspect-[0.78]
      ">

        <img
          src={product.thumbnail}
          alt={product.title}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.045]
          "
        />

        {/* DISCOUNT */}
        {discount > 10 && (
          <span className="
            absolute
            top-3
            left-3
            bg-black
            text-white
            px-2.5
            py-1
            text-[9px]
            font-bold
            tracking-wide
          ">
            -{discount}%
          </span>
        )}

        {/* HEART */}
        <button
          className="
            absolute
            top-3
            right-3
            w-9
            h-9
            rounded-full
            bg-white/90
            backdrop-blur-sm
            flex
            items-center
            justify-center
            opacity-0
            translate-y-1
            group-hover:opacity-100
            group-hover:translate-y-0
            transition-all
            duration-300
          "
        >
          <svg
            className="w-[17px] h-[17px]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
            />
          </svg>
        </button>

      </div>

      {/* INFORMATION */}
      <div className="pt-3">

        <div className="flex items-center gap-1 mb-1.5">

          <div className="flex items-center gap-0.5">

            {[1, 2, 3, 4, 5].map(star => (
              <svg
                key={star}
                className="w-[11px] h-[11px] fill-[#f5b301] text-[#f5b301]"
                viewBox="0 0 20 20"
              >
                <path d="M10 1.5l2.6 5.3 5.9.9-4.25 4.1 1 5.8L10 14.8 4.75 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5Z" />
              </svg>
            ))}

          </div>

          <span className="text-[10px] text-gray-400">
            {product.rating}
          </span>

        </div>

        <h3 className="
          text-[13px]
          font-medium
          leading-5
          line-clamp-2
          min-h-[40px]
          group-hover:text-orange-500
          transition-colors
        ">
          {product.title}
        </h3>

        <p className="
          text-[10px]
          text-gray-400
          uppercase
          tracking-wider
          mt-1
        ">
          {product.category}
        </p>

        <div className="flex items-center gap-2 mt-2">

          <span className="text-[15px] font-bold">
            ${product.price}
          </span>

          {discount > 10 && (
            <span className="text-[11px] text-gray-400 line-through">
              ${(product.price * 1.2).toFixed(2)}
            </span>
          )}

        </div>

        {/* ADD TO CART */}
        <Button
          className="
            w-full
            mt-3
            h-10
            rounded-none
            bg-black
            hover:bg-orange-500
            text-white
            text-[10px]
            uppercase
            tracking-[0.12em]
            font-bold
            transition-colors
          "
        >
          Add to Cart
        </Button>

      </div>

    </div>
  )
}

export default App