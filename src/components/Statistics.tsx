import { Target, Award, TrendingUp } from 'lucide-react';
import { type Prediction } from './PredictionCard';

interface StatisticsProps {
  predictions: Prediction[];
}

export function Statistics({ predictions }: StatisticsProps) {
  const resolvedPredictions = predictions.filter(p => p.resolved);
  const correctPredictions = resolvedPredictions.filter(p => p.outcome === 'correct');
  const activePredictions = predictions.filter(p => !p.resolved);
  
  const accuracy = resolvedPredictions.length > 0
    ? Math.round((correctPredictions.length / resolvedPredictions.length) * 100)
    : 0;

  const avgConfidence = predictions.length > 0
    ? Math.round(predictions.reduce((sum, p) => sum + p.confidence, 0) / predictions.length)
    : 0;

  const stats = [
    {
      label: 'Active Predictions',
      value: activePredictions.length,
      icon: Target,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      label: 'Accuracy Rate',
      value: `${accuracy}%`,
      icon: Award,
      color: 'bg-green-100 text-green-600',
    },
    {
      label: 'Avg Confidence',
      value: `${avgConfidence}%`,
      icon: TrendingUp,
      color: 'bg-purple-100 text-purple-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
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
