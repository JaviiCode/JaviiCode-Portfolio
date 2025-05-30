
import { ExternalLink, Github, Star, Zap, Heart } from 'lucide-react';
import { Button } from '../ui/button';
import { useLanguage } from '../../contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      titleKey: "projects.bartoyou.title",
      descriptionKey: "projects.bartoyou.description",
      tech: ["React", "Laravel", "Mysql", "AWS", "Figma"],
      image: "bg-gradient-to-br from-red-600 via-red-400 to-purple-700",
      github: "https://github.com/JaviiCode/BarToYou-WebApp",
      demo: null,
      featured: false
    },
    {
      titleKey: "projects.bartoyouapi.title",
      descriptionKey: "projects.bartoyouapi.description",
      tech: ["Laravel", "React", "Mysql", "Security"],
      image: "bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600",
      github: "https://github.com/JaviiCode/BarToYou-WebApi",
      demo: null,
      featured: false
    },
    {
      titleKey: "projects.gym.title",
      descriptionKey: "projects.gym.description",
      tech: ["Laravel", "API REST", "Mysql"],
      image: "bg-gradient-to-br from-orange-600 via-red-600 to-pink-600",
      github: "https://github.com/JaviiCode/gym-apirest",
      demo: null,
      featured: false,
    },
    {
      titleKey: "projects.byca.title",
      descriptionKey: "projects.byca.description",
      tech: ["React", "Tailwin", "TypeScript", "Vite"],
      image: "bg-gradient-to-br from-blue-600 via-blue-400 to-indigo-700",
      github: "https://github.com/JaviiCode/javiig-Portfolio",
      demo: null,
      featured: true
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-20 px-4 md:px-8 bg-gradient-to-b from-blue-900/20 via-black to-purple-900/20 relative overflow-hidden">
      {/* Enhanced background animated elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 animate-float">
          <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 animate-ping"></div>
        </div>
        <div className="absolute bottom-1/3 right-20 animate-float-delayed">
          <Star size={28} className="text-yellow-400/40 animate-spin-slow" />
        </div>
        <div className="absolute top-1/2 right-1/4 animate-float-reverse">
          <Zap size={24} className="text-pink-400/30 animate-pulse" />
        </div>
        
        <div className="absolute top-1/3 left-1/2 w-16 h-16 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-xl animate-float"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="scroll-animate opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-gradient-x">
            {t('projects.title')}
            <span className="block text-lg font-normal text-gray-400 mt-4">
              {t('projects.subtitle')}
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.titleKey}
              className={`scroll-animate opacity-0 translate-y-10 transition-all duration-1000 group ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm overflow-hidden border border-gray-700 hover:border-gray-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 relative">
                {/* Enhanced featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 text-xs font-bold animate-pulse">
                    <Star size={12} className="inline mr-1" />
                    DESTACADO
                  </div>
                )}

                {/* Enhanced animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className={`h-48 ${project.image} flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500`}>
                  {/* More floating particles in project image */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-white opacity-0 group-hover:opacity-60 group-hover:animate-ping transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 right-4 w-1 h-1 bg-cyan-400 opacity-0 group-hover:opacity-80 group-hover:animate-pulse transition-opacity duration-500"></div>
                  <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-pink-400 opacity-0 group-hover:opacity-70 group-hover:animate-bounce transition-opacity duration-700"></div>
                  
                  <h3 className="text-2xl font-bold text-white relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {t(project.titleKey)}
                  </h3>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6 relative z-10">
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {t(project.descriptionKey)}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs hover:bg-gray-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                        style={{ transitionDelay: `${techIndex * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className={`flex gap-2 ${project.demo ? 'justify-between' : 'justify-center'}`}>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className={`group-hover:border-gray-500 hover:bg-gray-700 transition-all duration-300 ${project.demo ? 'flex-1' : 'w-full'}`}
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github size={16} className="mr-2 group-hover:animate-pulse" />
                      {t('projects.code')}
                    </Button>
                    
                    {project.demo && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 group-hover:border-gray-500 hover:bg-gray-700 transition-all duration-300"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink size={16} className="mr-2 group-hover:animate-pulse" />
                        Demo
                      </Button>
                    )}
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

export default Projects;
