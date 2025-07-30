'use client';

import { User } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  username?: string;
  workTitle?: string;
}

export default function Header({ username = "username", workTitle = "Work Title" }: HeaderProps) {
  const [showUserDetails, setShowUserDetails] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-white shadow-sm px-4 sm:px-6 py-4 flex justify-between items-center border-b border-gray-200">
      <div className="flex items-center min-w-0 flex-1">
        {/* Pertamina Logo - Always visible */}
        <div className="flex items-center">
          <img 
            src="/pertamina-logo.svg" 
            alt="Pertamina" 
            className="h-8 w-auto object-contain"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4 flex-shrink-0 relative">
        {/* User details - Hidden on mobile, shown on desktop */}
        <div className={`text-right mr-2 transition-all duration-200 ${
          showUserDetails 
            ? 'block absolute right-12 top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 rounded-lg p-3 shadow-lg min-w-max z-40'
            : 'hidden sm:block'
        }`}>
          <div className="text-sm leading-tight">
            <span className="text-gray-600">welcome, </span>
            <span className="font-bold text-gray-800">{username}</span>
          </div>
          <div className="text-xs text-gray-500 mt-0.5">{workTitle}</div>
        </div>
        
        {/* User avatar - Clickable on mobile */}
        <button 
          onClick={() => setShowUserDetails(!showUserDetails)}
          className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:cursor-default"
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