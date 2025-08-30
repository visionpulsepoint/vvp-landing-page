'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

interface FormFieldProps {
  label: string;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  rows?: number;
}

export function FormField({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
  options,
  rows = 4
}: FormFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const id = `field-${label.toLowerCase().replace(/\s+/g, '-')}`;

  const baseClasses = `
    w-full bg-slate-800 border rounded-lg px-4 py-3 text-white 
    focus:outline-none focus:ring-2 transition-all duration-200
    ${error 
      ? 'border-red-500/50 focus:ring-red-500/50' 
      : 'border-purple-500/20 focus:ring-purple-500'
    }
  `;

  const renderInput = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            rows={rows}
            className={baseClasses}
            aria-describedby={error ? `${id}-error` : undefined}
            aria-invalid={!!error}
            required={required}
          />
        );
      
      case 'select':
        return (
          <select
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={baseClasses}
            aria-describedby={error ? `${id}-error` : undefined}
            aria-invalid={!!error}
            required={required}
          >
            <option value="">Select an option</option>
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      
      default:
        return (
          <input
            id={id}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className={baseClasses}
            aria-describedby={error ? `${id}-error` : undefined}
            aria-invalid={!!error}
            required={required}
          />
        );
    }
  };

  return (
    <div className="space-y-2">
      <label 
        htmlFor={id}
        className="block text-gray-300 font-medium"
      >
        {label}
        {required && <span className="text-red-400 ml-1" aria-label="required">*</span>}
      </label>
      
      {renderInput()}
      
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-2 text-red-400 text-sm"
          id={`${id}-error`}
          role="alert"
        >
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{error}</span>
        </motion.div>
      )}
    </div>
  );
}