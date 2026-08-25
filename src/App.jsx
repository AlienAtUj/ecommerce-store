import { useState, useEffect } from 'react'
import { Hero } from './components/Hero'
import { Layout } from './components/Layout'
import { Routes, Route } from 'react-router-dom'
import { FeatureStrip } from './components/FeatureStrip'
import { ProductGrid } from './components/ProductGrid'
import { LoadingSpinner } from './components/LoadingSpinner'
import { WishlistPage } from './pages/WishlistPage'
import { ProductDetailsPage } from './pages/ProductDetailsPage'
export const App = () => {
    const [products,setProducts] = useState('');
    const [loading,setLoading] = useState(true);
useEffect(() => {
  // 1️⃣ Check localStorage first
  const saved = localStorage.getItem('catalog')
  
  if (saved) {
    // 2️⃣ If data exists in localStorage, use it
    const catalogArray = JSON.parse(saved)
    setProducts(catalogArray)
    setLoading(false) // ✅ IMPORTANT: Stop loading
  } else {
    // 3️⃣ If no data in localStorage, fetch from API
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        // 4️⃣ Save to localStorage
        localStorage.setItem('catalog', JSON.stringify(data.products))
        
        // 5️⃣ Update state with the data
        setProducts(data.products)
        setLoading(false) // ✅ Stop loading
      })
      .catch(error => {
        // 6️⃣ Handle errors
        console.error('Error fetching products:', error)
        setLoading(false) // ✅ Stop loading even if error
      })
  }
}, [])
    if(loading){
      return <LoadingSpinner/>
    }
 return (
    <Routes>
      <Route 
        path="/" 
        element={
          <Layout>
            <Hero />
            <FeatureStrip />
            <ProductGrid products={products} />
          </Layout>
        } 
      />
      
      {/* 👇 ADD THIS ONE LINE */}
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />

    </Routes>
  )
}

export default App