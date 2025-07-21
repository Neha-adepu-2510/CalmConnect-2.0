
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface PositiveQuotesModalProps {
  onClose: () => void;
}

const quotes = [
  {
    text: "You are braver than you believe, stronger than you seem, and smarter than you think.",
    author: "A.A. Milne",
    category: "Self-Belief",
    color: "from-pink-100 to-rose-100"
  },
  {
    text: "The only way out is through.",
    author: "Robert Frost",
    category: "Resilience",
    color: "from-blue-100 to-indigo-100"
  },
  {
    text: "You have been assigned this mountain to show others it can be moved.",
    author: "Mel Robbins",
    category: "Purpose",
    color: "from-green-100 to-emerald-100"
  },
  {
    text: "Healing isn't about erasing your past, it's about making peace with it.",
    author: "Unknown",
    category: "Healing",
    color: "from-purple-100 to-violet-100"
  },
  {
    text: "Your current situation is not your final destination. The best is yet to come.",
    author: "Unknown",
    category: "Hope",
    color: "from-yellow-100 to-orange-100"
  },
  {
    text: "Progress, not perfection, is the goal.",
    author: "Unknown",
    category: "Growth",
    color: "from-teal-100 to-cyan-100"
  },
  {
    text: "You are allowed to be both a masterpiece and a work in progress simultaneously.",
    author: "Sophia Bush",
    category: "Self-Acceptance",
    color: "from-rose-100 to-pink-100"
  },
  {
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
    category: "Inner Strength",
    color: "from-indigo-100 to-purple-100"
  }
];

const affirmations = [
  "I am worthy of love and respect",
  "I choose peace over anxiety",
  "I am growing stronger every day",
  "My feelings are valid and temporary",
  "I have the power to create positive change",
  "I am enough, exactly as I am",
  "I deserve happiness and inner peace",
  "I trust in my ability to overcome challenges",
  "I am grateful for this moment",
  "I choose to focus on what I can control"
];

const PositiveQuotesModal = ({ onClose }: PositiveQuotesModalProps) => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [showAffirmations, setShowAffirmations] = useState(false);

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  const randomAffirmation = () => {
    return affirmations[Math.floor(Math.random() * affirmations.length)];
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-gray-800 mb-4">
            ✨ Positive Mindset Boost
          </DialogTitle>
          <p className="text-center text-gray-600 mb-6">
            Feed your mind with uplifting thoughts and affirmations
          </p>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Quote of the Moment */}
          <Card className={`bg-gradient-to-br ${quotes[currentQuote].color} shadow-lg rounded-3xl border-0`}>
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">💫</div>
              <blockquote className="text-xl font-medium text-gray-800 italic mb-4 leading-relaxed">
                "{quotes[currentQuote].text}"
              </blockquote>
              <cite className="text-gray-600 font-semibold">
                — {quotes[currentQuote].author}
              </cite>
              <div className="mt-4">
                <span className="inline-block bg-white/60 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {quotes[currentQuote].category}
                </span>
              </div>
              <Button 
                onClick={nextQuote}
                className="mt-6 bg-white/80 text-gray-700 hover:bg-white/90 rounded-full px-6"
              >
                Next Inspiration
              </Button>
            </CardContent>
          </Card>

          {/* Affirmations Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-mint to-peach shadow-lg rounded-3xl border-0">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Daily Affirmations</h3>
                <div className="bg-white/60 p-4 rounded-2xl mb-4">
                  <p className="text-gray-800 font-medium italic">
                    "{randomAffirmation()}"
                  </p>
                </div>
                <Button 
                  onClick={() => setShowAffirmations(!showAffirmations)}
                  className="bg-green-500 hover:bg-green-600 text-white rounded-full"
                >
                  {showAffirmations ? 'Hide All' : 'Show All Affirmations'}
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-lavender to-softBlue shadow-lg rounded-3xl border-0">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Mindset Tips</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-700">Start your day with gratitude</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-700">Replace "I can't" with "I'm learning"</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-700">Celebrate small victories</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-700">Practice self-compassion daily</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* All Affirmations */}
          {showAffirmations && (
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg rounded-3xl border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">All Affirmations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {affirmations.map((affirmation, index) => (
                    <div key={index} className="bg-white/80 p-3 rounded-xl">
                      <p className="text-gray-700 italic">"{affirmation}"</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
        
        <div className="mt-6 p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl text-center">
          <p className="text-gray-700 font-medium">
            🌟 Read these daily to rewire your mind for positivity and self-compassion
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PositiveQuotesModal;
