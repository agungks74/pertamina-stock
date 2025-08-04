'use client';

import { User } from 'lucide-react';
import { useState } from 'react';

interface TopBarProps {
  username?: string;
  workTitle?: string;
}

export default function TopBar({ username = "username", workTitle = "Work Title" }: TopBarProps) {
  const [showUserDetails, setShowUserDetails] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-white border-b border-pertamina-neutral px-6 py-4 flex justify-between items-center">
      <div className="flex items-center min-w-0 flex-1">
        {/* Pertamina Logo - Always visible */}
        <div className="flex items-center">
          <img 
            src="/designs/components/logo.svg" 
            alt="Pertamina" 
            className="w-[200px] h-[47px] object-contain"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4 flex-shrink-0 relative">
        {/* User details - Hidden on mobile, shown on desktop */}
        <div className={`text-right mr-2 transition-all duration-200 ${
          showUserDetails 
            ? 'block absolute right-12 top-1/2 transform -translate-y-1/2 bg-white border border-pertamina-neutral rounded-lg p-3 shadow-lg min-w-max z-40'
            : 'hidden sm:block'
        }`}>
          <div className="text-sm leading-tight font-open-sans font-semibold">
            <span className="text-pertamina-text-secondary">welcome, </span>
            <span className="font-bold text-pertamina-text-primary">{username}</span>
          </div>
          <div className="text-xs text-pertamina-text-tertiary mt-0.5 font-open-sans">{workTitle}</div>
        </div>
        
        {/* User avatar - Clickable on mobile */}
        <button 
          onClick={() => setShowUserDetails(!showUserDetails)}
          className="w-10 h-10 bg-pertamina-primary rounded-full flex items-center justify-center flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-pertamina-accent sm:cursor-default"
        >
          <User className="text-white w-5 h-5" />
        </button>
      </div>
      
      {/* Backdrop for mobile overlay */}
      {showUserDetails && (
        <div 
          className="fixed inset-0 z-30 sm:hidden" 
          onClick={() => setShowUserDetails(false)}
        />
      )}
    </header>
  );
}