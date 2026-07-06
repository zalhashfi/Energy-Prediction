import { Calendar, TrendingUp, CheckCircle, XCircle, Trash2 } from 'lucide-react';

export interface Prediction {
  id: string;
  text: string;
  resolveDate: string;
  confidence: number;
  createdAt: string;
  resolved: boolean;
  outcome?: 'correct' | 'incorrect';
}

interface PredictionCardProps {
  prediction: Prediction;
  onResolve: (id: string, outcome: 'correct' | 'incorrect') => void;
  onDelete: (id: string) => void;
}

export function PredictionCard({ prediction, onResolve, onDelete }: PredictionCardProps) {
  const isPast = new Date(prediction.resolveDate) < new Date();
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className={`bg-white rounded-lg shadow-md p-5 transition-all ${
      prediction.resolved 
        ? prediction.outcome === 'correct' 
          ? 'border-l-4 border-green-500' 
          : 'border-l-4 border-red-500'
        : 'border-l-4 border-blue-500'
    }`}>
      <div className="flex justify-between items-start mb-3">
        <p className="flex-1 text-gray-800">{prediction.text}</p>
        <button
          onClick={() => onDelete(prediction.id)}
          className="ml-3 text-gray-400 hover:text-red-500 transition-colors"
          aria-label="Delete prediction"
        >
          <Trash2 size={18} />
        </button>
      </div>

      <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <Calendar size={16} />
          <span>Resolve: {formatDate(prediction.resolveDate)}</span>
        </div>
        <div className="flex items-center gap-1">
          <TrendingUp size={16} />
          <span>Confidence: {prediction.confidence}%</span>
        </div>
      </div>

      {prediction.resolved ? (
        <div className={`flex items-center gap-2 text-sm ${
          prediction.outcome === 'correct' ? 'text-green-600' : 'text-red-600'
        }`}>
          {prediction.outcome === 'correct' ? (
            <>
              <CheckCircle size={16} />
              <span>Correct Prediction</span>
            </>
          ) : (
            <>
              <XCircle size={16} />
              <span>Incorrect Prediction</span>
            </>
          )}
        </div>
      ) : isPast ? (
        <div className="flex gap-2">
          <button
            onClick={() => onResolve(prediction.id, 'correct')}
            className="flex-1 bg-green-100 hover:bg-green-200 text-green-700 py-2 px-3 rounded text-sm transition-colors"
          >
            ✓ Correct
          </button>
          <button
            onClick={() => onResolve(prediction.id, 'incorrect')}
            className="flex-1 bg-red-100 hover:bg-red-200 text-red-700 py-2 px-3 rounded text-sm transition-colors"
          >
            ✗ Incorrect
          </button>
        </div>
      ) : (
        <div className="text-sm text-gray-500">Waiting for resolution date...</div>
      )}
    </div>
  );
}
