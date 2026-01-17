import React from "react";

const StatsSection = () => {
  const stats = [
    { number: "+10", label: "سنوات من الخبرة", icon: "📅" },
    { number: "+500", label: "مستفيد", icon: "👥" },
    { number: "+50", label: "برنامج منفذ", icon: "📊" },
    { number: "+20", label: "شريك", icon: "🤝" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-900 to-red-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-5xl font-bold mb-2 text-orange-300">
                {stat.number}
              </div>
              <div className="text-xl">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;