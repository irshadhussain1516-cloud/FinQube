import { PieChart, LineChart, Search, BookOpen, Gamepad2 } from 'lucide-react';

interface AppCard {
  title: string;
  icon: React.ReactNode;
  url: string;
}

function App() {
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

        <footer className="mt-16 sm:mt-20 text-center text-gray-400 border-t border-gray-800 pt-8">
          <p className="text-sm">
            © 2026 FinQube. Empowering investors with intelligent financial tools.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
