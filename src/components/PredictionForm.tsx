import { useState } from 'react';
import { Plus } from 'lucide-react';

interface PredictionFormProps {
  onAddPrediction: (text: string, resolveDate: string, confidence: number) => void;
}

export function PredictionForm({ onAddPrediction }: PredictionFormProps) {
  const [text, setText] = useState('');
  const [resolveDate, setResolveDate] = useState('');
  const [confidence, setConfidence] = useState(50);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && resolveDate) {
      onAddPrediction(text.trim(), resolveDate, confidence);
      setText('');
      setResolveDate('');
      setConfidence(50);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl mb-4">Make a Prediction</h2>
      
      <div className="mb-4">
        <label htmlFor="prediction-text" className="block text-sm mb-2">
          What do you predict?
        </label>
        <textarea
          id="prediction-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="e.g., Bitcoin will reach $100,000 by the end of the year"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="resolve-date" className="block text-sm mb-2">
            Resolution Date
          </label>
          <input
            id="resolve-date"
            type="date"
            value={resolveDate}
            onChange={(e) => setResolveDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="confidence" className="block text-sm mb-2">
            Confidence: {confidence}%
          </label>
          <input
            id="confidence"
            type="range"
            min="0"
            max="100"
            value={confidence}
            onChange={(e) => setConfidence(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-colors"
      >
        <Plus size={20} />
        Add Prediction
      </button>
    </form>
  );
}
