import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Mic, 
  MessageSquare, 
  BarChart3, 
  CheckCircle2, 
  Play, 
  Cpu,
  Shield,
  Zap,
  Brain,
  Users,
  Calendar,
  Award,
  Star,
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp,
  Clock
} from 'lucide-react';

// --- Components ---

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-linear-to-br from-slate-950 via-purple-950 to-slate-950 overflow-hidden pt-24 pb-24 lg:pt-32 lg:pb-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-purple-600/30 blur-[140px] animate-pulse" />
        <div className="absolute -bottom-[40%] -right-[20%] w-[70%] h-[70%] rounded-full bg-blue-600/30 blur-[140px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] rounded-full bg-pink-600/20 blur-[120px] animate-pulse" style={{ animationDelay: '4s' }} />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-cyan-600/15 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-white/90 text-sm font-semibold">Powered by Advanced AI Technology</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-8 leading-[1.1] animate-slide-up">
            Ace Your Next
            <span className="block bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mt-2 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
              Job Interview
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-medium animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Practice with AI-powered mock interviews. Get real-time feedback, improve your skills, and land your dream job with confidence.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <button 
              onClick={() => navigate('/login')}
              className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all transform hover:scale-105 shadow-2xl shadow-white/30 hover:shadow-white/40 border-2 border-white/20"
            >
              Start Practicing Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-black text-lg text-white border-2 border-white/40 hover:bg-white/20 hover:border-white/60 transition-all backdrop-blur-md shadow-lg hover:shadow-xl">
              <Play className="w-5 h-5 fill-current" />
              Watch Demo
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/90 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-9 h-9 rounded-full bg-white/30 border-2 border-slate-900 flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                ))}
              </div>
              <span className="font-bold">10,000+ users</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-bold">4.9/5 rating</span>
            </div>
          </div>
        </div>

        {/* Hero Image/Dashboard Preview */}
        <div className="relative max-w-6xl mx-auto mt-20 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="absolute -inset-4 bg-linear-to-r from-purple-600 via-pink-500 to-blue-600 rounded-3xl opacity-30 blur-3xl animate-glow" />
          <div className="relative rounded-3xl border-2 border-white/20 bg-slate-900/60 backdrop-blur-2xl shadow-2xl overflow-hidden">
            <div className="p-4 border-b border-white/10 flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 h-8 bg-slate-800/50 rounded-lg flex items-center px-3">
                <span className="text-white/50 text-sm">interviewmaster.ai/interview</span>
              </div>
            </div>
            <div className="p-8 bg-linear-to-b from-slate-800/30 to-slate-900/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 aspect-video bg-slate-800 rounded-xl relative overflow-hidden border border-white/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-linear-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                        <Mic className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-white/70 font-medium">AI Interviewer Active</p>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-white text-sm font-medium">Recording...</span>
                    </div>
                    <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg text-white text-sm font-mono">
                      00:45
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-slate-800/60 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white/70 text-xs font-bold uppercase tracking-wider">Live Score</span>
                      <TrendingUp className="w-4 h-4 text-green-400" />
                    </div>
                    <div className="text-5xl font-black text-white mb-3">94</div>
                    <div className="w-full bg-slate-700/50 h-3 rounded-full overflow-hidden shadow-inner">
                      <div className="bg-linear-to-r from-green-400 via-emerald-400 to-green-500 h-full rounded-full shadow-lg shadow-green-500/50" style={{ width: '94%' }} />
                    </div>
                  </div>
                  <div className="bg-slate-800/60 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-400 mt-0.5 shrink-0" />
                      <p className="text-sm text-white/90 leading-relaxed font-medium">Excellent use of STAR method. Keep maintaining eye contact.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: IconComponent, title, description, gradient }) => {
  return (
    <div className="group relative p-8 rounded-3xl bg-white border-2 border-slate-200 hover:border-purple-300 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-200/60 hover:-translate-y-2">
      <div className={`w-16 h-16 rounded-2xl ${gradient} flex items-center justify-center mb-6 shadow-xl shadow-purple-500/30 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
        <IconComponent className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-base">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-purple-100 to-blue-100 text-purple-700 font-bold text-sm mb-6 border-2 border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
            <Sparkles className="w-4 h-4 animate-pulse" />
            Features
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6">
            Everything You Need to<br />
            <span className="bg-linear-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">Succeed</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our AI-powered platform provides comprehensive tools and insights to help you prepare for any interview scenario.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Brain}
            title="AI-Powered Analysis"
            description="Advanced AI evaluates your responses, tone, and body language to provide actionable insights."
            gradient="bg-linear-to-br from-purple-600 to-purple-500"
          />
          <FeatureCard 
            icon={Mic}
            title="Voice Recognition"
            description="Real-time speech analysis detects filler words, pace, and clarity to improve your delivery."
            gradient="bg-linear-to-br from-blue-600 to-blue-500"
          />
          <FeatureCard 
            icon={MessageSquare}
            title="Smart Questions"
            description="Dynamic questions adapted to your role, experience level, and target company."
            gradient="bg-linear-to-br from-pink-600 to-pink-500"
          />
          <FeatureCard 
            icon={BarChart3}
            title="Performance Analytics"
            description="Detailed reports and progress tracking help you identify strengths and areas for improvement."
            gradient="bg-linear-to-br from-indigo-600 to-indigo-500"
          />
          <FeatureCard 
            icon={Target}
            title="Industry-Specific Prep"
            description="Tailored interview scenarios for tech, finance, healthcare, and more industries."
            gradient="bg-linear-to-br from-violet-600 to-violet-500"
          />
          <FeatureCard 
            icon={Shield}
            title="100% Private & Secure"
            description="Your data is encrypted and never shared. Practice confidently in a safe environment."
            gradient="bg-linear-to-br from-emerald-600 to-emerald-500"
          />
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ number, title, description }) => (
  <div className="relative group">
    <div className="flex items-start gap-5">
      <div className="shrink-0 w-16 h-16 rounded-2xl bg-linear-to-br from-purple-600 via-purple-500 to-blue-600 flex items-center justify-center text-white text-2xl font-black shadow-xl shadow-purple-500/40 group-hover:scale-105 group-hover:shadow-purple-500/60 transition-all duration-300">
        {number}
      </div>
      <div className="pt-1">
        <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">{title}</h3>
        <p className="text-slate-600 leading-relaxed text-base">{description}</p>
      </div>
    </div>
  </div>
);

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-blue-100 to-cyan-100 text-blue-700 font-bold text-sm mb-5 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
            <Clock className="w-4 h-4" />
            How it Works
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-3">
            Get Started in <span className="bg-linear-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">3 Simple Steps</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">Quick and easy setup to start your interview preparation journey</p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <StepCard 
            number="1" 
            title="Create Your Profile" 
            description="Sign up and tell us about your target role, industry, and experience level. Upload your resume for personalized questions." 
          />
          <StepCard 
            number="2" 
            title="Start Your Mock Interview" 
            description="Enter a realistic interview environment with our AI. Answer questions naturally while we analyze your performance in real-time." 
          />
          <StepCard 
            number="3" 
            title="Review & Improve" 
            description="Get detailed feedback on every aspect of your interview. Track your progress over time and master your skills." 
          />
        </div>
        
        <div className="text-center mt-10">
          <button 
            onClick={() => window.location.href = '/login'}
            className="inline-flex items-center gap-2 bg-linear-to-r from-purple-600 via-purple-500 to-blue-600 hover:from-purple-700 hover:via-purple-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/60"
          >
            Get Started Now
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, role, company, image, text, rating, verified = true }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all duration-200 cursor-pointer">
    <div className="flex items-start gap-3 mb-3">
      <div className="w-12 h-12 rounded-full bg-linear-to-br from-purple-600 via-purple-500 to-blue-600 flex items-center justify-center text-white font-bold text-base shadow-lg shrink-0">
        {image}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <span className="font-bold text-slate-900 text-base">{name}</span>
          {verified && (
            <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          )}
        </div>
        <div className="text-slate-500 text-sm">@{name.toLowerCase().replace(' ', '')} · {role} at {company}</div>
      </div>
      <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
    </div>
    <p className="text-slate-800 leading-relaxed text-[15px]">{text}</p>
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-green-100 to-emerald-100 text-green-700 font-bold text-sm mb-5 border-2 border-green-200 shadow-lg hover:shadow-xl transition-shadow">
            <Award className="w-4 h-4" />
            Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-3">
            What People Are <span className="bg-linear-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">Saying</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real stories from real people who got hired
          </p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <TestimonialCard 
            name="Sarah Chen"
            role="Software Engineer"
            company="Google"
            image="SC"
            rating={5}
            text="This platform helped me land my dream job at Google! The AI feedback was incredibly accurate and helped me improve my communication skills. Practiced for 2 weeks and saw massive improvement in my confidence. 🚀"
          />
          <TestimonialCard 
            name="Michael Roberts"
            role="Product Manager"
            company="Amazon"
            image="MR"
            rating={5}
            text="The mock interviews felt so realistic. I was fully prepared for my Amazon interview and got the offer on the first try! The STAR method coaching was game-changing. Highly recommend to anyone preparing for PM roles."
          />
          <TestimonialCard 
            name="Priya Sharma"
            role="Data Scientist"
            company="Microsoft"
            image="PS"
            rating={5}
            text="Best investment I made for my career. The detailed analytics showed me exactly where I needed to improve. Went from bombing interviews to getting 3 offers in one month. The AI is surprisingly accurate! 💯"
          />
        </div>

        <div className="text-center mt-10">
          <p className="text-slate-500 text-sm">Join 10,000+ users who improved their interview skills</p>
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ name, price, period, features, popular, navigate }) => (
  <div className={`relative p-10 rounded-3xl transition-all duration-300 hover:-translate-y-2 ${popular ? 'bg-linear-to-br from-purple-600 via-purple-500 to-blue-600 shadow-2xl shadow-purple-500/50 scale-105 border-4 border-yellow-400/30' : 'bg-white border-2 border-slate-200 hover:border-purple-300 hover:shadow-2xl'}`}>
    {popular && (
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-linear-to-r from-yellow-400 to-yellow-500 text-slate-900 text-sm font-black rounded-full shadow-xl shadow-yellow-400/50 border-2 border-yellow-300">
        ⭐ MOST POPULAR
      </div>
    )}
    <h3 className={`text-2xl font-bold mb-2 ${popular ? 'text-white' : 'text-slate-900'}`}>{name}</h3>
    <div className="mb-6">
      <span className={`text-5xl font-black ${popular ? 'text-white' : 'text-slate-900'}`}>₹{price}</span>
      <span className={`text-lg ${popular ? 'text-white/80' : 'text-slate-600'}`}>/{period}</span>
    </div>
    <button 
      onClick={() => navigate('/login')}
      className={`w-full py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 mb-8 ${popular ? 'bg-white text-purple-600 shadow-lg hover:shadow-xl' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
    >
      Get Started
    </button>
    <ul className="space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-3">
          <CheckCircle2 className={`w-6 h-6 shrink-0 mt-0.5 ${popular ? 'text-white' : 'text-green-500'}`} />
          <span className={`${popular ? 'text-white' : 'text-slate-700'}`}>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-purple-100 to-pink-100 text-purple-700 font-bold text-sm mb-6 border-2 border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
            <Zap className="w-4 h-4 animate-pulse" />
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6">
            Choose Your <span className="bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Plan</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Start free, upgrade when you're ready. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard 
            name="Free"
            price="0"
            period="forever"
            features={[
              "5 mock interviews per month",
              "Basic performance analytics",
              "Standard AI feedback",
              "Community support"
            ]}
            navigate={navigate}
          />
          <PricingCard 
            name="Pro"
            price="29"
            period="month"
            popular={true}
            features={[
              "Unlimited mock interviews",
              "Advanced analytics & insights",
              "Real-time AI coaching",
              "Industry-specific scenarios",
              "Priority support",
              "Resume analysis"
            ]}
            navigate={navigate}
          />
          <PricingCard 
            name="Enterprise"
            price="99"
            period="month"
            features={[
              "Everything in Pro",
              "Custom interview scenarios",
              "Team management",
              "API access",
              "Dedicated account manager",
              "White-label options"
            ]}
            navigate={navigate}
          />
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-slate-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-linear-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                <Brain className="text-white w-6 h-6" />
              </div>
              <span className="text-white font-bold text-2xl">InterviewMaster</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed max-w-sm">
              Empower your career with AI-driven interview preparation. Practice, learn, and succeed.
            </p>
            <button 
              onClick={() => navigate('/login')}
              className="bg-linear-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
            >
              Start Free Trial
            </button>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Product</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#features" className="hover:text-purple-400 transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">For Teams</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Enterprise</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Resources</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Interview Tips</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">API Docs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Company</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-sm">© 2025 InterviewMaster. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-purple-600 flex items-center justify-center text-slate-400 hover:text-white transition-all">
                <Calendar className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-purple-600 flex items-center justify-center text-slate-400 hover:text-white transition-all">
                <Users className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-purple-600 flex items-center justify-center text-slate-400 hover:text-white transition-all">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}
