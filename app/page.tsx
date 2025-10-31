import { Header } from "@/components/header"
import { HeroCarousel } from "@/components/hero-carousel"
import { ProductGrid } from "@/components/product-grid"
import { AboutSection } from "@/components/about-section"
import { FeaturedCollections } from "@/components/featured-collections"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroCarousel />
      <FeaturedCollections />
      <ProductGrid />
      <AboutSection />
      <Footer />
    </main>
  )
}
