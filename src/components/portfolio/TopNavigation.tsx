
import { Globe } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';

const TopNavigation = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50 flex gap-3">
      <Button
        onClick={toggleLanguage}
        variant="outline"
        size="sm"
        className="bg-black/20 backdrop-blur-md border-white/20 text-white hover:bg-white/10 transition-all duration-300"
      >
        <Globe size={16} />
        <span className="ml-1 text-xs">{language.toUpperCase()}</span>
      </Button>
    </div>
  );
};

export default TopNavigation;
