import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sidharth",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b734?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      text: "Worth the Investment!! Guru have helped me lose 12 Kilos of Weight in 90 Days!! I have a Smile on my Face each Time I see my Physique in the Mirror!! Hatsoff to Guru!.",
      rating: 5,
    },
    {
      name: "Ravi",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      text: "Guru corrected my form, fixed my diet, and kept me accountable daily by just making me do things in just 21 days.Best investment I’ve made—worth every rupee. His Program was the Game-Changer for me, Now I have Joined again for Powerlifting with him and I'm again very very satisfied as well.",
      rating: 5,
    },
    {
      name: "Ganapathi",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      text: "I didn’t join for abs, I joined for discipline. Guru’s guidance changed my routine, sleep, and confidence. I lost weight without feeling restricted. The price felt nothing compared to the results.",
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
