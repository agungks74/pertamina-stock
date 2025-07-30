import { useState } from 'react';
import { Mail, Clipboard, BarChart3, Building, Settings, Menu, X } from 'lucide-react';
import SubmenuPanel from './SubmenuPanel';

interface SidebarProps {
  activeMenu?: string;
}

export default function Sidebar({ activeMenu = "Dashboard Status Monitor" }: SidebarProps) {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navigationIcons = [
    { 
      id: 'messages',
      icon: Mail, 
      active: false, 
      label: "Messages",
      submenu: {
        title: "Messages",
        items: [
          { id: 'inbox', label: 'Inbox' },
          { id: 'sent', label: 'Sent Messages' },
          { id: 'drafts', label: 'Drafts' }
        ]
      }
    },
    { 
      id: 'dashboard',
      icon: Clipboard, 
      active: true, 
      label: "Dashboard",
      submenu: {
        title: "National Operational Stock",
        items: [
          { id: 'status-monitor', label: 'Dashboard Status Monitor', active: true },
          { id: 'summary-report', label: 'Summary Report' }
        ]
      }
    },
    { 
      id: 'reports',
      icon: BarChart3, 
      active: false, 
      label: "Reports",
      submenu: {
        title: "Reports",
        items: [
          { id: 'daily-report', label: 'Daily Reports' },
          { id: 'monthly-report', label: 'Monthly Reports' },
          { id: 'annual-report', label: 'Annual Reports' }
        ]
      }
    },
    { 
      id: 'management',
      icon: Building, 
      active: false, 
      label: "Management",
      submenu: {
        title: "Management",
        items: [
          { id: 'user-management', label: 'User Management' },
          { id: 'system-config', label: 'System Configuration' },
          { id: 'access-control', label: 'Access Control' }
        ]
      }
    },
  ];

  const handleIconClick = (iconId: string) => {
    if (activeSubmenu === iconId) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(iconId);
    }
  };

  const handleCloseSubmenu = () => {
    setActiveSubmenu(null);
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const activeIcon = navigationIcons.find(icon => activeSubmenu === icon.id);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileSidebar}
        className="lg:hidden fixed top-20 left-4 z-40 p-2 bg-gray-800 text-white rounded-lg shadow-lg"
      >
        {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30 pt-16"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-16 left-0 bottom-0 w-16 pertamina-navy text-white flex flex-col shadow-xl z-20
        lg:translate-x-0 transition-transform duration-300 ease-in-out
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Navigation Icons */}
        <div className="p-2 pt-4">
          <div className="space-y-3">
            {navigationIcons.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => handleIconClick(item.id)}
                  className={`
                    p-2 flex items-center justify-center rounded-lg cursor-pointer 
                    transition-all duration-200 group
                    ${item.active || activeSubmenu === item.id
                      ? 'bg-gray-600 bg-opacity-60' 
                      : 'hover:bg-gray-700 hover:bg-opacity-60'
                    }
                  `}
                  title={item.label}
                >
                  <IconComponent 
                    className={`
                      w-6 h-6 
                      ${item.active ? 'text-green-400' : 'text-white'}
                    `} 
                  />
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Settings at bottom */}
        <div className="p-2 mt-auto border-t border-gray-600 border-opacity-30">
          <div className="p-2 flex items-center justify-center hover:bg-gray-700 hover:bg-opacity-60 rounded-lg cursor-pointer transition-all duration-200">
            <Settings className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Submenu Panel */}
      {activeIcon && (
        <SubmenuPanel
          isOpen={activeSubmenu !== null}
          onClose={handleCloseSubmenu}
          title={activeIcon.submenu.title}
          items={activeIcon.submenu.items}
          onItemClick={(itemId) => {
            console.log('Selected item:', itemId);
            // Handle submenu item selection here
          }}
        />
      )}
    </>
  );
}
