import { Code, Cpu, Cloud, Lock } from "lucide-react";

export function Technology() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Technology Stack
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Advanced tools and frameworks powering our energy prediction models
          </p>
        </div>
      </section>

      {/* Main Technologies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Core Technologies
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 border border-blue-200">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <Code className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Python</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Primary programming language for data processing, model training,
              and analysis. Chosen for its extensive machine learning ecosystem
              and scientific computing capabilities.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white rounded-full text-sm">
                NumPy
              </span>
              <span className="px-3 py-1 bg-white rounded-full text-sm">
                Pandas
              </span>
              <span className="px-3 py-1 bg-white rounded-full text-sm">
                Matplotlib
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 border border-green-200">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                <Cpu className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Scikit-learn
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              Machine learning library providing the Random Forest implementation.
              Offers robust tools for model training, validation, and
              hyperparameter tuning.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white rounded-full text-sm">
                RandomForestRegressor
              </span>
              <span className="px-3 py-1 bg-white rounded-full text-sm">
                GridSearchCV
              </span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Database className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              PostgreSQL
            </h3>
            <p className="text-gray-600">
              Robust database system for storing historical operational data and
              model predictions
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Cloud className="text-orange-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              TensorFlow
            </h3>
            <p className="text-gray-600">
              Optional deep learning framework for advanced model architectures
              and ensemble methods
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Lock className="text-red-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Docker
            </h3>
            <p className="text-gray-600">
              Containerization for consistent deployment across different
              environments and systems
            </p>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            System Architecture
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-lg p-6 mb-4">
                <h3 className="text-xl font-semibold mb-2">Data Layer</h3>
                <p className="text-sm text-blue-100">
                  Data collection from sensors and SCADA systems
                </p>
              </div>
              <div className="text-gray-600 text-sm">
                Real-time data ingestion pipeline with validation and cleaning
              </div>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white rounded-lg p-6 mb-4">
                <h3 className="text-xl font-semibold mb-2">Processing Layer</h3>
                <p className="text-sm text-green-100">
                  Feature engineering and model inference
                </p>
              </div>
              <div className="text-gray-600 text-sm">
                Transform raw data into features and generate predictions
              </div>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-lg p-6 mb-4">
                <h3 className="text-xl font-semibold mb-2">
                  Presentation Layer
                </h3>
                <p className="text-sm text-purple-100">
                  Dashboard and visualization interface
                </p>
              </div>
              <div className="text-gray-600 text-sm">
                Interactive dashboards for monitoring and analysis
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <img
              src="assets/fotoTech.jpg"
              alt="Research laboratory"
              className="rounded-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Data Pipeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Data Pipeline
        </h2>

        <div className="space-y-6">
          {[
            {
              step: "1",
              title: "Data Acquisition",
              description:
                "Collect real-time data from pump sensors, flow meters, pressure gauges, and SCADA systems",
              color: "blue",
            },
            {
              step: "2",
              title: "Data Validation",
              description:
                "Validate incoming data for completeness, check ranges, and flag anomalies",
              color: "green",
            },
            {
              step: "3",
              title: "Feature Engineering",
              description:
                "Transform raw data into meaningful features: moving averages, rate of change, statistical aggregates",
              color: "purple",
            },
            {
              step: "4",
              title: "Model Inference",
              description:
                "Run Random Forest model to generate energy consumption predictions",
              color: "orange",
            },
            {
              step: "5",
              title: "Result Storage",
              description:
                "Store predictions and confidence intervals in database for historical analysis",
              color: "red",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex items-start space-x-4 bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div
                className={`w-12 h-12 bg-${item.color}-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0`}
              >
                {item.step}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Performance Considerations */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Performance Optimizations
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-3">
                Model Caching
              </h3>
              <p className="text-gray-600">
                Pre-trained models are cached in memory for instant predictions
                without reloading
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-3">
                Parallel Processing
              </h3>
              <p className="text-gray-600">
                Multiple pump systems analyzed simultaneously using multiprocessing
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-3">
                Batch Predictions
              </h3>
              <p className="text-gray-600">
                Process multiple data points in batches for improved throughput
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-3">
                Incremental Learning
              </h3>
              <p className="text-gray-600">
                Models updated incrementally with new data without full retraining
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Database(props: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
    </svg>
  );
}
