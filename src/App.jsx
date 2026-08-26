import { useState, useEffect } from 'react'
import { Hero } from './components/Hero'
import { Layout } from './components/Layout'
import { Routes, Route } from 'react-router-dom'
import { FeatureStrip } from './components/FeatureStrip'
import { ProductGrid } from './components/ProductGrid'
import { LoadingSpinner } from './components/LoadingSpinner'
import { WishlistPage } from './pages/WishlistPage'
import { ProductDetailsPage } from './pages/ProductDetailsPage'
import { CartPage } from './pages/CartPage'
import { LoginPage } from './pages/LoginPage'      // 👈 ADD THIS
import { SignupPage } from './pages/SignupPage'

export const App = () => {
    const [products,setProducts] = useState('');
    const [loading,setLoading] = useState(true);
useEffect(() => {
 
  const saved = localStorage.getItem('catalog')
  
  if (saved) {
    
    const catalogArray = JSON.parse(saved)
    setProducts(catalogArray)
    setLoading(false) 
  } else {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
       
        localStorage.setItem('catalog', JSON.stringify(data.products))
        
       
        setProducts(data.products)
        setLoading(false) 
      })
      .catch(error => {
        
        console.error('Error fetching products:', error)
        setLoading(false)
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
      
  
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/cart" element={<CartPage/>}/>
    </Routes>
  )
}

export default App