import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 group">
      <div className="relative overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
          {product.name}
        </h3>

        <p className="text-2xl font-bold text-blue-600 mb-4">${product.price.toFixed(2)}</p>

        <Link
          href={`/products/${product.id}`}
          className="inline-block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-md font-medium transition-all duration-200 hover:bg-blue-700 hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}
