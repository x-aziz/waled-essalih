import React, { useState } from "react";
import { X } from "lucide-react";

const News = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  const news = [
    {
      title: "برنامج ابن عثيمي الرشيد - الطبعة العاشرة",
      date: "30 ديسمبر 2025",
      desc: "تنطلق الطبعة العاشرة من برنامج ابن عثيمي الرشيد، شاملة حلقات إنصات ودورات تدريبية وألعاب ترفيهية.",
      image: "/assets/news/494364094_1087342316757189_4043335636354456624_n.jpg",
    },
    {
      title: "البرنامج التأهيلي في القيم والمهارات - 6",
      date: "22 ديسمبر 2025",
      desc: "دورة في المهارات، تحديات لتنمية المهارات، حصة سباحة، ألعاب وأنشطة جماعية.",
      image: "/assets/news/496005811_1098464872311600_93092906939667936_n.jpg",
    },
    {
      title: "أيام تكوينية - تعلم مهارات الحرف والمهن",
      date: "23 ديسمبر 2025",
      desc: "برنامج تدريبي شامل يشمل الطلاء، الترصيص، الكهرباء، وغيرها من المهارات العملية.",
      image: "/assets/news/497670419_1105034701654617_3295919767839593100_n.jpg",
    },
    {
      title: "البرنامج التأهيلي في القيم والمهارات - 6",
      date: "17 ديسمبر 2025",
      desc: "البرنامج التأهيلي الشامل في القيم والمهارات مع أنشطة متنوعة وتدريبات عملية.",
      image: "/assets/news/566281491_1220403270117759_4941341763619313072_n.jpg",
    },
    {
      title: "متواجدون في صالون التواصل",
      date: "17 ديسمبر 2025",
      desc: "مشاركة مؤسسة الولد الصالح في صالون التواصل مع عرض برامجها وأنشطتها.",
      image: "/assets/news/597821094_1264792175678868_6196159625232438219_n (1).jpg",
    },
    {
      title: 'ندوة تربوية بعنوان "مسؤولية أسرية وفرصة تربوية"',
      date: "17 ديسمبر 2025",
      desc: "ندوة حية مباشرة عبر قناة نبصرة الإعلامية لمتابعة الإنجاز الشتوي.",
      image: "/assets/news/566281491_1220403270117759_4941341763619313072_n.jpg",
    },
    {
      title: 'ندوة تربوية "مسؤولية أسرية وفرصة تربوية"',
      date: "17 ديسمبر 2025",
      desc: "ندوة حية مباشرة عبر قناة نبصرة الإعلامية تناقش المسؤولية الأسرية والتربية.",
      image: "/assets/news/587063592_1247364727421613_7393544114280699938_n.jpg",
    },
    {
      title: 'ندوة "التحدث - مهارة تواصل فعالة"',
      date: "17 ديسمبر 2025",
      desc: "ندوة تربوية حول مهارات التواصل الفعال والتحدث بثقة.",
      image: "/assets/news/578966760_1237504691740950_6099574043007236488_n.jpg",
    },
    {
      title: 'ندوة تربوية "مسؤولية أسرية وفرصة تربوية"',
      date: "17 ديسمبر 2025",
      desc: "لقاء تربوي مباشر يناقش دور الأسرة في التربية والتوجيه.",
      image: "/assets/news/586909162_1244559247702161_1839023987191645663_n.jpg",
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
              <div className="h-48 overflow-hidden bg-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
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
            <div className="w-full h-96 overflow-hidden bg-gray-100">
              <img
                src={selectedNews.image}
                alt={selectedNews.title}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
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