import { Button } from "./ui/button";

export function Mission() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-oswald text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              WE Can give you a{" "}
              <span className="text-raw-primary">shape of youR body</span> here!
            </h2>
            <p className="font-poppins text-lg text-gray-600 mb-8 leading-relaxed">
              At RAW Coaching, we believe every body has the potential for
              transformation. Our expert trainers and nutritionists work with
              you to create a personalized fitness journey that fits your
              lifestyle and goals.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-raw-primary rounded-full"></div>
                <span className="font-poppins text-gray-700">
                  Personalized workout plans
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-raw-primary rounded-full"></div>
                <span className="font-poppins text-gray-700">
                  Custom nutrition guidance
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-raw-primary rounded-full"></div>
                <span className="font-poppins text-gray-700">
                  24/7 support and motivation
                </span>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-raw-primary to-raw-secondary hover:from-raw-secondary hover:to-raw-primary text-white font-oswald font-semibold px-8 py-3">
              START YOUR JOURNEY
            </Button>
          </div>
          <div className="relative">
            <img
              src="https://cdn.builder.io/api/v1/assets/366dffc22aa74658b3ec0d3a7655c090/transformation-before-after.jpg"
              alt="Body Transformation"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl">
              <div className="text-center">
                <div className="font-oswald text-2xl font-bold text-raw-primary">
                  500+
                </div>
                <div className="font-poppins text-sm text-gray-600">
                  Success Stories
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
