import React from "react";

const Programs = () => {
  const programCategories = [
    {
      title: "البرامج الروحية",
      color: "from-green-600 to-green-700",
      programs: [
        "حلقات تحفيظ القرآن الكريم",
        "دروس في العقيدة والفقه",
        "محاضرات إيمانية",
        "برنامج ابن عثيمي الرشيد",
      ],
    },
    {
      title: "البرامج التربوية",
      color: "from-orange-500 to-orange-600",
      programs: [
        "دورات في القيم والأخلاق",
        "برنامج التأهيل في المهارات",
        "أيام تكوينية تعلم مهارات الحرف",
        "ورش عمل تربوية",
      ],
    },
    {
      title: "الدعم النفسي",
      color: "from-red-700 to-red-800",
      programs: [
        "استشارات نفسية فردية",
        "جلسات إرشاد جماعية",
        "برامج دعم الصحة النفسية",
        "مرافقة نفسية متخصصة",
      ],
    },
    {
      title: "تنمية المهارات",
      color: "from-yellow-600 to-orange-500",
      programs: [
        "تدريب على الحرف والمهن",
        "مهارات القيادة والتواصل",
        "دورات في ريادة الأعمال",
        "برامج التطوير الذاتي",
      ],
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-green-800 mb-8 text-center">
          برامجنا وخدماتنا
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-600 mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programCategories.map((category, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${category.color} rounded-2xl p-8 text-white shadow-xl`}
            >
              <h2 className="text-3xl font-bold mb-6">{category.title}</h2>
              <div className="space-y-4">
                {category.programs.map((program, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg text-white/95">{program}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;