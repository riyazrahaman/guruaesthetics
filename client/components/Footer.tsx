import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import { Button } from "./ui/button";
import { openWhatsApp } from "../utils/whatsapp";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-guru-primary to-guru-secondary py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-oswald text-3xl font-bold mb-4">
            JOIN OUR FITNESS COMMUNITY
          </h3>
          <p className="font-poppins text-lg mb-6 opacity-90">
            Get exclusive tips, workout plans, and motivation delivered to your
            inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 font-poppins"
            />
            <Button
              onClick={() =>
                openWhatsApp(
                  "Hi! I want to subscribe to GURUAESTHETICS newsletter and updates.",
                )
              }
              className="bg-black hover:bg-gray-800 text-white font-oswald font-semibold px-6 py-3"
            >
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-guru-primary to-guru-secondary rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-oswald font-bold text-lg">
                    GA
                  </span>
                </div>
                <span className="font-oswald text-2xl font-bold text-white">
                  GURUAESTHETICS
                </span>
              </div>
              <p className="font-poppins text-gray-400 mb-6">
                Transform your body and mind with expert coaching, personalized
                nutrition, and unwavering support.
              </p>
              <div className="flex space-x-4">
                <Instagram className="w-6 h-6 text-gray-400 hover:text-guru-primary cursor-pointer transition-colors" />
                <Facebook className="w-6 h-6 text-gray-400 hover:text-guru-primary cursor-pointer transition-colors" />
                <Youtube className="w-6 h-6 text-gray-400 hover:text-guru-primary cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-oswald text-xl font-semibold mb-6">
                QUICK LINKS
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="font-poppins text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-poppins text-gray-400 hover:text-white transition-colors"
                  >
                    Our Programs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-poppins text-gray-400 hover:text-white transition-colors"
                  >
                    Success Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-poppins text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-oswald text-xl font-semibold mb-6">
                PROGRAMS
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="font-poppins text-gray-400 hover:text-white transition-colors"
                  >
                    GURU Elite
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-poppins text-gray-400 hover:text-white transition-colors"
                  >
                    GURU Life
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-poppins text-gray-400 hover:text-white transition-colors"
                  >
                    Personal Training
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-poppins text-gray-400 hover:text-white transition-colors"
                  >
                    Nutrition Coaching
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-oswald text-xl font-semibold mb-6">
                CONTACT US
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-guru-primary mt-1" />
                  <div>
                    <div className="font-poppins text-white">
                      +91 9618772020
                    </div>
                    <div className="font-poppins text-gray-400 text-sm">
                      Mon-Sat 9AM-8PM
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-guru-primary mt-1" />
                  <div className="font-poppins text-white">
                    guruaesthetics@gmail.com
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-guru-primary mt-1" />
                  <div className="font-poppins text-white">
                    Mumbai, Maharashtra, India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="font-poppins text-gray-400">
            © 2024 GURUAESTHETICS. All rights reserved. | Privacy Policy |
            Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
