import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    let currentActive = "";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          if (entry.isIntersecting && id && id !== currentActive) {
            currentActive = id;
            setActiveSection(id);
            window.history.replaceState(null, "", `#${id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -30% 0px", // 🔹 daha erken algılama
        threshold: 0.15, // 🔹 %15 görünürlükte aktif say (özellikle kısa bölümler için)
      }
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // 🔹 Sayfanın altına inildiğinde iletişim kısmını otomatik aktif et
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200;
      if (isBottom) {
        setActiveSection("contact");
        window.history.replaceState(null, "", "#contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // 🔹 Smooth scroll + URL güncelleme
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      window.history.pushState(null, "", `#${sectionId}`);
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Ana Sayfa", id: "hero" },
    { label: "Hakkımda", id: "about" },
    { label: "Yetenekler", id: "skills" },
    { label: "Eğitim", id: "education" },
    { label: "Projeler", id: "projects" },
    { label: "İletişim", id: "contact" },
  ];

  return (
    <header
      id="header"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Üst Alan */}
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-white select-none">
            <span className="text-blue-400">&lt;</span>
            Full Stack Developer
            <span className="text-blue-400">/&gt;</span>
          </div>

          {/* 💻 Masaüstü Navbar */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`transition-all duration-300 font-medium ${
                  activeSection === id
                    ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                    : "text-gray-300 hover:text-blue-400"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* 📱 Mobil Menü Butonu */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 📱 Mobil Menü */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 rounded-lg mt-2 py-4">
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`block w-full text-left px-4 py-2 font-medium transition-all duration-200 ${
                  activeSection === id
                    ? "text-blue-400 bg-gray-700"
                    : "text-gray-300 hover:text-blue-400 hover:bg-gray-700"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
