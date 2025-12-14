import { Target, Award, Users, Heart } from "lucide-react";

export function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-oswald text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              ABOUT <span className="text-guru-primary">GURUAESTHETICS</span>
            </h2>
            <p className="font-poppins text-lg text-gray-600 mb-6 leading-relaxed">
              Founded with a passion for transforming lives, GURUAESTHETICS has
              been India's premier fitness and aesthetics transformation company
              for over 5 years. We believe that fitness and aesthetics are not
              just about looking good - it's about feeling confident, healthy,
              and empowered.
            </p>
            <p className="font-poppins text-lg text-gray-600 mb-8 leading-relaxed">
              Our evidence-based approach combines personalized nutrition
              planning, expert coaching, and unwavering support to help you
              achieve results that last a lifetime.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-guru-primary rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-oswald text-2xl font-bold text-gray-800">
                    200+
                  </div>
                  <div className="font-poppins text-sm text-gray-600">
                    Lives Transformed
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-guru-primary rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-oswald text-2xl font-bold text-gray-800">
                    5+
                  </div>
                  <div className="font-poppins text-sm text-gray-600">
                    Years Experience
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-guru-primary rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-oswald text-2xl font-bold text-gray-800">
                    100%
                  </div>
                  <div className="font-poppins text-sm text-gray-600">
                    Noticeable changes
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-guru-primary rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-oswald text-2xl font-bold text-gray-800">
                    24/7
                  </div>
                  <div className="font-poppins text-sm text-gray-600">
                    Support Available
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F366dffc22aa74658b3ec0d3a7655c090%2F6832572df6ac4e669c6b21525eb3e1f7?format=webp&width=800"
              alt="GURUAESTHETICS Trainer"
              className="w-full h-auto object-cover rounded-lg shadow-lg max-h-96"
            />
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-guru-primary to-guru-secondary text-white p-6 rounded-lg shadow-xl">
              <div className="font-oswald text-3xl font-bold">YOUR</div>
              <div className="font-oswald text-lg">TRANSFORMATION</div>
              <div className="font-oswald text-lg">STARTS HERE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
