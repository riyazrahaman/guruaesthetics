import { Quote } from "lucide-react";

export function ClientStories() {
  const stories = [
    {
      headline: "Lost 30kg in 8 Months",
      client: "Rajesh Kumar",
      story:
        "I was 95kg and struggling with diabetes. RAW Coaching not only helped me lose weight but also completely reversed my health conditions. Now I'm fitter than I was in my 20s!",
      image:
        "https://cdn.builder.io/api/v1/assets/366dffc22aa74658b3ec0d3a7655c090/client-story-1.jpg",
      results: ["30kg weight loss", "Reversed diabetes", "Improved energy"],
    },
    {
      headline: "From Couch to Competition",
      client: "Priya Sharma",
      story:
        "I never thought I'd compete in a fitness competition. RAW Coaching believed in me when I didn't believe in myself. They guided me from complete beginner to competition stage!",
      image:
        "https://cdn.builder.io/api/v1/assets/366dffc22aa74658b3ec0d3a7655c090/client-story-2.jpg",
      results: [
        "First competition win",
        "45% body fat reduction",
        "New career",
      ],
    },
    {
      headline: "Postpartum Transformation",
      client: "Anita Singh",
      story:
        "After having my second child, I felt lost and out of shape. RAW Coaching's women's program helped me regain my confidence and achieve the best shape of my life.",
      image:
        "https://cdn.builder.io/api/v1/assets/366dffc22aa74658b3ec0d3a7655c090/client-story-3.jpg",
      results: [
        "Post-pregnancy recovery",
        "Increased strength",
        "Mental wellness",
      ],
    },
  ];

  const mediaHeadlines = [
    {
      outlet: "Times of India",
      headline: "RAW Coaching: Transforming India's Fitness Landscape",
      date: "March 2024",
      image:
        "https://cdn.builder.io/api/v1/assets/366dffc22aa74658b3ec0d3a7655c090/media-1.jpg",
    },
    {
      outlet: "Hindustan Times",
      headline: "The Science Behind RAW Coaching's Success Stories",
      date: "February 2024",
      image:
        "https://cdn.builder.io/api/v1/assets/366dffc22aa74658b3ec0d3a7655c090/media-2.jpg",
    },
    {
      outlet: "Economic Times",
      headline: "How RAW Coaching is Revolutionizing Online Fitness",
      date: "January 2024",
      image:
        "https://cdn.builder.io/api/v1/assets/366dffc22aa74658b3ec0d3a7655c090/media-3.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Client Stories */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              INSPIRING <span className="text-raw-primary">CLIENT STORIES</span>
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
                  <p className="font-poppins text-raw-primary font-semibold mb-4">
                    {story.client}
                  </p>
                  <div className="flex mb-4">
                    <Quote className="w-6 h-6 text-raw-primary mr-2 flex-shrink-0 mt-1" />
                    <p className="font-poppins text-gray-700 italic leading-relaxed">
                      {story.story}
                    </p>
                  </div>
                  <div className="space-y-2">
                    {story.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-raw-primary rounded-full"></div>
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
              IN THE <span className="text-raw-primary">MEDIA</span>
            </h2>
            <p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto">
              See what leading publications are saying about RAW Coaching
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
                    <span className="font-oswald text-sm text-raw-primary font-semibold">
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
