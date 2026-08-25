import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Layout } from '../components/Layout'

export const ProductDetailsPage = () => {
  // 1️⃣ Get the product ID from the URL
  const { id } = useParams()
  
  // 2️⃣ State for product data and loading
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // 3️⃣ Fetch product details when page loads or ID changes
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        
        if (!response.ok) {
          throw new Error('Product not found')
        }
        
        const data = await response.json()
        setProduct(data)
        setError(null)
      } catch (err) {
        setError(err.message || 'Failed to load product')
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchProduct()
    }
  }, [id])

  // 4️⃣ Show loading state
  if (loading) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-center">
              <div className="w-10 h-10 border-4 border-gray-200 border-t-black rounded-full animate-spin mx-auto mb-4" />
              <p className="text-sm text-gray-500">Loading product...</p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }

  // 5️⃣ Show error state
  if (error || !product) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {error || 'Product not found'}
            </h2>
            <Link to="/">
              <button className="bg-black text-white px-8 py-3.5 text-xs font-bold uppercase tracking-[0.12em] hover:bg-orange-500 transition-colors">
                Back to Shopping
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    )
  }

  // 6️⃣ Show product details
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        {/* Back button */}
        <Link to="/" className="inline-block mb-8">
          <button className="text-sm text-gray-500 hover:text-black transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Shopping
          </button>
        </Link>

        {/* Product details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* LEFT: Product Images */}
          <div>
            {/* Main image */}
            <div className="aspect-square overflow-hidden bg-[#f0f0f0] mb-4">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail images (if available) */}
            {product.images && product.images.length > 0 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.slice(0, 4).map((image, index) => (
                  <div key={index} className="aspect-square overflow-hidden bg-[#f0f0f0] cursor-pointer hover:opacity-75 transition-opacity">
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: Product Info */}
          <div>
            {/* Category */}
            <p className="text-orange-500 text-[11px] font-bold tracking-[0.2em] uppercase mb-2">
              {product.category}
            </p>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-black tracking-[-0.04em] mb-4">
              {product.title}
            </h1>

            {/* Brand */}
            {product.brand && (
              <p className="text-sm text-gray-500 mb-4">
                Brand: <span className="font-medium text-gray-900">{product.brand}</span>
              </p>
            )}

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-4 h-4 ${
                      star <= Math.round(product.rating)
                        ? 'fill-[#f5b301] text-[#f5b301]'
                        : 'fill-gray-200 text-gray-200'
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 1.5l2.6 5.3 5.9.9-4.25 4.1 1 5.8L10 14.8 4.75 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5Z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-500">
                {product.rating} ({product.stock} in stock)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold">${product.price}</span>
              {product.discountPercentage > 0 && (
                <>
                  <span className="text-lg text-gray-400 line-through">
                    ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                  </span>
                  <span className="bg-green-100 text-green-700 px-2 py-1 text-xs font-bold rounded">
                    -{Math.round(product.discountPercentage)}%
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Add to Cart Button */}
            <button className="w-full md:w-auto px-12 py-4 bg-black text-white font-bold uppercase tracking-[0.12em] text-sm hover:bg-orange-500 transition-colors">
              Add to Cart
            </button>

            {/* Additional info */}
            <div className="mt-8 pt-8 border-t border-gray-100">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Category</p>
                  <p className="font-medium capitalize">{product.category}</p>
                </div>
                {product.brand && (
                  <div>
                    <p className="text-gray-500">Brand</p>
                    <p className="font-medium">{product.brand}</p>
                  </div>
                )}
                <div>
                  <p className="text-gray-500">Stock</p>
                  <p className="font-medium">{product.stock} units</p>
                </div>
                <div>
                  <p className="text-gray-500">Rating</p>
                  <p className="font-medium">{product.rating} / 5</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </Layout>
  )
}