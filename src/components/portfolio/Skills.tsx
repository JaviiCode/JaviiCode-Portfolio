
import { Code2, Database, Palette, Smartphone, Zap, Star } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      icon: <Code2 size={48} />,
      title: "Frontend",
      skills: ["React", "JavaScript", "HTML5", "CSS3"],
      color: "from-cyan-500 to-blue-600",
      hoverColor: "group-hover:from-cyan-400 group-hover:to-blue-500"
    },
    {
      icon: <Database size={48} />,
      title: "Backend",
      skills: ["Laravel", "PHP", "Java", "Mysql", "API REST"],
      color: "from-emerald-500 to-green-600",
      hoverColor: "group-hover:from-emerald-400 group-hover:to-green-500"
    },
    {
      icon: <Palette size={48} />,
      title: "Design",
      skills: ["Figma", "Adobe XD", "UI/UX", "Responsive Design", "Animations"],
      color: "from-purple-500 to-pink-600",
      hoverColor: "group-hover:from-purple-400 group-hover:to-pink-500"
    },
    {
      icon: <Smartphone size={48} />,
      title: "Tools",
      skills: ["Git", "GitHub"],
      color: "from-orange-500 to-red-600",
      hoverColor: "group-hover:from-orange-400 group-hover:to-red-500"
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-20 px-4 md:px-8 bg-gradient-to-b from-purple-900/20 via-gray-900 to-blue-900/20 relative overflow-hidden">
      {/* Enhanced floating background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 animate-float">
          <Star size={24} className="text-yellow-400/30" />
        </div>
        <div className="absolute bottom-32 right-20 animate-float-delayed">
          <Zap size={20} className="text-cyan-400/40" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-2 h-16 bg-gradient-to-b from-purple-500/30 to-transparent animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-16 h-2 bg-gradient-to-r from-pink-500/30 to-transparent animate-pulse"></div>
        
        {/* New flowing gradient elements */}
        <div className="absolute top-1/3 left-1/3 w-20 h-20 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/2 w-24 h-24 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-xl animate-float-delayed"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="scroll-animate opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
            {t('skills.title')}
            <span className="block text-lg font-normal text-gray-400 mt-4">
              {t('skills.subtitle')}
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`scroll-animate opacity-0 translate-y-10 transition-all duration-1000 group`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 border border-gray-700 hover:border-gray-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden">
                {/* Enhanced animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* More floating particles on hover */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-pink-400 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>
                <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-yellow-400 opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-700"></div>
                
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} ${category.hoverColor} flex items-center justify-center mb-4 mx-auto transition-all duration-500 group-hover:scale-110 shadow-lg shadow-purple-500/20 group-hover:shadow-cyan-500/30 relative z-10`}>
                  <div className="group-hover:animate-pulse">
                    {category.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-center mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300 relative z-10">
                  {category.title}
                </h3>
                
                <ul className="space-y-2 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <li 
                      key={skill} 
                      className="text-gray-300 text-center text-sm hover:text-white transition-colors duration-300 transform hover:scale-105"
                      style={{ transitionDelay: `${skillIndex * 50}ms` }}
                    >
                      <span className="inline-block px-2 py-1 bg-gray-700/50 hover:bg-gray-600/50 transition-colors duration-300">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Enhanced skill level indicator */}
                <div className="mt-4 relative z-10">
                  <div className="w-full bg-gray-700 h-1 overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${category.color} transition-all duration-1000 group-hover:animate-pulse shadow-lg`}
                         style={{ width: `${85 + Math.random() * 15}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
