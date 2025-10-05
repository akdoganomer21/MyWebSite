import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, XCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(false);
    setStatus("idle");

    try {
      const response = await fetch("https://formspree.io/f/movkllqb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 4000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: "E-posta : ",
      content: "akdoganomer42621@gmail.com",
      href: "mailto:akdoganomer42621@gmail.com"
    },
    {
      icon: <Phone size={20} />,
      title: "Telefon : ",
      content: "+90 (537) 204 01 91",
      href: "tel:+905372040191"
    },
    {
      icon: <MapPin size={20} />,
      title: "Konum : ",
      content: "Diyarbakır, Türkiye",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      name: "GitHub",
      url: "https://github.com/akdoganomer21",
      color: "hover:text-gray-400"
    },
    {
      icon: <Linkedin size={20} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/%C3%B6mer-akdo%C4%9Fan-a8a373259/",
      color: "hover:text-blue-400"
    },
    {
      icon: <Mail size={20} />,
      name: "E-Mail",
      url: "mailto:akdoganomer42621@gmail.com",
      color: "hover:text-sky-400"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* ✅ Popup bildirimi */}
      {showPopup && (
        <div
          className={`fixed top-6 right-6 z-50 px-5 py-4 rounded-lg shadow-lg flex items-center gap-3 transition-all duration-500 ${
            status === "success"
              ? "bg-green-600/90 text-white"
              : "bg-red-600/90 text-white"
          }`}
        >
          {status === "success" ? (
            <>
              <CheckCircle size={24} />
              <span>Mesaj başarıyla gönderildi! 🎉</span>
            </>
          ) : (
            <>
              <XCircle size={24} />
              <span>Bir hata oluştu, tekrar deneyin!</span>
            </>
          )}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">İletişim</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Proje fikirleri, iş birliği önerileri veya herhangi bir konuda benimle iletişime geçebilirsiniz.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Sol taraf - Bilgiler */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">İletişim Bilgileri</h3>
              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <a
                    key={i}
                    href={info.href}
                    className="flex items-center gap-4 p-4 bg-gray-800/30 backdrop-blur-lg rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
                  >
                    <div className="text-blue-400 group-hover:scale-110 transition-transform duration-200">{info.icon}</div>
                    <div>
                      <h4 className="font-semibold text-white">{info.title}</h4>
                      <p className="text-gray-300 group-hover:text-blue-400 transition-colors duration-200">{info.content}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Sosyal medya */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">Sosyal Medya</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200 hover:scale-110 hover:bg-gray-700/50`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Müsaitlik */}
            <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Müsaitlik</h3>
              <div className="space-y-2 text-gray-300">
                <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                <p>Hafta Sonu: Proje durumuna göre</p>
                <p className="text-sm text-gray-400 mt-3">Genellikle 24 saat içinde yanıt veririm.</p>
              </div>
            </div>
          </div>

          {/* Sağ taraf - Form */}
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-semibold text-blue-400 mb-6">Mesaj Gönder</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Ad Soyad</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    placeholder="Adınız Soyadınız"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">E-posta</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    placeholder="E-posta adresiniz"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Konu</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                  placeholder="Mesaj konusu"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Mesaj</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-none"
                  placeholder="Mesajınızı buraya yazın..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2 shadow-lg"
              >
                <Send size={20} />
                Mesaj Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
