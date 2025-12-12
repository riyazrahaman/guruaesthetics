import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly will I see results?",
      answer:
        "Most clients start seeing visible changes within 4-6 weeks of consistent training and nutrition. However, results vary based on individual goals, starting point, and adherence to the program.",
    },
    {
      question: "Do I need to follow a strict diet?",
      answer:
        "I don't believe in restrictive diets. My nutrition coaches create flexible meal plans that fit your lifestyle while ensuring you reach your goals sustainably.",
    },
    {
      question: "What if I'm a complete beginner?",
      answer:
        "Perfect! I love working with beginners. My training will start you at the appropriate level and gradually progress your workouts as you build strength and confidence.",
    },
    {
      question: "Can I train from home?",
      answer:
        "Yes! I offer online coaching programs that include home workout plans, virtual check-ins, and full support through our mobile app.",
    },
    {
      question: "What's included in the nutrition coaching?",
      answer:
        "My nutrition coaching includes personalized meal plans, macro tracking guidance, supplement recommendations, grocery lists, and ongoing support from certified nutritionists.",
    },
    {
      question: "How often should I work out?",
      answer:
        "For optimal results, I recommend 3-5 training sessions per week, depending on your goals and experience level. My training will be designed in a manner that works for you.",
    },
    {
      question: "What if I have injuries or limitations?",
      answer:
        "I am experienced in working with various physical limitations. I'll modify exercises and create a safe, effective program that works around any injuries.",
    },
    {
      question: "Can I cancel or pause my membership?",
      answer:
        "Yes, I offer flexible membership options. You can pause your membership for up to 2 months per year or cancel with 30 days notice.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            FREQUENTLY ASKED{" "}
            <span className="text-guru-primary">QUESTIONS</span>
          </h2>
          <p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our programs and services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md mb-4 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="font-oswald text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-guru-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="font-poppins text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
