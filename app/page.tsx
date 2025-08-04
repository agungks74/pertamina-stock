'use client'

import { useQuery } from '@tanstack/react-query';
import { Home } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Sidebar from '@/components/Sidebar';
import StatusCard from '@/components/StatusCard';
import StatusList from '@/components/StatusList';

interface DashboardStatus {
  id: string;
  type: string;
  submissionCompleted: number;
  submissionTotal: number;
  reviewStatus: string;
  approvalStatus: string;
}

interface RegionStatus {
  id: string;
  type: string;
  name: string;
  status: string;
}

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
    <div className="h-screen bg-pertamina-bg">
      {/* Fixed Header */}
      <TopBar username="Pertamina User" workTitle="Operations Manager" />
      
      {/* Main Layout */}
      <div className="flex pt-16 h-screen">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 lg:ml-16 ml-0 p-4 lg:p-6 overflow-auto relative">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
            <Home className="w-4 h-4" />
            <span>Dashboard Status Monitor</span>
          </div>

          {/* Page Title */}
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Status Monitor</h1>

          {/* Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Main Status Cards Column */}
            <div className="xl:col-span-2 space-y-6">
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
            <div className="space-y-6">
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