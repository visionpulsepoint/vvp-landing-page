'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Shield, Users, Brain, Heart, Zap, ChevronDown } from 'lucide-react';
import { TypewriterText } from '@/components/TypewriterText';
import { GlowCard } from '@/components/GlowCard';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import Link from 'next/link';

export default function Home() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden" role="banner">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-950 to-cyan-900/20" />
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">VisionPulsePoint</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-2">
              <TypewriterText 
                text="AI-powered maternal care for rural South Africa"
                speed={80}
                delay={1000}
              />
            </p>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.8, delay: prefersReducedMotion ? 0 : 0.5 }}
            className="mb-12"
          >
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Revolutionizing maternal healthcare through cutting-edge AI technology, 
              blockchain security, and community-driven care for every mother, everywhere.
            </p>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.8, delay: prefersReducedMotion ? 0 : 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center space-x-2 glow-purple"
              aria-label="Experience the future of maternal care"
            >
              <span>Experience the Future</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
              className="border border-purple-500/50 text-purple-400 hover:text-white hover:bg-purple-500/20 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              aria-label="Watch product demonstration"
            >
              Watch Demo
            </motion.button>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          aria-hidden="true"
          animate={prefersReducedMotion ? {} : { y: [0, -10, 0] }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 2, repeat: prefersReducedMotion ? 0 : Infinity }}
          className="absolute top-1/4 left-1/4 opacity-30"
        >
          <Heart className="w-8 h-8 text-purple-400" />
        </motion.div>
        <motion.div
          aria-hidden="true"
          animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 2.5, repeat: prefersReducedMotion ? 0 : Infinity }}
          className="absolute bottom-1/3 right-1/3 opacity-30"
        >
          <Brain className="w-6 h-6 text-cyan-400" />
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 1.5, repeat: prefersReducedMotion ? 0 : Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          aria-label="Scroll down for more content"
        >
          <ChevronDown className="w-6 h-6 text-purple-400" />
        </motion.div>
      </header>

      {/* Features Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              The Future of Maternal Care
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Where artificial intelligence meets human compassion to create 
              unprecedented healthcare experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <GlowCard delay={0.2}>
              <article className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 glow-purple">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-300">AI Scan Technology</h3>
                <p className="text-gray-200">
                  Transform any smartphone into a virtual medical scanner with advanced AI diagnostics.
                </p>
              </article>
            </GlowCard>

            <GlowCard delay={0.4}>
              <article className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 glow-blue">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-300">Blockchain Security</h3>
                <p className="text-gray-200">
                  Immutable health records secured by blockchain technology for complete privacy and trust.
                </p>
              </article>
            </GlowCard>

            <GlowCard delay={0.6}>
              <article className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 glow-purple">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-300">Community Driven</h3>
                <p className="text-gray-200">
                  Connecting mothers, healthcare workers, and communities in a supportive ecosystem.
                </p>
              </article>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.8 }}
            className="holographic rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
              Ready to Transform Maternal Care?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join the revolution in healthcare technology. Be part of the future where 
              every mother has access to world-class care, powered by AI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/features">
                <motion.button
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center space-x-2 glow-purple"
                  aria-label="Explore VisionPulsePoint features"
                >
                  <Zap className="w-5 h-5" />
                  <span>Explore Features</span>
                </motion.button>
              </Link>
              
              <Link href="/contact">
                <motion.button
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                  className="border border-purple-500/50 text-purple-400 hover:text-white hover:bg-purple-500/20 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
                  aria-label="Contact VisionPulsePoint team"
                >
                  Get in Touch
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Medical Disclaimer */}
      <section className="py-8 px-4 bg-slate-900/50" role="contentinfo">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-300 leading-relaxed">
            <strong className="text-purple-300">Important Medical Disclaimer:</strong> VisionPulsePoint is designed to support, not replace, professional medical care. 
            Always consult qualified healthcare providers for medical decisions. This platform provides educational information and health monitoring tools under professional supervision.
          </p>
        </div>
      </section>
    </div>
  );
}