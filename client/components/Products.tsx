import { Button } from "./ui/button";

export function Products() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            OUR <span className="text-guru-primary">PROGRAMS</span>
          </h2>
          <p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect program for your fitness journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* GURU ELITE */}
          <div className="bg-gradient-to-br from-gray-900 to-black text-white p-8 rounded-xl relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <img
                src="https://cdn.builder.io/api/v1/assets/366dffc22aa74658b3ec0d3a7655c090/raw-elite-logo.png"
                alt="GURU ELITE"
                className="h-12 w-auto"
              />
            </div>
            <div className="mb-6">
              <h3 className="font-oswald text-3xl font-bold mb-2">
                GURU ELITE
              </h3>
              <p className="font-poppins text-lg text-gray-300">
                Premium transformation program
              </p>
            </div>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-guru-primary rounded-full"></div>
                <span className="font-poppins">Personal trainer</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-guru-primary rounded-full"></div>
                <span className="font-poppins">Custom meal plans</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-guru-primary rounded-full"></div>
                <span className="font-poppins">Weekly check-ins</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-guru-primary rounded-full"></div>
                <span className="font-poppins">Premium supplements</span>
              </div>
            </div>
            <div className="mb-6">
              <div className="font-oswald text-4xl font-bold text-guru-primary">
                ₹12,999
              </div>
              <div className="font-poppins text-sm text-gray-400">
                per month
              </div>
            </div>
            <Button className="w-full bg-guru-primary hover:bg-guru-secondary text-white font-oswald font-semibold py-3">
              CHOOSE ELITE
            </Button>
          </div>

          {/* GURU LIFE */}
          <div className="bg-gradient-to-br from-guru-primary to-guru-secondary text-white p-8 rounded-xl relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <img
                src="https://cdn.builder.io/api/v1/assets/366dffc22aa74658b3ec0d3a7655c090/raw-life-logo.png"
                alt="GURU LIFE"
                className="h-12 w-auto"
              />
            </div>
            <div className="mb-6">
              <h3 className="font-oswald text-3xl font-bold mb-2">GURU LIFE</h3>
              <p className="font-poppins text-lg text-white/90">
                Essential fitness program
              </p>
            </div>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="font-poppins">Group training</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="font-poppins">Basic nutrition guide</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="font-poppins">Monthly check-ins</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="font-poppins">Online support</span>
              </div>
            </div>
            <div className="mb-6">
              <div className="font-oswald text-4xl font-bold">₹4,999</div>
              <div className="font-poppins text-sm text-white/70">
                per month
              </div>
            </div>
            <Button className="w-full bg-white text-guru-primary hover:bg-gray-100 font-oswald font-semibold py-3">
              CHOOSE LIFE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
