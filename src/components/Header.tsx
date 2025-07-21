
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onStartQuestionnaire: () => void;
}

const Header = ({ onStartQuestionnaire }: HeaderProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {/* Floating elements for ambiance */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-peach rounded-full opacity-30 animate-gentle-float"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-mint rounded-full opacity-40 animate-gentle-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-20 w-20 h-20 bg-softBlue rounded-full opacity-25 animate-gentle-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 max-w-4xl animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-6 tracking-tight">
          Calm<span className="text-purple-400">Connect</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light leading-relaxed">
          Understand your mind. Heal gently.
        </p>
        
        <div className="mb-12">
          <p className="text-lg text-gray-500 mb-4">
            A safe space to explore your mental wellness
          </p>
          <p className="text-md text-gray-400 max-w-2xl mx-auto">
            Take our gentle assessment to receive personalized insights and coping strategies 
            tailored just for you. You deserve peace of mind.
          </p>
        </div>

        <Button
          onClick={onStartQuestionnaire}
          className="bg-gradient-to-r from-purple-400 to-pink-300 hover:from-purple-500 hover:to-pink-400 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Begin Your Journey
        </Button>
        
        <div className="mt-16 text-gray-400 text-sm">
          ✨ Completely private and confidential ✨
        </div>
      </div>
    </div>
  );
};

export default Header;
