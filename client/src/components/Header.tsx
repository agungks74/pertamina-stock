import { User } from 'lucide-react';

interface HeaderProps {
  username?: string;
  workTitle?: string;
}

export default function Header({ username = "username", workTitle = "Work Title" }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-white shadow-sm px-6 py-4 flex justify-between items-center border-b border-gray-200">
      <div className="flex items-center min-w-0 flex-1">
        {/* Pertamina Logo - official SVG */}
        <div className="flex items-center">
          <img 
            src="/pertamina-logo.svg" 
            alt="Pertamina" 
            className="h-8 w-auto object-contain"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4 flex-shrink-0">
        <div className="text-right mr-2">
          <div className="text-sm leading-tight">
            <span className="text-gray-600">welcome, </span>
            <span className="font-bold text-gray-800">{username}</span>
          </div>
          <div className="text-xs text-gray-500 mt-0.5">{workTitle}</div>
        </div>
        <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
          <User className="text-white w-5 h-5" />
        </div>
      </div>
    </header>
  );
}
