import React, { FC } from 'react';
import { GraduationCap, Calendar, Briefcase, Target } from 'lucide-react';

const Education: FC = () => {
  const educationData = [
    {
      degree: "Bilgisayar Mühendisliği",
      school: "Çukurova Üniversitesi (İng)",
      period: "2020 - 2025",
      description:
        "Bilgisayar mühendisliği lisans eğitimim boyunca yazılım geliştirme, algoritma analizi, sistem tasarımı ve proje yönetimi gibi konularda kapsamlı bir bilgi birikimi kazandım. Hem teorik dersler hem de uygulamalı projeler sayesinde analitik düşünme, problem çözme ve yazılım mimarisi oluşturma becerilerimi geliştirdim. Bu süreçte edindiğim altyapı, farklı teknolojilere hızlı uyum sağlama ve modern yazılım geliştirme pratiklerini etkin şekilde uygulama yetkinliği kazandırdı.",
    },
    {
      degree: "Lise",
      school: "Sur Alparslan Anadolu Lisesi",
      period: "2014 - 2018",
      description:
        "Lise eğitimim boyunca matematik ve fen bilimleri alanlarında güçlü bir temel oluşturdum. Sayısal derslere olan ilgim, analitik düşünme ve problem çözme becerilerimi geliştirmeme katkı sağladı. Bu dönemde edindiğim disiplin ve çalışma alışkanlıkları, üniversite eğitimimde ve yazılım alanındaki öğrenme sürecimde sağlam bir altyapı oluşturdu.",
    },
  ];

  const experiences = [
    {
      company: "Eterna Software Technology",
      role: "Frontend Intern",
      period: "07/2025 – 09/2025",
      description:
        "Eterna Software Technology’de gerçekleştirdiğim staj süresince React.js ve Vue.js kullanarak çeşitli web projelerinde aktif görev aldım. Kullanıcı dostu ve modern arayüzler geliştirmeye odaklanırken, frontend mimarisi, component tabanlı geliştirme ve responsive tasarım konularında deneyim kazandım. Ayrıca, ekip içi iş birliği ve proje yönetim süreçlerinde aktif rol alarak profesyonel çalışma ortamına uyum sağlama becerilerimi geliştirdim.",
    },
    {
      company: "Çukurova Üniversitesi – International Student Office",
      role: "Part-time Öğrenci",
      period: "2021 – 2025",
      description:
        "Çukurova Üniversitesi International Student Office’te part-time olarak çalıştığım süre boyunca Erasmus öğrencilerine akademik ve idari konularda destek verdim. Ofis süreçlerinin yürütülmesinde sorumluluk alarak organizasyonel becerilerimi geliştirdim ve uluslararası öğrenci organizasyonlarında aktif rol oynayarak farklı kültürlerle etkileşim kurma deneyimi kazandım. Bu süreç, iletişim, problem çözme ve ekip çalışması konularında önemli katkılar sağladı.",
    },
  ];

  const goals = [
    "Full Stack Development alanında uzmanlaşarak frontend ve backend tarafında derinlemesine bilgi sahibi olmak",
    "Scalable ve güvenilir backend sistemleri geliştirmek, yüksek trafik altında dahi performanslı çalışabilen çözümler üretmek",
    "Cloud teknolojileri (AWS, Azure, GCP) ve DevOps kültüründe yetkinleşerek CI/CD süreçlerinde otomasyon ve verimlilik sağlamak",
    "UI/UX odaklı kullanıcı deneyimleri tasarlayarak estetik ve fonksiyonelliği bir arada sunan projeler geliştirmek",
    "Uluslararası yazılım projelerinde aktif rol almak ve farklı kültürlerden ekiplerle iş birliği yaparak global ölçekte deneyim kazanmak",
    "İleri düzey İngilizce iletişim becerileri geliştirerek teknik dokümantasyon, toplantı ve ekip çalışmalarında etkin bir şekilde yer almak",
    "Yapay zeka, makine öğrenmesi ve veri analitiği alanlarında kendimi geliştirerek bu teknolojileri projelere entegre etmek",
    "Sistem tasarımı ve yazılım mimarisi konularında uzmanlaşarak büyük ölçekli ve sürdürülebilir projelere katkı sağlamak",
    "Sürekli öğrenme kültürünü benimseyerek yeni çıkan teknolojileri takip etmek ve mesleki gelişimimi daima ileriye taşımak",
    "Kendi projelerimi hayata geçirerek girişimcilik alanında deneyim kazanmak ve inovatif çözümler geliştirmek"
  ];
  

  return (
    <section id="education" className="py-20 bg-gray-900/60 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 opacity-60"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Başlık */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Eğitim & Deneyimler
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full shadow-lg"></div>
        </div>

        {/* Grid Düzeni */}
        <div className="grid lg:grid-cols-3 gap-10">
          
          {/* Sol - Eğitim + Deneyimler */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Eğitim Geçmişi (tek kutu) */}
            <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/30 
                            hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 
                            transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-semibold text-blue-400 mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-blue-400" />
                Eğitim Geçmişi
              </h3>
              <div className="space-y-6">
                {educationData.map((edu, index) => (
                  <div key={index} className="border-b border-gray-700 pb-4 last:border-none last:pb-0">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                      <span className="text-gray-400 text-sm">{edu.period}</span>
                    </div>
                    <p className="text-blue-400 font-medium mb-2">{edu.school}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Deneyimler */}
            <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30 
                            hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 
                            transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-semibold text-purple-400 mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-purple-400" />
                Deneyimler
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-b border-gray-700 pb-4 last:border-none last:pb-0">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold text-white">{exp.company}</h4>
                      <span className="text-gray-400 text-sm">{exp.period}</span>
                    </div>
                    <p className="text-purple-400 font-medium mb-2">{exp.role}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sağ - Hedeflerim & İlgi Alanlarım */}
          <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl p-6 border border-green-500/30 
                          hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20 
                          transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-2xl font-semibold text-green-400 mb-6 flex items-center gap-2">
              <Target className="w-6 h-6 text-green-400" />
              Hedeflerim & İlgi Alanlarım
            </h3>
            <ul className="space-y-3">
              {goals.map((goal, index) => (
                <li
                  key={index}
                  className="text-gray-300 text-sm flex items-start gap-2 bg-gray-700/30 p-2 rounded-md
                             hover:bg-green-500/10 transition-colors duration-200"
                >
                  <span className="text-green-400 mt-1">✓</span>
                  {goal}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
