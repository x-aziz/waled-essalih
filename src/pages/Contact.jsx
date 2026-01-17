import React from 'react'
import { MapPin, Phone, Mail, Facebook } from 'lucide-react';

const Contact = () => {
      return (
        <div className="py-20 bg-gradient-to-b from-green-50 to-white">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-green-800 mb-8 text-center">
              اتصل بنا
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-600 mx-auto mb-16"></div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
                <h2 className="text-3xl font-bold text-green-700 mb-6">
                  أرسل لنا رسالة
                </h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="الاسم الكامل"
                    className="w-full px-4 py-3 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="email"
                    placeholder="البريد الإلكتروني"
                    className="w-full px-4 py-3 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="tel"
                    placeholder="رقم الهاتف"
                    className="w-full px-4 py-3 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <textarea
                    placeholder="رسالتك"
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                  <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-bold hover:from-green-700 hover:to-green-800 transition-all">
                    إرسال الرسالة
                  </button>
                </div>
              </div>
              <div>
                <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl p-8 shadow-lg mb-6">
                  <h2 className="text-3xl font-bold mb-6">معلومات التواصل</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-bold text-lg mb-1">العنوان</div>
                        <div className="text-white/90">
                          العطف - غرداية - الجزائر
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-bold text-lg mb-1">الهاتف</div>
                        <div className="text-white/90" dir="ltr">
                          0559730053
                        </div>
                        <div className="text-white/90" dir="ltr">
                          0553885444
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-bold text-lg mb-1">
                          البريد الإلكتروني
                        </div>
                        <div className="text-white/90">waledessalih@gmail.com</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
                  <h3 className="text-2xl font-bold text-green-700 mb-4">
                    تابعنا على وسائل التواصل
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/waled.essalih"
                      className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Facebook size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
};

export default Contact
