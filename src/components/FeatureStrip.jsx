export const FeatureStrip = () => {
  const features = [
    { number: '01', title: 'New Arrivals', text: 'Fresh styles every week' },
    { number: '02', title: 'Best Sellers', text: 'Loved by our customers' },
    { number: '03', title: 'Premium Quality', text: 'Products you can trust' },
    { number: '04', title: 'Daily Deals', text: 'Great prices every day' }
  ]

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 bg-white mt-5 border border-gray-100 w-full">
        {features.map((feature) => (
          <div key={feature.number} className="px-5 py-6 ...">
            <span className="...">{feature.number}</span>
            <h3 className="...">{feature.title}</h3>
            <p className="...">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}