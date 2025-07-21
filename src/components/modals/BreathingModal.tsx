
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface BreathingModalProps {
  onClose: () => void;
}

const breathingExercises = [
  {
    name: '4-7-8 Breathing',
    icon: '🌊',
    description: 'Inhale for 4, hold for 7, exhale for 8. Great for anxiety and sleep.',
    instructions: [
      'Sit comfortably with your back straight',
      'Exhale completely through your mouth',
      'Close your mouth and inhale through nose for 4 counts',
      'Hold your breath for 7 counts',
      'Exhale through mouth for 8 counts',
      'Repeat 3-4 cycles'
    ],
    duration: '2-3 minutes'
  },
  {
    name: 'Box Breathing',
    icon: '⬜',
    description: 'Equal counts of inhaling, holding, exhaling, and holding. Used by Navy SEALs.',
    instructions: [
      'Sit with feet flat on floor',
      'Inhale slowly through nose for 4 counts',
      'Hold your breath for 4 counts',
      'Exhale slowly through mouth for 4 counts',
      'Hold empty lungs for 4 counts',
      'Repeat 4-6 cycles'
    ],
    duration: '3-5 minutes'
  },
  {
    name: 'Alternate Nostril',
    icon: '🌸',
    description: 'Ancient yoga technique that balances the nervous system.',
    instructions: [
      'Sit comfortably and use your right thumb to close right nostril',
      'Inhale slowly through left nostril',
      'Close left nostril with ring finger, release thumb',
      'Exhale through right nostril',
      'Inhale through right nostril',
      'Switch and exhale through left nostril',
      'This completes one cycle - repeat 5-10 times'
    ],
    duration: '5-10 minutes'
  },
  {
    name: 'Belly Breathing',
    icon: '🫁',
    description: 'Deep diaphragmatic breathing to activate the relaxation response.',
    instructions: [
      'Lie down or sit comfortably',
      'Place one hand on chest, one on belly',
      'Breathe in slowly through nose, expanding belly',
      'Chest should move very little',
      'Exhale slowly through pursed lips',
      'Belly should fall as you exhale',
      'Continue for several minutes'
    ],
    duration: '5-10 minutes'
  }
];

const BreathingModal = ({ onClose }: BreathingModalProps) => {
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-gray-800 mb-4">
            💨 Breathing Exercises
          </DialogTitle>
          <p className="text-center text-gray-600 mb-6">
            Harness the power of your breath to calm your mind and body
          </p>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {breathingExercises.map((exercise, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-all duration-300 rounded-2xl cursor-pointer"
              onClick={() => setSelectedExercise(selectedExercise === index ? null : index)}
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{exercise.icon}</div>
                  <h3 className="font-bold text-gray-800 text-lg">{exercise.name}</h3>
                  <p className="text-gray-600 text-sm mt-2">{exercise.description}</p>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-2">
                    {exercise.duration}
                  </span>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full rounded-full border-blue-300 hover:bg-blue-50"
                >
                  {selectedExercise === index ? 'Hide Instructions' : 'Show Instructions'}
                </Button>
                
                {selectedExercise === index && (
                  <div className="mt-4 p-4 bg-white/80 rounded-xl">
                    <h4 className="font-semibold text-gray-800 mb-3">Step-by-step guide:</h4>
                    <ol className="space-y-2">
                      {exercise.instructions.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start space-x-2">
                          <span className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                            {stepIndex + 1}
                          </span>
                          <span className="text-gray-700 text-sm">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl text-center">
          <p className="text-gray-700 font-medium">
            🌟 Practice regularly for best results. Even 2-3 minutes can make a difference.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BreathingModal;
