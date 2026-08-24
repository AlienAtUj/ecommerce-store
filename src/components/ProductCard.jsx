import { Button } from '@/components/ui/button'
import { useState } from 'react'

export const ProductCard = ({ product }) => {
    const [wishList ,setWishlist] = useState(false);
  const discount = Math.round(product.discountPercentage)

   
  const isLiked = ()=>{
    setWishlist(!wishList);
  }

  return (

    <div className="group cursor-pointer">
      
      {/* IMAGE CONTAINER */}
      <div className="relative overflow-hidden bg-[#f0f0f0] aspect-[0.78]">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
        />

        
        {discount > 10 && (
          <span className="absolute top-3 left-3 bg-black text-white px-2.5 py-1 text-[9px] font-bold tracking-wide">
            -{discount}%
          </span>
        )}

        
 <button 
  onClick={isLiked} 
  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
>
  <svg 
    className={`w-[17px] h-[17px] transition-colors duration-300 ${
      wishList ? 'fill-red-500 text-red-500' : 'text-gray-700'
    }`}
    fill={wishList ? 'currentColor' : 'none'}
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
    

      {/* PRODUCT INFO */}
      <div className="pt-3">
        {/* STARS */}
        <div className="flex items-center gap-1 mb-1.5">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-[11px] h-[11px] fill-[#f5b301] text-[#f5b301]" viewBox="0 0 20 20">
                <path d="M10 1.5l2.6 5.3 5.9.9-4.25 4.1 1 5.8L10 14.8 4.75 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5Z" />
              </svg>
            ))}
          </div>
          <span className="text-[10px] text-gray-400">{product.rating}</span>
        </div>

        <h3 className="text-[13px] font-medium leading-5 line-clamp-2 min-h-[40px] group-hover:text-orange-500 transition-colors">
          {product.title}
        </h3>

        <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">
          {product.category}
        </p>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-[15px] font-bold">${product.price}</span>
          {discount > 10 && (
            <span className="text-[11px] text-gray-400 line-through">
              ${(product.price * 1.2).toFixed(2)}
            </span>
          )}
        </div>

        {/* ADD TO CART BUTTON */}
        <Button className="w-full mt-3 h-10 rounded-none bg-black hover:bg-orange-500 text-white text-[10px] uppercase tracking-[0.12em] font-bold transition-colors">
          Add to Cart
        </Button>
      </div>
      

    </div>

  )
}