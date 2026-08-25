export const Hero = () => {
  return (
   
    <section className="w-full px-0 pt-5">
      

      <div className="relative min-h-[360px] sm:min-h-[430px] lg:min-h-[500px] overflow-hidden bg-[#e9e4df] w-full">
        
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1800&q=85"
          alt="Fashion collection"
          className="absolute inset-0 w-full h-full object-cover"
        />


        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />


        <div className="relative z-10 h-full min-h-[360px] sm:min-h-[430px] lg:min-h-[500px] flex items-center px-7 sm:px-12 lg:px-20">
          
          <div className="max-w-[550px] text-white">
            
            <p className="text-[11px] sm:text-xs tracking-[0.3em] font-semibold mb-5">
              NEW SEASON 2026
            </p>

            <h2 className="text-4xl sm:text-5xl lg:text-[68px] leading-[0.95] font-black tracking-[-0.045em]">
              STYLE
              <br />
              WITHOUT
              <br />
              LIMITS.
            </h2>

            <p className="mt-6 text-sm sm:text-base text-white/80 max-w-[390px] leading-relaxed">
              Discover new arrivals, everyday essentials and trending products curated for you.
            </p>

            <button className="mt-7 bg-white text-black px-8 py-3.5 text-xs font-bold uppercase tracking-[0.12em] hover:bg-black hover:text-white transition-all">
              Shop Collection
            </button>

          </div>
        </div>

      </div>
    </section>
  )
}