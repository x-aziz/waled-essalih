import React from "react";
const About = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-green-800 mb-8 text-center">
            من نحن
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-600 mx-auto mb-12"></div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8 border border-green-100">
              <h2 className="text-3xl font-bold text-green-700 mb-4">
                تاريخنا
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                تأسست مؤسسة الولد الصالح منذ أكثر من عشر سنوات بهدف تقديم الدعم
                الشامل للشباب في المجالات الروحية والنفسية والتربوية. انطلقت
                المؤسسة من مدينة العطف بغرداية، الجزائر، ونمت لتصبح منارة
                للتوجيه والإرشاد في المنطقة.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold mb-4">رؤيتنا</h2>
                <p className="text-white/90 leading-relaxed text-lg">
                  أن نكون المرجع الأول في مرافقة وتوجيه الشباب في المنطقة،
                  ونساهم في بناء جيل واعٍ ومتوازن روحياً ونفسياً وتربوياً.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold mb-4">رسالتنا</h2>
                <p className="text-white/90 leading-relaxed text-lg">
                  تقديم خدمات نوعية في التوجيه الروحي والدعم النفسي والإرشاد
                  التربوي للشباب، من خلال برامج متخصصة وفريق مؤهل.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <h2 className="text-3xl font-bold text-green-700 mb-6">قيمنا</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "الإخلاص والأمانة",
                  "الاحترافية والجودة",
                  "التعاون والشراكة",
                  "الشفافية والمصداقية",
                  "الابتكار والتطوير",
                  "خدمة المجتمع",
                ].map((value, i) => (
                  <div key={i} className="flex items-center gap-3 text-lg">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-orange-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;