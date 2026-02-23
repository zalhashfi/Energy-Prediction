import { Database, GitBranch, Settings, CheckCircle } from "lucide-react";

export function Methodology() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Research Methodology
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            A comprehensive approach to developing energy consumption prediction
            models using Random Forest algorithms
          </p>
        </div>
      </section>

      {/* Random Forest Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Random Forest?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1653564142048-d5af2cf9b50f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMG1hY2hpbmUlMjBsZWFybmluZ3xlbnwxfHx8fDE3NzE0ODQ5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Machine learning visualization"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Random Forest is an ensemble learning method that constructs
                multiple decision trees during training and outputs the average
                prediction. This approach is particularly well-suited for energy
                consumption prediction due to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">
                    High accuracy in handling non-linear relationships between
                    variables
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">
                    Robust performance with missing data and outliers
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">
                    Ability to handle multiple input features simultaneously
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">
                    Reduced risk of overfitting through ensemble averaging
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Implementation Process
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-lg p-6 shadow-md h-full">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Database className="text-blue-600" size={24} />
                </div>
                <div className="text-sm font-semibold text-blue-600 mb-2">
                  STEP 1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Data Collection
                </h3>
                <p className="text-gray-600">
                  Gather operational data from high-pressure pumps including flow
                  rates, pressure levels, power consumption, and environmental
                  conditions
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-lg p-6 shadow-md h-full">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="text-purple-600" size={24} />
                </div>
                <div className="text-sm font-semibold text-purple-600 mb-2">
                  STEP 2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Data Preprocessing
                </h3>
                <p className="text-gray-600">
                  Clean, normalize, and transform raw data. Handle missing values,
                  remove outliers, and perform feature engineering
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white rounded-lg p-6 shadow-md h-full">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <GitBranch className="text-green-600" size={24} />
                </div>
                <div className="text-sm font-semibold text-green-600 mb-2">
                  STEP 3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Model Training
                </h3>
                <p className="text-gray-600">
                  Train Random Forest model with optimized hyperparameters. Split
                  data into training and testing sets for validation
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-white rounded-lg p-6 shadow-md h-full">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="text-orange-600" size={24} />
                </div>
                <div className="text-sm font-semibold text-orange-600 mb-2">
                  STEP 4
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Validation
                </h3>
                <p className="text-gray-600">
                  Evaluate model performance using metrics like RMSE, MAE, and R².
                  Fine-tune parameters for optimal accuracy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Used */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Input Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Flow Rate",
              description: "Water flow rate through the pump system (m³/h)",
            },
            {
              title: "Pressure",
              description: "Operating pressure levels (bar)",
            },
            {
              title: "Temperature",
              description: "Water and ambient temperature (°C)",
            },
            {
              title: "Salinity",
              description: "Feed water salinity levels (TDS)",
            },
            {
              title: "Pump Speed",
              description: "Rotational speed of pump impeller (RPM)",
            },
            {
              title: "Historical Data",
              description: "Past energy consumption patterns",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Model Configuration */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Model Configuration
          </h2>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">
                    Parameter
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">
                    Value
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-gray-900">n_estimators</td>
                  <td className="px-6 py-4 text-gray-700">100</td>
                  <td className="px-6 py-4 text-gray-600">Number of trees</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-gray-900">max_depth</td>
                  <td className="px-6 py-4 text-gray-700">15</td>
                  <td className="px-6 py-4 text-gray-600">
                    Maximum tree depth
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900">min_samples_split</td>
                  <td className="px-6 py-4 text-gray-700">5</td>
                  <td className="px-6 py-4 text-gray-600">
                    Minimum samples for split
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-gray-900">min_samples_leaf</td>
                  <td className="px-6 py-4 text-gray-700">2</td>
                  <td className="px-6 py-4 text-gray-600">
                    Minimum samples at leaf
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900">random_state</td>
                  <td className="px-6 py-4 text-gray-700">42</td>
                  <td className="px-6 py-4 text-gray-600">
                    Reproducibility seed
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
