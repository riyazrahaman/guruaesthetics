import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Mission } from "../components/Mission";
import { Services } from "../components/Services";
import { Products } from "../components/Products";
import { Stats } from "../components/Stats";
import { ConsultantCTA } from "../components/ConsultantCTA";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";
import { Transformations } from "../components/Transformations";
import { WorkoutGallery } from "../components/WorkoutGallery";
import { ClientStories } from "../components/ClientStories";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
import { Chatbot } from "../components/Chatbot";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <Mission />
      <div id="services">
        <Services />
      </div>
      <div id="products">
        <Products />
      </div>
      <Stats />
      <ConsultantCTA />
      <div id="team">
        <Team />
      </div>
     
      <Transformations />
      
      <ClientStories />
      <Testimonials />
      <FAQ />
      <div id="contact">
        <Footer />
      </div>
      <Chatbot />
    </div>
  );
}
