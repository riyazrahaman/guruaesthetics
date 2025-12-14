import { TrendingUp, Users, Trophy, Clock } from "lucide-react";

export function Stats() {
  const stats = [
    {
      icon: Users,
      number: "200+",
      label: "Lives Transformed",
      description: "Successful body transformations",
    },
    {
      icon: TrendingUp,
      number: "1000+",
      label: "Kg Lost",
      description: "Total weight lost by our clients",
    },
    {
      icon: Trophy,
      number: "5+",
      label: "Competition Wins",
      description: "Clients who won fitness competitions",
    },
    {
      icon: Clock,
      number: "5+",
      label: "Years Experience",
      description: "Helping people achieve their goals",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-guru-primary to-guru-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl lg:text-5xl font-bold text-white mb-4">
            OUR SUCCESS BY THE <span className="text-black">NUMBERS</span>
          </h2>
          <p className="font-poppins text-xl text-white/90 max-w-2xl mx-auto">
            These numbers represent real people who transformed their lives with
            Guru's Coaching
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all group"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <stat.icon className="w-8 h-8 text-guru-primary" />
              </div>
              <div className="font-oswald text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <h3 className="font-oswald text-xl font-semibold text-white mb-2">
                {stat.label}
              </h3>
              <p className="font-poppins text-white/80 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
