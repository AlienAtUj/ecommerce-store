import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-[#f7f7f7] text-[#111] flex flex-col">
   
      <Header />
 
      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  )
}