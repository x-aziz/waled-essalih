import React from "react";
import { ChevronLeft } from "lucide-react";
import img1 from "../../assets/gallery/601507047_1268610895296996_8961643044753174471_n.jpg";
import img2 from "../../assets/gallery/605117395_1268007588690660_2018325103385449445_n.jpg";
import img3 from "../../assets/gallery/596556216_1259144566243629_4875291136479085233_n.jpg";
const GalleryPreview = () => {
  const images = [
    { id: 1, image: img1, alt: "نشاط تربوي" },
    { id: 2, image: img2, alt: "دورة تدريبية" },
    { id: 3, image: img3, alt: "حلقة قرآنية" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4">معرض الصور</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer shadow-md hover:shadow-xl transition-all"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay with text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span className="text-white font-bold text-lg">
                  {item.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;