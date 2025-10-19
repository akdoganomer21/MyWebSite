import React from 'react';
import { ExternalLink, Github, Code, Database, Smartphone } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    //Enoca Frontend Challenge - Ürün Tanıtım Landing Page
    {
      title: "Enoca Frontend Challenge - Ürün Tanıtım Landing Page",
      description:
        "Bu proje, React + TypeScript + Vite kullanılarak geliştirilen modern, responsive ve performans odaklı tek sayfalık (SPA) bir ürün tanıtım (landing) uygulamasıdır. Hero, Features, Pricing, FAQ ve Contact bölümlerinden oluşur. Ayrıca Button, Input, Card, Modal ve Accordion bileşenlerinden oluşan özel bir mini UI kütüphanesi içerir. Proje; mobil öncelikli tasarımı, SCSS modülleriyle tema desteği (Light/Dark) ve basit form doğrulama yapısıyla öne çıkar.",
      image: "/UrunTanıtımLandingPage.jpg",
      technologies: ["React", "TypeScript", "Vite", "SCSS", "ESLint",],
      githubUrl: "https://github.com/akdoganomer21/enoca-product-landing",
      liveUrl: "https://enoca-landing.netlify.app/",
    },
    //E-Commerce Platform
    {
      title: "E-Commerce Platform",
      description: (
        <>
          "React ve Node.js ile geliştirilmiş modern e-ticaret platformu. Stripe entegrasyonu, admin paneli ve gerçek zamanlı bildirimler içeriyor.",{" "}
          <span className="text-red-500 font-bold">
          Proje yapım aşamasındadır. Yakında yayında olacaktır. 
          </span>
        </>
      ),
      image: "/Ecommerce.jpeg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      githubUrl: null,
      liveUrl: null,
    },
    //Hava Durumu Web Sitesi
    {
      title: "Hava Durumu Web Sitesi",
      description: "Proje ile ilgili tüm detayları GitHub 'ta bulunan 'README' adlı dosyada bulabilirsiniz. Bu proje, Türkiye'deki tüm şehirler için anlık, saatlik ve 7 günlük hava durumu tahminleri sunan modern ve duyarlı (responsive) bir hava durumu uygulamasıdır. Uygulama, Open-Meteo tarafından sağlanan gerçek verileri kullanır ve saatlik olarak otomatik güncellenir.",
      image: "/HavaDurumu.webp",
      technologies: ["React", "Axios" , "ESLint", "Node.js", "Express.js", "Open-Meteo API"],
      githubUrl: "https://github.com/akdoganomer21/weather-web",
      liveUrl: "https://hava-durumu-turkey.netlify.app/sehir/ankara",
      featured: true
    },
    //LocateAPI Project
    {
      title: "LocateAPI Project",
      description: "Proje ile ilgili tüm detayları GitHub 'ta bulunan 'locate-api PROJECT REPORT(ÖMER AKODĞAN) 4.pdf' adlı dosyada bulabilirsiniz. Bu projenin temel amacı, belirli cihazlardan (örneğin araç takip cihazı veya mobil uygulama) alınan konum verilerinin gerçek zamanlı olarak izlenebilmesini sağlamaktır. Sistem, cihazlardan gelen konum bilgilerini hem veritabanına kaydeder hem de WebSocket (Socket.IO) üzerinden anlık olarak bağlı tüm istemcilere iletir. Bu sayede kullanıcılar, herhangi bir web veya mobil istemciden cihazların güncel konumlarını harita üzerinde canlı olarak takip edebilir.",
      image: "/LocateAPI.jpeg",
      technologies: ["socket.io-client", "engine.io-client", "socket.io-parser", "@socket.io/component-emitter", "debug", "ms", "ws", "xmlhttprequest-ssl"],
      githubUrl: "https://github.com/Eterna-Inc2/locate-api-omerakdogan/tree/main",
      liveUrl: null,
    },
    //Akıllı Park Sistemi
    {
      title: "Akıllı Park Sistemi",
      description: (
        <>
          Proje ile ilgili tüm detayları GitHub 'ta bulunan 'TezRapor(ÖmerAkdoğan).pdf' adlı dosyada bulabilirsiniz. Smart Parking System, akıllı otopark yönetimi için geliştirilmiş modern bir web uygulamasıdır. Kullanıcılar boş park yerlerini görebilir, rezervasyon yapabilir, giriş/kayıt işlemleri yapabilir. Admin ise yönetim paneli üzerinden park alanlarını ve kullanıcıları kontrol edebilir.{" "}
          <span className="text-red-500 font-bold">
            Back-end 'i local dışında başka bir yerde kısmen ayağa kaldırabildiğim için canlı demo şimdilik sadece arayüz olarak yayındadır. Yakında tüm hali ile yayında olacaktır.
          </span>
        </>
      ),
      image: "/AkıllıParkSistemleri.jpg",
      technologies: [ "React", "Axios", "React Router DOM", "Leaflet", "React-Leaflet", "@react-google-maps/api", "React Icons", "Recharts", "TailwindCSS", "PostCSS", "Autoprefixer", "Testing Library", "Web Vitals", "Node.js", "Express.js", "MongoDB (Mongoose)", "JWT", "bcryptjs", "dotenv", "CORS", "Nodemon" ],
      githubUrl: "https://github.com/akdoganomer21/Smart-Parking-System",
      liveUrl: "https://smart-parking-turkey.netlify.app/",
      liveUrlTitle: "Backend servisi kullanılmamaktadır",
    },
    //Beyaz Eşya Servis Sitesi
    {
      title: "Beyaz Eşya Servis Sitesi",
      description: "Proje ile ilgili tüm detayları GitHub 'ta bulunan 'BeyazEşyaRapor (ÖMER AKDOĞAN).pdf' adlı dosyada bulabilirsiniz. Bu proje, beyaz eşya servisi hizmeti sunan bir firma için geliştirilen modern, hızlı ve mobil uyumlu bir web sitesidir. Proje tamamen HTML, CSS ve JavaScript kullanılarak oluşturulmuştur.",
      image: "/BeyazEsya.webp",
      technologies: ["HTML", "CSS", "JAVASCRIPT"],
      githubUrl: "https://github.com/akdoganomer21/beyaz-es-ya-servis-Eterna",
      liveUrl: "https://teknik-beyaz-esya-servis.netlify.app/",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projelerim
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Geliştirdiğim bazı projeler ve çalışmalarım
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-gray-800/30 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 ${
                project.featured ? 'md:col-span-2 xl:col-span-1' : ''
              }`}
            >
              {/* Proje Görseli */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gray-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors duration-200"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Proje Bilgileri */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-blue-400">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-2 py-1 rounded-full ml-auto">
                      Öne Çıkan
                    </span>
                  )}
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Teknolojiler */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-700/50 text-gray-300 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Proje Linkleri */}
                <div className="flex gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    <Github size={16} />
                    Kod
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm ml-auto"
                  >
                    <ExternalLink size={16} />
                    Canlı Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;