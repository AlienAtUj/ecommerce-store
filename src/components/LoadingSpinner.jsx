export const LoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-[#f8f8f8] flex items-center justify-center">
      <div className="text-center">
        <div className="w-10 h-10 border-4 border-gray-200 border-t-black rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm text-gray-500">Loading products...</p>
      </div>
    </div>
  )
}