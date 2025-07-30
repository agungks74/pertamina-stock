'use client'

import DonutChart from './DonutChart';

interface StatusCardProps {
  title: string;
  submissionCompleted: number;
  submissionTotal: number;
  reviewStatus: 'completed' | 'in-progress' | 'pending';
  approvalStatus: 'approved' | 'pending' | 'rejected';
}

export default function StatusCard({
  title,
  submissionCompleted,
  submissionTotal,
  reviewStatus,
  approvalStatus
}: StatusCardProps) {
  const submissionPercentage = (submissionCompleted / submissionTotal) * 100;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
      case 'approved':
        return 'text-green-600';
      case 'in-progress':
      case 'pending':
        return 'text-orange-600';
      case 'rejected':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case 'completed':
      case 'approved':
        return 'bg-green-100';
      case 'in-progress':
      case 'pending':
        return 'bg-orange-100';
      case 'rejected':
        return 'bg-red-100';
      default:
        return 'bg-gray-100';
    }
  };

  const formatStatus = (status: string) => {
    return status.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      {/* Card Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="text-sm text-gray-500">
          {submissionCompleted}/{submissionTotal} submitted
        </div>
      </div>

      {/* Card Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Submission Progress with Donut Chart */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 mb-3">
            <DonutChart
              data={[
                { label: 'Completed', value: submissionCompleted, color: '#10B981' },
                { label: 'Remaining', value: submissionTotal - submissionCompleted, color: '#E5E7EB' }
              ]}
            />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">Submission Progress</p>
            <p className="text-lg font-semibold text-gray-800">{Math.round(submissionPercentage)}%</p>
          </div>
        </div>

        {/* Review Status */}
        <div className="flex flex-col items-center justify-center">
          <div className={`px-3 py-2 rounded-full text-sm font-medium ${getStatusBgColor(reviewStatus)} ${getStatusColor(reviewStatus)} mb-2`}>
            {formatStatus(reviewStatus)}
          </div>
          <p className="text-sm text-gray-600 text-center">Review Status</p>
        </div>

        {/* Approval Status */}
        <div className="flex flex-col items-center justify-center">
          <div className={`px-3 py-2 rounded-full text-sm font-medium ${getStatusBgColor(approvalStatus)} ${getStatusColor(approvalStatus)} mb-2`}>
            {formatStatus(approvalStatus)}
          </div>
          <p className="text-sm text-gray-600 text-center">Approval Status</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Progress</span>
          <span>{submissionCompleted} of {submissionTotal}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${submissionPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}