import { Mail, Clipboard, BarChart3, Building, Settings, ChevronRight, Home } from 'lucide-react';

interface SidebarProps {
  activeMenu?: string;
}

export default function Sidebar({ activeMenu = "Dashboard Status Monitor" }: SidebarProps) {
  const navigationIcons = [
    { icon: Mail, active: false },
    { icon: Clipboard, active: true },
    { icon: BarChart3, active: false },
    { icon: Building, active: false },
  ];

  return (
    <div className="w-60 pertamina-navy text-white flex flex-col">
      {/* Sidebar Navigation Icons */}
      <div className="p-4 space-y-6">
        <div className="flex flex-col items-center space-y-4">
          {navigationIcons.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  item.active ? 'sidebar-active' : 'hover:bg-gray-700'
                }`}
              >
                <IconComponent 
                  className={`text-xl w-6 h-6 ${
                    item.active ? 'text-green-500' : 'text-white'
                  }`} 
                />
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Sidebar Menu Content */}
      <div className="flex-1 px-4 py-6">
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-4">National Operational Stock</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 sidebar-active rounded-lg">
              <span className="text-sm">{activeMenu}</span>
              <ChevronRight className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-between p-2 hover:bg-gray-700 rounded-lg cursor-pointer transition-colors">
              <span className="text-sm">Summary Report</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Settings Icon at Bottom */}
      <div className="p-4">
        <div className="p-3 hover:bg-gray-700 rounded-lg cursor-pointer transition-colors">
          <Settings className="text-xl w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
