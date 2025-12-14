import { Dumbbell, Apple, Users, Clock, Trophy, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { openWhatsApp } from "../utils/whatsapp";

export function Services() {
  const services = [
    {
      icon: Dumbbell,
      title: "Weight Loss",
      description:
        "One-on-one training sessions with certified trainers tailored to your goals",
      features: [
        "Customized workout plans",
        "Form correction",
        "Progressive overload",
        "24/7 trainer support",
      ],
    },
    {
      icon: Apple,
      title: "Weight Gain",
      description:
        "Personalized meal plans and nutrition guidance for optimal results",
      features: [
        "Custom meal plans",
        "Macro tracking",
        "Supplement guidance",
        "Recipe suggestions",
      ],
    },
    {
      icon: Users,
      title: "Muscle Building",
      description:
        "High-energy group sessions that build community and motivation",
      features: [
        "Small group sizes",
        "Varied workouts",
        "Social motivation",
        "Cost-effective training",
      ],
    },
    {
      icon: Clock,
      title: "Power Lifting",
      description:
        "Get expert guidance from anywhere with our virtual coaching programs",
      features: [
        "Video consultations",
        "App-based tracking",
        "Weekly check-ins",
        "Flexible scheduling",
      ],
    },
    {
      icon: Trophy,
      title: "Calisthenics",
      description:
        "Specialized training for bodybuilding and fitness competitions",
      features: [
        "Contest preparation",
        "Posing practice",
        "Peak week protocols",
        "Stage presence coaching",
      ],
    },
    {
      icon: Heart,
      title: "Mobility",
      description:
        "Holistic approach to health including stress management and sleep optimization",
      features: [
        "Stress management",
        "Sleep optimization",
        "Habit formation",
        "Mindset coaching",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            OUR <span className="text-guru-primary">SERVICES</span>
          </h2>
          <p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive fitness solutions designed to transform your body and
            lifestyle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group flex flex-col"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-guru-primary to-guru-secondary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-oswald text-2xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="font-poppins text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-8 flex-grow">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-guru-primary rounded-full"></div>
                    <span className="font-poppins text-sm text-gray-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() =>
                  openWhatsApp(
                    `Hi! I'm interested in the ${service.title} service. Can you help me?`,
                  )
                }
                className="w-full bg-gradient-to-r from-guru-primary to-guru-secondary hover:opacity-90 text-white font-oswald font-semibold py-3"
              >
                BOOK NOW
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
