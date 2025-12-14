import { Button } from "./ui/button";
import { openWhatsApp } from "../utils/whatsapp";

export function Hero() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <h1 className="font-oswald text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
            BODY TRANSFORMATION
            <br />
            <span className="text-guru-primary">AND NUTRITION</span>
            <br />
            WITH
          </h1>

          {/* GURUAESTHETICS Logo/Text */}
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-guru-primary to-guru-secondary rounded-full flex items-center justify-center mr-4">
              <span className="text-white font-oswald font-bold text-2xl">
                GA
              </span>
            </div>
            <span className="font-oswald text-3xl lg:text-4xl font-bold">
              GURU
            </span>
          </div>

          {/* Description */}
          <p className="font-poppins text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Transform your body and mind with our expert coaching programs. Get
            personalized nutrition plans, workout routines, and ongoing support
            to achieve your fitness goals faster than ever before.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() =>
                openWhatsApp(
                  "Hi! I want to start my transformation journey with GURUAESTHETICS.",
                )
              }
              className="bg-gradient-to-r from-guru-primary to-guru-secondary hover:from-guru-secondary hover:to-guru-primary text-white font-oswald font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
              size="lg"
            >
              START YOUR TRANSFORMATION
            </Button>
            <Button
              onClick={() =>
                openWhatsApp("Hi! I want to get started with GURUAESTHETICS.")
              }
              className="bg-gradient-to-r from-guru-primary to-guru-secondary hover:from-guru-secondary hover:to-guru-primary text-white font-oswald font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
              size="lg"
            >
              GET STARTED
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-md">
            <div className="text-center">
              <div className="font-oswald text-3xl lg:text-4xl font-bold text-guru-primary">
                200+
              </div>
              <div className="font-poppins text-sm text-gray-300">
                Transformations
              </div>
            </div>
            <div className="text-center">
              <div className="font-oswald text-3xl lg:text-4xl font-bold text-guru-primary">
                5+
              </div>
              <div className="font-poppins text-sm text-gray-300">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="font-oswald text-3xl lg:text-4xl font-bold text-guru-primary">
                100%
              </div>
              <div className="font-poppins text-sm text-gray-300">
                Noticeable changes in 1 month
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 border-2 border-guru-primary opacity-30 rotate-45"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-guru-primary opacity-20 rotate-12"></div>
    </section>
  );
}
