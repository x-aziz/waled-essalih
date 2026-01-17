import React from "react";

const AboutPreview = () => {
  const features = [
    {
      icon: "🤲",
      title: "التوجيه الروحي",
      desc: "برامج دينية وروحية تساعد الشباب على بناء علاقة صحية مع الله",
    },
    {
      icon: "🧠",
      title: "الدعم النفسي",
      desc: "إرشاد نفسي متخصص يساعد الشباب على مواجهة التحديات",
    },
    {
      icon: "📚",
      title: "التوجيه التربوي",
      desc: "برامج تعليمية وتربوية تدعم النمو الأكاديمي والشخصي",
    },
    {
      icon: "🎯",
      title: "تنمية المهارات",
      desc: "دورات تدريبية عملية لتطوير المهارات الحياتية والمهنية",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4">من نحن</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            مؤسسة الولد الصالح هي منظمة غير ربحية متخصصة في مرافقة الشباب
            وتوجيههم روحياً ونفسياً وتربوياً، بخبرة تمتد لأكثر من عشر سنوات في
            خدمة المجتمع
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border border-green-100"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-green-700 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;