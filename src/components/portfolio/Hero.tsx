
import { ChevronDown, Code, Star, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import TechParticles from './TechParticles';
import TopNavigation from './TopNavigation';
import { useLanguage } from '../../contexts/LanguageContext';

const Hero = () => {
  const [showContent, setShowContent] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const timer1 = setTimeout(() => setShowTitle(true), 200);
    const timer2 = setTimeout(() => setShowContent(true), 600);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-black overflow-hidden font-inter">
      <TopNavigation />
      
      {/* Technology Particles Background */}
      <TechParticles />

      {/* Enhanced animated background particles */}
      <div className="absolute inset-0">
        {/* Flowing gradient orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-float opacity-60"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-float-delayed opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-r from-emerald-400/20 to-cyan-500/20 rounded-full blur-xl animate-float-reverse opacity-60"></div>
        
        {/* Floating geometric elements */}
        <div className="absolute top-1/4 left-1/3 animate-float">
          <Code size={32} className="text-cyan-400/40 animate-pulse" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 animate-float-delayed">
          <Star size={28} className="text-yellow-400/50 animate-spin-slow" />
        </div>
        <div className="absolute top-1/2 left-1/6 animate-float-reverse">
          <Zap size={24} className="text-pink-400/40 animate-pulse" />
        </div>
        
        {/* Animated gradient lines */}
        <div className="absolute top-1/2 left-0 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-slide-right"></div>
        <div className="absolute bottom-1/3 right-0 w-24 h-1 bg-gradient-to-r from-transparent via-pink-400/30 to-transparent animate-slide-left"></div>
      </div>

      {/* Main content with elegant entrance animation */}
      <div className="text-center z-10 px-4">
        <div className="relative mb-8">
          {showTitle && (
            <div className="relative">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent transform transition-all duration-700 ease-out animate-fade-in opacity-0 animate-elegant-entrance">
                {t('hero.title')}
              </h1>
              {/* Elegant glow effect */}
              <div className="absolute inset-0 text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent blur-lg opacity-20 animate-pulse-slow"></div>
            </div>
          )}
        </div>
        
        {showContent && (
          <div className="space-y-8 animate-fade-in animation-delay-300 opacity-0 animate-content-entrance">
            <p className="text-xl md:text-2xl mb-8 text-gray-300 font-medium transform transition-all duration-500 ease-out">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                {t('hero.subtitle')}
              </span>
            </p>
            
            <div className="text-lg md:text-xl text-gray-400 mb-8 transform transition-all duration-500 ease-out animation-delay-300">
              <span>{t('hero.description')}</span>
            </div>

            {/* Enhanced CTA Button */}
            <button 
              onClick={scrollToNext}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105 rounded-lg border border-purple-400/20 transform animation-delay-500 animate-fade-in opacity-0 animate-button-entrance overflow-hidden"
            >
              <span className="relative z-10 text-lg">{t('hero.cta')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg"></div>
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            </button>
          </div>
        )}
      </div>

      {/* Enhanced scroll indicator */}
      {showContent && (
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group cursor-pointer animate-fade-in animation-delay-700 opacity-0 animate-scroll-indicator"
        >
          <div className="flex flex-col items-center animate-bounce">
            <div className="w-6 h-10 border-2 border-cyan-400 mb-2 relative rounded-full">
              <div className="w-1 h-3 bg-cyan-400 absolute top-2 left-1/2 transform -translate-x-1/2 animate-ping rounded-full"></div>
            </div>
            <ChevronDown size={24} className="text-cyan-400 group-hover:text-pink-400 transition-colors duration-300" />
          </div>
        </button>
      )}

      {/* Enhanced parallax background with flowing gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-blue-900/30 animate-gradient-x-slow"></div>
    </section>
  );
};

export default Hero;
