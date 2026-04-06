import { useState } from 'react';
import { PumpCard, type PumpData } from './PumpCard';
import { PumpDetails } from './PumpDetails';
import { SystemOverview } from './SystemOverview';
import { Settings, Gauge } from 'lucide-react';

export function ListPump() {
  const [selectedPump, setSelectedPump] = useState<PumpData | null>(null);

  // Mock pump data
  const pumps: PumpData[] = [
    {
      id: '1',
      name: 'HP Pump A1',
      pressure: 285.4,
      temperature: 68.2,
      vibration: 2.1,
      efficiency: 94.5,
      status: 'optimal',
      nextMaintenanceHours: 156,
    },
    {
      id: '2',
      name: 'HP Pump A2',
      pressure: 278.9,
      temperature: 72.8,
      vibration: 3.8,
      efficiency: 89.2,
      status: 'warning',
      nextMaintenanceHours: 48,
    },
    {
      id: '3',
      name: 'HP Pump B1',
      pressure: 292.1,
      temperature: 66.5,
      vibration: 1.9,
      efficiency: 96.1,
      status: 'optimal',
      nextMaintenanceHours: 312,
    },
    {
      id: '4',
      name: 'HP Pump B2',
      pressure: 251.3,
      temperature: 81.4,
      vibration: 5.2,
      efficiency: 78.3,
      status: 'critical',
      nextMaintenanceHours: 12,
    },
    {
      id: '5',
      name: 'HP Pump C1',
      pressure: 288.7,
      temperature: 69.1,
      vibration: 2.5,
      efficiency: 92.8,
      status: 'optimal',
      nextMaintenanceHours: 203,
    },
    {
      id: '6',
      name: 'HP Pump C2',
      pressure: 282.5,
      temperature: 74.3,
      vibration: 3.2,
      efficiency: 87.6,
      status: 'warning',
      nextMaintenanceHours: 72,
    },
  ];

  const activePumps = pumps.filter(p => p.status !== 'critical').length;
  const warningCount = pumps.filter(p => p.status === 'warning').length;
  const criticalCount = pumps.filter(p => p.status === 'critical').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Gauge className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-2xl">Energy Pump Analytics</h1>
                <p className="text-sm text-gray-600">High Pressure Pump Prediction System</p>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Settings className="text-gray-600" size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* System Overview */}
        <SystemOverview
          totalPumps={pumps.length}
          activePumps={activePumps}
          warningCount={warningCount}
          criticalCount={criticalCount}
        />

        {/* Pumps Grid */}
        <div className="mb-6">
          <h2 className="text-xl mb-4">Pump Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pumps.map(pump => (
              <PumpCard
                key={pump.id}
                pump={pump}
                onClick={() => setSelectedPump(pump)}
              />
            ))}
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
          <h3 className="text-lg mb-2">Powered Predictive Maintenance</h3>
          <p className="text-sm text-gray-700">
            This system uses machine learning algorithms to analyze real-time sensor data from high-pressure pumps,
            predicting potential failures and optimizing maintenance schedules. Click on any pump to view detailed
            predictions and recommendations.
          </p>
        </div>
      </main>

      {/* Pump Details Modal */}
      {selectedPump && (
        <PumpDetails
          pump={selectedPump}
          onClose={() => setSelectedPump(null)}
        />
      )}
    </div>
  );
}
