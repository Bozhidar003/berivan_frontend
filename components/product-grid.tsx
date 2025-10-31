import { Card } from "@/components/ui/card"

const products = [
  {
    name: "Диамантен пръстен",
    price: "2,450 лв.",
    image: "/diamond-solitaire-ring-on-white.jpg",
  },
  {
    name: "Златно колие",
    price: "1,890 лв.",
    image: "/delicate-gold-chain-necklace.jpg",
  },
  {
    name: "Перлени обеци",
    price: "890 лв.",
    image: "/elegant-pearl-drop-earrings.jpg",
  },
  {
    name: "Тенис браслет",
    price: "3,200 лв.",
    image: "/diamond-tennis-bracelet.jpg",
  },
]

export function ProductGrid() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="font-serif text-4xl text-center mb-4 text-[#1A1A1A]">Най-новите ни предложения</h2>
      <p className="text-center text-gray-600 mb-12 text-lg">Изберете бижутата, които ще направят вашия ден уникален</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Card
            key={product.name}
            className="group cursor-pointer overflow-hidden border-0 shadow-sm hover:shadow-xl transition-luxury bg-white"
          >
            <div className="aspect-square overflow-hidden bg-[#F4E4C1]/20">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-luxury"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="font-serif text-xl mb-2 text-[#1A1A1A] group-hover:text-[#D4AF37] transition-luxury">
                {product.name}
              </h3>
              <p className="text-gray-600 text-lg">{product.price}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
