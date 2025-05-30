
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';
import { Button } from '../ui/button';
import { useLanguage } from '../../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const handleEmailClick = () => {
    window.location.href = 'mailto:javiigcode@gmail.com';
  };

  return (
    <section className="min-h-screen flex items-center py-20 px-4 md:px-8 bg-gradient-to-t from-black via-purple-900/20 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse-gentle"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse-gentle animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-full blur-2xl animate-float"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="scroll-animate opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x-gentle">
            {t('contact.title')}
            <span className="block text-base md:text-lg font-normal text-gray-400 mt-4">
              {t('contact.subtitle')}
            </span>
          </h2>
        </div>

        <div className="scroll-animate opacity-0 translate-y-10 transition-all duration-1000 delay-300">
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto px-4">
            {t('contact.description')}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold"> {t('contact.extraordinary')}</span>
          </p>
        </div>

        {/* Contact methods - Centered 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-12 scroll-animate opacity-0 translate-y-10 transition-all duration-1000 delay-500 px-4 max-w-2xl mx-auto">
          <div className="group p-4 md:p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-500 hover:scale-105">
            <Mail size={28} className="mx-auto mb-3 md:mb-4 text-purple-400 group-hover:animate-bounce" />
            <h3 className="text-base md:text-lg font-semibold text-white mb-2">{t('contact.email')}</h3>
            <p className="text-gray-400 text-xs md:text-sm">javiigcode@gmail.com</p>
          </div>
          
          <div className="group p-4 md:p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-pink-500 transition-all duration-500 hover:scale-105">
            <MapPin size={28} className="mx-auto mb-3 md:mb-4 text-pink-400 group-hover:animate-bounce" />
            <h3 className="text-base md:text-lg font-semibold text-white mb-2">{t('contact.location')}</h3>
            <p className="text-gray-400 text-xs md:text-sm">{t('contact.gc')}</p>
          </div>
        </div>

        {/* Main CTA - Now functional */}
        <div className="scroll-animate opacity-0 translate-y-10 transition-all duration-1000 delay-700">
          <div className="mb-12">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-400 hover:via-pink-400 hover:to-cyan-400 text-white font-semibold px-8 md:px-12 py-4 md:py-6 text-base md:text-lg rounded-lg transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/30 animate-gradient-x-gentle overflow-hidden relative"
              onClick={handleEmailClick}
            >
              <Mail className="mr-2 md:mr-3 group-hover:animate-bounce" size={20} />
              <span className="text-sm md:text-base">{t('contact.cta')}</span>
              <Send className="ml-2 md:ml-3 group-hover:animate-bounce" size={18} />
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            </Button>
          </div>
        </div>

        {/* Social links - Removed Twitter */}
        <div className="scroll-animate opacity-0 translate-y-10 transition-all duration-1000 delay-900">
          <p className="text-gray-400 mb-6 text-sm md:text-base">{t('contact.findMe')}</p>
          <div className="flex justify-center gap-4 md:gap-6">
            <a
              href="https://github.com/JaviiCode"
              className="group w-12 h-12 md:w-14 md:h-14 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-500 hover:scale-110 transform hover:shadow-lg hover:shadow-purple-500/30"
            >
              <Github size={20} className="group-hover:animate-pulse" />
            </a>
            <a
              href="https://www.linkedin.com/in/javiig/"
              className="group w-12 h-12 md:w-14 md:h-14 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transition-all duration-500 hover:scale-110 transform hover:shadow-lg hover:shadow-blue-500/30"
            >
              <Linkedin size={20} className="group-hover:animate-pulse" />
            </a>
          </div>
        </div>

        {/* Availability indicator */}
        <div className="scroll-animate opacity-0 translate-y-10 transition-all duration-1000 delay-1100">
          <div className="mt-12 p-3 md:p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg inline-block">
            <div className="flex items-center justify-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              <span className="text-green-400 font-semibold text-sm md:text-base">{t('contact.available')}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="scroll-animate opacity-0 translate-y-10 transition-all duration-1000 delay-1300">
          <p className="text-gray-500 mt-16 text-xs md:text-sm px-4">
            {t('contact.footer')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
