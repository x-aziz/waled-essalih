import React, { useState } from "react";
// Import all images at the top
import img1 from "../assets/gallery/484344098_1045397440951677_5500113743074029967_n.jpg";
import img2 from "../assets/gallery/485633697_1049670497191038_1042395761016730323_n.jpg";
import img3 from "../assets/gallery/497854527_1094759619348792_6218374978989285629_n.jpg";
import img4 from "../assets/gallery/505229279_1113947384096682_1691586644490503046_n.jpg";
import img5 from "../assets/gallery/574376483_1232193288938757_5925293625325420116_n.jpg";
import img6 from "../assets/gallery/583694578_1242872331204186_1535148955417315016_n.jpg";
import img7 from "../assets/gallery/592542315_1253875130103906_6894785877347659635_n.jpg";
import img8 from "../assets/gallery/595652348_1257586579732761_4549282571987747889_n.jpg";
import img9 from "../assets/gallery/599951751_1268609978630421_1197830495357927784_n.jpg";
import img10 from "../assets/gallery/601507047_1268610895296996_8961643044753174471_n.jpg";
import img11 from "../assets/gallery/605117395_1268007588690660_2018325103385449445_n.jpg";
import img12 from "../assets/gallery/596556216_1259144566243629_4875291136479085233_n.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: img1, title: "الحفل التكريمي لأعضاء المؤسسة", alt: "صورة جماعية للأمناء المتفرغين" },
    { id: 2, src: img2, title: "زيارة تبادلية إلى جمعية نبتكر للعلوم", alt: "طلبة قسم القرآن الكريم في زيارة علمية" },
    { id: 3, src: img3, title: "احتفالية تكريم حفظة كتاب الله", alt: "لقاء تكريمي لحفظة القرآن - الطبعة 04" },
    { id: 4, src: img4, title: "الحفل الختامي لأنشطة المؤسسة", alt: "الموسم الدراسي 2024 - 2025 م" },
    { id: 5, src: img5, title: "لقاء الأولياء - الموسم الدراسي", alt: "جلسة حوارية مع أولياء الأمور" },
    { id: 6, src: img6, title: "جولة حول معالم بلدة تجنينت", alt: "تبادل مكتبي لبرنامج السابقون لريادة المشاريع" },
    { id: 7, src: img7, title: "افتتاح احتفالية تكريم حفظة كتاب الله", alt: "كلمة افتتاحية في الطبعة الأولى" },
    { id: 8, src: img8, title: "توزيع الجوائز على حفظة القرآن", alt: "تكريم الفائزين في مسابقة حفظ كتاب الله" },
    { id: 9, src: img9, title: "البرنامج التأهيلي لبناء القيم والمهارات", alt: "نشاط تفاعلي حركي للطلاب - الطبعة السادسة" },
    { id: 10, src: img10, title: "انطلاق البرنامج التأهيلي", alt: "تدريبات المهارات والقيم للطبعة السادسة" },
    { id: 11, src: img11, title: "جلسة تعليمية مع المعلمة", alt: "طفل يتلقى التعليم من معلم في جو مريح" },
    { id: 12, src: img12, title: "أطفال يقرؤون الكتب", alt: "مجموعة من الأطفال يقرؤون" },
  ];

  return (
    <div dir="rtl" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-green-800 mb-8 text-center">
          معرض الأنشطة
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-600 mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white text-sm font-medium">{image.title}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="bg-white rounded-2xl p-4 max-w-4xl w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg mb-4 max-h-[70vh] object-contain"
              />
              <div className="text-right px-2">
                <h3 className="text-2xl font-bold text-green-800 mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600">{selectedImage.alt}</p>
              </div>
              <button 
                className="mt-6 w-full py-2 bg-green-700 text-white rounded-xl hover:bg-green-800 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                إغلاق
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Gallery;