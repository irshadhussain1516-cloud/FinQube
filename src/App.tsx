import { useState } from 'react';
import { PieChart, LineChart, Search, BookOpen, Gamepad2, MessageSquare, X, Send } from 'lucide-react';

interface AppCard {
  title: string;
  icon: React.ReactNode;
  url: string;
}

interface ChatMessage {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const chatbotResponses: Record<string, string> = {
  'what is finqube': 'FinQube is an AI-powered platform for retail investors using LSTM and NLP for market insights.',
  'how do i use the game': 'Click the "Stock Market Game" card to practice trading in a risk-free environment.',
  'what is lstm': 'Long Short-Term Memory (LSTM) is a type of AI we use to predict future stock prices based on historical trends.',
  'who is this for': 'FinQube is specifically designed for students and novice investors.',
};

const quickQuestions = [
  'What is FinQube?',
  'What is LSTM?',
  'How do I use the Game?',
  'Who is this for?',
];

function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      text: text.trim(),
      sender: 'user',
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    const query = text.toLowerCase();
    let botResponse = 'I\'m a rule-based assistant. Try asking "What is FinQube?" or "What is LSTM?"';

    for (const [key, value] of Object.entries(chatbotResponses)) {
      if (query.includes(key)) {
        botResponse = value;
        break;
      }
    }

    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  const apps: AppCard[] = [
    {
      title: 'Portfolio Optimization',
      icon: <PieChart className="w-8 h-8" />,
      url: 'https://stock-portfolio-app-9atvvmatekvqx6me52uwue.streamlit.app/',
    },
    {
      title: 'Stock Price Prediction',
      icon: <LineChart className="w-8 h-8" />,
      url: 'https://stock-prediction-lstm-tzkmgbpkao3986lx6pmljx.streamlit.app/',
    },
    {
      title: 'Sentiment Analysis',
      icon: <Search className="w-8 h-8" />,
      url: 'https://stock-prediction-sentiment-7wqm6az4czipqpkwtfecya.streamlit.app/',
    },
    {
      title: 'Learning Hub',
      icon: <BookOpen className="w-8 h-8" />,
      url: 'https://finqube-learning-app-87bwxxpee8bappxolnfxtnf.streamlit.app/',
    },
    {
      title: 'Stock Market Game',
      icon: <Gamepad2 className="w-8 h-8" />,
      url: 'https://marvelous-liger-069676.netlify.app/',
    },
  ];

  const keyGoals = [
    'Reduce emotional investing',
    'Promote data-backed decision making',
    'Provide institutional-grade tools to retail investors',
    'Make financial intelligence accessible to everyone',
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <nav className="bg-[#1e293b] border-b border-gray-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <img
            src="/WhatsApp_Image_2026-02-22_at_10.09.11_AM.jpeg"
            alt="FinQube Logo"
            className="h-10 sm:h-12"
          />
          <div className="text-gray-400 text-sm">Finance Intelligence Platform</div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <header className="text-center mb-16 sm:mb-20">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            FinQube
          </h1>
          <p className="text-xl sm:text-2xl text-[#3b82f6] font-medium mb-6">
            Your One Stop Finance Intelligence Platform
          </p>
          <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            FinQube is an AI-powered financial intelligence platform designed to help retail
            investors make smarter, data-driven decisions. In today's fast-moving markets, emotions
            and noise often dominate investment choices. FinQube transforms raw financial data into
            structured insights using advanced analytics, artificial intelligence, and intelligent
            market interpretation tools.
          </p>
        </header>

        <section className="mb-16 sm:mb-20">
          <div className="bg-[#1e293b] rounded-2xl p-8 sm:p-10 lg:p-12 shadow-2xl border border-gray-800 hover:border-[#3b82f6] transition-all duration-300">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#3b82f6]">Our Mission</h2>
            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
              Our mission is to empower retail investors with intelligent financial tools that
              combine Artificial Intelligence, quantitative analysis, and structured learning.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {keyGoals.map((goal, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 bg-[#0f172a] p-4 rounded-lg border border-gray-800 hover:border-[#3b82f6] transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full mt-2"></div>
                  <p className="text-gray-200">{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
            Explore Our <span className="text-[#3b82f6]">Intelligence Tools</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {apps.map((app, index) => (
              <div
                key={index}
                className="bg-[#1e293b] rounded-xl p-6 sm:p-8 border border-gray-800 hover:border-[#3b82f6] hover:shadow-2xl hover:shadow-[#3b82f6]/20 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-[#0f172a] rounded-full border border-gray-800 group-hover:border-[#3b82f6] group-hover:bg-[#3b82f6]/10 transition-all duration-300 text-[#3b82f6]">
                    {app.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#3b82f6] transition-colors duration-300">
                    {app.title}
                  </h3>
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-6 py-3 bg-[#3b82f6] text-white font-medium rounded-lg hover:bg-[#2563eb] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#3b82f6]/50"
                  >
                    Launch Tool
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-16 sm:mt-20 text-center text-gray-400 border-t border-gray-800 pt-8 pb-4">
          <p className="text-sm mb-2">
            © 2026 FinQube. Empowering investors with intelligent financial tools.
          </p>
          <p className="text-xs text-gray-500">
            Made with love by <span className="text-[#3b82f6]">Devansh</span> and <span className="text-[#3b82f6]">Hamza</span> under the guidance of <span className="text-[#3b82f6]">Dr. Gayathri M</span>
          </p>
        </footer>
      </div>

      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-6 right-6 p-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-full shadow-lg hover:shadow-[#3b82f6]/50 transition-all duration-300 z-40"
        aria-label="Open chatbot"
      >
        {chatOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>

      {chatOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-48px)] bg-slate-900 border border-gray-700 rounded-2xl shadow-2xl flex flex-col z-40 h-96 sm:h-[500px]">
          <div className="bg-[#1e293b] border-b border-gray-700 p-4 rounded-t-2xl">
            <h3 className="font-semibold text-white">FinQube Assistant</h3>
            <p className="text-xs text-gray-400">Rule-based helper</p>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-gray-400 text-sm text-center py-4">
                <p>Hello! I'm here to help.</p>
                <p>Click a question below or type your own.</p>
              </div>
            )}
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                    msg.sender === 'user'
                      ? 'bg-[#3b82f6] text-white rounded-br-none'
                      : 'bg-[#1e293b] text-gray-200 rounded-bl-none border border-gray-700'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-700 p-3 space-y-3">
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  className="text-xs px-3 py-1.5 bg-[#1e293b] hover:bg-[#2d3b52] text-gray-300 rounded-full border border-gray-700 hover:border-[#3b82f6] transition-all duration-200"
                >
                  {q}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                placeholder="Ask a question..."
                className="flex-1 px-3 py-2 bg-[#1e293b] border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#3b82f6] transition-colors"
              />
              <button
                onClick={() => handleSendMessage(inputValue)}
                className="px-3 py-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-lg transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
