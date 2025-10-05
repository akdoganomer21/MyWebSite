import React from 'react';
import { Code, Database, Server, Wrench, Package } from "lucide-react";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      icon: <Code className="w-6 h-6 text-blue-400" />,
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "React Native" , "Vue.js", "Bootstrap", "WebSocket Client"]
    },
    {
      title: "Backend",
      color: "from-purple-500 to-pink-500",
      icon: <Server className="w-6 h-6 text-purple-400" />,
      skills: ["Node.js", "C#", "Python", "Express.js", "RESTful APIs", "WebSocket (Socket.io, SignalR)"]
    },
    {
      title: "Database",
      color: "from-green-500 to-emerald-500",
      icon: <Database className="w-6 h-6 text-green-400" />,
      skills: ["MySql", "MongoDB"]
    },
    {
      title: "Frameworks & Tools",
      color: "from-orange-500 to-yellow-500",
      icon: <Package className="w-6 h-6 text-orange-400" />,
      skills: ["Tailwind CSS", "Next.js", "Git & GitHub", "Postman",  "GitHub Actions", "Visual Studio Code"]
    },
    {
      title: "Diğer",
      color: "from-red-500 to-pink-600",
      icon: <Wrench className="w-6 h-6 text-red-400" />,
      skills: ["OOP", "Linux", "Agile / Scrum", "Problem Solving", "Teamwork", "Microsoft Office"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Teknik Yetenekler
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Deneyim kazandığım teknolojiler ve araçlar
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`group bg-gray-800/40 backdrop-blur-lg rounded-xl p-6 border border-gray-700 
                          hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 
                          hover:border-transparent hover:bg-gradient-to-r ${category.color}`}
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <ul className="space-y-3 text-center">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-100 text-sm px-3 py-1 rounded-md 
                               bg-gray-900/30 hover:bg-white/20 
                               transition-colors duration-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
