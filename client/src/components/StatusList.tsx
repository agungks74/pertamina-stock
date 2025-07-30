interface StatusItem {
  id: string;
  name: string;
  status: 'Completed' | 'In Progress' | 'Not Started';
}

interface StatusListProps {
  title: string;
  items: StatusItem[];
}

export default function StatusList({ title, items }: StatusListProps) {
  const getStatusColorClass = (status: string) => {
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
    <div className="bg-white rounded-lg shadow-md p-5 border border-gray-100">
      <h3 className="text-sm font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-1">
            <div className="flex items-center space-x-3">
              <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${getStatusColorClass(item.status)}`}></div>
              <span className="text-xs text-gray-700 font-medium">{item.name}</span>
            </div>
            <span className={`text-xs font-medium ${getStatusTextColor(item.status)}`}>{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
