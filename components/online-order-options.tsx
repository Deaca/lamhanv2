import { Button } from "@/components/ui/button"
import { FadeInSection } from "@/components/fade-in-section"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

const deliveryPartners = [
  {
    name: "UberEats",
    logo: "/img/ubereat.jpeg",
    link: "https://www.ubereats.com/ca/store/lamhan-banh-mi/f3IoOGGzRaaNlDXgF9qkoA",
    description: "Order delivery through UberEats",
  },
  {
    name: "DoorDash",
    logo: "/img/doordash.jpeg",
    link: "https://www.doordash.com/store/lamhan-toronto-2294823/",
    description: "Get your favorite dishes via DoorDash",
  },
  {
    name: "Ritual",
    logo: "/img/ritual.jpeg",
    link: "https://ritual.co/order/lamhan-banh-mi-bloor-christie-toronto/0b25",
    description: "Order ahead and skip the line with Ritual",
  },
  {
    name: "Fantuan",
    logo: "/img/fantuan.png",
    link: "https://www.fantuanorder.com/store/-lamhan-banh-mi/ca-17145",
    description: "Order through Fantuan for fast delivery",
  },
]

export default function OnlineOrderOptions() {
  return (
    <div className="py-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {deliveryPartners.map((partner, index) => (
          <FadeInSection key={index} delay={0.1 * index}>
            <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow h-full flex flex-col border border-gray-100 shadow-md hover:border-custom-orange/20">
              <div className="flex-grow">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="w-32 h-32 mx-auto mb-6 object-contain"
                  width={100}
                  height={100}
                />
                <h3 className="text-xl font-semibold text-custom-dark-gray mb-2">{partner.name}</h3>
                <p className="text-custom-dark-gray/80 mb-6">{partner.description}</p>
              </div>
              <Button className="bg-custom-teal text-custom-dark-gray hover:bg-custom-teal/90 w-full" asChild>
                <a href={partner.link} target="_blank" rel="noopener noreferrer">
                  Order on {partner.name}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </FadeInSection>
        ))}
      </div>

      <FadeInSection delay={0.5}>
        <div className="bg-custom-orange/10 backdrop-blur-sm rounded-lg p-8 text-center border border-custom-orange/20 shadow-md">
          <h3 className="text-2xl font-semibold text-custom-orange mb-4">Prefer to order directly?</h3>
          <p className="text-custom-dark-gray mb-6 max-w-2xl mx-auto">
            Call us at (123) 456-7890 to place your order for pickup. We'll have it ready when you arrive!
          </p>
          <Button size="lg" className="bg-custom-teal text-custom-dark-gray hover:bg-custom-teal/90" asChild>
            <a href="tel:+11234567890">Call to Order</a>
          </Button>
        </div>
      </FadeInSection>
    </div>
  )
}

