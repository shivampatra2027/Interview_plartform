import { Users, Target, Award, Sparkles, Heart, Zap } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      description: "10+ years in HR technology"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      description: "AI & Machine Learning Expert"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      description: "Product Design Specialist"
    },
    {
      name: "David Kumar",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      description: "Full Stack Engineer"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Making quality interview preparation accessible to everyone"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering the highest quality AI-powered interview experience"
    },
    {
      icon: Heart,
      title: "Empathy",
      description: "Understanding the challenges candidates face in their journey"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuously improving with cutting-edge technology"
    }
  ];

  const stats = [
    { number: "50K+", label: "Interviews Conducted" },
    { number: "95%", label: "Success Rate" },
    { number: "200+", label: "Companies Trust Us" },
    { number: "4.9/5", label: "User Rating" }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold text-sm mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            About Us
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 animate-slide-up">
            Revolutionizing Interview
            <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-600 via-pink-600 to-blue-600"> Preparation</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            We're on a mission to empower job seekers with AI-driven interview practice that adapts to their unique needs and helps them land their dream jobs.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-xl hover:shadow-purple-200/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-black bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Founded in 2023, our platform was born from a simple observation: traditional interview preparation was outdated, expensive, and inaccessible to many talented individuals.
                </p>
                <p>
                  We brought together experts in AI, HR, and education to create an intelligent interview practice platform that provides personalized feedback, realistic scenarios, and actionable insights.
                </p>
                <p>
                  Today, we're proud to help thousands of candidates prepare for interviews across various industries, from tech startups to Fortune 500 companies.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-linear-to-br from-purple-400 via-pink-400 to-blue-400 p-1">
                <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center">
                  <Users className="w-32 h-32 text-purple-600" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-linear-to-br from-purple-500 to-blue-500 rounded-3xl opacity-20 animate-float"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-white/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Our Values</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl hover:shadow-purple-200/50 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 rounded-xl bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Passionate experts dedicated to your success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white border-2 border-slate-200 hover:border-purple-300 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-200/60 hover:-translate-y-2">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                    <p className="text-purple-600 font-semibold mb-2">{member.role}</p>
                    <p className="text-slate-600 text-sm">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-purple-600 via-pink-600 to-blue-600 p-12 text-center shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-4xl font-black text-white mb-4">
                Ready to Ace Your Next Interview?
              </h2>
              <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of successful candidates who have transformed their interview skills with our AI-powered platform.
              </p>
              <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-purple-50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-lg">
                Start Practicing Now
              </button>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
