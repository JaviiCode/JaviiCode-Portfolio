
import { Calendar, MapPin, Users, Briefcase } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="min-h-screen py-20 px-4 md:px-8 bg-gradient-to-b from-gray-900 via-purple-900/10 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-64 h-64 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 scroll-animate opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
            {t('experience.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t('experience.subtitle')}
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 scroll-animate opacity-0 translate-y-10 transition-all duration-1000 delay-300">
          {/* Experience Item */}
          <div className="group relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-cyan-500 opacity-20 group-hover:opacity-60 transition-opacity duration-500"></div>
            
            {/* Timeline dot */}
            <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full shadow-lg group-hover:shadow-purple-500/50 transition-all duration-500 group-hover:scale-125"></div>

            <div className="ml-20 p-8 bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 group-hover:transform group-hover:scale-[1.02]">
              <div className="flex flex-wrap items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {t('experience.jobTitle')}
                  </h3>
                  <p className="text-lg text-purple-400 font-medium mb-2">
                    {t('experience.company')}
                  </p>
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar size={16} className="mr-2" />
                  <span>{t('experience.period')}</span>
                </div>
              </div>

              <div className="flex items-center text-gray-400 text-sm mb-4">
                <MapPin size={16} className="mr-2" />
                <span>{t('experience.location')}</span>
              </div>

              <div className="space-y-3 text-gray-300">
                <p className="leading-relaxed">
                  {t('experience.description')}
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start space-x-3">
                    <Briefcase size={20} className="text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {t('experience.responsibilities')}
                      </h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>{t('experience.resp1')}</li>
                        <li>{t('experience.resp2')}</li>
                        <li>{t('experience.resp3')}</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Users size={20} className="text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {t('experience.achievements')}
                      </h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>{t('experience.ach1')}</li>
                        <li>{t('experience.ach2')}</li>
                        <li>{t('experience.ach3')}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies used */}
              <div className="mt-6 pt-6 border-t border-gray-700/50">
                <h4 className="text-sm font-semibold text-gray-300 mb-3">
                  {t('experience.technologies')}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Laravel', 'React', 'JavaScript', 'MySQL', 'Git'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-lg text-sm text-gray-300 hover:border-purple-400/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
