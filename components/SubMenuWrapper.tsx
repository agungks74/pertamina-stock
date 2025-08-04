'use client';

import { X } from 'lucide-react';

interface SubMenuWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  items: Array<{ id: string; label: string; active?: boolean }>;
  onItemClick: (itemId: string) => void;
}

export default function SubMenuWrapper({ 
  isOpen, 
  onClose, 
  title, 
  items, 
  onItemClick 
}: SubMenuWrapperProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* SubMenu Panel */}
      <div className={`
        submenu-panel fixed left-20 top-16 bottom-0 w-[361px] bg-white text-black flex flex-col shadow-xl z-50
        lg:absolute lg:left-20 lg:top-0 lg:bottom-auto lg:h-auto lg:max-h-[calc(100vh-4rem)]
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Header */}
        <div className="flex justify-between items-center py-4 px-6 font-open-sans font-semibold text-base">
          <h3 className="text-pertamina-text-primary">{title}</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className={`
                flex justify-between items-center py-3 px-6 cursor-pointer transition-colors
                font-oxygen font-light text-sm
                ${item.active 
                  ? 'bg-[#CACACA] text-pertamina-text-primary' 
                  : 'bg-transparent text-pertamina-text-primary hover:bg-gray-100'
                }
              `}
            >
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}