import React from 'react';
import { Code, Database, Server, Layers} from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: "Frontend Development",
      description: "HTML, CSS, JavaScript, React.js ve Vue.js ile kullanıcı odaklı arayüzler"
    },
    {
      icon: <Database size={24} />,
      title: "Database Design",
      description: "SQL & MongoDB ile veritabanı tasarımı ve optimizasyonu"
    },
    {
      icon: <Server size={24} />,
      title: "Backend Systems",
      description: "Node.js & C# ile ölçeklenebilir backend mimarileri"
    },
    {
      icon: <Layers size={24} />,
      title: "Full Stack Development",
      description: "Modern web uygulamaları geliştirme (Frontend & Backend)"
    }
  ];
  

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hakkımda
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Merhaba! Ben Ömer AKDOĞAN. Bilgisayar mühendisiyim; teknolojiye olan tutkum beni sürekli öğrenmeye, keşfetmeye ve üretmeye yönlendiriyor. Modern yazılım geliştirme teknolojileriyle kullanıcı deneyimini merkeze alan yenilikçi çözümler üretiyorum.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Frontend’den backend’e, veritabanı tasarımından full stack geliştirmeye kadar geniş bir alanda deneyim sahibiyim. Her projede kaliteli kod yazmayı, best practice’leri uygulamayı ve sürekli gelişimi bir prensip haline getiriyorum.
            </p>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Odak Alanlarım</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• HTML, CSS, JavaScript ve TypeScript ile modern frontend geliştirme</li>
              <li>• React.js ve Vue.js ekosistemleri</li>
              <li>• Node.js & C# ile backend geliştirme</li>
              <li>• SQL & MongoDB ile veritabanı tasarımı ve optimizasyonu</li>
              <li>• Temiz kod, best practice ve sürekli öğrenme kültürü</li>
            </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-blue-400 mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;