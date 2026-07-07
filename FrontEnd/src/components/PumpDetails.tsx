import { X, TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';
import { type PumpData } from './PumpCard';
import { PredictionChart } from './PredictionChart';

interface PumpDetailsProps {
  pump: PumpData;
  onClose: () => void;
}

export function PumpDetails({ pump, onClose }: PumpDetailsProps) {
  // Generate mock prediction data
  const generatePredictionData = () => {
    const hours = 24;
    const data = [];
    let basePressure = pump.pressure;
    let baseTemp = pump.temperature;
    
    for (let i = 0; i < hours; i++) {
      basePressure += (Math.random() - 0.5) * 2;
      baseTemp += (Math.random() - 0.5) * 1.5;
      
      data.push({
        time: `${i}h`,
        pressure: Math.max(0, basePressure).toFixed(1),
        temperature: Math.max(0, baseTemp).toFixed(1),
        efficiency: Math.max(60, Math.min(100, pump.efficiency + (Math.random() - 0.5) * 3)).toFixed(1),
      });
    }
    return data;
  };

  const predictionData = generatePredictionData();

  const predictions = [
    {
      title: 'Pressure Trend',
      value: '+2.3 bar',
      trend: 'up',
      description: 'Expected increase in next 6 hours',
      severity: 'normal',
    },
    {
      title: 'Bearing Wear',
      value: '73%',
      trend: 'down',
      description: 'Recommended maintenance within 48h',
      severity: 'warning',
    },
    {
      title: 'Seal Condition',
      value: '89%',
      trend: 'down',
      description: 'Gradual degradation detected',
      severity: 'normal',
    },
    {
      title: 'Cavitation Risk',
      value: 'Low',
      trend: 'stable',
      description: 'Operating within safe parameters',
      severity: 'good',
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl">{pump.name}</h2>
            <p className="text-gray-600">Predictive Analytics Dashboard</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {/* AI Predictions */}
          <div className="mb-6">
            <h3 className="text-xl mb-4">AI Predictions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {predictions.map((pred, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-sm text-gray-600">{pred.title}</p>
                    {pred.trend === 'up' && <TrendingUp className="text-blue-500" size={18} />}
                    {pred.trend === 'down' && <TrendingDown className="text-orange-500" size={18} />}
                    {pred.trend === 'stable' && <AlertCircle className="text-green-500" size={18} />}
                  </div>
                  <p className={`text-2xl mb-1 ${
                    pred.severity === 'warning' ? 'text-orange-600' : 
                    pred.severity === 'good' ? 'text-green-600' : 'text-gray-800'
                  }`}>{pred.value}</p>
                  <p className="text-xs text-gray-500">{pred.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <PredictionChart 
              data={predictionData} 
              title="Pressure Forecast (24h)" 
              dataKey="pressure" 
              color="#3b82f6"
              unit="bar"
            />
            <PredictionChart 
              data={predictionData} 
              title="Temperature Forecast (24h)" 
              dataKey="temperature" 
              color="#ef4444"
              unit="°C"
            />
          </div>

          <div className="grid grid-cols-1 gap-6">
            <PredictionChart 
              data={predictionData} 
              title="Efficiency Prediction (24h)" 
              dataKey="efficiency" 
              color="#10b981"
              unit="%"
            />
          </div>

          {/* Recommendations */}
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h3 className="text-lg mb-3 flex items-center gap-2">
              <AlertCircle className="text-blue-600" size={20} />
              Maintenance Recommendations
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Schedule bearing inspection within 48 hours to prevent potential failure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Monitor seal condition - replacement may be required in 2-3 weeks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Increase monitoring frequency during expected pressure spike</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Verify cooling system performance to maintain optimal temperature range</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
