import { FadeInSection } from "@/components/fade-in-section";
import Image from "next/image";


export default function RestaurantImage() {
  return (
    <section className="relative" id="restaurant">
      <FadeInSection>
            <div className="aspect-[21/9] relative w-full">
              <Image
                src="/img/2100x900.png"
                alt="Bánh Mì & More Restaurant Interior"
                className="w-full h-full object-cover"
                width={2100}
                height={900}
                priority={true}
              />
            </div>
      </FadeInSection>
    </section>
  );
}
