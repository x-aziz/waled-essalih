import React, { useState } from "react";
import { X } from "lucide-react";

// Import news images
import newsImg1 from "../assets/news/494364094_1087342316757189_4043335636354456624_n.jpg";
import newsImg2 from "../assets/news/496005811_1098464872311600_93092906939667936_n.jpg";
import newsImg3 from "../assets/news/497670419_1105034701654617_3295919767839593100_n.jpg";
import newsImg4 from "../assets/news/566281491_1220403270117759_4941341763619313072_n.jpg";
import newsImg5 from "../assets/news/597821094_1264792175678868_6196159625232438219_n (1).jpg";
import newsImg6 from "../assets/news/566281491_1220403270117759_4941341763619313072_n.jpg";
import newsImg7 from "../assets/news/587063592_1247364727421613_7393544114280699938_n.jpg";
import newsImg8 from "../assets/news/578966760_1237504691740950_6099574043007236488_n.jpg";
import newsImg9 from "../assets/news/586909162_1244559247702161_1839023987191645663_n.jpg";

const News = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  const news = [
    {
      title: "احتفالية تكريم حفظة كتاب الله - الطبعة الرابعة",
      date: "09 ماي 2025",
      desc: "حفل بهيج لتكريم الطلبة الحافظين للقرآن الكريم بالقاعة متعددة النشاطات ببلدية العطف.",
      image: newsImg1,
    },
    {
      title: "الحفل الختامي للموسم الدراسي - فرع العطف",
      date: "29 ماي 2025",
      desc: "الاحتفال بالذكرى العاشرة للتأسيس واختتام الأنشطة السنوية بعشيرة آل الحجاج.",
      image: newsImg2,
    },
    {
      title: "الحفل الختامي للموسم الدراسي - فرع العاصمة",
      date: "01 جوان 2025",
      desc: "اختتام الأنشطة التربوية لفرع العاصمة بمركب الشيخ أطفيش العالية بحضور الأولياء والطلبة.",
      image: newsImg3,
    },
    {
      title: "المشاركة في ملتقى التواصل الشبابي التاسع",
      date: "23 - 24 أكتوبر 2025",
      desc: "مؤسسة الولد الصالح تشارك في صالون التواصل لعرض برامجها التربوية والإرشادية.",
      image: newsImg4,
    },
    {
      title: "تهنئة ختم القرآن الكريم - فرع العاصمة",
      date: "10 أوت 2025",
      desc: "تزف المؤسسة بشرى ختم الطالب حاج محمد محمد الأمين لكتاب الله تعالى في التربص الصيفي.",
      image: newsImg5,
    },
    {
      title: "إعلان تسجيلات فرع العاصمة 2025/2026",
      date: "20 - 25 سبتمبر 2025",
      desc: "فتح باب التسجيل في أقسام القرآن الكريم والمرافقة الدراسية والبرامج الإرشادية للموسم الجديد.",
      image: newsImg6,
    },
    {
      title: "لقاء الأولياء السنوي - المدرسة القرآنية",
      date: "سبتمبر 2025",
      desc: "لقاء تربوي يجمع إدارة المؤسسة مع أولياء الأمور للتنسيق حول المسار الدراسي والتربوي للأبناء.",
      image: newsImg7,
    },
    {
      title: "برنامج الحدث - LED Tafkir 4",
      date: "17 يناير 2026",
      desc: "ندوة تربوية حول أساليب تنمية دافعية التعلم لدى التلاميذ والأنشطة اللاصفية المؤثرة.",
      image: newsImg8,
    },
    {
      title: "فرص توظيف بفرع الجزائر العاصمة",
      date: "أكتوبر 2025",
      desc: "تعلن المؤسسة عن فتح باب التوظيف لمرشدين تربويين وأساتذة في مختلف التخصصات العلمية والشرعية.",
      image: newsImg9,
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-green-800 mb-8 text-center">
          الأخبار والأنشطة
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-600 mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {news.map((item, i) => (
            <div
              key={i}
              onClick={() => setSelectedNews(item)}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2 border border-green-100 cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-orange-600 font-bold mb-2">
                  {item.date}
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedNews && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedNews(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>

            {/* Image */}
            <div className="w-full h-96 overflow-hidden">
              <img
                src={selectedNews.image}
                alt={selectedNews.title}
                className="w-full h-full object-contain bg-gray-100"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="text-sm text-orange-600 font-bold mb-3">
                {selectedNews.date}
              </div>
              <h2 className="text-3xl font-bold text-green-800 mb-4">
                {selectedNews.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {selectedNews.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;