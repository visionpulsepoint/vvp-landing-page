'use client';

import { motion } from 'framer-motion';
import { Target, Globe, Heart, Users, Award, Lightbulb, Shield } from 'lucide-react';
import { GlowCard } from '@/components/GlowCard';

export default function About() {
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
              Our Mission
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Merging artificial intelligence and blockchain technology to transform 
              maternal healthcare accessibility across rural South Africa and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Cards */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GlowCard delay={0.2}>
              <Target className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-purple-300">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                A world where every expectant mother, regardless of location or circumstances, 
                has access to world-class maternal healthcare powered by AI technology.
              </p>
            </GlowCard>

            <GlowCard delay={0.4}>
              <Globe className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Global Impact</h3>
              <p className="text-gray-400 leading-relaxed">
                Starting with rural South Africa, we're building a scalable platform 
                that will revolutionize maternal care across developing regions worldwide.
              </p>
            </GlowCard>

            <GlowCard delay={0.6}>
              <Heart className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-purple-300">Human-Centered</h3>
              <p className="text-gray-400 leading-relaxed">
                Technology should enhance human connection, not replace it. Our platform 
                strengthens the bond between mothers, families, and healthcare providers.
              </p>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Why This Matters
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Maternal healthcare challenges require innovative solutions. 
              Here's the reality we're working to change.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '119', label: 'Maternal deaths per 100k births in South Africa', icon: Heart },
              { number: '85%', label: 'Of maternal deaths are preventable', icon: Shield },
              { number: '40%', label: 'Of rural areas lack adequate healthcare', icon: Globe },
              { number: '24/7', label: 'AI monitoring and support availability', icon: Lightbulb },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="holographic rounded-2xl p-8 mb-4">
                  <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-400 text-sm leading-snug">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Our Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: Users,
                  title: 'Community First',
                  description: 'Every decision is made with the community at heart, ensuring cultural sensitivity and local relevance.'
                },
                {
                  icon: Award,
                  title: 'Excellence in Care',
                  description: 'We believe every mother deserves the highest standard of care, powered by the latest technology.'
                },
                {
                  icon: Shield,
                  title: 'Trust & Security',
                  description: 'Blockchain technology ensures complete data privacy and security for sensitive health information.'
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 glow-purple">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-purple-300">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="holographic rounded-3xl p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 glow-purple">
                  <Heart className="w-12 h-12 text-white" fill="currentColor" />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  Empowering Every Mother
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Through innovation, compassion, and cutting-edge technology, 
                  we're building a future where maternal healthcare is accessible, 
                  personalized, and empowering for every woman.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}