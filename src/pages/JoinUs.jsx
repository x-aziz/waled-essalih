import React from "react";

const JoinUs = () => {
  const forms = [
    {
      title: "تسجيل الشباب",
      color: "from-green-600 to-green-700",
      fields: [
        "الاسم الكامل",
        "البريد الإلكتروني",
        "رقم الهاتف",
        "العمر",
        "البرنامج المهتم به",
      ],
    },
    {
      title: "طلب التطوع",
      color: "from-orange-500 to-orange-600",
      fields: [
        "الاسم الكامل",
        "البريد الإلكتروني",
        "رقم الهاتف",
        "المهارات",
        "مجال التطوع",
      ],
    },
    {
      title: "طلب الشراكة",
      color: "from-red-700 to-red-800",
      fields: [
        "اسم المؤسسة",
        "البريد الإلكتروني",
        "رقم الهاتف",
        "نوع الشراكة",
        "الرسالة",
      ],
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-green-800 mb-8 text-center">
          انضم إلينا
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-600 mx-auto mb-16"></div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {forms.map((form, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${form.color} rounded-2xl p-8 text-white shadow-xl`}
            >
              <h2 className="text-3xl font-bold mb-6">{form.title}</h2>
              <div className="space-y-4">
                {form.fields.map((field, j) => (
                  <input
                    key={j}
                    type="text"
                    placeholder={field}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                ))}
                <button className="w-full bg-white text-green-700 px-6 py-3 rounded-lg font-bold hover:bg-white/90 transition-all mt-4">
                  إرسال الطلب
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
