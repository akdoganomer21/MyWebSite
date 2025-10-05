import React from "react";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/80 backdrop-blur-lg border-t border-gray-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Üst Kısım */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-800">
          {/* Sol Taraf */}
          <div className="text-gray-400 text-center md:text-left">
            <p className="text-sm">
              © {currentYear}{" "}
              <span className="text-white font-medium">Ömer AKDOĞAN</span> — Tüm
              hakları saklıdır.
            </p>
          </div>

          {/* Sağ Taraf - Sosyal Medya */}

          <div className="flex gap-4 animate-pulse">
            <div className="relative group">
              <a
                href="https://wa.me/905372040191?text=Merhabalar Sayın Ömer AKDOĞAN. Sizinle [..KONU..] hakkında iletişime geçmek istiyorum..."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/60 
                    text-gray-400 hover:text-green-400 hover:bg-gray-700 transition-all duration-200 hover:scale-110"
              >
                <MessageCircle size={18} />
              </a>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-gray-700 text-white opacity-0   group-hover:opacity-100 transition-opacity duration-200">
                WhatsApp
              </span>
            </div>
            <div className="relative group">
              <a
                href="https://github.com/akdoganomer21"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/60 
                    text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200 hover:scale-110"
              >
                <Github size={18} />
              </a>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-gray-700 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                GitHub
              </span>
            </div>

            <div className="relative group">
              <a
                href="https://www.linkedin.com/in/%C3%B6mer-akdo%C4%9Fan-a8a373259/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/60 
                    text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all duration-200 hover:scale-110"
              >
                <Linkedin size={18} />
              </a>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-gray-700 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                LinkedIn
              </span>
            </div>

            <div className="relative group">
              <a
                href="mailto:akdoganomer42621@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/60 
                    text-gray-400 hover:text-red-400 hover:bg-gray-700 transition-all duration-200 hover:scale-110"
              >
                <Mail size={18} />
              </a>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-gray-700 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Eposta
              </span>
            </div>
          </div>
        </div>

        {/* Alt Kısım */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm leading-relaxed">
            <span className="text-blue-400 font-medium animate-pulse">
              🛡️ Created by Ömer AKDOĞAN
            </span>
            <br />
            <span className="text-purple-400 font-medium">
              For any inquiries or support, please feel free to contact me.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;