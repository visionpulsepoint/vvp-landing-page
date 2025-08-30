'use client';

import { motion } from 'framer-motion';
import { Baby, Stethoscope, Users, Smartphone, Heart, Shield, Bell, MapPin, Zap, Clock } from 'lucide-react';
import { GlowCard } from '@/components/GlowCard';

const services = [
  {
    title: 'Expectant Mothers',
    icon: Baby,
    color: 'purple',
    features: [
      'Smart pregnancy tracking with AI insights',
      'Personalized risk alerts and recommendations',
      'Automated appointment and medication reminders',
      'Emergency SOS with instant medical support',
      'Community support network connection',
      'Educational content tailored to pregnancy stage'
    ]
  },
  {
    title: 'Healthcare Providers',
    icon: Stethoscope,
    color: 'cyan',
    features: [
      'Remote diagnostic capabilities',
      'AI-powered referral network optimization',
      'Predictive analytics for patient outcomes',
      'Real-time patient monitoring dashboard',
      'Blockchain-secured patient records',
      'Telemedicine consultation platform'
    ]
  },
  {
    title: 'Community Health Workers',
    icon: Users,
    color: 'purple',
    features: [
      'Offline diagnostic and screening tools',
      'Door-to-door patient registration system',
      'AR-enabled demonstration kits',
      'Community health education resources',
      'Mobile data collection and sync',
      'Emergency response coordination'
    ]
  }
];

export default function Services() {
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
              Comprehensive Care Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Tailored solutions for every stakeholder in the maternal healthcare ecosystem, 
              powered by AI and secured by blockchain technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Service Info */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${
                      service.color === 'purple' 
                        ? 'from-purple-500 to-purple-700 glow-purple' 
                        : 'from-cyan-500 to-cyan-700 glow-blue'
                    } rounded-xl flex items-center justify-center`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className={`text-3xl md:text-4xl font-bold ${
                      service.color === 'purple' ? 'text-purple-300' : 'text-cyan-300'
                    }`}>
                      {service.title}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors duration-200"
                      >
                        <div className={`w-2 h-2 rounded-full ${
                          service.color === 'purple' ? 'bg-purple-400' : 'bg-cyan-400'
                        }`} />
                        <span className="text-gray-300 flex-1">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Interactive Demo */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <GlowCard className="h-80 flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className={`w-24 h-24 bg-gradient-to-br ${
                          service.color === 'purple' 
                            ? 'from-purple-500 to-purple-700' 
                            : 'from-cyan-500 to-cyan-700'
                        } rounded-full flex items-center justify-center mx-auto mb-6`}
                      >
                        <service.icon className="w-12 h-12 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-gray-300 mb-2">
                        Interactive Demo
                      </h3>
                      <p className="text-gray-400">
                        Experience the future of {service.title.toLowerCase()} services
                      </p>
                    </div>
                  </GlowCard>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Why Choose VisionPulsePoint
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: 'Instant Results', desc: 'Real-time AI analysis' },
              { icon: Shield, title: 'Secure Data', desc: 'Blockchain protection' },
              { icon: Clock, title: '24/7 Support', desc: 'Always available care' },
              { icon: MapPin, title: 'Rural Access', desc: 'Offline capabilities' },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="holographic rounded-2xl p-6 text-center hover:glow-purple transition-all duration-300"
              >
                <benefit.icon className="w-10 h-10 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-purple-300 mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}