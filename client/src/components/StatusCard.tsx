import { Check, X, RefreshCw } from 'lucide-react';
import DonutChart from './DonutChart';

interface StatusCardProps {
  title: string;
  submissionCompleted: number;
  submissionTotal: number;
  reviewStatus: 'Completed' | 'In Progress' | 'Not Started';
  approvalStatus: 'Completed' | 'In Progress' | 'Not Started';
}

export default function StatusCard({
  title,
  submissionCompleted,
  submissionTotal,
  reviewStatus,
  approvalStatus
}: StatusCardProps) {
  const percentage = submissionTotal > 0 ? Math.round((submissionCompleted / submissionTotal) * 100) : 0;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <Check className="text-white w-5 h-5" />;
      case 'In Progress':
        return <RefreshCw className="text-white w-5 h-5" />;
      case 'Not Started':
      default:
        return <X className="text-white w-5 h-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-status-green';
      case 'In Progress':
        return 'bg-status-orange';
      case 'Not Started':
      default:
        return 'bg-status-red';
    }
  };

  const getStatusTextColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'status-green';
      case 'In Progress':
        return 'status-orange';
      case 'Not Started':
      default:
        return 'status-red';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="grid grid-cols-3 gap-6">
        <div className="text-center">
          <h4 className="text-sm font-medium text-gray-600 mb-3">Submission</h4>
          <div className="flex justify-center mb-2">
            <DonutChart percentage={percentage} />
          </div>
          <div className="text-xs text-gray-600">{submissionCompleted} of {submissionTotal}</div>
        </div>
        <div className="text-center">
          <h4 className="text-sm font-medium text-gray-600 mb-3">Review</h4>
          <div className="w-20 h-20 mx-auto mb-2 flex items-center justify-center">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStatusColor(reviewStatus)}`}>
              {getStatusIcon(reviewStatus)}
            </div>
          </div>
          <div className={`text-xs font-medium ${getStatusTextColor(reviewStatus)}`}>{reviewStatus}</div>
        </div>
        <div className="text-center">
          <h4 className="text-sm font-medium text-gray-600 mb-3">Approval</h4>
          <div className="w-20 h-20 mx-auto mb-2 flex items-center justify-center">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStatusColor(approvalStatus)}`}>
              {getStatusIcon(approvalStatus)}
            </div>
          </div>
          <div className={`text-xs font-medium ${getStatusTextColor(approvalStatus)}`}>{approvalStatus}</div>
        </div>
      </div>
    </div>
  );
}
