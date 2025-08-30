'use client';

import { motion } from 'framer-motion';
import { UserPlus, Smartphone, Scan, FileCheck, Share2, ArrowRight } from 'lucide-react';
import { GlowCard } from '@/components/GlowCard';

const steps = [
  {
    icon: UserPlus,
    title: 'Register',
    description: 'Create your secure health profile',
    details: 'Sign up with basic information and create your encrypted health profile. All data is secured using blockchain technology.',
    color: 'purple'
  },
  {
    icon: Smartphone,
    title: 'Connect',
    description: 'Link devices and healthcare providers',
    details: 'Connect wearable devices, link with local healthcare providers, and join your community network for comprehensive care.',
    color: 'cyan'
  },
  {
    icon: Scan,
    title: 'Scan',
    description: 'AI-powered health assessments',
    details: 'Use your smartphone for instant health scans. Our AI analyzes vital signs, risk factors, and provides immediate insights.',
    color: 'purple'
  },
  {
    icon: FileCheck,
    title: 'Review',
    description: 'Get personalized recommendations',
    details: 'Receive AI-generated health insights, care recommendations, and alerts. All results are explained in easy-to-understand language.',
    color: 'cyan'
  },
  {
    icon: Share2,
    title: 'Share',
    description: 'Connect with your care team',
    details: 'Securely share results with healthcare providers, family members, and community health workers as needed.',
    color: 'purple'
  }
];

export default function HowItWorks() {
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
              How It Works
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Five simple steps to revolutionize your maternal healthcare experience 
              with the power of AI and blockchain technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 transform -translate-x-1/2" />

            <div className="space-y-20">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Step Content */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2 lg:text-left' : 'lg:text-right'}`}>
                    <div className="flex items-center space-x-4 mb-6 lg:justify-end">
                      <div className={`w-12 h-12 bg-gradient-to-br ${
                        step.color === 'purple' 
                          ? 'from-purple-500 to-purple-700 glow-purple' 
                          : 'from-cyan-500 to-cyan-700 glow-blue'
                      } rounded-full flex items-center justify-center text-2xl font-bold text-white`}>
                        {index + 1}
                      </div>
                      <h3 className={`text-3xl font-bold ${
                        step.color === 'purple' ? 'text-purple-300' : 'text-cyan-300'
                      }`}>
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-xl text-gray-300 mb-4">{step.description}</p>
                    <p className="text-gray-400 leading-relaxed">{step.details}</p>
                  </div>

                  {/* Step Visual */}
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <GlowCard className="h-64 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-24 h-24 bg-gradient-to-br ${
                          step.color === 'purple' 
                            ? 'from-purple-500 to-purple-700 glow-purple' 
                            : 'from-cyan-500 to-cyan-700 glow-blue'
                        } rounded-2xl flex items-center justify-center`}
                      >
                        <step.icon className="w-12 h-12 text-white" />
                      </motion.div>
                    </GlowCard>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      className={`w-6 h-6 bg-gradient-to-br ${
                        step.color === 'purple' 
                          ? 'from-purple-500 to-purple-700' 
                          : 'from-cyan-500 to-cyan-700'
                      } rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="holographic rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of mothers and healthcare providers already experiencing 
              the future of maternal care.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center space-x-2 glow-purple mx-auto"
            >
              <span>Begin Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}