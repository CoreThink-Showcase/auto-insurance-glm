export interface DriverInfo {
  age: number;
  gender: 'male' | 'female' | 'other';
  zipCode: string;
  drivingExperience: number;
  accidents: number;
  violations: number;
}

export interface VehicleInfo {
  make: string;
  model: string;
  year: number;
  mileage: number;
  usage: 'commute' | 'pleasure' | 'business';
  annualMileage: number;
}

export interface CoverageOptions {
  liability: 'basic' | 'standard' | 'premium';
  collision: boolean;
  comprehensive: boolean;
  uninsuredMotorist: boolean;
  medicalPayments: boolean;
  roadsideAssistance: boolean;
}

export interface InsuranceQuote {
  id: string;
  provider: string;
  monthlyPremium: number;
  annualPremium: number;
  deductible: number;
  coverage: CoverageOptions;
  rating: number;
  features: string[];
  savings: number;
}

export interface QuoteRequest {
  driver: DriverInfo;
  vehicle: VehicleInfo;
  coverage: CoverageOptions;
}
