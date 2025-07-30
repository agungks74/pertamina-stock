import { User, Bell } from 'lucide-react';

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
      
      {/* Right Side - User Info */}
      <div className="flex items-center space-x-4">
        {/* Welcome Message */}
        <div className="hidden sm:block text-right">
          <p className="text-sm text-gray-600">Welcome,</p>
          <p className="text-sm font-medium text-gray-800">{username}</p>
        </div>
        
        {/* User Profile */}
        <div className="flex items-center space-x-3">
          {/* Notification Bell */}
          <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          
          {/* User Avatar */}
          <div className="flex items-center space-x-2 bg-gray-50 rounded-lg p-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-gray-600" />
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-800">{username}</p>
              <p className="text-xs text-gray-600">{workTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}