import { Instagram } from "lucide-react";

export function Team() {
  const trainer = {
    name: "GURU",
    role: "Founder & Master Trainer",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    experience: "10+ Years",
    specialty: "Body Transformation & Aesthetics",
    certifications: [
      "Master Trainer",
      "Nutrition Expert",
      "Aesthetics Specialist",
    ],
    bio: "The mastermind behind GURUAESTHETICS with over a decade of experience in transforming lives through fitness and aesthetics. Dedicated to helping you achieve your dream physique.",
    instagram:
      "https://www.instagram.com/gurusthetics?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            MEET YOUR <span className="text-guru-primary">EXPERT</span>
          </h2>
          <p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know the master trainer who will guide your transformation
            journey
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group max-w-md">
            <div className="relative overflow-hidden">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 bg-guru-primary text-white px-3 py-1 rounded-full text-xs font-oswald">
                {trainer.experience}
              </div>
            </div>

            <div className="p-8">
              <h3 className="font-oswald text-3xl font-bold text-gray-800 mb-2 text-center">
                {trainer.name}
              </h3>
              <p className="font-poppins text-guru-primary font-semibold mb-4 text-center text-lg">
                {trainer.role}
              </p>
              <p className="font-poppins text-gray-600 mb-6 leading-relaxed text-center">
                {trainer.bio}
              </p>

              <div className="mb-6">
                <div className="font-poppins text-gray-700 mb-3 text-center">
                  <strong>Specialty:</strong> {trainer.specialty}
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {trainer.certifications.map((cert, idx) => (
                    <span
                      key={idx}
                      className="bg-guru-primary text-white px-3 py-1 rounded-full text-sm font-oswald font-semibold"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <a
                  href={trainer.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-guru-primary to-guru-secondary text-white px-6 py-3 rounded-lg hover:from-guru-secondary hover:to-guru-primary transition-all font-oswald font-semibold"
                >
                  <Instagram className="w-5 h-5" />
                  Follow @gurusthetics
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
