export interface Product {
  id: string
  name: string
  price: number
  description: string
  category: string
  image: string
}

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    description:
      "Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center",
  },
  {
    id: "2",
    name: "Organic Cotton T-Shirt",
    price: 24.99,
    description: "Comfortable and sustainable organic cotton t-shirt. Available in multiple colors and sizes.",
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center",
  },
  {
    id: "3",
    name: "Smart Fitness Watch",
    price: 199.99,
    description: "Advanced fitness tracking with heart rate monitoring, GPS, and smartphone connectivity.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
  },
  {
    id: "4",
    name: "Ceramic Coffee Mug",
    price: 12.99,
    description: "Handcrafted ceramic mug perfect for your morning coffee or tea. Dishwasher and microwave safe.",
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=400&fit=crop&crop=center",
    
  },
  {
    id: "5",
    name: "Leather Wallet",
    price: 45.99,
    description: "Genuine leather wallet with RFID blocking technology. Multiple card slots and bill compartments.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop&crop=center",
  },
  {
    id: "6",
    name: "Yoga Mat",
    price: 29.99,
    description: "Non-slip yoga mat made from eco-friendly materials. Perfect for yoga, pilates, and exercise.",
    category: "Sports & Fitness",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop&crop=center",
  },
  {
    id: "7",
    name: "Wireless Phone Charger",
    price: 34.99,
    description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek and compact design.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop&crop=center",
  },
  {
    id: "8",
    name: "Stainless Steel Water Bottle",
    price: 18.99,
    description: "Insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop&crop=center",
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getAllProducts(): Product[] {
  return products
}
