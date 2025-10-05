import React, { useState } from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail, Loader2 } from 'lucide-react';

const Hero: React.FC = () => {
  const [downloading, setDownloading] = useState(false);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownload = () => {
    setDownloading(true);

    // geçici olarak buton "indiriliyor" animasyonuna geçsin
    setTimeout(() => setDownloading(false), 800);

    // dosya indirmeyi tetikle
    const link = document.createElement('a');
    link.href = '/CV_ÖMER_AKDOĞAN.pdf';
    link.download = 'CV_ÖMER_AKDOĞAN.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="w-48 h-48 mx-auto mb-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-8xl font-bold text-white shadow-2xl">
            ÖM
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">
              ÖMER AKDOĞAN
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Full Stack Developer & Software Engineer
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Yenilikçi çözümler üreten, modern teknolojileri takip eden ve kullanıcı odaklı yazılım geliştiren bir bilgisayar mühendisiyim.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-pulse">
            {/* ✅ CV İndir Butonu */}
            <button
              onClick={handleDownload}
              disabled={downloading}
              className={`${
                downloading
                  ? 'bg-gradient-to-r from-gray-500 to-gray-700 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105'
              } text-white px-8 py-3 rounded-full font-semibold transition-transform duration-200 flex items-center gap-2 shadow-lg`}
            >
              {downloading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  İndiriliyor...
                </>
              ) : (
                <>
                  <Download size={20} />
                  CV İndir
                </>
              )}
            </button>

            {/* Sosyal Medya Linkleri */}
            <div className="flex gap-4">
              <a
                href="https://github.com/akdoganomer21"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-200 hover:scale-110"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/%C3%B6mer-akdo%C4%9Fan-a8a373259/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-200 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:akdoganomer42621@gmail.com"
                className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-all duration-200 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-400 hover:text-white transition-colors duration-200"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
