import React from 'react';
import { ArrowRight, CheckCircle, Clock, Users, Rocket, Star } from 'lucide-react';

const Portfolio = () => {
  const packages = [
    {
      name: "Content Engine",
      price: "12K NIS/month",
      features: [
        "4 blog posts",
        "2 whitepapers/case studies",
        "Social media content calendar",
        "Monthly newsletter",
        "Content performance analytics"
      ]
    },
    {
      name: "Product Story",
      price: "25K NIS/month",
      features: [
        "Product messaging framework",
        "Feature announcements (2/month)",
        "Competitive battlecards",
        "Sales enablement content",
        "Product webinar scripts",
        "Monthly metrics report"
      ]
    },
    {
      name: "GTM Accelerator",
      price: "25K NIS/month",
      features: [
        "Campaign strategy & execution (1 major/quarter)",
        "Landing page optimization",
        "Email nurture flows",
        "Lead scoring setup",
        "Campaign analytics & optimization",
        "A/B testing program"
      ]
    }
  ];

  const experiences = [
    {
      company: "Qwak",
      role: "VP Marketing",
      description: "Orchestrated go-to-market strategy and led marketing operations from stealth to successful JFrog acquisition. Built the marketing team from scratch while maintaining hands-on execution across all channels. Established Qwak as a leading MLOps platform through strategic positioning and market education.",
      icon: Rocket
    },
    {
      company: "Cognigo",
      role: "VP Marketing",
      description: "Spearheaded marketing initiatives that led to NetApp acquisition within 18 months. Transformed complex data security technology into compelling market narrative, driving rapid market penetration. Managed lean team to execute enterprise-grade marketing programs punching above our weight class.",
      icon: Rocket
    },
    {
      company: "Checkmarx",
      role: "Director of Product Marketing & Security Evangelist",
      description: "Pioneered product marketing strategy that propelled Checkmarx to Gartner Magic Quadrant leadership. Delivered keynotes at Black Hat, DefCon, and major security conferences, establishing thought leadership in application security. Architected product narrative that helped secure $84M investment round.",
      icon: Star
    },
    {
      company: "Trusteer",
      role: "Product Manager",
      description: "As founding Product Manager, shaped core product strategy leading to IBM acquisition. Launched revolutionary mobile security offering that secured 100M+ devices. Defined product vision that positioned Trusteer as the gold standard in financial fraud prevention.",
      icon: Star
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <header className="px-6 py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-20 animate-pulse"></div>
        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          The Fractioneer
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your fractional marketing partner for accelerated growth
        </p>
      </header>

      {/* Value Proposition */}
      <section className="px-6 py-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">How I Help</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Clock className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Time Saver</h3>
              <p>I handle all marketing tasks you don't have time for, from content creation to campaign execution.</p>
            </div>
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Users className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Team Player</h3>
              <p>I integrate as a team member, not an agency, working directly with your team without oversight needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="px-6 py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Product Marketing',
              'Content Strategy',
              'B2B Tech Marketing',
              'Demand Generation',
              'Field Marketing',
              'PR & AR',
              'SEO & SEM'
            ].map((skill) => (
              <div key={skill} className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="px-6 py-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Track Record</h2>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div key={exp.company} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                <div className="flex items-start">
                  <div className="text-blue-600 mr-4">
                    <exp.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{exp.company}</h3>
                    <h4 className="text-md text-gray-600 mb-2">{exp.role}</h4>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="px-6 py-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Service Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.name} className="p-6 border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                <p className="text-lg text-blue-600 font-semibold mb-4">{pkg.price}</p>
                <ul className="space-y-2">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center text-gray-600">
            <p>All packages include:</p>
            <ul className="mt-2">
              <li>3-month minimum commitment</li>
              <li>Monthly strategy sessions</li>
              <li>Weekly status updates</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 text-center bg-gradient-to-br from-blue-50 to-purple-50">
        <h2 className="text-3xl font-semibold mb-6">Ready to Accelerate Your Growth?</h2>
        <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:-translate-y-1">
          Let's Talk
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </section>
    </div>
  );
};

export default Portfolio;
