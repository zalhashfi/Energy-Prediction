import {
  LineChart,
  Line,
  BarChart,
  Bar,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { TrendingDown, Award, Target, Zap } from "lucide-react";

// Mock data for predictions
const predictionData = [
  { hour: "00:00", actual: 145, predicted: 142, },
  { hour: "02:00", actual: 138, predicted: 140 },
  { hour: "04:00", actual: 132, predicted: 135 },
  { hour: "06:00", actual: 155, predicted: 158 },
  { hour: "08:00", actual: 178, predicted: 175 },
  { hour: "10:00", actual: 192, predicted: 190 },
  { hour: "12:00", actual: 205, predicted: 208 },
  { hour: "14:00", actual: 198, predicted: 195 },
  { hour: "16:00", actual: 185, predicted: 188 },
  { hour: "18:00", actual: 172, predicted: 170 },
  { hour: "20:00", actual: 165, predicted: 168 },
  { hour: "22:00", actual: 152, predicted: 150 },
];

const monthlyData = [
  { month: "Jan", consumption: 4250, cost: 6375 },
  { month: "Feb", consumption: 4100, cost: 6150 },
  { month: "Mar", consumption: 4400, cost: 6600 },
  { month: "Apr", consumption: 4550, cost: 6825 },
  { month: "May", consumption: 4750, cost: 7125 },
  { month: "Jun", consumption: 4900, cost: 7350 },
];

const accuracyData = [
  { feature: "Flow Rate", importance: 24 },
  { feature: "Pressure", importance: 28 },
  { feature: "Temperature", importance: 18 },
  { feature: "Salinity", importance: 15 },
  { feature: "Pump Speed", importance: 10 },
  { feature: "Historical", importance: 5 },
];

const scatterData = [
  { actual: 145, predicted: 142 },
  { actual: 138, predicted: 140 },
  { actual: 132, predicted: 135 },
  { actual: 155, predicted: 158 },
  { actual: 178, predicted: 175 },
  { actual: 192, predicted: 190 },
  { actual: 205, predicted: 208 },
  { actual: 198, predicted: 195 },
  { actual: 185, predicted: 188 },
  { actual: 172, predicted: 170 },
  { actual: 165, predicted: 168 },
  { actual: 152, predicted: 150 },
  { actual: 160, predicted: 162 },
  { actual: 175, predicted: 173 },
  { actual: 188, predicted: 190 },
];

export function Results() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Model Results & Performance
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Comprehensive analysis of prediction accuracy and real-world impact
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Performance Metrics
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Award className="text-white" size={24} />
              </div>
              <span className="text-3xl font-bold text-blue-600">96.8%</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">R² Score</h3>
            <p className="text-sm text-gray-600">Model accuracy</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <Target className="text-white" size={24} />
              </div>
              <span className="text-3xl font-bold text-green-600">3.2 kW</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">RMSE</h3>
            <p className="text-sm text-gray-600">Root mean square error</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <TrendingDown className="text-white" size={24} />
              </div>
              <span className="text-3xl font-bold text-purple-600">2.4 kW</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">MAE</h3>
            <p className="text-sm text-gray-600">Mean absolute error</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                <Zap className="text-white" size={24} />
              </div>
              <span className="text-3xl font-bold text-orange-600">21.3%</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Cost Savings</h3>
            <p className="text-sm text-gray-600">Annual reduction</p>
          </div>
        </div>
      </section>

      {/* Prediction Chart */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            24-Hour Energy Consumption Prediction
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={predictionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis label={{ value: "Energy (kW)", angle: -90, position: "insideLeft" }} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="actual"
                  stroke="#2563eb"
                  strokeWidth={2}
                  name="Actual Consumption"
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="predicted"
                  stroke="#10b981"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Predicted Consumption"
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Feature Importance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Feature Importance Analysis
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={accuracyData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" label={{ value: "Importance (%)", position: "bottom" }} />
              <YAxis dataKey="feature" type="category" width={120} />
              <Tooltip />
              <Bar dataKey="importance" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-6 text-gray-600">
          Flow rate and pressure are the most influential factors in predicting
          energy consumption, accounting for over 50% of the model's decision-making
          process.
        </p>
      </section>

      {/* Scatter Plot */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Predicted vs Actual Values
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <ResponsiveContainer width="100%" height={400}>
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="actual"
                  name="Actual"
                  label={{ value: "Actual Consumption (kW)", position: "bottom" }}
                />
                <YAxis
                  dataKey="predicted"
                  name="Predicted"
                  label={{ value: "Predicted Consumption (kW)", angle: -90, position: "insideLeft" }}
                />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Scatter name="Predictions" data={scatterData} fill="#2563eb" />
                <Line
                  type="linear"
                  dataKey="actual"
                  stroke="#ef4444"
                  strokeWidth={2}
                  dot={false}
                  strokeDasharray="5 5"
                  name="Perfect Prediction"
                />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-6 text-gray-600">
            Points closer to the diagonal line indicate higher prediction accuracy.
            Our model demonstrates strong correlation between predicted and actual
            values.
          </p>
        </div>
      </section>

      {/* Monthly Analysis */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Monthly Consumption & Cost Analysis
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis
                yAxisId="left"
                label={{ value: "Energy (kWh)", angle: -90, position: "insideLeft" }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                label={{ value: "Cost ($)", angle: 90, position: "insideRight" }}
              />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="consumption" fill="#2563eb" name="Energy Consumption (kWh)" />
              <Bar yAxisId="right" dataKey="cost" fill="#10b981" name="Operating Cost ($)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Impact Summary */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Real-World Impact
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Energy Savings
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 21.3% reduction in energy costs</li>
                <li>• 850 MWh saved annually</li>
                <li>• $127,500 cost savings per year</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Environmental Impact
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 425 tons CO₂ reduction annually</li>
                <li>• Equivalent to 92 cars off the road</li>
                <li>• 180 acres of forest preserved</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Operational Benefits
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 30% reduction in equipment downtime</li>
                <li>• Improved maintenance scheduling</li>
                <li>• Extended pump lifespan by 2-3 years</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Model Performance
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 96.8% prediction accuracy</li>
                <li>• Real-time inference in &lt;100ms</li>
                <li>• Continuous learning from new data</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
