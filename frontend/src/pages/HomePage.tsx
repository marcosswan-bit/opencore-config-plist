import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          OpenCore Config.plist Simplifier
        </h1>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          Generate and manage OpenCore config.plist files with an intuitive interface.
          Perfect for Hackintosh builds of all complexity levels.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold mb-2">Easy Setup</h3>
            <p className="text-gray-600">Answer simple questions about your hardware</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-3xl mb-4">✅</div>
            <h3 className="text-lg font-semibold mb-2">Validation</h3>
            <p className="text-gray-600">Real-time checks catch configuration errors</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-3xl mb-4">📥</div>
            <h3 className="text-lg font-semibold mb-2">Import/Export</h3>
            <p className="text-gray-600">Upload or download your configurations</p>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <Link
            to="/questionnaire"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Start Building Config
          </Link>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
