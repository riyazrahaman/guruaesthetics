import { Instagram, Linkedin } from "lucide-react";

export function Team() {
  const trainers = [
    {
      name: "Rohit Sharma",
      role: "Head Trainer & Founder",
      image:
        "https://cdn.builder.io/api/v1/assets/366dffc22aa74658b3ec0d3a7655c090/trainer-1.jpg",
      experience: "8+ Years",
      specialty: "Body Transformation",
      certifications: ["NASM-CPT", "Precision Nutrition", "ACSM"],
      bio: "Transformed 500+ lives with his evidence-based approach to fitness and nutrition.",
    },
    {
      name: "Priya Mehta",
      role: "Senior Nutritionist",
      image:
        "https://cdn.builder.io/api/v1/assets/366dffc22aa74658b3ec0d3a7655c090/trainer-2.jpg",
      experience: "6+ Years",
      specialty: "Sports Nutrition",
      certifications: ["RD", "CSSD", "NASM-CNC"],
      bio: "Expert in creating sustainable nutrition plans that fuel performance and results.",
    },
    {
      name: "Arjun Singh",
      role: "Strength & Conditioning Coach",
      image:
        "https://cdn.builder.io/api/v1/assets/366dffc22aa74658b3ec0d3a7655c090/trainer-3.jpg",
      experience: "7+ Years",
      specialty: "Strength Training",
      certifications: ["CSCS", "FMS", "NASM-CES"],
      bio: "Specializes in helping clients build functional strength and prevent injuries.",
    },
    {
      name: "Kavya Reddy",
      role: "Women's Fitness Specialist",
      image:
        "https://cdn.builder.io/api/v1/assets/366dffc22aa74658b3ec0d3a7655c090/trainer-4.jpg",
      experience: "5+ Years",
      specialty: "Women's Health",
      certifications: ["NASM-CPT", "Pre/Postnatal", "Yoga RYT-200"],
      bio: "Empowers women to achieve their fitness goals through sustainable lifestyle changes.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            MEET OUR <span className="text-raw-primary">EXPERT TEAM</span>
          </h2>
          <p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto">
            Our certified trainers and nutritionists are here to guide your
            transformation journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-raw-primary text-white px-3 py-1 rounded-full text-xs font-oswald">
                  {trainer.experience}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-oswald text-xl font-bold text-gray-800 mb-1">
                  {trainer.name}
                </h3>
                <p className="font-poppins text-raw-primary font-semibold mb-2">
                  {trainer.role}
                </p>
                <p className="font-poppins text-sm text-gray-600 mb-4 leading-relaxed">
                  {trainer.bio}
                </p>

                <div className="mb-4">
                  <div className="font-poppins text-sm text-gray-700 mb-2">
                    <strong>Specialty:</strong> {trainer.specialty}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {trainer.certifications.map((cert, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-poppins"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Instagram className="w-5 h-5 text-gray-400 hover:text-raw-primary cursor-pointer transition-colors" />
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-raw-primary cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
