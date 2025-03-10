import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FadeInSection } from "@/components/fade-in-section"
import { SectionHeader } from "@/components/section-header"
import { ArrowRight, Flame } from "lucide-react"

const featuredItems = [
  {
    name: "Bánh Mì Thịt Nguội",
    description: "Classic cold cuts with pâté, pickled vegetables, cilantro, and jalapeños",
    image: "/img/300x400.png",
    price: 9.99,
    spicy: true,
  },
  {
    name: "Pork Belly Bao",
    description: "Braised pork belly, pickled mustard greens, crushed peanuts",
    image: "/img/300x400.png",
    price: 6.99,
  },
  {
    name: "Bún Thịt Nướng",
    description: "Grilled pork, spring rolls, fresh herbs, fish sauce",
    image: "/img/300x400.png",
    price: 13.99,
  },
]

export default function FeaturedItems() {
  return (
    <section className="py-20 relative" id="featured">
      <div className="container mx-auto px-4">
        <SectionHeader title="Popular Items" subtitle="Try our customer favorites" className="text-custom-white" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredItems.map((item, index) => (
            <FadeInSection key={index} delay={0.1 * index}>
              <Card className="flex overflow-hidden h-[200px] bg-custom-white">
                <div className="w-1/3 relative">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="w-2/3 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-custom-dark-gray">{item.name}</h3>
                        {item.spicy && <Flame className="h-4 w-4 text-red-500" />}
                      </div>
                      <span className="font-bold text-custom-orange whitespace-nowrap">${item.price.toFixed(2)}</span>
                    </div>
                    <p className="text-sm text-custom-dark-gray/80 line-clamp-3">{item.description}</p>
                  </div>
                </div>
              </Card>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={0.4}>
          <div className="text-center">
            <Button size="lg" className="bg-custom-teal text-custom-dark-gray hover:bg-custom-teal/90">
              View All Menu Items
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

