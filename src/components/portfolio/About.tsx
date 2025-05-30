
import { User, Code, Coffee, Heart, Rocket, Download } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';

const About = () => {
  const { t } = useLanguage();

  const handleDownloadCV = () => {
    // Crear un elemento <a> temporal para descargar el archivo
    const link = document.createElement('a');
    link.href = '/assets/JavierGonzalez-cv.pdf';
    link.download = 'JavierGonzalez-cv.pdf';
    link.click();
  };

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4 md:px-8 bg-gradient-to-b from-black via-gray-900 to-purple-900/20 font-inter">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-animate opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
            {t('about.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="scroll-animate opacity-0 translate-y-10 transition-all duration-1000 delay-300">
            <div className="relative group">
              {/* Contenedor principal con efectos de fondo - responsive */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] mx-auto">
                {/* Anillos de gradiente animados */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 animate-gradient-x opacity-80 blur-sm"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 animate-gradient-x animation-delay-1000 opacity-60 blur-sm"></div>
                
                {/* Contenedor de la imagen */}
                <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 shadow-2xl shadow-purple-500/30 group-hover:shadow-pink-500/50 transition-all duration-500">
                  <img 
                    src="/assets/fotoperfil.png" 
                    alt="Javier González" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110"
                    onError={(e) => {
                      // Fallback al ícono si no se encuentra la imagen personalizada
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <User size={140} className="text-white group-hover:scale-110 transition-transform duration-500 hidden absolute inset-0 m-auto" />
                </div>
                
                {/* Partículas flotantes mejoradas - responsive */}
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-ping shadow-xl shadow-yellow-400/60"></div>
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 animate-bounce shadow-xl shadow-green-400/60"></div>
                <div className="absolute top-1/2 -left-6 sm:-left-8 md:-left-10 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse shadow-xl shadow-cyan-400/60"></div>
                <div className="absolute top-8 right-8 sm:top-10 sm:right-10 md:top-12 md:right-12 animate-float">
                  <Rocket size={20} className="sm:w-6 sm:h-6 md:w-6 md:h-6 text-pink-400 animate-pulse drop-shadow-lg" />
                </div>
                <div className="absolute bottom-12 right-12 sm:bottom-14 sm:right-14 md:bottom-16 md:right-16 animate-float-delayed">
                  <Code size={16} className="sm:w-5 sm:h-5 md:w-5 md:h-5 text-cyan-400 animate-pulse drop-shadow-lg" />
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-animate opacity-0 translate-y-10 transition-all duration-1000 delay-600">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent animate-gradient-x">
              {t('about.greeting')}
            </h3>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed hover:text-gray-200 transition-colors duration-300">
                {t('about.description1')}
                <span className="text-cyan-400 font-semibold"> Diseño y analisis de bases de datos</span>, 
                <span className="text-blue-400 font-semibold"> Apirest en Laravel</span> y 
                tecnologías de vanguardia.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed hover:text-gray-200 transition-colors duration-300">
                {t('about.description2')}
              </p>
            </div>

            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-3 text-purple-400 hover:text-purple-300 transition-colors duration-300 group px-4 py-2 bg-purple-900/20 border border-purple-500/20">
                <Code size={24} className="group-hover:animate-pulse" />
                <span className="font-medium">{t('about.cleanCode')}</span>
              </div>
              <div className="flex items-center gap-3 text-pink-400 hover:text-pink-300 transition-colors duration-300 group px-4 py-2 bg-pink-900/20 border border-pink-500/20">
                <Heart size={24} className="group-hover:animate-pulse" />
                <span className="font-medium">{t('about.uiPassionate')}</span>
              </div>
            </div>

            {/* CV Download Button */}
            <div className="mt-8">
              <Button
                onClick={handleDownloadCV}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold px-6 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                <Download size={20} className="mr-2" />
                {t('about.downloadCV')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
