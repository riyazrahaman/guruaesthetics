import { Play, Clock, Target } from "lucide-react";

export function WorkoutGallery() {
  const workouts = [
    {
      title: "HIIT Fat Burn",
      duration: "30 mins",
      difficulty: "Intermediate",
      target: "Full Body",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "High-intensity interval training designed to maximize fat burn and improve cardiovascular fitness.",
    },
    {
      title: "Strength Builder",
      duration: "45 mins",
      difficulty: "Beginner",
      target: "Upper Body",
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "Progressive strength training focusing on building lean muscle mass and functional strength.",
    },
    {
      title: "Core Crusher",
      duration: "20 mins",
      difficulty: "Advanced",
      target: "Core",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "Intense core workout targeting all areas of your midsection for definition and strength.",
    },
    {
      title: "Lower Body Power",
      duration: "40 mins",
      difficulty: "Intermediate",
      target: "Lower Body",
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "Power-focused leg workout building explosive strength and muscle definition.",
    },
    {
      title: "Cardio Blast",
      duration: "25 mins",
      difficulty: "Beginner",
      target: "Cardio",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "Heart-pumping cardio session perfect for burning calories and improving endurance.",
    },
    {
      title: "Full Body Sculpt",
      duration: "50 mins",
      difficulty: "Advanced",
      target: "Full Body",
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "Complete body sculpting workout combining strength, cardio, and functional movements.",
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-500";
      case "Intermediate":
        return "bg-yellow-500";
      case "Advanced":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            WORKOUT <span className="text-guru-primary">PROGRAMS</span>
          </h2>
          <p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our diverse range of workout programs designed for every
            fitness level
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {workouts.map((workout, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={workout.image}
                  alt={workout.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-guru-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-guru-secondary transition-colors">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>
                <div
                  className={`absolute top-4 left-4 ${getDifficultyColor(
                    workout.difficulty,
                  )} text-white px-3 py-1 rounded-full text-xs font-oswald font-semibold`}
                >
                  {workout.difficulty}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-oswald text-xl font-bold text-gray-800 mb-2">
                  {workout.title}
                </h3>
                <p className="font-poppins text-gray-600 text-sm mb-4 leading-relaxed">
                  {workout.description}
                </p>

                <div className="flex justify-between items-center text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-guru-primary" />
                    <span className="font-poppins text-gray-600">
                      {workout.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Target className="w-4 h-4 text-guru-primary" />
                    <span className="font-poppins text-gray-600">
                      {workout.target}
                    </span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-guru-primary to-guru-secondary text-white font-oswald font-semibold py-2 rounded-lg hover:from-guru-secondary hover:to-guru-primary transition-all">
                  START WORKOUT
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
