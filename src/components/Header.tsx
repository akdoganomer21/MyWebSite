import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, "", `#${sectionId}`);
    }
    setIsMenuOpen(false);
  };

  return (
    <header id="header" className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-white">
            <span className="text-blue-400">{'<'}</span>
              Computer Engineer
            <span className="text-blue-400">{'/>'}</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Ana Sayfa', 'Hakkımda', 'Yetenekler', 'Eğitim', 'Projeler', 'İletişim'].map((item, index) => {
              const sectionId = ['hero', 'about', 'skills', 'education', 'projects', 'contact'][index];
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(sectionId)}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
                >
                  {item}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 rounded-lg mt-2 py-4">
            {['Ana Sayfa', 'Hakkımda', 'Yetenekler', 'Eğitim', 'Projeler', 'İletişim'].map((item, index) => {
              const sectionId = ['hero', 'about', 'skills', 'education', 'projects', 'contact'][index];
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(sectionId)}
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-700 transition-all duration-200"
                >
                  {item}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;