
import { useState } from 'react';
import Header from '../components/Header';
import Questionnaire from '../components/Questionnaire';
import Results from '../components/Results';
import Chatbot from '../components/Chatbot';

const Index = () => {
  const [currentStep, setCurrentStep] = useState<'welcome' | 'questionnaire' | 'results'>('welcome');
  const [questionnaireResults, setQuestionnaireResults] = useState<any>(null);

  const handleStartQuestionnaire = () => {
    setCurrentStep('questionnaire');
  };

  const handleQuestionnaireComplete = (results: any) => {
    setQuestionnaireResults(results);
    setCurrentStep('results');
  };

  const handleStartOver = () => {
    setCurrentStep('welcome');
    setQuestionnaireResults(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender via-mint to-softBlue font-poppins">
      {currentStep === 'welcome' && (
        <Header onStartQuestionnaire={handleStartQuestionnaire} />
      )}
      
      {currentStep === 'questionnaire' && (
        <Questionnaire onComplete={handleQuestionnaireComplete} />
      )}
      
      {currentStep === 'results' && questionnaireResults && (
        <Results 
          results={questionnaireResults} 
          onStartOver={handleStartOver}
        />
      )}
      
      <Chatbot />
    </div>
  );
};

export default Index;
