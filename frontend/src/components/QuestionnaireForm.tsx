import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  cpuBrand: string;
  cpuGeneration: string;
  gpuType: string;
  gpuModel: string;
  motherboard: string;
  ram: string;
  bootLoader: string;
}

const QuestionnaireForm: React.FC = () => {
  const { register, handleSubmit, watch } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);
  const cpuBrand = watch('cpuBrand');

  const onSubmit = (data: FormData) => {
    console.log('Form data:', data);
    setSubmitted(true);
    // TODO: Send data to backend to generate config.plist
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Hardware Configuration</h1>

        {submitted && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg text-green-800">
            Configuration submitted! Generating your config.plist...
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* CPU Section */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              CPU Brand
            </label>
            <select
              {...register('cpuBrand', { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select CPU Brand</option>
              <option value="intel">Intel</option>
              <option value="amd">AMD (Experimental)</option>
            </select>
          </div>

          {cpuBrand === 'intel' && (
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                CPU Generation
              </label>
              <select
                {...register('cpuGeneration', { required: cpuBrand === 'intel' })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Generation</option>
                <option value="12th">12th Gen (Alder Lake)</option>
                <option value="13th">13th Gen (Raptor Lake)</option>
                <option value="10th">10th Gen (Comet Lake)</option>
                <option value="9th">9th Gen (Coffee Lake Refresh)</option>
              </select>
            </div>
          )}

          {/* GPU Section */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              GPU Type
            </label>
            <select
              {...register('gpuType', { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select GPU Type</option>
              <option value="igpu">Integrated GPU</option>
              <option value="nvidia">NVIDIA (Limited Support)</option>
              <option value="amd">AMD Discrete</option>
            </select>
          </div>

          {/* Motherboard */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Motherboard Model
            </label>
            <input
              type="text"
              placeholder="e.g., MSI Z790-A PRO"
              {...register('motherboard', { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* RAM */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              RAM Amount
            </label>
            <select
              {...register('ram', { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select RAM Amount</option>
              <option value="8gb">8GB</option>
              <option value="16gb">16GB</option>
              <option value="32gb">32GB</option>
              <option value="64gb">64GB+</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Generate Config.plist
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-6 text-center">
          Your configuration will be generated based on your hardware specifications.
        </p>
      </div>
    </div>
  );
};

export default QuestionnaireForm;
