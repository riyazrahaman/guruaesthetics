import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      image:
        "https://cdn.builder.io/api/v1/assets/366dffc22aa74658b3ec0d3a7655c090/testimonial-1.jpg",
      text: "GURUAESTHETICS transformed my life completely. Lost 25kg in 6 months and gained confidence I never had before.",
      rating: 5,
    },
    {
      name: "Rahul Verma",
      image:
        "https://cdn.builder.io/api/v1/assets/366dffc22aa74658b3ec0d3a7655c090/testimonial-2.jpg",
      text: "Best investment I made for my health. The trainers are amazing and the nutrition plan actually works!",
      rating: 5,
    },
    {
      name: "Sneha Patel",
      image:
        "https://cdn.builder.io/api/v1/assets/366dffc22aa74658b3ec0d3a7655c090/testimonial-3.jpg",
      text: "From being overweight to running marathons - GURUAESTHETICS made it possible. Forever grateful!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            WHAT OUR <span className="text-guru-primary">CLIENTS SAY</span>
          </h2>
          <p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from real people who transformed their lives
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="font-poppins text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-oswald font-semibold text-gray-800">
                    {testimonial.name}
                  </div>
                  <div className="font-poppins text-sm text-gray-500">
                    GURUAESTHETICS Client
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
