'use client';

import { motion } from 'framer-motion';
import { useState, useCallback } from 'react';
import { Send, Download, Calendar, Globe, Sparkles, CheckCircle } from 'lucide-react';
import { GlowCard } from '@/components/GlowCard';
import { FormField } from '@/components/ui/form-field';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const validateForm = useCallback(() => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.role) {
      newErrors.role = 'Please select your role';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const updateField = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              Get Connected
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Join the revolution in maternal healthcare. Be among the first to experience 
              the future of AI-powered medical care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-200">
              Have questions about VisionPulsePoint? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <GlowCard>
              <h3 className="text-2xl font-semibold text-purple-300 mb-6">Send us a message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-green-400 mb-2">Message Sent!</h4>
                  <p className="text-gray-300">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <FormField
                    label="Full Name"
                    value={formData.name}
                    onChange={updateField('name')}
                    error={errors.name}
                    placeholder="Enter your full name"
                    required
                  />
                  
                  <FormField
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={updateField('email')}
                    error={errors.email}
                    placeholder="Enter your email address"
                    required
                  />
                  
                  <FormField
                    label="Role"
                    type="select"
                    value={formData.role}
                    onChange={updateField('role')}
                    error={errors.role}
                    required
                    options={[
                      { value: 'expectant-mother', label: 'Expectant Mother' },
                      { value: 'healthcare-provider', label: 'Healthcare Provider' },
                      { value: 'community-health-worker', label: 'Community Health Worker' },
                      { value: 'researcher', label: 'Researcher' },
                      { value: 'other', label: 'Other' }
                    ]}
                  />
                  
                  <FormField
                    label="Message"
                    type="textarea"
                    value={formData.message}
                    onChange={updateField('message')}
                    error={errors.message}
                    placeholder="Tell us about your interest in VisionPulsePoint..."
                    required
                    rows={5}
                  />
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 glow-purple disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <LoadingSpinner size="sm" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </GlowCard>

            {/* Contact Info */}
            <div className="space-y-8">
              <GlowCard>
                <div className="text-center">
                  <Calendar className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-purple-300 mb-2">
                    Book a Demo
                  </h3>
                  <p className="text-gray-200 mb-4">
                    Schedule a personalized demonstration of VisionPulsePoint's capabilities.
                  </p>
                  <motion.button
                    whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                    className="border border-purple-500/50 text-purple-400 hover:bg-purple-500/20 px-6 py-2 rounded-full font-semibold transition-all duration-300"
                    aria-label="Schedule a product demonstration"
                  >
                    Schedule Demo
                  </motion.button>
                </div>
              </GlowCard>

              <GlowCard>
                <div className="text-center">
                  <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                    Join Our Community
                  </h3>
                  <p className="text-gray-200 mb-4">
                    Connect with other mothers and healthcare providers in our growing community.
                  </p>
                  <motion.button
                    whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                    className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20 px-6 py-2 rounded-full font-semibold transition-all duration-300"
                    aria-label="Join the VisionPulsePoint community"
                  >
                    Join Community
                  </motion.button>
                </div>
              </GlowCard>

              <GlowCard>
                <div className="text-center">
                  <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-purple-300 mb-2">
                    Early Access Program
                  </h3>
                  <p className="text-gray-200 mb-4">
                    Be among the first to experience VisionPulsePoint's revolutionary features.
                  </p>
                  <motion.button
                    whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold glow-purple"
                    aria-label="Apply for early access to VisionPulsePoint"
                  >
                    Apply Now
                  </motion.button>
                </div>
              </GlowCard>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Notice */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.8 }}
            className="holographic rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold gradient-text mb-4">
              Privacy & Security Notice
            </h2>
            <p className="text-gray-200 leading-relaxed">
              <strong className="text-purple-300">Important:</strong> VisionPulsePoint is designed to augment, 
              not replace, professional medical care. Always consult with qualified healthcare providers 
              for medical decisions. Your data is protected by advanced blockchain encryption and 
              privacy protocols.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}