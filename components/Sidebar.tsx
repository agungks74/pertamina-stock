'use client';

import { useState, useEffect } from 'react';
import { Settings } from 'lucide-react';
import MenuItem from './MenuItem';
import SubMenuWrapper from './SubMenuWrapper';

// Navigation data structure with SVG icons
const navigationIcons = [
  {
    id: 'mail',
    iconSrc: '/designs/components/menu-icons/Mail.svg',
    label: 'Mail',
    active: false,
    submenu: {
      title: 'Mail',
      items: [
        { id: 'inbox', label: 'Inbox', active: true },
        { id: 'sent', label: 'Sent Items', active: false },
        { id: 'drafts', label: 'Drafts', active: false },
        { id: 'spam', label: 'Spam', active: false },
        { id: 'trash', label: 'Trash', active: false }
      ]
    }
  },
  {
    id: 'iml',
    iconSrc: '/designs/components/menu-icons/IML.svg',
    label: 'IML',
    active: true,
    submenu: {
      title: 'IML Operations',
      items: [
        { id: 'terminal', label: 'Terminal', active: false },
        { id: 'kilang', label: 'Kilang', active: false },
        { id: 'intransit', label: 'In Transit', active: false }
      ]
    }
  },
  {
    id: 'ct',
    iconSrc: '/designs/components/menu-icons/C&T.svg',
    label: 'C&T',
    active: false,
    submenu: {
      title: 'Construction & Technology',
      items: [
        { id: 'projects', label: 'Projects', active: false },
        { id: 'maintenance', label: 'Maintenance', active: false }
      ]
    }
  },
  {
    id: 'rp',
    iconSrc: '/designs/components/menu-icons/R&P.svg',
    label: 'R&P',
    active: false,
    submenu: {
      title: 'Research & Planning',
      items: [
        { id: 'research', label: 'Research', active: false },
        { id: 'planning', label: 'Planning', active: false }
      ]
    }
  },
  {
    id: 'stock',
    iconSrc: '/designs/components/menu-icons/Stock.svg',
    label: 'Stock',
    active: false,
    submenu: {
      title: 'Stock Management',
      items: [
        { id: 'inventory', label: 'Inventory', active: false },
        { id: 'orders', label: 'Orders', active: false }
      ]
    }
  }
];

interface SidebarProps {
  isMobileOpen?: boolean;
  onMobileToggle?: () => void;
}

export default function Sidebar({ isMobileOpen = false, onMobileToggle }: SidebarProps) {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [activeIcon, setActiveIcon] = useState(navigationIcons.find(icon => icon.active) || null);

  const handleIconClick = (iconId: string) => {
    const clickedIcon = navigationIcons.find(icon => icon.id === iconId);
    
    if (clickedIcon) {
      // Toggle submenu
      if (activeSubmenu === iconId) {
        setActiveSubmenu(null);
        setActiveIcon(null);
      } else {
        setActiveSubmenu(iconId);
        setActiveIcon(clickedIcon);
      }
    }
  };

  const handleCloseSubmenu = () => {
    setActiveSubmenu(null);
    setActiveIcon(null);
  };

  // Close submenu when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileOpen && activeSubmenu) {
        const target = event.target as Element;
        if (!target.closest('.sidebar-container') && !target.closest('.submenu-panel')) {
          handleCloseSubmenu();
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileOpen, activeSubmenu]);

  return (
    <>
      {/* Mobile backdrop */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={onMobileToggle}
        />
      )}

      {/* Sidebar */}
      <div className={`
        sidebar-container fixed top-16 left-0 bottom-0 w-20 bg-pertamina-primary text-white flex flex-col shadow-xl z-20
        lg:translate-x-0 transition-transform duration-300 ease-in-out
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Navigation Icons */}
        <div className="p-4">
          <div className="space-y-3">
            {navigationIcons.map((item) => (
              <MenuItem
                key={item.id}
                id={item.id}
                iconSrc={item.iconSrc}
                label={item.label}
                isActive={item.active || activeSubmenu === item.id}
                onClick={handleIconClick}
                submenu={item.submenu}
              />
            ))}
          </div>
        </div>
        
        {/* Settings at bottom */}
        <div className="p-4 mt-auto border-t border-gray-600 border-opacity-30">
          <div className="w-[67px] h-[61px] p-[7px] flex items-center justify-center hover:bg-gray-700 hover:bg-opacity-60 rounded-[15px] cursor-pointer transition-all duration-200">
            <Settings className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Submenu Panel */}
      {activeIcon && (
        <SubMenuWrapper
          isOpen={activeSubmenu !== null}
          onClose={handleCloseSubmenu}
          title={activeIcon.submenu.title}
          items={activeIcon.submenu.items}
          onItemClick={(itemId) => {
            console.log('Selected item:', itemId);
          }}
        />
      )}
    </>
  );
}