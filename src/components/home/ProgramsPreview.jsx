import React from "react";
import { ChevronLeft } from "lucide-react";

// Use the generated/uploaded images for the backgrounds
import spiritualImg from "../../assets/programs/Gemini_Generated_Image_m08aerm08aerm08a.png"; 
import educationImg from "../../assets/programs/Gemini_Generated_Image_fdobn0fdobn0fdob.png";
import counselingImg from "../../assets/programs/Gemini_Generated_Image_vr2cpvr2cpvr2cpv.png";
import skillsImg from "../../assets/programs/Gemini_Generated_Image_e8wow5e8wow5e8wo.png";




const ProgramsPreview = () => {
  const programs = [
    {
      title: "برامج روحية",
      desc: "حلقات تحفيظ القرآن، دروس دينية، ومحاضرات إيمانية",
      color: "from-green-600/90 to-green-900/90",
      image:educationImg,
    },
    {
      title: "برامج تربوية",
      desc: "دورات تدريبية، ورش عمل، وأنشطة تعليمية",
      color: "from-orange-600/90 to-orange-800/90",
      image: spiritualImg,
    },
    {
      title: "دعم نفسي",
      desc: "استشارات نفسية، جلسات إرشاد، ودعم معنوي",
      color: "from-red-800/90 to-red-950/90",
      image: counselingImg,
    },
    {
      title: "تنمية المهارات",
      desc: "تدريب على الحرف والمهن، مهارات القيادة والتواصل",
      color: "from-yellow-700/90 to-orange-700/90",
      image: skillsImg,
    },
  ];

  return (
    <section className="py-20 bg-white" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            برامجنا وخدماتنا
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, i) => (
            <div
              key={i}
              className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 h-80"
            >
              {/* Background Image */}
              <img
                src={program.image}
                alt={program.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-90 group-hover:opacity-95 transition-opacity`}
              ></div>

              {/* Content */}
              <div className="relative h-full p-8 text-white flex flex-col justify-between z-10">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                  <p className="text-white/95 leading-relaxed font-medium">
                    {program.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2 transform translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <span className="font-bold">اعرف المزيد</span>
                  <ChevronLeft size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsPreview;
