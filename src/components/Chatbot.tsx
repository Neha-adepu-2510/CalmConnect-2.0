
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! I'm here to support you on your mental wellness journey. How are you feeling today? You can ask me about managing anxiety, improving mood, sleep tips, or any other mental health concerns.", isUser: false }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const responses = {
    'overthinking': [
      "Overthinking can be exhausting. Try the 'STOP' technique: Stop what you're doing, Take a breath, Observe your thoughts without judgment, Proceed with intention.",
      "When caught in thought loops, try the 5-4-3-2-1 grounding technique: Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste.",
      "Set aside 'worry time' - 15 minutes daily to write down all your worries, then mentally put them aside until tomorrow's worry time."
    ],
    'lonely': [
      "Feeling lonely is difficult, but remember you're not alone in this experience. Consider reaching out to one person today with a simple text or call.",
      "Try joining online communities with shared interests, volunteering for causes you care about, or attending local events where you might meet like-minded people.",
      "Sometimes loneliness is about quality, not quantity of connections. Focus on deepening one meaningful relationship rather than having many surface-level ones."
    ],
    'sleep': [
      "For better sleep, create a calming bedtime routine: dim lights 1 hour before bed, avoid screens, try gentle stretches or meditation.",
      "Keep your bedroom cool (65-68°F), dark, and quiet. Consider blackout curtains or a white noise machine if needed.",
      "If racing thoughts keep you up, try the '4-7-8' breathing technique or write down tomorrow's tasks to clear your mind."
    ],
    'anxiety': [
      "When anxiety strikes, remember: this feeling is temporary and you are safe. Try grounding techniques like naming 5 things you can see, 4 you can touch, 3 you can hear.",
      "Practice the 'RAIN' technique: Recognize what's happening, Allow the experience to be there, Investigate with kindness, Natural awareness - not identifying with the experience.",
      "Box breathing can help: Inhale for 4, hold for 4, exhale for 4, hold for 4. Repeat 4-6 times to activate your body's relaxation response."
    ],
    'sad': [
      "It's okay to feel sad - emotions are temporary visitors. Be gentle with yourself and remember that seeking help is a sign of strength.",
      "Try doing one small thing you enjoy, get some sunlight for 10-15 minutes, or reach out to someone who cares about you.",
      "Depression can make everything feel overwhelming. Start with tiny steps: take a shower, make your bed, or step outside for fresh air."
    ],
    'stressed': [
      "When stress feels overwhelming, break tasks into smaller steps. You don't have to handle everything at once.",
      "Practice saying 'no' to extra commitments when you're already feeling stretched. Your wellbeing comes first.",
      "Take 5-10 minute breaks throughout your day. Even a short walk or few deep breaths can help reset your nervous system."
    ],
    'angry': [
      "Anger often signals that something important to you has been threatened. Before reacting, try counting to 10 or taking deep breaths.",
      "Physical release can help: try going for a walk, doing jumping jacks, or even squeezing a stress ball to release tension.",
      "Practice 'I' statements instead of 'you' statements when expressing anger: 'I feel frustrated when...' rather than 'You always...'"
    ],
    'panic': [
      "Panic attacks are frightening but not dangerous. Remind yourself: 'This will pass' and 'I am safe.'",
      "Try the 5-4-3-2-1 technique: 5 things you see, 4 you touch, 3 you hear, 2 you smell, 1 you taste. This grounds you in the present moment.",
      "Breathe slowly and deeply. Hold your breath slightly longer on the exhale to activate your body's calming response."
    ],
    'focus': [
      "Difficulty concentrating is common, especially with stress. Try the Pomodoro Technique: 25 minutes focused work, 5 minute break.",
      "Eliminate distractions from your workspace and practice single-tasking instead of multitasking.",
      "Meditation, even just 5 minutes daily, can significantly improve your attention span over time."
    ],
    'motivation': [
      "Low motivation is often a sign you need rest or a different approach. Start with the smallest possible step toward your goal.",
      "Connect with your 'why' - remind yourself of the deeper reasons behind what you want to accomplish.",
      "Celebrate small wins! Progress isn't always linear, and every small step forward matters."
    ],
    'selfcare': [
      "Self-care isn't selfish - it's essential. Start small: take a relaxing bath, read a book, or spend time in nature.",
      "Self-care looks different for everyone. It might be saying no to commitments, calling a friend, or simply taking deep breaths.",
      "Physical self-care: adequate sleep, nutritious food, movement. Emotional self-care: boundaries, expressing feelings, seeking support."
    ],
    'relationships': [
      "Healthy relationships require communication, boundaries, and mutual respect. It's okay to speak up for your needs.",
      "If someone consistently drains your energy or disrespects your boundaries, it might be time to reassess that relationship.",
      "Quality over quantity applies to relationships too. Focus on nurturing connections that bring mutual joy and support."
    ]
  };

  const getRandomResponse = (responseArray: string[]) => {
    return responseArray[Math.floor(Math.random() * responseArray.length)];
  };

  const getResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    // Check for multiple keywords and respond accordingly
    if (lowerMessage.includes('overthink') || lowerMessage.includes('racing thoughts') || lowerMessage.includes('worry') || lowerMessage.includes('ruminating')) {
      return getRandomResponse(responses.overthinking);
    } else if (lowerMessage.includes('lonely') || lowerMessage.includes('isolated') || lowerMessage.includes('alone') || lowerMessage.includes('disconnected')) {
      return getRandomResponse(responses.lonely);
    } else if (lowerMessage.includes('sleep') || lowerMessage.includes('insomnia') || lowerMessage.includes('tired') || lowerMessage.includes('rest')) {
      return getRandomResponse(responses.sleep);
    } else if (lowerMessage.includes('anxious') || lowerMessage.includes('anxiety') || lowerMessage.includes('panic') || lowerMessage.includes('nervous')) {
      return getRandomResponse(responses.anxiety);
    } else if (lowerMessage.includes('sad') || lowerMessage.includes('depressed') || lowerMessage.includes('down') || lowerMessage.includes('hopeless')) {
      return getRandomResponse(responses.sad);
    } else if (lowerMessage.includes('stress') || lowerMessage.includes('overwhelmed') || lowerMessage.includes('pressure') || lowerMessage.includes('burden')) {
      return getRandomResponse(responses.stressed);
    } else if (lowerMessage.includes('angry') || lowerMessage.includes('frustrated') || lowerMessage.includes('mad') || lowerMessage.includes('irritated')) {
      return getRandomResponse(responses.angry);
    } else if (lowerMessage.includes('panic') || lowerMessage.includes('attack') || lowerMessage.includes('heart racing')) {
      return getRandomResponse(responses.panic);
    } else if (lowerMessage.includes('focus') || lowerMessage.includes('concentrate') || lowerMessage.includes('attention') || lowerMessage.includes('distracted')) {
      return getRandomResponse(responses.focus);
    } else if (lowerMessage.includes('motivation') || lowerMessage.includes('unmotivated') || lowerMessage.includes('lazy') || lowerMessage.includes('procrastinate')) {
      return getRandomResponse(responses.motivation);
    } else if (lowerMessage.includes('self care') || lowerMessage.includes('self-care') || lowerMessage.includes('care for myself')) {
      return getRandomResponse(responses.selfcare);
    } else if (lowerMessage.includes('relationship') || lowerMessage.includes('family') || lowerMessage.includes('friend') || lowerMessage.includes('partner')) {
      return getRandomResponse(responses.relationships);
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! I'm glad you reached out. I'm here to help with any mental wellness questions or concerns you might have. What's on your mind today?";
    } else if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return "You're so welcome! I'm here whenever you need support. Remember, taking care of your mental health is a brave and important step. 💙";
    } else if (lowerMessage.includes('help') || lowerMessage.includes('support')) {
      return "I'm here to help! You can ask me about managing anxiety, improving mood, sleep issues, stress relief, building confidence, or any other mental wellness topic. What would you like to explore?";
    } else {
      const generalResponses = [
        "I understand you're going through something difficult. Remember that seeking help is a sign of strength, not weakness. Every small step toward caring for yourself matters.",
        "Your feelings are valid, and it's okay to not be okay sometimes. What specific area would you like support with today - anxiety, mood, sleep, or stress management?",
        "Thank you for sharing with me. Mental wellness is a journey, not a destination. What's one small thing you could do for yourself today to feel a little better?",
        "I hear you, and I want you to know that you're not alone in this. Many people face similar challenges. Is there a particular aspect of your mental health you'd like to focus on right now?"
      ];
      return getRandomResponse(generalResponses);
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessages = [
        ...messages,
        { text: inputMessage, isUser: true },
        { text: getResponse(inputMessage), isUser: false }
      ];
      setMessages(newMessages);
      setInputMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-gradient-to-r from-purple-400 to-pink-300 hover:from-purple-500 hover:to-pink-400 shadow-lg hover:shadow-xl transition-all duration-300 text-2xl z-50 animate-gentle-float"
        >
          💬
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[600px] bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl border-0 z-50 animate-fade-in flex flex-col">
          <CardHeader className="bg-gradient-to-r from-purple-400 to-pink-300 text-white rounded-t-3xl p-4 flex-shrink-0">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-lg">CalmConnect Helper 🌸</CardTitle>
                <p className="text-sm opacity-90">Your mental wellness companion</p>
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                className="text-white hover:bg-white/20 h-8 w-8 p-0 rounded-full"
              >
                ×
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="flex flex-col h-full p-4 overflow-hidden">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-2xl max-w-[85%] ${
                    message.isUser
                      ? 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 ml-auto'
                      : 'bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800'
                  } animate-fade-in`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex space-x-2 flex-shrink-0">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="How can I support you today?"
                className="flex-1 rounded-full border-gray-300 focus:border-purple-400"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-purple-400 to-pink-300 hover:from-purple-500 hover:to-pink-400 rounded-full w-12 h-12 p-0 flex-shrink-0"
              >
                ↑
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
