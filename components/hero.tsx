import { HeroCarousel } from "@/components/hero-carousel"

const heroSlides = [
  {
    image: "/img/1920p.png",
    title: "Bánh Mì & More",
    description:
      "Experience the perfect blend of Vietnamese and French cuisine. Fresh baked banh mi, steamed bao, and flavorful vermicelli bowls.",
    buttonText: "Order Now",
    buttonLink: "/order",
  },
  {
    image: "/img/1920p.png",
    title: "New Summer Specials",
    description:
      "Try our limited-time lemongrass chicken bánh mì and refreshing mango bubble tea. Available until August 31st.",
    buttonText: "See Specials",
    buttonLink: "/menu",
  },
  {
    image: "/img/1920p.png",
    title: "Merchandise & Gifts",
    description:
      "Take home our signature sauces, branded merchandise, and gift cards. Perfect for the Vietnamese food lover in your life.",
    buttonText: "Shop Now",
    buttonLink: "#merchandise",
  },
]

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center">
      <HeroCarousel slides={heroSlides} />
    </section>
  )
}

