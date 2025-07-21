
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface QuestionnaireProps {
  onComplete: (results: any) => void;
}

const questions = [
  { id: 'anxiety1', text: 'How often do you feel worried, nervous, or anxious?', category: 'anxiety' },
  { id: 'anxiety2', text: 'How often do you have trouble controlling your worries?', category: 'anxiety' },
  { id: 'depression1', text: 'How often do you feel sad, hopeless, or empty?', category: 'depression' },
  { id: 'depression2', text: 'How often do you lose interest in activities you used to enjoy?', category: 'depression' },
  { id: 'stress1', text: 'How often do you feel overwhelmed by daily pressures?', category: 'stress' },
  { id: 'stress2', text: 'How often do you feel like you have too much to handle?', category: 'stress' },
  { id: 'sleep1', text: 'How often do you have trouble falling or staying asleep?', category: 'sleep' },
  { id: 'sleep2', text: 'How often do you wake up feeling tired or unrefreshed?', category: 'sleep' },
  { id: 'selfEsteem1', text: 'How often do you doubt yourself or feel inadequate?', category: 'selfEsteem' },
  { id: 'selfEsteem2', text: 'How often do you compare yourself negatively to others?', category: 'selfEsteem' },
  { id: 'loneliness1', text: 'How often do you feel isolated or disconnected from others?', category: 'loneliness' },
  { id: 'loneliness2', text: 'How often do you feel like you have no one to talk to?', category: 'loneliness' },
  { id: 'focus1', text: 'How often do you struggle with concentration or productivity?', category: 'focus' },
  { id: 'focus2', text: 'How often do you find your mind wandering during important tasks?', category: 'focus' },
  { id: 'anger1', text: 'How often do you feel irritated, frustrated, or angry?', category: 'anger' },
  { id: 'anger2', text: 'How often do you have trouble controlling your temper?', category: 'anger' },
  { id: 'panic1', text: 'How often do you experience sudden intense fear or panic?', category: 'panic' },
  { id: 'panic2', text: 'How often do you worry about having panic attacks?', category: 'panic' },
  { id: 'socialAnxiety1', text: 'How often do you feel anxious in social situations?', category: 'socialAnxiety' },
  { id: 'socialAnxiety2', text: 'How often do you avoid social gatherings due to anxiety?', category: 'socialAnxiety' }
];

const options = [
  { value: 1, label: 'Never', color: 'bg-green-100 hover:bg-green-200 text-green-800' },
  { value: 2, label: 'Rarely', color: 'bg-blue-100 hover:bg-blue-200 text-blue-800' },
  { value: 3, label: 'Sometimes', color: 'bg-yellow-100 hover:bg-yellow-200 text-yellow-800' },
  { value: 4, label: 'Often', color: 'bg-orange-100 hover:bg-orange-200 text-orange-800' },
  { value: 5, label: 'Very Often', color: 'bg-red-100 hover:bg-red-200 text-red-800' }
];

const Questionnaire = ({ onComplete }: QuestionnaireProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});

  const handleAnswerSelect = (value: number) => {
    const newAnswers = {
      ...answers,
      [questions[currentQuestion].id]: value
    };
    setAnswers(newAnswers);

    // Auto-advance to next question or show results
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        const results = calculateResults(newAnswers);
        onComplete(results);
      }
    }, 500);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = (answers: { [key: string]: number }) => {
    const categoryScores: { [key: string]: number[] } = {};
    
    questions.forEach(question => {
      const score = answers[question.id] || 1;
      if (!categoryScores[question.category]) {
        categoryScores[question.category] = [];
      }
      categoryScores[question.category].push(score);
    });

    const categoryAverages = Object.entries(categoryScores).map(([category, scores]) => ({
      category,
      average: scores.reduce((a, b) => a + b, 0) / scores.length,
      percentage: Math.round(((scores.reduce((a, b) => a + b, 0) / scores.length) / 5) * 100)
    }));

    const sortedCategories = categoryAverages.sort((a, b) => b.average - a.average);
    const topCategory = sortedCategories[0];

    return {
      primaryConcern: topCategory.category,
      severity: topCategory.average <= 2 ? 'mild' : topCategory.average <= 3.5 ? 'moderate' : 'high',
      averageScore: topCategory.average,
      primaryPercentage: topCategory.percentage,
      allScores: categoryAverages
    };
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentAnswer = answers[questions[currentQuestion].id];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <Card className="w-full max-w-3xl bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl border-0 animate-fade-in">
        <CardContent className="p-8">
          <div className="mb-8">
            <Progress value={progress} className="h-3 bg-gray-200" />
            <div className="flex justify-between text-sm text-gray-600 mt-3">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8 leading-relaxed text-center">
              {questions[currentQuestion].text}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswerSelect(option.value)}
                  className={`p-4 rounded-2xl border-2 transition-all duration-300 text-center ${
                    currentAnswer === option.value
                      ? `${option.color} border-gray-400 scale-105 shadow-lg`
                      : `${option.color} border-transparent hover:scale-102`
                  }`}
                >
                  <div className="font-medium text-sm">{option.label}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-start">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="px-8 py-3 rounded-full border-purple-300 hover:border-purple-400 disabled:opacity-50"
            >
              Previous
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Questionnaire;
