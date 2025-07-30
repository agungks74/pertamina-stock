import { User } from 'lucide-react';

interface HeaderProps {
  username?: string;
  workTitle?: string;
}

export default function Header({ username = "username", workTitle = "Work Title" }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        {/* Pertamina Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-red-600 rounded"></div>
          <div className="w-8 h-8 bg-blue-600 rounded"></div>
          <div className="w-8 h-8 bg-green-600 rounded"></div>
          <span className="font-bold text-lg">PERTAMINA</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="text-right">
          <div className="text-sm">
            <span className="text-gray-600">welcome, </span>
            <span className="font-bold">{username}</span>
          </div>
          <div className="text-xs text-gray-500">{workTitle}</div>
        </div>
        <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
          <User className="text-white w-5 h-5" />
        </div>
      </div>
    </header>
  );
}
