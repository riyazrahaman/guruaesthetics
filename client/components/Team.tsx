import { Instagram } from "lucide-react";

export function Team() {
  const trainer = {
    name: "GURU",
    role: "Founder & Master Trainer",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F366dffc22aa74658b3ec0d3a7655c090%2F47e7c2fdc7004ed6a3162baaa9ba79c9?format=webp&width=800",
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
    <section className="py-20 bg-white min-h-screen flex items-center">
      <div className="w-full">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl lg:text-6xl font-bold text-gray-800 mb-4">
            MEET YOUR <span className="text-guru-primary">EXPERT</span>
          </h2>
          <p className="font-poppins text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know the master trainer who will guide your transformation
            journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 min-h-[70vh]">
          {/* Left Content */}
          <div className="flex items-center justify-center p-8 lg:p-16">
            <div className="max-w-lg">
              <div className="mb-6">
                <div className="inline-block bg-guru-primary text-white px-4 py-2 rounded-full text-sm font-oswald font-semibold mb-4">
                  {trainer.experience}
                </div>
                <h3 className="font-oswald text-5xl lg:text-6xl font-bold text-gray-800 mb-2">
                  {trainer.name}
                </h3>
                <p className="font-poppins text-guru-primary font-semibold text-2xl mb-6">
                  {trainer.role}
                </p>
              </div>

              <p className="font-poppins text-lg text-gray-600 mb-8 leading-relaxed">
                {trainer.bio}
              </p>

              <div className="mb-8">
                <div className="font-poppins text-lg text-gray-700 mb-4">
                  <strong>Specialty:</strong> {trainer.specialty}
                </div>
                <div className="flex flex-wrap gap-3">
                  {trainer.certifications.map((cert, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-sm font-oswald font-semibold border border-gray-200"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={trainer.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-guru-primary to-guru-secondary text-white px-8 py-4 rounded-lg hover:from-guru-secondary hover:to-guru-primary transition-all font-oswald font-semibold text-lg group"
              >
                <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Follow @gurusthetics
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
            <img
              src={trainer.image}
              alt={trainer.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-8 right-8 z-20">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                <div className="font-oswald text-2xl font-bold text-guru-primary">
                  500+
                </div>
                <div className="font-poppins text-sm text-gray-700">
                  Transformations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
