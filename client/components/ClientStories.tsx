import { Quote } from "lucide-react";

export function ClientStories() {
  const stories = [
    {
      headline: "Lost 12kg in 3 Months",
      client: "Kavin",
      story:
        "Worth the Investment!! Guru have helped me lose 12 Kilos of Weight in 90 Days!! I have a Smile on my Face each Time I see my Physique in the Mirror!! Hatsoff to Guru!",
      image:
        "https://drive.google.com/file/d/1g2aGGU0jEmLPkkQCJrD86oiKX0cD790T/view?usp=drive_link",
      results: ["12kg weight loss", "Improved energy"],
    },
    {
      headline: "From Couch to Competition",
      client: "Ravi",
      story:
        ""Guru corrected my form, fixed my diet, and kept me accountable daily by just making me do things in just 21 days.Best investment I’ve made—worth every rupee. His Program was the Game-Changer for me, Now I have Joined again for Powerlifting with him and I'm again very very satisfied as well."",
      image:
        "https://imglink.io/i/a54d69a5-cc20-413c-8d82-364094ba3d05.jpeg" ,
      results: [
        "First competition win",
        "25% body fat reduction",
        "New career",
      ],
    },
    {
      headline: "Disciplined Transformation",
      client: "Ganapathi",
      story:
        ""I didn’t join for abs, I joined for discipline. Guru’s guidance changed my routine, sleep, and confidence. I lost weight without feeling restricted. The price felt nothing compared to the results."",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      results: [
        "Increased strength",
        "Mental wellness",
      ],
    },
  ];

  const mediaHeadlines = [
    {
      outlet: "Times of India",
      headline: "GURUSTHETICS: Transforming India's Fitness Landscape",
      date: "March 2024",
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      outlet: "Hindustan Times",
      headline: "The Science Behind GURUAESTHETICS's Success Stories",
      date: "February 2024",
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      outlet: "Economic Times",
      headline: "How GURUSTHETICS is Revolutionizing Online Fitness",
      date: "January 2024",
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Client Stories */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              INSPIRING{" "}
              <span className="text-guru-primary">CLIENT STORIES</span>
            </h2>
            <p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto">
              Real transformations that go beyond just physical changes
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {stories.map((story, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={story.image}
                  alt={story.client}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-oswald text-2xl font-bold text-gray-800 mb-2">
                    {story.headline}
                  </h3>
                  <p className="font-poppins text-guru-primary font-semibold mb-4">
                    {story.client}
                  </p>
                  <div className="flex mb-4">
                    <Quote className="w-6 h-6 text-guru-primary mr-2 flex-shrink-0 mt-1" />
                    <p className="font-poppins text-gray-700 italic leading-relaxed">
                      {story.story}
                    </p>
                  </div>
                  <div className="space-y-2">
                    {story.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-guru-primary rounded-full"></div>
                        <span className="font-poppins text-sm text-gray-600">
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Headlines */}
        <div>
          <div className="text-center mb-16">
            <h2 className="font-oswald text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              IN THE <span className="text-guru-primary">MEDIA</span>
            </h2>
            <p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto">
              Got published in one of the SOUTH INDIA'S leading newspaper!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mediaHeadlines.map((media, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                <img
                  src={media.image}
                  alt={media.outlet}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-oswald text-sm text-guru-primary font-semibold">
                      {media.outlet}
                    </span>
                    <span className="font-poppins text-xs text-gray-500">
                      {media.date}
                    </span>
                  </div>
                  <h3 className="font-oswald text-lg font-bold text-gray-800 leading-tight">
                    {media.headline}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
