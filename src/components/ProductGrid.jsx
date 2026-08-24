// 1. IMPORT useState (already there)
import { useState } from 'react'
import { ProductCard } from './ProductCard'

export const ProductGrid = ({ products }) => {
  
  // --- STATE FOR VIEW ALL (already there) ---
  const [showAll, setShowAll] = useState(false)
  const initialDisplayCount = 8

  // 🆕 2. NEW STATE: Which category is selected?
  const [selectedCategory, setSelectedCategory] = useState('All')

  // 🆕 3. LOGIC: Get all unique categories from the products.
  //    - .map() goes through every product and grabs its category.
  //    - new Set() removes duplicates (keeps only unique values).
  //    - ['All', ...] adds "All" at the very beginning.
  const categories = ['All', ...new Set(products.map(product => product.category))]

  // 🆕 4. LOGIC: Filter the products based on the selected category.
  //    - If 'All' is selected, show everything.
  //    - Otherwise, only show products where the category matches.
  const filteredByCategory = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory)

  // 5. LOGIC: Apply the "View All" slicing to the FILTERED list.
  const displayedProducts = showAll
    ? filteredByCategory
    : filteredByCategory.slice(0, initialDisplayCount)

  // 6. HANDLER: Toggle showAll (already there)
  const handleViewAllClick = () => {
    setShowAll(!showAll)
  }

  // 🆕 7. HANDLER: When a category button is clicked, update the state.
  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
    // 🆕 IMPORTANT: When we change category, we reset "showAll" to false.
    // This way, when you click "Electronics", it shows only 8 electronics, not all of them.
    setShowAll(false)
  }

  return (
    <main className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-14">
      
      {/* SECTION TITLE */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-orange-500 text-[11px] font-bold tracking-[0.2em] uppercase mb-2">
            Curated for you
          </p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-[-0.04em]">
            Trending Products
          </h2>
        </div>

        {/* VIEW ALL / SHOW LESS BUTTON (already there) */}
        {filteredByCategory.length > initialDisplayCount && (
          <button
            onClick={handleViewAllClick}
            className="hidden sm:block text-xs font-semibold border-b border-black pb-1 hover:text-orange-500 hover:border-orange-500 transition"
          >
            {showAll ? 'SHOW LESS' : 'VIEW ALL'}
          </button>
        )}
      </div>

      {/* 🆕 8. CATEGORY FILTER BUTTONS */}
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

      {/* THE GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 sm:gap-x-5 gap-y-10">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* 🆕 9. EMPTY STATE: If no products match the filter, show a message */}
      {displayedProducts.length === 0 && (
        <div className="text-center py-12 text-gray-500 text-sm">
          No products found in this category.
        </div>
      )}

    </main>
  )
}