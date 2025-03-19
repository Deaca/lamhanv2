import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import AboutUs from "@/components/about-us"
import RestaurantImage from "@/components/restaurant-image"
import Footer from "@/components/footer"
import LocationSection from "@/components/location-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-200 to-orange-500 text-custom-white">
      <Navbar />
      <Hero />
      <AboutUs />
      <RestaurantImage />
      <div className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-500"></div>
        <div className="absolute inset-0 bg-pattern-diagonal opacity-20"></div>
        <div className="absolute inset-0 bg-pattern-noise opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <LocationSection />
        </div>
      </div>
      <Footer />
    </main>
  )
}

