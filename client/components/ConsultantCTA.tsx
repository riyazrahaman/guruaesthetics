import { Button } from "./ui/button";
import { openWhatsApp } from "../utils/whatsapp";

export function ConsultantCTA() {
  return (
    <section className="bg-gradient-to-r from-guru-primary to-guru-secondary py-20">
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <h2 className="font-oswald text-4xl lg:text-5xl font-bold mb-4">
            Need a <span className="text-black">fitness Consultant?</span>
          </h2>
          <p className="font-poppins text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get personalized guidance from our certified fitness experts. Book a
            free consultation and start your transformation journey today.
          </p>
          <div className="flex justify-center">
            <Button
              onClick={() =>
                openWhatsApp(
                  "Hi! I want to book a free consultation with GURUAESTHETICS.",
                )
              }
              className="bg-white text-guru-primary hover:bg-gray-100 font-oswald font-semibold px-8 py-4 text-lg"
            >
              BOOK FREE CONSULTATION
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
