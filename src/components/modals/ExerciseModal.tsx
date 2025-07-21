
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ExerciseModalProps {
  onClose: () => void;
}

const yogaPoses = [
  {
    name: "Child's Pose",
    sanskrit: "Balasana",
    icon: "🧘‍♀️",
    benefits: "Calms the mind, relieves stress and anxiety",
    instructions: [
      "Kneel on the floor with knees hip-width apart",
      "Sit back on your heels",
      "Slowly fold forward, extending arms in front",
      "Rest your forehead on the ground",
      "Breathe deeply and hold for 1-3 minutes"
    ],
    difficulty: "Beginner",
    duration: "1-3 minutes"
  },
  {
    name: "Cat-Cow Pose",
    sanskrit: "Marjaryasana-Bitilasana",
    icon: "🐱",
    benefits: "Releases tension, improves spine flexibility",
    instructions: [
      "Start on hands and knees in tabletop position",
      "Inhale, arch your back and look up (Cow)",
      "Exhale, round your spine and tuck chin (Cat)",
      "Move slowly between poses",
      "Repeat 5-10 times with breath"
    ],
    difficulty: "Beginner",
    duration: "2-3 minutes"
  },
  {
    name: "Legs Up The Wall",
    sanskrit: "Viparita Karani",
    icon: "🦵",
    benefits: "Reduces anxiety, improves circulation, aids sleep",
    instructions: [
      "Lie on your back near a wall",
      "Extend legs up the wall",
      "Arms rest by your sides, palms up",
      "Close your eyes and breathe deeply",
      "Stay for 5-15 minutes"
    ],
    difficulty: "Beginner",
    duration: "5-15 minutes"
  },
  {
    name: "Forward Fold",
    sanskrit: "Uttanasana",
    icon: "🤸‍♀️",
    benefits: "Calms the nervous system, relieves stress",
    instructions: [
      "Stand with feet hip-width apart",
      "Slowly hinge at hips and fold forward",
      "Let arms hang or hold opposite elbows",
      "Bend knees slightly if needed",
      "Sway gently side to side"
    ],
    difficulty: "Beginner",
    duration: "1-2 minutes"
  }
];

const exercises = [
  {
    name: "Gentle Stretching Routine",
    icon: "🤸",
    type: "Stretching",
    benefits: "Releases muscle tension, improves flexibility",
    duration: "10-15 minutes",
    steps: [
      "Neck rolls (5 each direction)",
      "Shoulder shrugs (10 times)",
      "Arm circles (10 forward, 10 backward)",
      "Gentle spinal twists (5 each side)",
      "Calf raises (15 times)",
      "Ankle rotations (10 each direction)"
    ]
  },
  {
    name: "Mindful Walking",
    icon: "🚶‍♀️",
    type: "Movement",
    benefits: "Reduces stress, improves mood, connects with nature",
    duration: "10-30 minutes",
    steps: [
      "Find a quiet path or space",
      "Walk at a slower than normal pace",
      "Focus on the sensation of your feet touching ground",
      "Notice your surroundings with all senses",
      "Breathe naturally and deeply",
      "When mind wanders, gently return focus to walking"
    ]
  },
  {
    name: "Desk Stress Relief",
    icon: "💺",
    type: "Office Yoga",
    benefits: "Relieves work stress, improves posture",
    duration: "5-10 minutes",
    steps: [
      "Seated spinal twist (hold each side 30 seconds)",
      "Seated forward fold (1 minute)",
      "Neck stretches (30 seconds each direction)",
      "Shoulder blade squeezes (10 times)",
      "Seated figure-4 stretch (each leg 1 minute)",
      "Deep breathing (2 minutes)"
    ]
  }
];

const ExerciseModal = ({ onClose }: ExerciseModalProps) => {
  const [selectedCategory, setSelectedCategory] = useState<'yoga' | 'exercise'>('yoga');
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-gray-800 mb-4">
            🧘‍♀️ Healing Movement & Yoga
          </DialogTitle>
          <p className="text-center text-gray-600 mb-6">
            Gentle exercises and yoga poses to calm your mind and heal your body
          </p>
        </DialogHeader>
        
        {/* Category Toggle */}
        <div className="flex justify-center mb-6">
          <div className="bg-gray-100 p-1 rounded-full">
            <Button
              onClick={() => setSelectedCategory('yoga')}
              variant={selectedCategory === 'yoga' ? 'default' : 'ghost'}
              className="rounded-full px-6"
            >
              🧘‍♀️ Yoga Poses
            </Button>
            <Button
              onClick={() => setSelectedCategory('exercise')}
              variant={selectedCategory === 'exercise' ? 'default' : 'ghost'}
              className="rounded-full px-6"
            >
              🏃‍♀️ Gentle Exercises
            </Button>
          </div>
        </div>

        {/* Yoga Poses */}
        {selectedCategory === 'yoga' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {yogaPoses.map((pose, index) => (
              <Card 
                key={index} 
                className="bg-gradient-to-br from-purple-50 to-indigo-50 hover:shadow-lg transition-all duration-300 rounded-2xl"
              >
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{pose.icon}</div>
                    <h3 className="font-bold text-gray-800 text-lg">{pose.name}</h3>
                    <p className="text-gray-600 text-sm italic">{pose.sanskrit}</p>
                    <p className="text-gray-600 text-sm mt-2">{pose.benefits}</p>
                    <div className="flex justify-center gap-2 mt-3">
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                        {pose.difficulty}
                      </span>
                      <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs">
                        {pose.duration}
                      </span>
                    </div>
                  </div>
                  
                  <Button
                    onClick={() => setExpandedItem(expandedItem === index ? null : index)}
                    variant="outline"
                    className="w-full rounded-full border-purple-300 hover:bg-purple-50"
                  >
                    {expandedItem === index ? 'Hide Instructions' : 'Show Instructions'}
                  </Button>
                  
                  {expandedItem === index && (
                    <div className="mt-4 p-4 bg-white/80 rounded-xl">
                      <h4 className="font-semibold text-gray-800 mb-3">How to do it:</h4>
                      <ol className="space-y-2">
                        {pose.instructions.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start space-x-2">
                            <span className="bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
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
        )}

        {/* Gentle Exercises */}
        {selectedCategory === 'exercise' && (
          <div className="space-y-6">
            {exercises.map((exercise, index) => (
              <Card 
                key={index} 
                className="bg-gradient-to-br from-green-50 to-teal-50 shadow-lg rounded-2xl"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{exercise.icon}</div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-xl">{exercise.name}</h3>
                        <p className="text-gray-600">{exercise.benefits}</p>
                        <div className="flex gap-2 mt-2">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                            {exercise.type}
                          </span>
                          <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded-full text-xs">
                            {exercise.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 p-4 rounded-xl">
                    <h4 className="font-semibold text-gray-800 mb-3">Steps:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {exercise.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start space-x-2">
                          <span className="bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                            {stepIndex + 1}
                          </span>
                          <span className="text-gray-700 text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        
        <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl text-center">
          <p className="text-gray-700 font-medium">
            🌟 Listen to your body and practice with patience. Even a few minutes can make a difference.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExerciseModal;
