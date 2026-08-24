import { useState, useEffect } from 'react'
import { Hero } from './components/Hero'
import { Layout } from './components/Layout'
import { FeatureStrip } from './components/FeatureStrip'
import { ProductGrid } from './components/ProductGrid'
import { LoadingSpinner } from './components/LoadingSpinner'

export const App = () => {
    const [products,setProducts] = useState('');
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
         fetch('https://dummyjson.com/products').then(res => res.json().then(data=>
         {
          setProducts(data.products);
          setLoading(false);
         }
         ))
    },[])

    if(loading){
      return <LoadingSpinner/>
    }
   return (
    <Layout>  
      <Hero />
      <FeatureStrip />
      <ProductGrid products={products} />
    </Layout>
  )
}

export default App