import { Mail, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4">About the Project</h3>
            <p className="text-sm">
              Advanced energy consumption prediction models for high-pressure
              pumps in desalination systems using Random Forest algorithms.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/methodology"
                  className="hover:text-white transition-colors"
                >
                  Methodology
                </a>
              </li>
              <li>
                <a
                  href="/technology"
                  className="hover:text-white transition-colors"
                >
                  Technology
                </a>
              </li>
              <li>
                <a href="/results" className="hover:text-white transition-colors">
                  Results
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@energyprediction.com"
                className="flex items-center space-x-2 text-sm hover:text-white transition-colors"
              >
                <Mail size={16} />
                <span>info@energyprediction.com</span>
              </a>
              <div className="flex space-x-4 pt-2">
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} Energy Prediction Models. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
