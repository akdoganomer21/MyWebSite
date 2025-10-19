import React from 'react';
import { ExternalLink, Github, Code, Database, Smartphone } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    //Enoca Frontend Challenge - Ürün Tanıtım Landing Page
    {
      title: "Enoca Frontend Challenge - Ürün Tanıtım Landing Page",
      description:
        "Bu proje, React + TypeScript + Vite kullanılarak geliştirilen modern, responsive ve performans odaklı tek sayfalık (SPA) bir ürün tanıtım (landing) uygulamasıdır. Hero, Features, Pricing, FAQ ve Contact bölümlerinden oluşur. Ayrıca Button, Input, Card, Modal ve Accordion bileşenlerinden oluşan özel bir mini UI kütüphanesi içerir. Proje; mobil öncelikli tasarımı, SCSS modülleriyle tema desteği (Light/Dark) ve basit form doğrulama yapısıyla öne çıkar.",
      image: "https://github.com/akdoganomer21/enoca-product-landing/raw/dev/public/images/hero.png",
      technologies: ["React", "TypeScript", "Vite", "SCSS", "ESLint", "Prettier"],
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
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      githubUrl: null,
      liveUrl: null,
    },
    //Hava Durumu Web Sitesi
    {
      title: "Hava Durumu Web Sitesi",
      description: "Proje ile ilgili tüm detayları GitHub 'ta bulunan 'README' adlı dosyada bulabilirsiniz. Bu proje, Türkiye'deki tüm şehirler için anlık, saatlik ve 7 günlük hava durumu tahminleri sunan modern ve duyarlı (responsive) bir hava durumu uygulamasıdır. Uygulama, Open-Meteo tarafından sağlanan gerçek verileri kullanır ve saatlik olarak otomatik güncellenir.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Axios" , "ESLint", "Node.js", "Express.js", "Open-Meteo API"],
      githubUrl: "https://github.com/akdoganomer21/weather-web",
      liveUrl: "https://hava-durumu-turkey.netlify.app/sehir/ankara",
      featured: true
    },
    //LocateAPI Project
    {
      title: "LocateAPI Project",
      description: "Proje ile ilgili tüm detayları GitHub 'ta bulunan 'locate-api PROJECT REPORT(ÖMER AKODĞAN) 4.pdf' adlı dosyada bulabilirsiniz. Bu projenin temel amacı, belirli cihazlardan (örneğin araç takip cihazı veya mobil uygulama) alınan konum verilerinin gerçek zamanlı olarak izlenebilmesini sağlamaktır. Sistem, cihazlardan gelen konum bilgilerini hem veritabanına kaydeder hem de WebSocket (Socket.IO) üzerinden anlık olarak bağlı tüm istemcilere iletir. Bu sayede kullanıcılar, herhangi bir web veya mobil istemciden cihazların güncel konumlarını harita üzerinde canlı olarak takip edebilir.",
      image: "data:image/jpeg;base64,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",
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
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [ "React", "Axios", "React Router DOM", "Leaflet", "React-Leaflet", "@react-google-maps/api", "React Icons", "Recharts", "TailwindCSS", "PostCSS", "Autoprefixer", "Testing Library", "Web Vitals", "Node.js", "Express.js", "MongoDB (Mongoose)", "JWT", "bcryptjs", "dotenv", "CORS", "Nodemon" ],
      githubUrl: "https://github.com/akdoganomer21/Smart-Parking-System",
      liveUrl: "https://smart-parking-turkey.netlify.app/",
      liveUrlTitle: "Backend servisi kullanılmamaktadır",
    },
    //Beyaz Eşya Servis Sitesi
    {
      title: "Beyaz Eşya Servis Sitesi",
      description: "Proje ile ilgili tüm detayları GitHub 'ta bulunan 'BeyazEşyaRapor (ÖMER AKDOĞAN).pdf' adlı dosyada bulabilirsiniz. Bu proje, beyaz eşya servisi hizmeti sunan bir firma için geliştirilen modern, hızlı ve mobil uyumlu bir web sitesidir. Proje tamamen HTML, CSS ve JavaScript kullanılarak oluşturulmuştur.",
      image: "https://media3.bsh-group.com/Images/800x/MCIM02347706_416x246_Carousel_Beyaz_Esya_Tumu.webp",
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