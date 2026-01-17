import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "../../assets/cropped_circle_image (1).png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-red-900 to-red-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12   h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <img src={logo} alt="الولد الصالح" className="w-full h-full rounded-full" />
              </div>
              <div className="text-xl font-bold">مؤسسة الولد الصالح</div>
            </div>
            <p className="text-white/80 leading-relaxed">
              أكثر من عشر سنوات من الخبرة في المرافقة المتخصصة للشباب
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-white/80 hover:text-white transition-colors"
              >
                الرئيسية
              </Link>
              <Link
                to="/about"
                className="block text-white/80 hover:text-white transition-colors"
              >
                من نحن
              </Link>
              <Link
                to="/programs"
                className="block text-white/80 hover:text-white transition-colors"
              >
                البرامج
              </Link>
              <Link
                to="/news"
                className="block text-white/80 hover:text-white transition-colors"
              >
                الأخبار
              </Link>
            </div>
          </div>
          {/* Programs */}
          <div>
            <h3 className="text-xl font-bold mb-4">برامجنا</h3>
            <div className="space-y-2 text-white/80">
              <div>برامج روحية</div>
              <div>برامج تربوية</div>
              <div>دعم نفسي</div>
              <div>تنمية المهارات</div>
            </div>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>العطف - غرداية - الجزائر</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span dir="ltr">0559730053</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>waledessalih@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80">
            مؤسسة الولد الصالح - جميع الحقوق محفوظة © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;