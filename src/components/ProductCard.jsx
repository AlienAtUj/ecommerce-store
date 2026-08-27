import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export const ProductCard = ({ product }) => {
  

  
  const [isLiked, setIsLiked] = useState(() => {
    const saved = localStorage.getItem('wishlist')
    if (!saved) return false
    const wishlistArray = JSON.parse(saved)
    return wishlistArray.some(item => item.id === product.id)
  })


  const [cartItem, setCartItem] = useState(() => {
    const saved = localStorage.getItem('cart')
    if (!saved) return null
    const cartArray = JSON.parse(saved)
    
    const found = cartArray.find(item => item.id === product.id)
    return found || null  
  })


  const [quantity, setQuantity] = useState(() => {
    const saved = localStorage.getItem('cart')
    if (!saved) return 1
    const cartArray = JSON.parse(saved)
    const found = cartArray.find(item => item.id === product.id)
    return found ? found.quantity : 1
  })

  const discount = Math.round(product.discountPercentage)

  const toggleWishlist = (e) => {
    e.stopPropagation()  
    e.preventDefault()   
    
    const saved = localStorage.getItem('wishlist')
    let wishlistArray = saved ? JSON.parse(saved) : []
    
    const exists = wishlistArray.some(item => item.id === product.id)
    
    if (exists) {
      wishlistArray = wishlistArray.filter(item => item.id !== product.id)
    } else {
      wishlistArray.push(product)
    }
    
    localStorage.setItem('wishlist', JSON.stringify(wishlistArray))
    setIsLiked(!exists)
  }


  const addToCart = (e) => {
    e.stopPropagation()
    e.preventDefault()
    
  
    const saved = localStorage.getItem('cart')
    let cartArray = saved ? JSON.parse(saved) : []
    
    
    const existingItem = cartArray.find(item => item.id === product.id)
    
    if (existingItem) {
     
      existingItem.quantity = quantity
    } else {
      
      const cartItem = {
        ...product,
        quantity: quantity
      }
      cartArray.push(cartItem)
    }
    
    
    localStorage.setItem('cart', JSON.stringify(cartArray))
    
  
    setCartItem(existingItem || { ...product, quantity })
  }


  const removeFromCart = (e) => {
    e.stopPropagation()
    e.preventDefault()
    
    
    const saved = localStorage.getItem('cart')
    let cartArray = saved ? JSON.parse(saved) : []
    
   
    cartArray = cartArray.filter(item => item.id !== product.id)
    
    
    localStorage.setItem('cart', JSON.stringify(cartArray))
    
  
    setCartItem(null)
    setQuantity(1)
  }


  const handleQuantityChange = (e) => {
    e.stopPropagation()
    e.preventDefault()
    
    const newQuantity = parseInt(e.target.value) || 1
    
    
    const finalQuantity = Math.max(1, newQuantity)
    setQuantity(finalQuantity)
    
   
    if (cartItem) {
      const saved = localStorage.getItem('cart')
      let cartArray = saved ? JSON.parse(saved) : []
      const existingItem = cartArray.find(item => item.id === product.id)
      
      if (existingItem) {
        existingItem.quantity = finalQuantity
        localStorage.setItem('cart', JSON.stringify(cartArray))
        setCartItem({ ...existingItem, quantity: finalQuantity })
      }
    }
  }
  
  return (
    <Link to={`/product/${product.id}`} className="group cursor-pointer block">
      
      <div className="group cursor-pointer">
        
      
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
            onClick={toggleWishlist}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10"
          >
            <svg 
              className={`w-[17px] h-[17px] transition-colors duration-300 ${
                isLiked ? 'fill-red-500 text-red-500' : 'text-gray-700'
              }`}
              fill={isLiked ? 'currentColor' : 'none'}
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

     
        <div className="pt-3">
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

          <div className="flex items-center gap-2 mt-3">
            
            <div className="flex items-center border border-gray-200">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                  if (quantity > 1) {
                    const newQty = quantity - 1
                    setQuantity(newQty)
                
                    if (cartItem) {
                      const saved = localStorage.getItem('cart')
                      let cartArray = saved ? JSON.parse(saved) : []
                      const item = cartArray.find(i => i.id === product.id)
                      if (item) {
                        item.quantity = newQty
                        localStorage.setItem('cart', JSON.stringify(cartArray))
                        setCartItem({ ...item, quantity: newQty })
                      }
                    }
                  }
                }}
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                </svg>
              </button>
              
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-12 h-8 text-center text-sm border-x border-gray-200 outline-none"
              />
              
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                  const newQty = quantity + 1
                  setQuantity(newQty)
                
                  if (cartItem) {
                    const saved = localStorage.getItem('cart')
                    let cartArray = saved ? JSON.parse(saved) : []
                    const item = cartArray.find(i => i.id === product.id)
                    if (item) {
                      item.quantity = newQty
                      localStorage.setItem('cart', JSON.stringify(cartArray))
                      setCartItem({ ...item, quantity: newQty })
                    }
                  }
                }}
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>

            
            <Button 
              onClick={addToCart}
              className={`flex-1 h-8 rounded-none text-[10px] uppercase tracking-[0.12em] font-bold transition-colors ${
                cartItem 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-black hover:bg-orange-500'
              } text-white`}
            >
              {cartItem ? `✓ Update (${cartItem.quantity})` : 'Add to Cart'}
            </Button>

       
            {cartItem && (
              <button
                onClick={removeFromCart}
                className="h-8 px-3 bg-red-500 hover:bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider transition-colors"
              >
                ✕
              </button>
            )}
          </div>

        </div>
        
      </div>
    </Link>
  )
}