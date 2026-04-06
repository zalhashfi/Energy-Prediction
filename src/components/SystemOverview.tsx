import { Activity, AlertTriangle, CheckCircle, Zap } from 'lucide-react';

interface SystemOverviewProps {
  totalPumps: number;
  activePumps: number;
  warningCount: number;
  criticalCount: number;
}

export function SystemOverview({ totalPumps, activePumps, warningCount, criticalCount }: SystemOverviewProps) {
  const stats = [
    {
      label: 'Total Pumps',
      value: totalPumps,
      icon: Zap,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      label: 'Active Pumps',
      value: activePumps,
      icon: Activity,
      color: 'bg-green-100 text-green-600',
    },
    {
      label: 'Warnings',
      value: warningCount,
      icon: AlertTriangle,
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      label: 'Critical Alerts',
      value: criticalCount,
      icon: AlertTriangle,
      color: 'bg-red-100 text-red-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="bg-white rounded-lg shadow-md p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-3xl">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-full ${stat.color}`}>
                <Icon size={24} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
