import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Mission } from "../components/Mission";
import { Products } from "../components/Products";
import { ConsultantCTA } from "../components/ConsultantCTA";
import { Testimonials } from "../components/Testimonials";
import { Transformations } from "../components/Transformations";
import { Footer } from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Mission />
      <Products />
      <ConsultantCTA />
      <Testimonials />
      <Transformations />
      <Footer />
    </div>
  );
}
