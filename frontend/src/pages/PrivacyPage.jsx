import { Shield, Eye, Lock, Database, UserCheck, Bell, Globe } from 'lucide-react';

const PrivacyPage = () => {
  const sections = [
    {
      id: "introduction",
      icon: Shield,
      title: "1. Introduction",
      content: `This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our interview preparation platform. We are committed to protecting your privacy and ensuring the security of your personal data.`
    },
    {
      id: "information-collection",
      icon: Database,
      title: "2. Information We Collect",
      content: `We collect information that you provide directly to us, including:

• Account Information: Name, email address, password, and profile information
• Interview Data: Video recordings, audio recordings, and responses during practice sessions
• Usage Data: How you interact with our Service, features used, and time spent
• Device Information: IP address, browser type, operating system, and device identifiers
• Payment Information: Billing details processed securely through third-party payment processors`
    },
    {
      id: "how-we-use",
      icon: Eye,
      title: "3. How We Use Your Information",
      content: `We use your information to:

• Provide, maintain, and improve our Service
• Analyze your interview performance and provide personalized feedback
• Train and improve our AI models for better interview coaching
• Communicate with you about updates, promotions, and important notices
• Process payments and manage subscriptions
• Detect, prevent, and address technical issues and security concerns
• Comply with legal obligations and enforce our Terms of Service`
    },
    {
      id: "data-sharing",
      icon: Globe,
      title: "4. Information Sharing and Disclosure",
      content: `We do not sell your personal information. We may share your information only in the following circumstances:

• Service Providers: With third-party vendors who perform services on our behalf (hosting, analytics, payment processing)
• Legal Requirements: When required by law or to protect our rights and safety
• Business Transfers: In connection with a merger, acquisition, or sale of assets
• With Your Consent: When you explicitly authorize us to share your information`
    },
    {
      id: "ai-training",
      icon: Database,
      title: "5. AI and Machine Learning",
      content: `We use artificial intelligence to analyze your interview responses and provide feedback. Your interview data may be used to:

• Generate personalized coaching recommendations
• Improve our AI models and algorithms
• Enhance the accuracy of our feedback systems

All data used for AI training is anonymized and aggregated to protect your privacy. You can opt out of having your data used for AI training in your account settings.`
    },
    {
      id: "data-security",
      icon: Lock,
      title: "6. Data Security",
      content: `We implement industry-standard security measures to protect your information:

• Encryption of data in transit and at rest
• Secure authentication and access controls
• Regular security audits and vulnerability assessments
• Employee training on data protection and privacy

However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.`
    },
    {
      id: "data-retention",
      icon: Database,
      title: "7. Data Retention",
      content: `We retain your personal information for as long as necessary to provide our Service and fulfill the purposes outlined in this Privacy Policy. You can request deletion of your account and associated data at any time. Some information may be retained for legal or business purposes after account deletion.`
    },
    {
      id: "your-rights",
      icon: UserCheck,
      title: "8. Your Privacy Rights",
      content: `You have the right to:

• Access and review your personal information
• Correct inaccurate or incomplete data
• Request deletion of your account and data
• Opt out of marketing communications
• Export your data in a portable format
• Withdraw consent for data processing
• Lodge a complaint with data protection authorities

To exercise these rights, contact us at privacy@interviewplatform.com`
    },
    {
      id: "cookies",
      icon: Eye,
      title: "9. Cookies and Tracking",
      content: `We use cookies and similar tracking technologies to:

• Remember your preferences and settings
• Analyze usage patterns and improve our Service
• Provide personalized content and recommendations
• Measure the effectiveness of our marketing campaigns

You can control cookie preferences through your browser settings. Disabling cookies may affect functionality.`
    },
    {
      id: "children",
      icon: Shield,
      title: "10. Children's Privacy",
      content: `Our Service is not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete such information.`
    },
    {
      id: "international",
      icon: Globe,
      title: "11. International Data Transfers",
      content: `Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.`
    },
    {
      id: "changes",
      icon: Bell,
      title: "12. Changes to Privacy Policy",
      content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by email or through a notice on our Service. Your continued use of the Service after such changes constitutes acceptance of the updated Privacy Policy.`
    },
    {
      id: "contact",
      icon: Shield,
      title: "13. Contact Us",
      content: `If you have questions or concerns about this Privacy Policy or our data practices, please contact us:

Email: privacy@interviewplatform.com
Address: [Your Company Address]
Data Protection Officer: dpo@interviewplatform.com`
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold text-sm mb-6 animate-fade-in">
            <Shield className="w-4 h-4" />
            Privacy & Security
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 animate-slide-up">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-slate-500 mt-4">
            Last updated: November 26, 2025
          </p>
        </div>
      </section>

      {/* Key Principles */}
      <section className="pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border-2 border-purple-100 p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Lock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Secure</h3>
              <p className="text-sm text-slate-600">Your data is encrypted and protected</p>
            </div>
            <div className="bg-white rounded-xl border-2 border-purple-100 p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Eye className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Transparent</h3>
              <p className="text-sm text-slate-600">Clear about data collection and use</p>
            </div>
            <div className="bg-white rounded-xl border-2 border-purple-100 p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">In Control</h3>
              <p className="text-sm text-slate-600">You control your personal information</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <div
                key={section.id}
                id={section.id}
                className="bg-white rounded-2xl border-2 border-slate-200 p-8 shadow-lg hover:shadow-xl transition-all hover:border-purple-200 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/30">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">
                      {section.title}
                    </h2>
                    <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-purple-600 via-pink-600 to-blue-600 p-12 text-center shadow-2xl">
            <div className="relative z-10">
              <Shield className="w-16 h-16 text-white mx-auto mb-4" />
              <h2 className="text-3xl font-black text-white mb-4">
                Questions About Privacy?
              </h2>
              <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
                Our team is here to help. Contact us anytime with privacy concerns or questions.
              </p>
              <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-purple-50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                Contact Privacy Team
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

export default PrivacyPage;
