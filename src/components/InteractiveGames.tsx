
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const InteractiveGames = () => {
  // Memory Game States
  const [memoryCards, setMemoryCards] = useState<string[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [memoryScore, setMemoryScore] = useState(0);
  const [memoryMoves, setMemoryMoves] = useState(0);

  // Breathing Exercise States
  const [breathingActive, setBreathingActive] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [breathingTimer, setBreathingTimer] = useState(0);
  const [breathingCycle, setBreathingCycle] = useState(0);

  // Color Tap Game States
  const [colorTapScore, setColorTapScore] = useState(0);
  const [targetColor, setTargetColor] = useState<string>('');
  const [colorGameActive, setColorGameActive] = useState(false);
  const [colorGameTimer, setColorGameTimer] = useState(30);
  const [colorGameTimeLeft, setColorGameTimeLeft] = useState(30);

  const colors = ['🔴', '🟡', '🟢', '🔵', '🟣', '🟠'];
  const calmingEmojis = ['🌸', '🌿', '🦋', '🌙', '⭐', '🌊', '🕊️', '🌱', '🌺', '🍃', '☁️', '🌻'];

  // Initialize Memory Game with more cards
  const initializeMemoryGame = () => {
    const gameEmojis = [...calmingEmojis.slice(0, 8), ...calmingEmojis.slice(0, 8)];
    const shuffled = gameEmojis.sort(() => Math.random() - 0.5);
    setMemoryCards(shuffled);
    setFlippedCards([]);
    setMatchedCards([]);
    setMemoryScore(0);
    setMemoryMoves(0);
  };

  const handleCardFlip = (index: number) => {
    if (flippedCards.length === 2 || flippedCards.includes(index) || matchedCards.includes(index)) return;
    
    const newFlipped = [...flippedCards, index];
    setFlippedCards(newFlipped);
    
    if (newFlipped.length === 2) {
      setMemoryMoves(memoryMoves + 1);
      
      if (memoryCards[newFlipped[0]] === memoryCards[newFlipped[1]]) {
        setMatchedCards([...matchedCards, ...newFlipped]);
        setMemoryScore(memoryScore + 10);
        setFlippedCards([]);
      } else {
        setTimeout(() => setFlippedCards([]), 1000);
      }
    }
  };

  // Breathing Exercise with proper timing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (breathingActive) {
      interval = setInterval(() => {
        setBreathingTimer(prev => {
          const newTime = prev + 1;
          
          if (breathingPhase === 'inhale' && newTime >= 4) {
            setBreathingPhase('hold');
            return 0;
          } else if (breathingPhase === 'hold' && newTime >= 7) {
            setBreathingPhase('exhale');
            return 0;
          } else if (breathingPhase === 'exhale' && newTime >= 8) {
            setBreathingPhase('inhale');
            setBreathingCycle(prev => prev + 1);
            return 0;
          }
          
          return newTime;
        });
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [breathingActive, breathingPhase]);

  const startBreathingExercise = () => {
    setBreathingActive(true);
    setBreathingPhase('inhale');
    setBreathingTimer(0);
    setBreathingCycle(0);
  };

  const stopBreathingExercise = () => {
    setBreathingActive(false);
    setBreathingTimer(0);
  };

  // Color Tap Game with timer
  const startColorTap = () => {
    setColorTapScore(0);
    setColorGameActive(true);
    setColorGameTimeLeft(30);
    setTargetColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (colorGameActive && colorGameTimeLeft > 0) {
      interval = setInterval(() => {
        setColorGameTimeLeft(prev => {
          if (prev <= 1) {
            setColorGameActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [colorGameActive, colorGameTimeLeft]);

  const handleColorTap = (color: string) => {
    if (!colorGameActive) return;
    
    if (color === targetColor) {
      setColorTapScore(colorTapScore + 1);
      setTargetColor(colors[Math.floor(Math.random() * colors.length)]);
    }
  };

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        🎮 Interactive Mood Boosters
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Memory Matching Game */}
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg rounded-3xl border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-semibold text-gray-800 flex items-center justify-center gap-2">
              🧠 Memory Match
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-4">Match the calming symbols to improve focus</p>
            <div className="mb-4">
              <p className="text-sm text-gray-600">Score: {memoryScore} | Moves: {memoryMoves}</p>
            </div>
            <Button onClick={initializeMemoryGame} className="mb-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full">
              Start Game
            </Button>
            {memoryCards.length > 0 && (
              <div className="grid grid-cols-4 gap-2">
                {memoryCards.map((emoji, index) => (
                  <button
                    key={index}
                    onClick={() => handleCardFlip(index)}
                    className={`w-12 h-12 rounded-xl border-2 text-lg transition-all duration-300 ${
                      flippedCards.includes(index) || matchedCards.includes(index)
                        ? 'bg-white border-blue-300'
                        : 'bg-gray-200 border-gray-300 hover:bg-gray-300'
                    }`}
                  >
                    {flippedCards.includes(index) || matchedCards.includes(index) ? emoji : '?'}
                  </button>
                ))}
              </div>
            )}
            {matchedCards.length === memoryCards.length && memoryCards.length > 0 && (
              <div className="mt-4 p-3 bg-green-100 rounded-xl">
                <p className="text-green-800 font-semibold">🎉 Congratulations!</p>
                <p className="text-green-700 text-sm">Score: {memoryScore} in {memoryMoves} moves</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Breathing Exercise */}
        <Card className="bg-gradient-to-br from-green-50 to-teal-50 shadow-lg rounded-3xl border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-semibold text-gray-800 flex items-center justify-center gap-2">
              🫁 Breathing Circle
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-4">Follow the circle for 4-7-8 breathing</p>
            <div className="flex justify-center mb-4">
              <div 
                className={`w-24 h-24 rounded-full border-4 transition-all duration-1000 flex items-center justify-center ${
                  breathingActive 
                    ? breathingPhase === 'inhale' 
                      ? 'border-green-400 scale-125' 
                      : breathingPhase === 'hold'
                      ? 'border-yellow-400 scale-125'
                      : 'border-blue-400 scale-75'
                    : 'border-gray-300'
                }`}
              >
                {breathingActive && (
                  <span className="text-lg font-bold text-gray-600">{breathingTimer}</span>
                )}
              </div>
            </div>
            {breathingActive && (
              <div className="mb-4">
                <p className="text-lg font-medium text-gray-700">
                  {breathingPhase === 'inhale' && 'Breathe In (4s)'}
                  {breathingPhase === 'hold' && 'Hold (7s)'}
                  {breathingPhase === 'exhale' && 'Breathe Out (8s)'}
                </p>
                <p className="text-sm text-gray-600">Cycle: {breathingCycle}</p>
              </div>
            )}
            <Button 
              onClick={breathingActive ? stopBreathingExercise : startBreathingExercise}
              className={`rounded-full ${
                breathingActive 
                  ? 'bg-red-500 hover:bg-red-600' 
                  : 'bg-green-500 hover:bg-green-600'
              } text-white`}
            >
              {breathingActive ? 'Stop' : 'Start Breathing'}
            </Button>
          </CardContent>
        </Card>

        {/* Color Tap Game */}
        <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 shadow-lg rounded-3xl border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-semibold text-gray-800 flex items-center justify-center gap-2">
              🎨 Color Focus
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-4">Tap the matching color quickly!</p>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Score: {colorTapScore}</span>
                <span className="text-sm text-gray-600">Time: {colorGameTimeLeft}s</span>
              </div>
              {targetColor && colorGameActive && (
                <p className="text-lg">Find: <span className="text-2xl">{targetColor}</span></p>
              )}
            </div>
            <Button 
              onClick={startColorTap} 
              disabled={colorGameActive}
              className="mb-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full disabled:opacity-50"
            >
              {colorGameActive ? 'Playing...' : 'Start Game'}
            </Button>
            {targetColor && (
              <div className="grid grid-cols-3 gap-2">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => handleColorTap(color)}
                    disabled={!colorGameActive}
                    className="w-12 h-12 rounded-xl border-2 border-gray-300 hover:border-gray-400 text-2xl transition-all duration-200 hover:scale-110 disabled:opacity-50"
                  >
                    {color}
                  </button>
                ))}
              </div>
            )}
            {!colorGameActive && colorTapScore > 0 && (
              <div className="mt-4 p-3 bg-yellow-100 rounded-xl">
                <p className="text-yellow-800 font-semibold">Game Over!</p>
                <p className="text-yellow-700 text-sm">Final Score: {colorTapScore}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InteractiveGames;
