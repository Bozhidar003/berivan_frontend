export function AboutSection() {
    return (
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-5xl mb-6 text-[#1A1A1A] text-balance">За нас</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Berivan GOLD е специализиран магазин за златни бижута — подбираме внимателно модели от водещи производители и марки, за да ги предложим директно на вас. Няма излишна усложненост — просто красиво злато, готово за носене.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Нашите услуги включват консултация, удостоверяване на качеството и сигурна доставка. Вашият стил заслужава чистота, блясък и доверие.
            </p>
            <button className="border-2 border-[#D4AF37] text-[#1A1A1A] hover:bg-[#F4E4C1] px-8 py-3 transition-luxury font-medium">
              Научи повече за нас
            </button>
          </div>
          <div className="relative h-[600px]">
            <img
              src="/jewelry-artisan-crafting-ring.jpg"
              alt="Jewelry craftsmanship"
              className="w-full h-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>
    )
  }
  