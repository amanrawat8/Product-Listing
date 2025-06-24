import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getProductById, getAllProducts } from "@/lib/products"
import { ArrowLeft, ShoppingCart, Heart } from "lucide-react"

interface ProductDetailPageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  const products = getAllProducts()
  return products.map((product) => ({
    id: product.id,
  }))
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href="/products"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Product Image */}
            <div className="relative">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-96 lg:h-full object-cover"
                crossOrigin="anonymous"
              />
            </div>

            {/* Product Details */}
            <div className="p-6 md:p-8 lg:p-12">
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>

              <p className="text-4xl font-bold text-blue-600 mb-6">${product.price.toFixed(2)}</p>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">{product.description}</p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md font-medium transition-all duration-200 hover:bg-blue-700 hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>

                <button className="flex-1 sm:flex-none bg-gray-100 text-gray-700 py-3 px-6 rounded-md font-medium transition-all duration-200 hover:bg-gray-200 hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center">
                  <Heart className="w-5 h-5 mr-2" />
                  Add to Wishlist
                </button>
              </div>

              {/* Product Features */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Features</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    High-quality materials
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Fast and free shipping
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    30-day return policy
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    1-year warranty included
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
