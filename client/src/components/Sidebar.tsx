import { useState } from 'react';
import { Mail, Clipboard, BarChart3, Building, Settings, ChevronRight, Menu, X } from 'lucide-react';

interface SidebarProps {
  activeMenu?: string;
}

export default function Sidebar({ activeMenu = "Dashboard Status Monitor" }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navigationIcons = [
    { icon: Mail, active: false, label: "Messages" },
    { icon: Clipboard, active: true, label: "Dashboard" },
    { icon: BarChart3, active: false, label: "Reports" },
    { icon: Building, active: false, label: "Management" },
  ];

  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleMobile}
          className="p-2 bg-gray-800 text-white rounded-lg shadow-lg"
        >
          {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 fixed lg:relative z-50 lg:z-auto transition-all duration-300 ease-in-out
        ${isCollapsed ? 'w-16' : 'w-64'} 
        h-full pertamina-navy text-white flex flex-col shadow-xl lg:shadow-none
      `}>
        
        {/* Collapse button for desktop */}
        <div className="hidden lg:block absolute -right-3 top-20 z-10">
          <button
            onClick={toggleCollapse}
            className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:bg-gray-50"
          >
            <ChevronRight className={`w-3 h-3 transition-transform ${isCollapsed ? 'rotate-0' : 'rotate-180'}`} />
          </button>
        </div>

        {/* Navigation Icons */}
        <div className="p-4">
          <div className={`${isCollapsed ? 'space-y-3' : 'space-y-4'}`}>
            {navigationIcons.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className={`
                    ${isCollapsed ? 'p-2 justify-center' : 'p-3'} 
                    flex items-center rounded-lg cursor-pointer transition-all duration-200
                    ${item.active 
                      ? 'bg-gray-600 bg-opacity-60' 
                      : 'hover:bg-gray-700 hover:bg-opacity-60'
                    }
                  `}
                  title={isCollapsed ? item.label : undefined}
                >
                  <IconComponent 
                    className={`
                      ${isCollapsed ? 'w-5 h-5' : 'w-6 h-6'} 
                      ${item.active ? 'text-green-400' : 'text-white'}
                    `} 
                  />
                  {!isCollapsed && (
                    <span className="ml-3 text-sm font-medium">{item.label}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Menu Content */}
        {!isCollapsed && (
          <div className="flex-1 px-4 py-2">
            <div className="mb-6">
              <h3 className="text-xs font-semibold mb-3 text-gray-300 uppercase tracking-wider">
                National Operational Stock
              </h3>
              <div className="space-y-1">
                <div className="flex items-center justify-between p-3 bg-gray-600 bg-opacity-60 rounded-lg">
                  <span className="text-sm font-medium">{activeMenu}</span>
                  <ChevronRight className="w-4 h-4 text-gray-300" />
                </div>
                <div className="flex items-center justify-between p-3 hover:bg-gray-700 hover:bg-opacity-60 rounded-lg cursor-pointer transition-all duration-200">
                  <span className="text-sm">Summary Report</span>
                  <ChevronRight className="w-4 h-4 text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Settings at bottom */}
        <div className="p-4 mt-auto border-t border-gray-600 border-opacity-30">
          <div className={`
            ${isCollapsed ? 'p-2 justify-center' : 'p-3'} 
            flex items-center hover:bg-gray-700 hover:bg-opacity-60 rounded-lg cursor-pointer transition-all duration-200
          `}>
            <Settings className={`${isCollapsed ? 'w-5 h-5' : 'w-6 h-6'} text-white`} />
            {!isCollapsed && <span className="ml-3 text-sm">Settings</span>}
          </div>
        </div>
      </div>
    </>
  );
}
