
import { FadeInSection } from "@/components/fade-in-section"
import Image from "next/image"
import { MultiImageSlider } from "@/components/multi-image-slider"

export default function AboutUs() {
  return (
    <section className="py-20 bg-custom-light-gray" id="about">
      <div className="container mx-auto px-4 max-w-[1600px]" >
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <FadeInSection>
              <h2 className="text-4xl font-bold text-custom-dark-gray">Our Story</h2>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <p className="text-custom-dark-gray/80">
                Founded with a passion for authentic Vietnamese street food, we bring the vibrant flavors of Vietnam to
                your neighborhood. Our bánh mì combines traditional Vietnamese ingredients with freshly baked baguettes,
                creating the perfect fusion of East and West.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <p className="text-custom-dark-gray/80">
                Every morning, our bakers prepare fresh baguettes, while our chefs marinate meats and prepare pickled
                vegetables using family recipes. Our bao buns are steamed throughout the day, ensuring each one is soft
                and fluffy, perfect for our flavorful fillings.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="grid grid-cols-2 gap-4 py-4">
                <div>
                  <h3 className="text-2xl font-bold text-custom-orange mb-2">1000+</h3>
                  <p className="text-custom-dark-gray">Bánh Mì Served Weekly</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-custom-orange mb-2">100%</h3>
                  <p className="text-custom-dark-gray">Fresh Daily</p>
                </div>
              </div>
            </FadeInSection>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FadeInSection delay={0.3}>
              <div className="space-y-4">
                <Image
                  src="/img/img1.webp"
                  alt="Fresh baked baguettes"
                  className="rounded-lg w-full h-48 object-cover"
                  width={309}
                  height={192}
                />
                <Image
                  src="/img/img2.webp"
                  alt="Banh mi preparation"
                  className="rounded-lg w-full h-64 object-cover"
                  width={309}
                  height={256}
                />
              </div>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="space-y-4 pt-8">
                <Image
                  src="/img/img3.webp"
                  alt="Steaming bao buns"
                  className="rounded-lg w-full h-64 object-cover"
                  width={309}
                  height={256}
                />
                <Image
                  src="/img/img1.webp"
                  alt="Fresh ingredients"
                  className="rounded-lg w-full h-48 object-cover"
                  width={309}
                  height={192}
                />
              </div>
            </FadeInSection>
          </div>
        </div>

        {/* Multi-image gallery slider */}
        <FadeInSection delay={0.4}>
          <div className="mt-12">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <MultiImageSlider images={galleryImages} />
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

const galleryImages = [
  {
    src: "/img/600x800.png",
    alt: "Fresh ingredients for Bánh Mì",
    caption: "Fresh Ingredients",
  },
  {
    src: "/img/600x800.png",
    alt: "Chef preparing Vietnamese dishes",
    caption: "Expert Preparation",
  },
  {
    src: "/img/600x800.png",
    alt: "Restaurant dining area",
    caption: "Cozy Atmosphere",
  },
  {
    src: "/img/600x800.png",
    alt: "Traditional Vietnamese cooking",
    caption: "Traditional Methods",
  },
  {
    src: "/img/600x800.png",
    alt: "Bánh Mì sandwich preparation",
    caption: "Bánh Mì Craft",
  },
  {
    src: "/img/600x800.png",
    alt: "Customers enjoying our food",
    caption: "Happy Customers",
  },
  {
    src: "/img/600x800.png",
    alt: "Vietnamese coffee preparation",
    caption: "Vietnamese Coffee",
  },
]

