'use client'

import { X } from 'lucide-react';

interface SubmenuItem {
  id: string;
  label: string;
  href: string;
}

interface SubmenuPanelProps {
  title: string;
  items: SubmenuItem[];
  isOpen: boolean;
  onClose: () => void;
  onItemClick: (href: string) => void;
}

export default function SubmenuPanel({ 
  title, 
  items, 
  isOpen, 
  onClose, 
  onItemClick 
}: SubmenuPanelProps) {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-30 z-40 pt-16"
          onClick={onClose}
        />
      )}

      {/* Submenu Panel */}
      <div className={`
        fixed top-16 left-16 bottom-0 w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out border-r border-gray-200
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
        ${isOpen ? '' : 'lg:-translate-x-full'}
      `}>
        {/* Panel Header */}
        <div className="px-4 py-4 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-800 text-sm">{title}</h3>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-200 rounded transition-colors"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Panel Content */}
        <div className="py-2">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => onItemClick(item.href)}
              className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors border-l-4 border-transparent hover:border-blue-500"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}