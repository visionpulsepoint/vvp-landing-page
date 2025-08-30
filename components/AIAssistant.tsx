'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', content: 'Hi! I\'m your AI health assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, prefersReducedMotion]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { type: 'user', content: input }]);
    setInput('');
    setIsTyping(true);
    
    // Simulate AI response
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsTyping(false);
      setMessages(prev => [...prev, { 
        type: 'bot', 
        content: 'Thank you for your question! This is a prototype - comprehensive AI health responses will be available in the full version of VisionPulsePoint. For immediate medical concerns, please contact your healthcare provider.' 
      }]);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
        whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        aria-label="Open AI health assistant"
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full flex items-center justify-center glow-purple z-40"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.button>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8, y: 100 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
            exit={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8, y: 100 }}
            className="fixed bottom-24 right-6 w-80 h-96 bg-slate-900/95 backdrop-blur-md rounded-2xl border border-purple-500/30 flex flex-col overflow-hidden z-50"
            role="dialog"
            aria-label="AI Health Assistant Chat"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-cyan-500 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bot className="w-5 h-5 text-white" />
                <span className="text-white font-semibold">AI Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close AI assistant"
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
                  animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-purple-600 text-white'
                        : 'bg-slate-800 text-gray-200 border border-purple-500/20'
                    }`}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
                  animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-slate-800 text-gray-200 border border-purple-500/20 p-3 rounded-lg flex items-center space-x-2">
                    <LoadingSpinner size="sm" />
                    <span>AI is thinking...</span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-purple-500/20">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  disabled={isTyping}
                  aria-label="Type your health question"
                  placeholder="Ask me anything..."
                  className="flex-1 bg-slate-800 border border-purple-500/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <motion.button
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                  onClick={handleSend}
                  disabled={isTyping || !input.trim()}
                  aria-label="Send message"
                  className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}