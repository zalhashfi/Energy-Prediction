import { ArrowRight, Zap, Target, TrendingUp, Database } from "lucide-react";
import { Link } from "react-router";


export function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Energy Consumption Prediction for Desalination Systems
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Advanced machine learning models using Random Forest algorithms to optimize energy consumption in high-pressure pumps
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/methodology"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transitions-colors font-semibold"
              >
                Explore Methodology
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/results"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold border border-blue-400"
              >
                View Result
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Project Overview
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Developing cutting edge prediction models to enhance energy efficiency in desalination systems through machine learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="assets/Foto Main.jpg"
              alt="Industrial pump machinery"
              className="rounded-lg shadow-xl w-[500px] h-[300px] "
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 font-semibold">
              Desalination system are critical for providing fresh water in
              many regions worldwide. High Pressure Pump are one of the most
              energy-intensive components in these system, accounting for
              significant operational costs.
            </p>
            <p className="text-lg text-gray-700 font-semibold">
              Our research focuses on developing accurate prediction models using
              Random Forest algorithms to forecast energy consumption patterns,
              enabling operators to optimize performance and reduce costs.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}

      <section className="bg-gray-50 py-8 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600">
              Advanced capabilities for accurate energy prediction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-col-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                High Accuracy
              </h3>
              <p className="text-gray-600">
                Random Forest algorithms provide exceptional prediction accuracy
                with minimal error rates
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Real-time Analysis
              </h3>
              <p className="text-gray-600">
                Process and analyze operational data in real-time for immediate
                insights
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Trend Forecasting
              </h3>
              <p className="text-gray-600">
                Predict future energy consumption patterns to optimize operations
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Data Integration
              </h3>
              <p className="text-gray-600">
                Seamlessly integrate with existing monitoring systems and sensors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="max-2-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Impact on Sustainbility 
            </h2>
            <p className="text-lg text-gray-700">
              By accurately predicting energy consumption, our models enable:
            </p>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex item-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>
                  Reduced Operational costs by 15-25%
                </span>
              </li>
              <li className="flex item-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>
                  Lower carbon footprint through optimized energy usage
                </span>
              </li>
              <li className="flex item-center">
                <span className="text-blue-600 mr-2">✓</span>
                <span>
                  Extende equipment lifespan with predictive maintenance
                </span>
              </li>
              <li className="flex item-center">
                <span className="text-blue-600 mr-2">✓</span>
                <span>
                  Improved water production efficiency and reliability
                </span>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <img
            src="assets/FotoImpact.png"
            alt="Energy efficiency technology"
            className="rounded-lg shadow-xl w-[500px] h-[300px]"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Learn More?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Explore our methodology and see the results of our prediction models
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/methodology"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
            >
              Learn About Methodology
            </Link>
            <Link
              to="/results"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold border border-blue-400"
            >
              View Results
            </Link>
          </div>
        </div>
       </section>
    </div>
  )
}


