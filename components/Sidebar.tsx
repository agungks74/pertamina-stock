'use client'

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
      label: 'Messages',
      submenu: [
        { id: 'inbox', label: 'Inbox', href: '/messages/inbox' },
        { id: 'sent', label: 'Sent Messages', href: '/messages/sent' },
        { id: 'drafts', label: 'Drafts', href: '/messages/drafts' }
      ]
    },
    {
      id: 'form-management',
      icon: Clipboard,
      label: 'Form Management',
      submenu: [
        { id: 'create-form', label: 'Create Form', href: '/forms/create' },
        { id: 'manage-forms', label: 'Manage Forms', href: '/forms/manage' },
        { id: 'form-templates', label: 'Form Templates', href: '/forms/templates' }
      ]
    },
    {
      id: 'dashboard',
      icon: BarChart3,
      label: 'Dashboard Status Monitor',
      isActive: activeMenu === 'Dashboard Status Monitor',
      submenu: [
        { id: 'terminal-status', label: 'Terminal Status', href: '/dashboard/terminal' },
        { id: 'kilang-status', label: 'Kilang Status', href: '/dashboard/kilang' },
        { id: 'intransit-status', label: 'Intransit Status', href: '/dashboard/intransit' }
      ]
    },
    {
      id: 'entity-management',
      icon: Building,
      label: 'Entity Management',
      submenu: [
        { id: 'add-entity', label: 'Add Entity', href: '/entities/add' },
        { id: 'manage-entities', label: 'Manage Entities', href: '/entities/manage' },
        { id: 'entity-reports', label: 'Entity Reports', href: '/entities/reports' }
      ]
    },
    {
      id: 'configuration',
      icon: Settings,
      label: 'Configuration',
      submenu: [
        { id: 'user-settings', label: 'User Settings', href: '/settings/user' },
        { id: 'system-config', label: 'System Configuration', href: '/settings/system' },
        { id: 'permissions', label: 'Permissions', href: '/settings/permissions' }
      ]
    }
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
        <div className="flex-1 py-4">
          {navigationIcons.map((nav) => {
            const IconComponent = nav.icon;
            const isActive = nav.isActive || activeSubmenu === nav.id;
            
            return (
              <button
                key={nav.id}
                onClick={() => handleIconClick(nav.id)}
                className={`
                  w-full h-16 flex items-center justify-center hover:bg-gray-600 transition-colors
                  ${isActive ? 'sidebar-active border-r-2 border-blue-400' : ''}
                `}
                title={nav.label}
              >
                <IconComponent className="w-6 h-6" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Submenu Panel */}
      {activeIcon && (
        <SubmenuPanel
          title={activeIcon.label}
          items={activeIcon.submenu}
          isOpen={!!activeSubmenu}
          onClose={handleCloseSubmenu}
          onItemClick={(href) => {
            console.log('Navigate to:', href);
            handleCloseSubmenu();
          }}
        />
      )}
    </>
  );
}