import React, { useState } from 'react';
import { DriverInfo, VehicleInfo, CoverageOptions, QuoteRequest } from '../types';

interface QuoteFormProps {
  onSubmit: (request: QuoteRequest) => void;
  isLoading: boolean;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ onSubmit, isLoading }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [driverInfo, setDriverInfo] = useState<DriverInfo>({
    age: 30,
    gender: 'male',
    zipCode: '',
    drivingExperience: 5,
    accidents: 0,
    violations: 0,
  });

  const [vehicleInfo, setVehicleInfo] = useState<VehicleInfo>({
    make: '',
    model: '',
    year: new Date().getFullYear(),
    mileage: 50000,
    usage: 'commute',
    annualMileage: 12000,
  });

  const [coverageOptions, setCoverageOptions] = useState<CoverageOptions>({
    liability: 'standard',
    collision: true,
    comprehensive: true,
    uninsuredMotorist: true,
    medicalPayments: false,
    roadsideAssistance: false,
  });

  const handleDriverChange = (field: keyof DriverInfo, value: any) => {
    setDriverInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleVehicleChange = (field: keyof VehicleInfo, value: any) => {
    setVehicleInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleCoverageChange = (field: keyof CoverageOptions, value: any) => {
    setCoverageOptions(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    onSubmit({
      driver: driverInfo,
      vehicle: vehicleInfo,
      coverage: coverageOptions,
    });
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Get Your Quote</h2>
        <p className="text-gray-600">Step {step} of 3</p>
        <div className="mt-4 flex gap-2">
          <div className={`h-2 flex-1 rounded-full ${step >= 1 ? 'bg-primary-600' : 'bg-gray-200'}`} />
          <div className={`h-2 flex-1 rounded-full ${step >= 2 ? 'bg-primary-600' : 'bg-gray-200'}`} />
          <div className={`h-2 flex-1 rounded-full ${step >= 3 ? 'bg-primary-600' : 'bg-gray-200'}`} />
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Driver Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Age
              </label>
              <input
                type="number"
                min="16"
                max="100"
                value={driverInfo.age}
                onChange={(e) => handleDriverChange('age', parseInt(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender
              </label>
              <select
                value={driverInfo.gender}
                onChange={(e) => handleDriverChange('gender', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ZIP Code
              </label>
              <input
                type="text"
                pattern="[0-9]{5}"
                placeholder="12345"
                value={driverInfo.zipCode}
                onChange={(e) => handleDriverChange('zipCode', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Years of Driving Experience
              </label>
              <input
                type="number"
                min="0"
                max="80"
                value={driverInfo.drivingExperience}
                onChange={(e) => handleDriverChange('drivingExperience', parseInt(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Accidents (Last 3 Years)
              </label>
              <input
                type="number"
                min="0"
                max="10"
                value={driverInfo.accidents}
                onChange={(e) => handleDriverChange('accidents', parseInt(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Violations (Last 3 Years)
              </label>
              <input
                type="number"
                min="0"
                max="10"
                value={driverInfo.violations}
                onChange={(e) => handleDriverChange('violations', parseInt(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Vehicle Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Make
              </label>
              <input
                type="text"
                placeholder="Toyota"
                value={vehicleInfo.make}
                onChange={(e) => handleVehicleChange('make', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Model
              </label>
              <input
                type="text"
                placeholder="Camry"
                value={vehicleInfo.model}
                onChange={(e) => handleVehicleChange('model', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Year
              </label>
              <input
                type="number"
                min="1990"
                max={new Date().getFullYear() + 1}
                value={vehicleInfo.year}
                onChange={(e) => handleVehicleChange('year', parseInt(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Mileage
              </label>
              <input
                type="number"
                min="0"
                value={vehicleInfo.mileage}
                onChange={(e) => handleVehicleChange('mileage', parseInt(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Primary Usage
              </label>
              <select
                value={vehicleInfo.usage}
                onChange={(e) => handleVehicleChange('usage', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="commute">Commute</option>
                <option value="pleasure">Pleasure</option>
                <option value="business">Business</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Annual Mileage
              </label>
              <input
                type="number"
                min="1000"
                max="50000"
                value={vehicleInfo.annualMileage}
                onChange={(e) => handleVehicleChange('annualMileage', parseInt(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Coverage Options</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Liability Coverage
              </label>
              <select
                value={coverageOptions.liability}
                onChange={(e) => handleCoverageChange('liability', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="basic">Basic (25/50/25)</option>
                <option value="standard">Standard (50/100/50)</option>
                <option value="premium">Premium (100/300/100)</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={coverageOptions.collision}
                  onChange={(e) => handleCoverageChange('collision', e.target.checked)}
                  className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
                />
                <span className="text-gray-700">Collision Coverage</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={coverageOptions.comprehensive}
                  onChange={(e) => handleCoverageChange('comprehensive', e.target.checked)}
                  className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
                />
                <span className="text-gray-700">Comprehensive Coverage</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={coverageOptions.uninsuredMotorist}
                  onChange={(e) => handleCoverageChange('uninsuredMotorist', e.target.checked)}
                  className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
                />
                <span className="text-gray-700">Uninsured Motorist Coverage</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={coverageOptions.medicalPayments}
                  onChange={(e) => handleCoverageChange('medicalPayments', e.target.checked)}
                  className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
                />
                <span className="text-gray-700">Medical Payments Coverage</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={coverageOptions.roadsideAssistance}
                  onChange={(e) => handleCoverageChange('roadsideAssistance', e.target.checked)}
                  className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
                />
                <span className="text-gray-700">Roadside Assistance</span>
              </label>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 flex justify-between">
        <button
          onClick={prevStep}
          disabled={step === 1}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            step === 1
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Previous
        </button>

        {step < 3 ? (
          <button
            onClick={nextStep}
            className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              isLoading
                ? 'bg-primary-400 text-white cursor-not-allowed'
                : 'bg-primary-600 text-white hover:bg-primary-700'
            }`}
          >
            {isLoading ? 'Getting Quotes...' : 'Get Quotes'}
          </button>
        )}
      </div>
    </div>
  );
};

export default QuoteForm;
