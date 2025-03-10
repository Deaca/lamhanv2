"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Check if we're on a page with white background
  const isWhiteBgPage = ["/merchandise", "/order"].includes(pathname)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/merchandise", label: "Shop" },
  ]

  // Function to check if a link is active
  const isLinkActive = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/"
    }

    if (href.startsWith("/#")) {
      return false
    }

    if (href === "/") {
      return pathname === "/"
    }

    return pathname.startsWith(href)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-custom-orange shadow-md py-2" : isWhiteBgPage ? "bg-custom-orange py-4" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-custom-white">
          <Image
              src="/img/lamhan-logo.gif" // Adjust the path if necessary
              alt="Lanhan Logo"
              width={50} // Set the desired width of the logo
              height={50} // Set the desired height of the logo
              className="w-auto h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-custom-white hover:text-custom-teal transition-colors relative ${
                  isLinkActive(link.href)
                    ? "after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[3px] after:bg-custom-teal"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/order">
              <Button
                className={`bg-custom-teal text-custom-dark-gray hover:bg-custom-teal/90 ${
                  pathname === "/order" ? "ring-2 ring-white" : ""
                }`}
              >
                Order Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" className="text-custom-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-custom-white rounded-lg mt-2 shadow-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md ${
                    isLinkActive(link.href)
                      ? "bg-custom-orange/10 text-custom-orange font-medium border-l-4 border-custom-orange"
                      : "text-custom-dark-gray hover:text-custom-orange"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link href="/order" onClick={() => setIsOpen(false)}>
                  <Button
                    className={`w-full bg-custom-teal text-custom-dark-gray hover:bg-custom-teal/90 ${
                      pathname === "/order" ? "ring-2 ring-custom-orange" : ""
                    }`}
                  >
                    Order Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

