import { Phone, Mail, Truck } from "lucide-react";
import { Button } from "./ui/button";
import { openWhatsApp } from "../utils/whatsapp";

export function Header() {
  return (
    <header>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-guru-primary to-guru-secondary text-white py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-4 mb-2 sm:mb-0">
            <div className="flex items-center gap-1">
              <Phone size={14} />
              <span>+91 9618772020</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail size={14} />
              <span>syedsanower@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Truck size={14} />
            <span>Free shipping on orders over ₹2000</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-guru-primary to-guru-secondary rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-oswald font-bold text-lg">
                  SS
                </span>
              </div>
              <span className="font-oswald text-2xl font-bold text-gray-800">
                Syed Sanower
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#"
              className="font-oswald font-medium text-gray-800 hover:text-guru-primary transition-colors"
            >
              HOME
            </a>
            <a
              href="#"
              className="font-oswald font-medium text-gray-800 hover:text-guru-primary transition-colors"
            >
              ABOUT
            </a>
            <a
              href="#"
              className="font-oswald font-medium text-gray-800 hover:text-guru-primary transition-colors"
            >
              SERVICES
            </a>
            <a
              href="#"
              className="font-oswald font-medium text-gray-800 hover:text-guru-primary transition-colors"
            >
              PRODUCTS
            </a>
            <a
              href="#"
              className="font-oswald font-medium text-gray-800 hover:text-guru-primary transition-colors"
            >
              BLOG
            </a>
            <a
              href="#"
              className="font-oswald font-medium text-gray-800 hover:text-guru-primary transition-colors"
            >
              CONTACT
            </a>
          </div>

          {/* CTA Button */}
          <Button
            onClick={() =>
              openWhatsApp(
                "Hi! I want to get started with Syed Sanower programs.",
              )
            }
            className="bg-gradient-to-r from-guru-primary to-guru-secondary hover:from-guru-secondary hover:to-guru-primary text-white font-oswald font-semibold px-6 py-2 text-sm transition-all duration-300"
          >
            GET STARTED
          </Button>

          {/* Mobile Menu Button */}
          <button className="lg:hidden flex flex-col space-y-1">
            <span className="w-6 h-0.5 bg-gray-800"></span>
            <span className="w-6 h-0.5 bg-gray-800"></span>
            <span className="w-6 h-0.5 bg-gray-800"></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
