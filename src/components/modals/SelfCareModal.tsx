
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';

interface SelfCareModalProps {
  onClose: () => void;
}

const selfCarePractices = [
  {
    icon: '🛁',
    title: 'Relaxing Bath Ritual',
    description: 'Draw a warm bath with Epsom salts or essential oils. Light candles, play soft music, and soak for 15-20 minutes.',
    time: '20 minutes'
  },
  {
    icon: '📖',
    title: 'Mindful Reading',
    description: 'Choose a comforting book or poetry. Create a cozy reading nook and allow yourself to get lost in peaceful stories.',
    time: '30 minutes'
  },
  {
    icon: '🌿',
    title: 'Nature Connection',
    description: 'Spend time with plants, garden, or simply sit outside. Touch grass, smell flowers, listen to birds.',
    time: '15 minutes'
  },
  {
    icon: '🎨',
    title: 'Creative Expression',
    description: 'Draw, paint, write, or craft without judgment. Let your creativity flow freely as a form of emotional release.',
    time: '25 minutes'
  },
  {
    icon: '☕',
    title: 'Mindful Tea Ceremony',
    description: 'Prepare your favorite herbal tea slowly and mindfully. Focus on each step, smell, and taste.',
    time: '10 minutes'
  },
  {
    icon: '🧴',
    title: 'Self-Massage',
    description: 'Use gentle oils or lotions to massage your hands, feet, or shoulders. Practice loving touch with yourself.',
    time: '15 minutes'
  },
  {
    icon: '🕯️',
    title: 'Meditation Corner',
    description: 'Create a peaceful space with cushions, candles, or crystals. Sit quietly and breathe deeply.',
    time: '10 minutes'
  },
  {
    icon: '📝',
    title: 'Gratitude Journaling',
    description: 'Write down 3-5 things you\'re grateful for today. Include small moments that brought you joy.',
    time: '10 minutes'
  }
];

const SelfCareModal = ({ onClose }: SelfCareModalProps) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-gray-800 mb-4">
            🌱 Self-Care Practices
          </DialogTitle>
          <p className="text-center text-gray-600 mb-6">
            Choose activities that nurture your mind, body, and spirit
          </p>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {selfCarePractices.map((practice, index) => (
            <Card key={index} className="bg-gradient-to-br from-green-50 to-mint hover:shadow-lg transition-all duration-300 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{practice.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2">{practice.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{practice.description}</p>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      {practice.time}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-gradient-to-r from-mint to-peach rounded-2xl text-center">
          <p className="text-gray-700 font-medium">
            💝 Remember: Self-care isn't selfish - it's essential for your wellbeing
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SelfCareModal;
