'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Play, Pause, Heart, MessageCircle, Share, Mic, PlusCircle } from 'lucide-react';
import { GlowCard } from '@/components/GlowCard';

const stories = [
  {
    id: 1,
    author: 'Sarah M.',
    title: 'My Journey with VPP During Pregnancy',
    content: 'The AI assistant helped me understand warning signs I never knew about. When I felt unusual symptoms at 32 weeks, the app immediately connected me with a healthcare provider...',
    type: 'text',
    likes: 24,
    comments: 8,
    avatar: 'SM',
    time: '2 hours ago'
  },
  {
    id: 2,
    author: 'Nomsa K.',
    title: 'Community Support Made All the Difference',
    content: 'Audio story about community support during pregnancy...',
    type: 'audio',
    duration: '3:45',
    likes: 42,
    comments: 15,
    avatar: 'NK',
    time: '5 hours ago'
  },
  {
    id: 3,
    author: 'Dr. Thabo L.',
    title: 'How VPP Is Changing Rural Healthcare',
    content: 'As a healthcare provider in a rural clinic, VisionPulsePoint has transformed how we deliver care. The AI diagnostics help us catch complications early...',
    type: 'text',
    likes: 67,
    comments: 23,
    avatar: 'TL',
    time: '1 day ago'
  },
  {
    id: 4,
    author: 'Lerato P.',
    title: 'First-Time Mom Success Story',
    content: 'Audio testimonial about first pregnancy experience...',
    type: 'audio',
    duration: '2:15',
    likes: 31,
    comments: 12,
    avatar: 'LP',
    time: '2 days ago'
  }
];

export default function Blog() {
  const [playingAudio, setPlayingAudio] = useState<number | null>(null);

  const toggleAudio = (storyId: number) => {
    setPlayingAudio(playingAudio === storyId ? null : storyId);
  };

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
              Community Pulse
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Real stories from real mothers, healthcare providers, and community members 
              sharing their experiences with VisionPulsePoint.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="holographic rounded-2xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold gradient-text mb-4">Share Your Story</h2>
            <p className="text-gray-300 mb-6">
              Your experience matters. Share your journey to inspire and support other mothers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 glow-purple"
              >
                <PlusCircle className="w-5 h-5" />
                <span>Write Story</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20 px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2"
              >
                <Mic className="w-5 h-5" />
                <span>Record Audio</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {stories.map((story, index) => (
              <GlowCard key={story.id} delay={index * 0.1}>
                <div className="h-full flex flex-col">
                  {/* Author Info */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                      {story.avatar}
                    </div>
                    <div>
                      <h3 className="font-semibold text-purple-300">{story.author}</h3>
                      <p className="text-sm text-gray-500">{story.time}</p>
                    </div>
                  </div>

                  {/* Story Title */}
                  <h2 className="text-xl font-semibold text-gray-200 mb-4">
                    {story.title}
                  </h2>

                  {/* Content */}
                  <div className="flex-1 mb-6">
                    {story.type === 'audio' ? (
                      <div className="bg-slate-800 rounded-lg p-4 border border-purple-500/20">
                        <div className="flex items-center space-x-4">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => toggleAudio(story.id)}
                            className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full flex items-center justify-center glow-purple"
                          >
                            {playingAudio === story.id ? (
                              <Pause className="w-6 h-6 text-white" />
                            ) : (
                              <Play className="w-6 h-6 text-white ml-1" />
                            )}
                          </motion.button>
                          <div className="flex-1">
                            <div className="bg-slate-700 rounded-full h-2 mb-2">
                              <div className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full w-1/3" />
                            </div>
                            <p className="text-sm text-gray-400">{story.duration}</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <p className="text-gray-400 leading-relaxed">
                        {story.content}
                      </p>
                    )}
                  </div>

                  {/* Interactions */}
                  <div className="flex items-center justify-between pt-4 border-t border-purple-500/20">
                    <div className="flex items-center space-x-6">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors"
                      >
                        <Heart className="w-5 h-5" />
                        <span>{story.likes}</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span>{story.comments}</span>
                      </motion.button>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <Share className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}