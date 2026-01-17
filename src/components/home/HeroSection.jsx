import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-[600px] bg-gradient-to-br from-green-700 via-green-600 to-green-500 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-300 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            مؤسسة الولد الصالح
          </h1>
          <p className="text-2xl text-orange-300 mb-4">
            للمرافقة والإرشاد النفسي والتربوي
          </p>
          <p className="text-xl text-white/90 mb-8">
            أكثر من عشر سنوات من الخبرة في التوجيه المتخصص للشباب
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              to="/programs"
              className="inline-block bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-4 rounded-lg font-bold hover:from-orange-600 hover:to-orange-500 transition-all text-center"
            >
              تعرف على برامجنا
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-white/10 border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all text-center"
            >
              اتصل بنا
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
