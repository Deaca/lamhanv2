import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import AboutUs from "@/components/about-us"
import FeaturedItems from "@/components/featured-items"
import RestaurantImage from "@/components/restaurant-image"
import Footer from "@/components/footer"
import LocationSection from "@/components/location-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-custom-orange text-custom-white">
      <Navbar />
      <Hero />
      <AboutUs />
      <div className="relative">
        <div className="absolute inset-0 bg-pattern-dots bg-[length:20px_20px] opacity-10"></div>
        <FeaturedItems />
      </div>
      <RestaurantImage />
      <div className="container mx-auto px-4 py-20">
        <LocationSection />
      </div>
      <Footer />
    </main>
  )
}

