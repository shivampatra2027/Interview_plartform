import { Shield, FileText, Lock, AlertCircle } from 'lucide-react';

const TermsPage = () => {
  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      content: `By accessing and using this interview preparation platform ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`
    },
    {
      id: "description",
      title: "2. Description of Service",
      content: `Our platform provides AI-powered interview preparation tools, including mock interviews, feedback analysis, and personalized coaching. We reserve the right to modify, suspend, or discontinue the Service at any time without notice.`
    },
    {
      id: "user-accounts",
      title: "3. User Accounts",
      content: `You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.`
    },
    {
      id: "acceptable-use",
      title: "4. Acceptable Use Policy",
      content: `You agree not to use the Service to: (a) upload or transmit any harmful, threatening, abusive, or illegal content; (b) impersonate any person or entity; (c) interfere with or disrupt the Service or servers; (d) attempt to gain unauthorized access to any part of the Service.`
    },
    {
      id: "intellectual-property",
      title: "5. Intellectual Property",
      content: `All content, features, and functionality of the Service are owned by us and are protected by international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our explicit permission.`
    },
    {
      id: "user-content",
      title: "6. User-Generated Content",
      content: `You retain ownership of content you submit to the Service. However, by submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and analyze your content to improve our Service and provide feedback.`
    },
    {
      id: "payment",
      title: "7. Payment and Subscription",
      content: `Certain features require paid subscriptions. Subscription fees are billed in advance on a recurring basis. You can cancel your subscription at any time, but no refunds will be provided for partial subscription periods.`
    },
    {
      id: "termination",
      title: "8. Termination",
      content: `We reserve the right to terminate or suspend your account and access to the Service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.`
    },
    {
      id: "disclaimer",
      title: "9. Disclaimer of Warranties",
      content: `The Service is provided "as is" and "as available" without warranties of any kind. We do not guarantee that the Service will be uninterrupted, secure, or error-free. Your use of the Service is at your own risk.`
    },
    {
      id: "limitation",
      title: "10. Limitation of Liability",
      content: `To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the Service.`
    },
    {
      id: "changes",
      title: "11. Changes to Terms",
      content: `We reserve the right to modify these Terms at any time. We will notify users of any material changes via email or through the Service. Your continued use of the Service after such modifications constitutes acceptance of the updated Terms.`
    },
    {
      id: "contact",
      title: "12. Contact Information",
      content: `If you have any questions about these Terms, please contact us at legal@interviewplatform.com or through our support channels.`
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold text-sm mb-6 animate-fade-in">
            <FileText className="w-4 h-4" />
            Legal
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 animate-slide-up">
            Terms of Service
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Last updated: November 26, 2025
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-purple-100 p-6 shadow-xl">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Quick Navigation</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {sections.slice(0, 9).map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-sm text-purple-600 hover:text-purple-700 hover:underline"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {sections.map((section, index) => (
            <div
              key={section.id}
              id={section.id}
              className="bg-white rounded-2xl border-2 border-slate-200 p-8 shadow-lg hover:shadow-xl transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {section.title}
              </h2>
              <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Important Notice */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">
                  Important Notice
                </h3>
                <p className="text-amber-800 leading-relaxed">
                  These Terms of Service constitute a legally binding agreement between you and our platform. By using our Service, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with any part of these Terms, you must discontinue use of our Service immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
