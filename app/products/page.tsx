import { getAllProducts } from "@/lib/products"
import ProductGrid from "@/components/ProductGrid"

export default function ProductsPage() {
  const products = getAllProducts()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated collection of high-quality products designed to enhance your lifestyle.
          </p>
        </div>

        {/* Products Count */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{products.length}</span> products
          </p>
        </div>

        {/* Product Grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  )
}
