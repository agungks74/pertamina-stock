import { useQuery } from '@tanstack/react-query';
import { Home } from 'lucide-react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import StatusCard from '@/components/StatusCard';
import StatusList from '@/components/StatusList';
import { DashboardStatus, RegionStatus } from '@shared/schema';

export default function Dashboard() {
  const { data: dashboardStatuses, isLoading: isDashboardLoading } = useQuery<DashboardStatus[]>({
    queryKey: ['/api/dashboard/status'],
  });

  const { data: regionStatuses, isLoading: isRegionsLoading } = useQuery<RegionStatus[]>({
    queryKey: ['/api/dashboard/regions'],
  });

  if (isDashboardLoading || isRegionsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const terminalStatus = dashboardStatuses?.find(s => s.type === 'terminal');
  const kilangStatus = dashboardStatuses?.find(s => s.type === 'kilang');
  const intransitStatus = dashboardStatuses?.find(s => s.type === 'intransit');

  const terminalRegions = regionStatuses?.filter(r => r.type === 'terminal') || [];
  const kilangRegions = regionStatuses?.filter(r => r.type === 'kilang') || [];

  return (
    <div className="flex h-screen pertamina-bg">
      <Sidebar />
      
      <div className="flex-1 flex flex-col lg:ml-0 ml-0">
        <Header />
        
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4 lg:mb-6">
            <Home className="w-4 h-4" />
            <span>Dashboard Status Monitor</span>
          </div>

          {/* Page Title */}
          <h1 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 lg:mb-6">Dashboard Status Monitor</h1>

          {/* Responsive Layout */}
          <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6">
            {/* Main Status Cards Column */}
            <div className="lg:col-span-2 space-y-4 lg:space-y-6">
              {terminalStatus && (
                <StatusCard
                  title="Data Terminal Status"
                  submissionCompleted={terminalStatus.submissionCompleted}
                  submissionTotal={terminalStatus.submissionTotal}
                  reviewStatus={terminalStatus.reviewStatus as any}
                  approvalStatus={terminalStatus.approvalStatus as any}
                />
              )}

              {kilangStatus && (
                <StatusCard
                  title="Data Kilang Status"
                  submissionCompleted={kilangStatus.submissionCompleted}
                  submissionTotal={kilangStatus.submissionTotal}
                  reviewStatus={kilangStatus.reviewStatus as any}
                  approvalStatus={kilangStatus.approvalStatus as any}
                />
              )}

              {intransitStatus && (
                <StatusCard
                  title="Data Intransit Status"
                  submissionCompleted={intransitStatus.submissionCompleted}
                  submissionTotal={intransitStatus.submissionTotal}
                  reviewStatus={intransitStatus.reviewStatus as any}
                  approvalStatus={intransitStatus.approvalStatus as any}
                />
              )}
            </div>

            {/* Right Sidebar - Status Lists */}
            <div className="space-y-4 lg:space-y-6">
              <StatusList
                title="Data Terminal Region Submission"
                items={terminalRegions.map(r => ({
                  id: r.id,
                  name: r.name,
                  status: r.status as any
                }))}
              />

              <StatusList
                title="Data Kilang Region Submission"
                items={kilangRegions.map(r => ({
                  id: r.id,
                  name: r.name,
                  status: r.status as any
                }))}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
