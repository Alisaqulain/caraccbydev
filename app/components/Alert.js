"use client";
import { useState, useEffect } from 'react';

export default function Alert({ show, message, type = 'success', onClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      setProgress(100);
      
      // Progress bar animation
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev <= 0) {
            clearInterval(progressInterval);
            setIsVisible(false);
            setTimeout(() => onClose(), 300);
            return 0;
          }
          return prev - 1;
        });
      }, 30);

      return () => clearInterval(progressInterval);
    }
  }, [show, onClose]);

  if (!show && !isVisible) return null;

  const alertStyles = {
    success: {
      bg: 'bg-gradient-to-r from-green-500 to-emerald-600',
      border: 'border-green-400',
      text: 'text-white',
      icon: 'text-green-100',
      glow: 'shadow-green-500/50'
    },
    error: {
      bg: 'bg-gradient-to-r from-red-500 to-rose-600',
      border: 'border-red-400',
      text: 'text-white',
      icon: 'text-red-100',
      glow: 'shadow-red-500/50'
    },
    info: {
      bg: 'bg-gradient-to-r from-blue-500 to-cyan-600',
      border: 'border-blue-400',
      text: 'text-white',
      icon: 'text-blue-100',
      glow: 'shadow-blue-500/50'
    },
    warning: {
      bg: 'bg-gradient-to-r from-yellow-500 to-amber-600',
      border: 'border-yellow-400',
      text: 'text-white',
      icon: 'text-yellow-100',
      glow: 'shadow-yellow-500/50'
    }
  };

  const icons = {
    success: (
      <div className="relative">
        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
        <div className="relative bg-green-500 rounded-full p-1">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
    ),
    error: (
      <div className="relative">
        <div className="absolute inset-0 bg-red-400 rounded-full animate-ping opacity-75"></div>
        <div className="relative bg-red-500 rounded-full p-1">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </div>
    ),
    info: (
      <div className="relative">
        <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75"></div>
        <div className="relative bg-blue-500 rounded-full p-1">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
    ),
    warning: (
      <div className="relative">
        <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
        <div className="relative bg-yellow-500 rounded-full p-1">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
      </div>
    )
  };

  const currentStyle = alertStyles[type];

  return (
    <div className={`fixed top-4 right-4 z-50 transform transition-all duration-500 ${
      isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-0 scale-95'
    }`}>
      <div className={`relative flex items-center p-4 rounded-2xl shadow-2xl border-l-4 ${currentStyle.bg} ${currentStyle.border} ${currentStyle.text} ${currentStyle.glow} max-w-sm backdrop-blur-sm`}>
        {/* Animated background */}
        <div className="absolute inset-0 bg-white/10 rounded-2xl animate-pulse"></div>
        
        {/* Content */}
        <div className="relative flex items-center w-full">
          <div className="flex-shrink-0 mr-3">
            {icons[type]}
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold leading-tight">{message}</p>
          </div>
          <div className="ml-4 flex-shrink-0">
            <button
              onClick={() => {
                setIsVisible(false);
                setTimeout(() => onClose(), 300);
              }}
              className="inline-flex text-current hover:opacity-75 focus:outline-none transition-all duration-200 hover:scale-110"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 rounded-b-2xl overflow-hidden">
          <div 
            className={`h-full ${currentStyle.bg} transition-all duration-30 ease-linear`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Glow effect */}
        <div className={`absolute -inset-1 bg-gradient-to-r ${currentStyle.bg} rounded-2xl blur opacity-30 -z-10`}></div>
      </div>
    </div>
  );
}
