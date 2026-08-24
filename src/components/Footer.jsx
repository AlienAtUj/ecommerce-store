export const Footer = () => {
  return (
    <footer className="bg-[#111] text-white mt-10 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* ... Brand info, Shop links, Help links, Follow links ... */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-3xl font-black tracking-[-0.06em]">NOVA<span className="text-orange-500">.</span></h2>
            <p className="text-gray-400 text-xs leading-relaxed mt-4 max-w-[240px]">Modern products. Better prices. Designed for the way you shop today.</p>
          </div>
          {/* ... other columns ... */}
        </div>
        <div className="border-t border-white/10 mt-12 pt-6 text-[10px] text-gray-500 flex justify-between">
          <span>© 2026 NOVA. All rights reserved.</span>
          <span>Premium shopping experience</span>
        </div>
      </div>
    </footer>
  )
}