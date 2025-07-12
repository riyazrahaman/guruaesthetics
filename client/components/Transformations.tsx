export function Transformations() {
  const transformations = [
    {
      before:
        "https://cdn.builder.io/api/v1/assets/366dffc22aa74658b3ec0d3a7655c090/before-1.jpg",
      after:
        "https://cdn.builder.io/api/v1/assets/366dffc22aa74658b3ec0d3a7655c090/after-1.jpg",
      name: "Amit Kumar",
      duration: "8 months",
      weightLoss: "30kg",
    },
    {
      before:
        "https://cdn.builder.io/api/v1/assets/366dffc22aa74658b3ec0d3a7655c090/before-2.jpg",
      after:
        "https://cdn.builder.io/api/v1/assets/366dffc22aa74658b3ec0d3a7655c090/after-2.jpg",
      name: "Neha Singh",
      duration: "6 months",
      weightLoss: "22kg",
    },
    {
      before:
        "https://cdn.builder.io/api/v1/assets/366dffc22aa74658b3ec0d3a7655c090/before-3.jpg",
      after:
        "https://cdn.builder.io/api/v1/assets/366dffc22aa74658b3ec0d3a7655c090/after-3.jpg",
      name: "Rajesh Mehta",
      duration: "10 months",
      weightLoss: "45kg",
    },
    {
      before:
        "https://cdn.builder.io/api/v1/assets/366dffc22aa74658b3ec0d3a7655c090/before-4.jpg",
      after:
        "https://cdn.builder.io/api/v1/assets/366dffc22aa74658b3ec0d3a7655c090/after-4.jpg",
      name: "Kavya Reddy",
      duration: "5 months",
      weightLoss: "18kg",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            AMAZING <span className="text-raw-primary">TRANSFORMATIONS</span>
          </h2>
          <p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto">
            See the incredible results our clients have achieved
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {transformations.map((transformation, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img
                      src={transformation.before}
                      alt="Before"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-oswald">
                      BEFORE
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={transformation.after}
                      alt="After"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-oswald">
                      AFTER
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-oswald font-semibold text-lg text-gray-800 mb-2">
                  {transformation.name}
                </h3>
                <div className="flex justify-between text-sm">
                  <span className="font-poppins text-gray-600">
                    Duration: {transformation.duration}
                  </span>
                  <span className="font-poppins text-raw-primary font-semibold">
                    -{transformation.weightLoss}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
