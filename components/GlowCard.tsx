'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  role?: string;
  tabIndex?: number;
}

export function GlowCard({ 
  children, 
  className = '', 
  delay = 0, 
  role,
  tabIndex 
}: GlowCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: prefersReducedMotion ? 0.01 : 0.6, delay: prefersReducedMotion ? 0 : delay }}
      whileHover={prefersReducedMotion ? {} : { y: -5, scale: 1.02 }}
      className={`holographic rounded-2xl p-6 hover:glow-purple transition-all duration-300 focus-within:ring-2 focus-within:ring-purple-500 ${className}`}
      role={role}
      tabIndex={tabIndex}
    >
      {children}
    </motion.div>
  );
}