import { Activity, AlertTriangle, CheckCircle, Gauge } from 'lucide-react';

export interface PumpData {
  id: string;
  name: string;
  pressure: number;
  temperature: number;
  vibration: number;
  efficiency: number;
  status: 'optimal' | 'warning' | 'critical';
  nextMaintenanceHours: number;
}

interface PumpCardProps {
  pump: PumpData;
  onClick: () => void;
}

export function PumpCard({ pump, onClick }: PumpCardProps) {
  const statusConfig = {
    optimal: { color: 'bg-green-100 border-green-500', icon: CheckCircle, iconColor: 'text-green-600', text: 'Optimal' },
    warning: { color: 'bg-yellow-100 border-yellow-500', icon: AlertTriangle, iconColor: 'text-yellow-600', text: 'Warning' },
    critical: { color: 'bg-red-100 border-red-500', icon: AlertTriangle, iconColor: 'text-red-600', text: 'Critical' },
  };

  const config = statusConfig[pump.status];
  const StatusIcon = config.icon;

  return (
    <div 
      onClick={onClick}
      className={`${config.color} border-l-4 rounded-lg p-5 cursor-pointer hover:shadow-lg transition-all bg-white`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg mb-1">{pump.name}</h3>
          <div className={`flex items-center gap-2 ${config.iconColor}`}>
            <StatusIcon size={18} />
            <span className="text-sm">{config.text}</span>
          </div>
        </div>
        <Gauge className={config.iconColor} size={32} />
      </div>

      <div className="grid grid-cols-2 gap-3 text-sm">
        <div>
          <p className="text-gray-500">Pressure</p>
          <p className="text-lg">{pump.pressure} bar</p>
        </div>
        <div>
          <p className="text-gray-500">Temperature</p>
          <p className="text-lg">{pump.temperature}°C</p>
        </div>
        <div>
          <p className="text-gray-500">Vibration</p>
          <p className="text-lg">{pump.vibration} mm/s</p>
        </div>
        <div>
          <p className="text-gray-500">Efficiency</p>
          <p className="text-lg">{pump.efficiency}%</p>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Activity size={16} />
          <span>Next maintenance in {pump.nextMaintenanceHours}h</span>
        </div>
      </div>
    </div>
  );
}
