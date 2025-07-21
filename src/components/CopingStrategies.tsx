
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SelfCareModal from './modals/SelfCareModal';
import BreathingModal from './modals/BreathingModal';
import PositiveQuotesModal from './modals/PositiveQuotesModal';
import ExerciseModal from './modals/ExerciseModal';

interface CopingStrategiesProps {
  primaryConcern: string;
}

const CopingStrategies = ({ primaryConcern }: CopingStrategiesProps) => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const strategyCards = [
    {
      icon: '🌱',
      title: 'Self-Care Practices',
      description: 'Nurturing activities for your mind, body, and spirit',
      color: 'from-green-50 to-mint'
    },
    {
      icon: '💨',
      title: 'Breathing Exercises',
      description: 'Calming techniques to center your breath and mind',
      color: 'from-blue-50 to-purple-50'
    },
    {
      icon: '✨',
      title: 'Positive Mindset',
      description: 'Uplifting quotes and affirmations for inner strength',
      color: 'from-yellow-50 to-orange-50'
    },
    {
      icon: '🧘‍♀️',
      title: 'Gentle Exercises',
      description: 'Yoga poses and gentle movements for wellness',
      color: 'from-pink-50 to-peach'
    }
  ];

  const handleCardClick = (title: string) => {
    if (title === 'Self-Care Practices') {
      setOpenModal('selfcare');
    } else if (title === 'Breathing Exercises') {
      setOpenModal('breathing');
    } else if (title === 'Positive Mindset') {
      setOpenModal('quotes');
    } else if (title === 'Gentle Exercises') {
      setOpenModal('exercise');
    }
  };

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        🌟 Your Personalized Coping Strategies
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {strategyCards.map((card, index) => (
          <Card 
            key={index}
            className={`bg-gradient-to-br ${card.color} hover:shadow-xl transition-all duration-300 cursor-pointer rounded-3xl border-0 transform hover:scale-105`}
            onClick={() => handleCardClick(card.title)}
          >
            <CardHeader className="text-center pb-2">
              <div className="text-5xl mb-3">{card.icon}</div>
              <CardTitle className="text-lg font-semibold text-gray-800">
                {card.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modals */}
      {openModal === 'selfcare' && (
        <SelfCareModal onClose={() => setOpenModal(null)} />
      )}
      {openModal === 'breathing' && (
        <BreathingModal onClose={() => setOpenModal(null)} />
      )}
      {openModal === 'quotes' && (
        <PositiveQuotesModal onClose={() => setOpenModal(null)} />
      )}
      {openModal === 'exercise' && (
        <ExerciseModal onClose={() => setOpenModal(null)} />
      )}
    </div>
  );
};

export default CopingStrategies;
