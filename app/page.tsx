import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Welcome to Our Store</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover amazing products at unbeatable prices. Quality guaranteed with fast shipping.
        </p>
        <Link
          href="/products"
          className="inline-block bg-blue-600 text-white py-4 px-8 rounded-lg font-medium text-lg transition-all duration-200 hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0"
        >
          Shop Now
        </Link>
      </div>
    </div>
  )
}
