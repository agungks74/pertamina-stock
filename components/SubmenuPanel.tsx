import { X, ChevronRight } from 'lucide-react';

interface SubmenuItem {
  id: string;
  label: string;
  active?: boolean;
}

interface SubmenuPanelProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  items: SubmenuItem[];
  onItemClick?: (itemId: string) => void;
}

export default function SubmenuPanel({ 
  isOpen, 
  onClose, 
  title, 
  items, 
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
        fixed top-16 left-16 bottom-0
        w-64 bg-white shadow-xl border-r border-gray-200
        transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-md transition-colors"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>
        
        {/* Menu Items */}
        <div className="p-2">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => onItemClick?.(item.id)}
              className={`
                flex items-center justify-between p-3 rounded-lg cursor-pointer 
                transition-colors duration-200 group
                ${item.active 
                  ? 'bg-gray-100 text-gray-900' 
                  : 'text-gray-700 hover:bg-gray-50'
                }
              `}
            >
              <span className="text-sm font-medium">{item.label}</span>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}