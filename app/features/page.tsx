'use client';

import { motion } from 'framer-motion';
import { Smartphone, Brain, Shield, Activity, Users, Zap, Globe, Clock } from 'lucide-react';
import { GlowCard } from '@/components/GlowCard';

const features = [
  {
    icon: Smartphone,
    title: 'AI Scan Technology',
    description: 'Transform your smartphone into a virtual medical scanner',
    details: [
      'Computer vision for health assessments',
      'Real-time vital sign monitoring',
      'Instant risk factor analysis',
      'Integration with wearable devices'
    ],
    color: 'purple'
  },
  {
    icon: Brain,
    title: 'Predictive Analytics',
    description: 'AI-powered insights for proactive maternal care',
    details: [
      'Early risk detection algorithms',
      'Personalized care recommendations',
      'Trend analysis and predictions',
      'Machine learning health patterns'
    ],
    color: 'cyan'
  },
  {
    icon: Shield,
    title: 'Blockchain Records',
    description: 'Immutable and secure health data management',
    details: [
      'Tamper-proof medical records',
      'Patient-controlled data access',
      'Interoperable health networks',
      'Zero-knowledge privacy protocols'
    ],
    color: 'purple'
  },
  {
    icon: Activity,
    title: 'Remote Monitoring',
    description: '24/7 health tracking and emergency response',
    details: [
      'Continuous vital monitoring',
      'Automated alert systems',
      'Telehealth consultations',
      'Emergency response protocols'
    ],
    color: 'cyan'
  },
  {
    icon: Users,
    title: 'Community Network',
    description: 'Connecting mothers with support systems',
    details: [
      'Peer support groups',
      'Cultural health practices',
      'Local healthcare provider network',
      'Community health worker tools'
    ],
    color: 'purple'
  },
  {
    icon: Globe,
    title: 'Offline Capabilities',
    description: 'Healthcare access even without internet',
    details: [
      'Offline diagnostic tools',
      'Local data synchronization',
      'SMS-based emergency alerts',
      'Progressive web app technology'
    ],
    color: 'cyan'
  }
];

export default function Features() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              Futuristic Features
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover the cutting-edge technologies that make VisionPulsePoint 
              the most advanced maternal healthcare platform ever created.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <GlowCard key={index} delay={index * 0.1}>
                <div className="flex flex-col h-full">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${
                      feature.color === 'purple' 
                        ? 'from-purple-500 to-purple-700 glow-purple' 
                        : 'from-cyan-500 to-cyan-700 glow-blue'
                    } rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-3 ${
                        feature.color === 'purple' ? 'text-purple-300' : 'text-cyan-300'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <ul className="space-y-3">
                      {feature.details.map((detail, detailIndex) => (
                        <motion.li
                          key={detailIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: detailIndex * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <div className={`w-2 h-2 rounded-full ${
                            feature.color === 'purple' ? 'bg-purple-400' : 'bg-cyan-400'
                          }`} />
                          <span className="text-gray-300">{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Powered by Tomorrow's Technology
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built on a foundation of cutting-edge technologies for maximum impact and scalability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Artificial Intelligence', desc: 'Advanced ML algorithms', icon: Brain },
              { name: 'Blockchain Security', desc: 'Immutable data protection', icon: Shield },
              { name: 'Real-time Analytics', desc: 'Instant health insights', icon: Activity },
              { name: 'Global Connectivity', desc: 'Worldwide accessibility', icon: Globe },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="holographic rounded-2xl p-6 text-center hover:glow-purple transition-all duration-300"
              >
                <tech.icon className="w-10 h-10 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-purple-300 mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}