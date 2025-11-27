import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  PlayCircle, 
  FileText, 
  TrendingUp, 
  Clock, 
  Award,
  LogOut,
  Cpu,
  BarChart3
} from 'lucide-react';

export default function DashboardPage() {
  const navigate = useNavigate();

  const handleStartInterview = () => {
    navigate('/interview');
  };

  const handleViewReports = () => {
    navigate('/reports');
  };

  const handleLogout = () => {
    navigate('/');
  };

  const recentSessions = [
    { id: 1, role: 'Software Engineer', date: '2024-11-20', score: 85 },
    { id: 2, role: 'Product Manager', date: '2024-11-18', score: 78 },
    { id: 3, role: 'Data Scientist', date: '2024-11-15', score: 92 }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navbar */}
      <nav className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Cpu className="text-white w-5 h-5" />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Interview<span className="text-blue-500">AI</span>
              </span>
            </div>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <LogOut className="w-5 h-5" />
              
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">Welcome back!</h1>
          <p className="text-slate-400 text-lg">Ready to practice for your next interview?</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <PlayCircle className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">12</span>
            </div>
            <p className="text-slate-400 text-sm">Total Sessions</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-green-400" />
              <span className="text-2xl font-bold text-white">85%</span>
            </div>
            <p className="text-slate-400 text-sm">Avg Score</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Clock className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">24h</span>
            </div>
            <p className="text-slate-400 text-sm">Practice Time</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Award className="w-8 h-8 text-yellow-400" />
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <p className="text-slate-400 text-sm">Achievements</p>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <button
            onClick={handleStartInterview}
            className="bg-linear-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl p-8 text-left transition-all transform hover:scale-105 shadow-xl shadow-blue-600/20"
          >
            <PlayCircle className="w-12 h-12 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Start New Interview</h2>
            <p className="text-blue-100 text-sm">
              Begin a mock interview session with our AI interviewer
            </p>
          </button>

          <button
            onClick={handleViewReports}
            className="bg-slate-900 border border-slate-800 hover:border-purple-500/50 text-white rounded-2xl p-8 text-left transition-all transform hover:scale-105"
          >
            <BarChart3 className="w-12 h-12 mb-4 text-purple-400" />
            <h2 className="text-2xl font-bold mb-2">View Reports</h2>
            <p className="text-slate-400 text-sm">
              Analyze your performance and track your improvement
            </p>
          </button>
        </div>

        {/* Recent Sessions */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Recent Sessions</h2>
            <button 
              onClick={handleViewReports}
              className="text-blue-400 hover:text-blue-300 text-sm font-medium"
            >
              View All
            </button>
          </div>

          <div className="space-y-4">
            {recentSessions.map((session) => (
              <div 
                key={session.id}
                className="flex items-center justify-between p-4 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-slate-600 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-slate-700 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-slate-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{session.role}</h3>
                    <p className="text-slate-400 text-sm">{session.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-white font-bold text-lg">{session.score}%</p>
                    <p className="text-slate-400 text-xs">Score</p>
                  </div>
                  <div className={`w-16 h-2 rounded-full bg-slate-700 overflow-hidden`}>
                    <div 
                      className={`h-full ${
                        session.score >= 85 ? 'bg-green-500' : 
                        session.score >= 70 ? 'bg-yellow-500' : 
                        'bg-red-500'
                      }`}
                      style={{ width: `${session.score}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
