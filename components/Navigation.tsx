'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Heart, Users, BookOpen, Phone, Zap, Settings, Info, Home } from 'lucide-react';
import Link from 'next/link';
import { Logo } from './Logo';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

const navigationData = {
  platform: {
    title: 'Platform',
    description: 'Discover our AI-powered healthcare solutions',
    items: [
      { name: 'Features', href: '/features', icon: Zap, desc: 'AI scan technology and blockchain security' },
      { name: 'How It Works', href: '/how-it-works', icon: Settings, desc: 'Simple 5-step process to get started' },
      { name: 'Services', href: '/services', icon: Heart, desc: 'Tailored solutions for every user type' }
    ]
  },
  community: {
    title: 'Community',
    description: 'Connect, learn, and share experiences',
    items: [
      { name: 'Education Hub', href: '/education', icon: BookOpen, desc: 'Personalized learning content' },
      { name: 'Stories', href: '/blog', icon: Users, desc: 'Real experiences from our community' },
      { name: 'Support', href: '/contact', icon: Phone, desc: 'Get help when you need it' }
    ]
  }
};

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  return (
    <motion.nav
      initial={prefersReducedMotion ? {} : { y: -100 }}
      animate={prefersReducedMotion ? {} : { y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-purple-500/20' 
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Simple Links */}
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium flex items-center space-x-1"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            
            {/* Platform Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('platform')}
                onMouseEnter={() => setActiveDropdown('platform')}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium flex items-center space-x-1"
                aria-expanded={activeDropdown === 'platform'}
                aria-haspopup="true"
              >
                <span>Platform</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'platform' ? 'rotate-180' : ''
                }`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'platform' && (
                  <motion.div
                    initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
                    animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                    exit={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
                    onMouseLeave={closeDropdowns}
                    className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-md rounded-xl border border-purple-500/20 p-6 shadow-2xl"
                    role="menu"
                  >
                    <div className="mb-4">
                      <h3 className="text-white font-semibold mb-1">{navigationData.platform.title}</h3>
                      <p className="text-gray-400 text-sm">{navigationData.platform.description}</p>
                    </div>
                    <div className="space-y-3">
                      {navigationData.platform.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={closeDropdowns}
                          role="menuitem"
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-purple-500/10 transition-colors group"
                        >
                          <item.icon className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-white font-medium group-hover:text-purple-300 transition-colors">
                              {item.name}
                            </div>
                            <div className="text-gray-400 text-sm">{item.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Community Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('community')}
                onMouseEnter={() => setActiveDropdown('community')}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium flex items-center space-x-1"
                aria-expanded={activeDropdown === 'community'}
                aria-haspopup="true"
              >
                <span>Community</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'community' ? 'rotate-180' : ''
                }`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'community' && (
                  <motion.div
                    initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
                    animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                    exit={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
                    onMouseLeave={closeDropdowns}
                    className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-md rounded-xl border border-purple-500/20 p-6 shadow-2xl"
                    role="menu"
                  >
                    <div className="mb-4">
                      <h3 className="text-white font-semibold mb-1">{navigationData.community.title}</h3>
                      <p className="text-gray-400 text-sm">{navigationData.community.description}</p>
                    </div>
                    <div className="space-y-3">
                      {navigationData.community.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={closeDropdowns}
                          role="menuitem"
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors group"
                        >
                          <item.icon className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-white font-medium group-hover:text-cyan-300 transition-colors">
                              {item.name}
                            </div>
                            <div className="text-gray-400 text-sm">{item.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium flex items-center space-x-1"
            >
              <Info className="w-4 h-4" />
              <span>About</span>
            </Link>
            
            {/* Single, Clear CTA */}
            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
              className="text-gray-300 hover:text-white transition-colors duration-200 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950/98 backdrop-blur-md border-b border-purple-500/20"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Quick Links */}
              <div className="space-y-3">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors py-2"
                >
                  <Home className="w-5 h-5 text-purple-400" />
                  <span className="font-medium">Home</span>
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors py-2"
                >
                  <Info className="w-5 h-5 text-purple-400" />
                  <span className="font-medium">About</span>
                </Link>
              </div>

              {/* Platform Section */}
              <div>
                <h3 className="text-purple-300 font-semibold mb-3 text-sm uppercase tracking-wide">Platform</h3>
                <div className="space-y-2 pl-4">
                  {navigationData.platform.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      role="menuitem"
                      className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors py-2"
                    >
                      <item.icon className="w-4 h-4 text-purple-400" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Community Section */}
              <div>
                <h3 className="text-cyan-300 font-semibold mb-3 text-sm uppercase tracking-wide">Community</h3>
                <div className="space-y-2 pl-4">
                  {navigationData.community.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      role="menuitem"
                      className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors py-2"
                    >
                      <item.icon className="w-4 h-4 text-cyan-400" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4 border-t border-purple-500/20">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white py-3 rounded-full text-center font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}