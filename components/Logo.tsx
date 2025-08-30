'use client';

import { Heart } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-3 group">
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
          <Heart className="w-6 h-6 text-white" fill="currentColor" />
        </div>
      </div>
      
      <div className="flex flex-col">
        <span className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-200">
          VisionPulsePoint
        </span>
        <span className="text-xs text-gray-400 -mt-1">AI Health Platform</span>
      </div>
    </Link>
  );
}