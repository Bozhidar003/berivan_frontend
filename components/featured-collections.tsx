const collections = [
    {
      name: "БИЖУТА",
      description: "Celebrate your forever with timeless elegance",
      image: "/elegant-engagement-ring-bridal.jpg",
    },
    {
      name: "БИЖУТА С ПЕРЛИ",
      description: "Refined pieces for daily sophistication",
      image: "/delicate-gold-jewelry-everyday.jpg",
    },
    {
      name: "БИЖУТА С ДИАМАНТИ",
      description: "Bold designs that command attention",
      image: "/bold-luxury-jewelry-statement.jpg",
    },
  ]
  
  export function FeaturedCollections() {
    return (
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl text-center mb-4 text-[#1A1A1A]">Разгледайте колекциите ни</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Открийте нашите предложения</p>
  
        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div key={collection.name} className="group cursor-pointer relative overflow-hidden h-[500px]">
              <img
                src={collection.image || "/placeholder.svg"}
                alt={collection.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-luxury"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="font-serif text-3xl mb-2 group-hover:text-[#D4AF37] transition-luxury">
                  {collection.name}
                </h3>
                <button className="text-[#D4AF37] hover:text-[#F4E4C1] transition-luxury font-medium">
                  Виж всички →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  