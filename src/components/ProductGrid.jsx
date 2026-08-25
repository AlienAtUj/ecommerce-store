// 1. IMPORT useState (already there)
import { useState } from 'react'
import { ProductCard } from './ProductCard'

export const ProductGrid = ({ products }) => {
  
  // --- STATE FOR VIEW ALL (already there) ---
  const [showAll, setShowAll] = useState(false)
  const initialDisplayCount = 8

  


  const [selectedCategory, setSelectedCategory] = useState('All')


  const categories = ['All', ...new Set(products.map(product => product.category))]


  const filteredByCategory = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory)

  
  const displayedProducts = showAll
    ? filteredByCategory
    : filteredByCategory.slice(0, initialDisplayCount)

  
  const handleViewAllClick = () => {
    setShowAll(!showAll)
  }


  const handleCategoryClick = (category) => {
    setSelectedCategory(category)

    setShowAll(false)
  }

  return (
    <main className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-14">
      
   
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-orange-500 text-[11px] font-bold tracking-[0.2em] uppercase mb-2">
            Curated for you
          </p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-[-0.04em]">
            Trending Products
          </h2>
        </div>

        {filteredByCategory.length > initialDisplayCount && (
          <button
            onClick={handleViewAllClick}
            className="hidden sm:block text-xs font-semibold border-b border-black pb-1 hover:text-orange-500 hover:border-orange-500 transition"
          >
            {showAll ? 'SHOW LESS' : 'VIEW ALL'}
          </button>
        )}
      </div>

    
      <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-100 pb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`
              px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] transition
              ${selectedCategory === category 
                ? 'bg-black text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 sm:gap-x-5 gap-y-10">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      
      {displayedProducts.length === 0 && (
        <div className="text-center py-12 text-gray-500 text-sm">
          No products found in this category.
        </div>
      )}

    </main>
  )
}