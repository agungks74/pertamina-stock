interface StatusItem {
  id: string;
  name: string;
  status: 'completed' | 'in-progress' | 'pending';
}

interface StatusListProps {
  title: string;
  items: StatusItem[];
}

export default function StatusList({ title, items }: StatusListProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-orange-500';
      case 'pending':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'pending':
        return 'Pending';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200">
      {/* Header */}
      <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 rounded-t-lg">
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
      </div>

      {/* List */}
      <div className="p-0">
        {items.length === 0 ? (
          <div className="px-4 py-6 text-center text-gray-500 text-sm">
            No data available
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {items.map((item) => (
              <div key={item.id} className="px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <span className="text-sm text-gray-700 font-medium">{item.name}</span>
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${getStatusColor(item.status)}`}></div>
                  <span className="text-xs text-gray-600">{getStatusText(item.status)}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}