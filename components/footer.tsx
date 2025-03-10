import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react"
import { FadeInSection } from "@/components/fade-in-section"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-custom-dark-gray text-custom-white">
      <div className="container mx-auto px-4 py-12">
        <FadeInSection>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                            src="/img/lamhan-logo.gif" // Adjust the path if necessary
                            alt="Lanhan Logo"
                            width={50} // Set the desired width of the logo
                            height={50} // Set the desired height of the logo
                            className="w-auto h-auto"
                          />
              <p className="text-custom-white/80 mb-4">Authentic Vietnamese cuisine in the heart of the city.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-custom-white/80 hover:text-custom-teal" aria-label="Facebook">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-custom-white/80 hover:text-custom-teal" aria-label="Instagram">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-custom-white/80 hover:text-custom-teal" aria-label="Twitter">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-custom-teal mr-2 mt-0.5" />
                  <span className="text-custom-white/80">
                    Lamhan Banh Mi
                    <br />
                    1089 Bathurst St
                    <br />
                    Toronto, ON M5R 3G8
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-custom-teal mr-2" />
                  <a href="tel:+11234567890" className="text-custom-white/80 hover:text-custom-teal">
                    (123) 456-7890
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-custom-teal mr-2" />
                  <a href="mailto:info@banhmiandmore.com" className="text-custom-white/80 hover:text-custom-teal">
                    info@banhmiandmore.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Hours</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Clock className="w-5 h-5 text-custom-teal mr-2 mt-0.5" />
                  <div className="text-custom-white/80">
                    <p className="font-medium">Monday - Friday</p>
                    <p>11:00 AM - 9:00 PM</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="w-5 h-5 text-custom-teal mr-2 mt-0.5" />
                  <div className="text-custom-white/80">
                    <p className="font-medium">Saturday - Sunday</p>
                    <p>11:00 AM - 10:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/order" className="text-custom-white/80 hover:text-custom-teal">
                    Order Online
                  </Link>
                </li>
                <li>
                  <Link href="#merchandise" className="text-custom-white/80 hover:text-custom-teal">
                    Merchandise
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </FadeInSection>

        <div className="border-t border-custom-white/20 mt-8 pt-8 text-center text-custom-white/60">
          <p>© 2025 Bánh Mì & More. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

