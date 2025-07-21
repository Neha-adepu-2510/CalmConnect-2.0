
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CopingStrategies from './CopingStrategies';
import InteractiveGames from './InteractiveGames';

interface ResultsProps {
  results: any;
  onStartOver: () => void;
}

const concernInfo = {
  anxiety: {
    title: 'Anxiety',
    description: 'You may be experiencing heightened worry or nervousness. Remember, anxiety is your mind\'s way of trying to protect you, but it can become overwhelming.',
    detailedInfo: 'Anxiety affects millions of people worldwide. It\'s characterized by excessive worry, restlessness, and physical symptoms like rapid heartbeat. The good news is that anxiety is highly treatable with the right strategies.',
    color: 'from-purple-400 to-pink-300',
    bgColor: 'from-purple-50 to-pink-50',
    icon: '🌸',
    tips: [
      'Practice the 4-7-8 breathing technique daily',
      'Try progressive muscle relaxation before bed',
      'Limit caffeine intake, especially in the afternoon',
      'Create a worry journal to externalize anxious thoughts'
    ]
  },
  depression: {
    title: 'Low Mood',
    description: 'You might be experiencing feelings of sadness or emptiness. These feelings are valid and temporary - healing is possible.',
    detailedInfo: 'Depression can feel overwhelming, but it\'s important to remember that it\'s a treatable condition. Small steps toward self-care and connection can make a significant difference.',
    color: 'from-blue-400 to-teal-300',
    bgColor: 'from-blue-50 to-teal-50',
    icon: '🌿',
    tips: [
      'Aim for 10-15 minutes of sunlight daily',
      'Set one small, achievable goal each day',
      'Reach out to one friend or family member',
      'Practice gentle movement like walking or stretching'
    ]
  },
  stress: {
    title: 'Stress',
    description: 'You may be feeling overwhelmed by life\'s demands. Stress is normal, but managing it effectively is crucial for your wellbeing.',
    detailedInfo: 'Chronic stress can impact both physical and mental health. Learning to identify stress triggers and developing healthy coping mechanisms can significantly improve your quality of life.',
    color: 'from-orange-400 to-yellow-300',
    bgColor: 'from-orange-50 to-yellow-50',
    icon: '🍃',
    tips: [
      'Practice time-blocking to organize your day',
      'Learn to say "no" to non-essential commitments',
      'Take 5-minute breaks every hour',
      'Try the "Two-Minute Rule" for small tasks'
    ]
  },
  sleep: {
    title: 'Sleep Concerns',
    description: 'You might be experiencing sleep difficulties. Quality sleep is fundamental to mental and physical health.',
    detailedInfo: 'Sleep issues can significantly impact mood, concentration, and overall wellbeing. Good sleep hygiene and relaxation techniques can help restore healthy sleep patterns.',
    color: 'from-indigo-400 to-purple-300',
    bgColor: 'from-indigo-50 to-purple-50',
    icon: '🌙',
    tips: [
      'Maintain consistent sleep and wake times',
      'Create a technology-free bedroom environment',
      'Try herbal teas like chamomile before bed',
      'Keep your bedroom cool and dark'
    ]
  },
  selfEsteem: {
    title: 'Self-Worth',
    description: 'You may be struggling with self-confidence. Building a healthy relationship with yourself takes time and practice.',
    detailedInfo: 'Low self-esteem can affect all areas of life, but it\'s possible to develop a more compassionate and realistic view of yourself through consistent self-care practices.',
    color: 'from-pink-400 to-rose-300',
    bgColor: 'from-pink-50 to-rose-50',
    icon: '💖',
    tips: [
      'Practice daily self-compassion exercises',
      'Challenge negative self-talk with evidence',
      'Celebrate small accomplishments',
      'Surround yourself with supportive people'
    ]
  },
  loneliness: {
    title: 'Connection',
    description: 'You might be feeling disconnected from others. Human connection is essential, and there are many ways to build meaningful relationships.',
    detailedInfo: 'Loneliness is a common human experience, especially in our digital age. Building connections takes courage and time, but small steps can lead to meaningful relationships.',
    color: 'from-teal-400 to-cyan-300',
    bgColor: 'from-teal-50 to-cyan-50',
    icon: '🤝',
    tips: [
      'Join clubs or groups based on your interests',
      'Volunteer for causes you care about',
      'Reach out to old friends with a simple message',
      'Practice active listening in conversations'
    ]
  },
  focus: {
    title: 'Focus & Productivity',
    description: 'You may be struggling with concentration. In our distraction-filled world, maintaining focus is a skill that can be developed.',
    detailedInfo: 'Difficulty concentrating can stem from various factors including stress, lack of sleep, or information overload. Mindfulness and organizational strategies can significantly improve focus.',
    color: 'from-green-400 to-emerald-300',
    bgColor: 'from-green-50 to-emerald-50',
    icon: '🎯',
    tips: [
      'Use the Pomodoro Technique (25 min work, 5 min break)',
      'Eliminate distractions from your workspace',
      'Practice single-tasking instead of multitasking',
      'Try meditation to improve attention span'
    ]
  },
  anger: {
    title: 'Anger Management',
    description: 'You might be experiencing frequent frustration or anger. Anger is a natural emotion that signals something needs attention.',
    detailedInfo: 'Anger becomes problematic when it\'s frequent, intense, or expressed in harmful ways. Learning healthy expression and coping skills can transform anger into positive action.',
    color: 'from-red-400 to-pink-300',
    bgColor: 'from-red-50 to-pink-50',
    icon: '🔥',
    tips: [
      'Count to 10 before responding when angry',
      'Use physical exercise to release tension',
      'Practice "I" statements instead of "you" statements',
      'Identify triggers and early warning signs'
    ]
  },
  panic: {
    title: 'Panic & Overwhelm',
    description: 'You may experience intense fear or panic episodes. Panic attacks are frightening but not dangerous, and they can be managed.',
    detailedInfo: 'Panic attacks involve intense physical and emotional symptoms that peak quickly. Understanding that they\'re temporary and learning coping techniques can reduce their frequency and intensity.',
    color: 'from-yellow-400 to-orange-300',
    bgColor: 'from-yellow-50 to-orange-50',
    icon: '⚡',
    tips: [
      'Practice box breathing (4-4-4-4 pattern)',
      'Use grounding techniques during episodes',
      'Carry a small comfort object',
      'Remind yourself: "This will pass"'
    ]
  },
  socialAnxiety: {
    title: 'Social Comfort',
    description: 'You might feel anxious in social situations. Social anxiety is common and can be overcome with gradual exposure and confidence-building.',
    detailedInfo: 'Social anxiety can significantly impact quality of life, but it\'s highly treatable. Gradual exposure to social situations combined with relaxation techniques can build confidence over time.',
    color: 'from-violet-400 to-purple-300',
    bgColor: 'from-violet-50 to-purple-50',
    icon: '👥',
    tips: [
      'Start with small, low-pressure social interactions',
      'Prepare conversation topics in advance',
      'Practice relaxation techniques before social events',
      'Focus on listening rather than worrying about what to say'
    ]
  }
};

const categoryLabels = {
  anxiety: 'Anxiety',
  depression: 'Depression',
  stress: 'Stress',
  sleep: 'Sleep Issues',
  selfEsteem: 'Self-Esteem',
  loneliness: 'Loneliness',
  focus: 'Focus Issues',
  anger: 'Anger',
  panic: 'Panic',
  socialAnxiety: 'Social Anxiety'
};

const Results = ({ results, onStartOver }: ResultsProps) => {
  const concern = concernInfo[results.primaryConcern as keyof typeof concernInfo];
  const severityText = results.severity === 'mild' ? 'Mild' : results.severity === 'moderate' ? 'Moderate' : 'High';
  const severityColor = results.severity === 'mild' ? 'bg-green-100 text-green-800' : 
                       results.severity === 'moderate' ? 'bg-yellow-100 text-yellow-800' : 
                       'bg-red-100 text-red-800';

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Results Header */}
        <Card className={`bg-gradient-to-br ${concern.bgColor} shadow-2xl rounded-3xl border-0 mb-8 animate-fade-in`}>
          <CardHeader className="text-center pb-4">
            <div className="text-8xl mb-6">{concern.icon}</div>
            <CardTitle className="text-4xl font-bold text-gray-800 mb-4">
              {concern.title}
            </CardTitle>
            <div className={`inline-block px-6 py-3 rounded-full ${severityColor} text-lg font-semibold mb-6`}>
              {severityText} Level - {results.primaryPercentage}%
            </div>
          </CardHeader>
          <CardContent className="text-center px-8 pb-8">
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
              {concern.description}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
              {concern.detailedInfo}
            </p>
            
            <div className="bg-white/60 p-6 rounded-2xl mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Tips for You:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {concern.tips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* All Scores Overview */}
        <Card className="bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl border-0 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-gray-800">
              📊 Your Complete Assessment Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {results.allScores.map((score: any, index: number) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-2xl">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {categoryLabels[score.category as keyof typeof categoryLabels]}
                  </h4>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-purple-600">{score.percentage}%</div>
                    <div className={`px-3 py-1 rounded-full text-sm ${
                      score.percentage <= 40 ? 'bg-green-100 text-green-800' :
                      score.percentage <= 70 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {score.percentage <= 40 ? 'Mild' : score.percentage <= 70 ? 'Moderate' : 'High'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Interactive Games Section */}
        <InteractiveGames />

        {/* Coping Strategies */}
        <CopingStrategies primaryConcern={results.primaryConcern} />

        {/* Action Buttons */}
        <div className="text-center mt-12">
          <Button
            onClick={onStartOver}
            variant="outline"
            className="px-12 py-4 text-lg rounded-full border-purple-300 text-purple-600 hover:bg-purple-50 transition-all duration-300"
          >
            Take Assessment Again
          </Button>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-12 p-8 bg-white/70 rounded-3xl backdrop-blur-sm">
          <p className="text-gray-600 italic text-lg">
            "You're not alone in this journey. Healing takes time, and every moment of self-care matters." 🌱
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;
