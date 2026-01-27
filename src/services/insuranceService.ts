import { QuoteRequest, InsuranceQuote } from '../types';

const insuranceProviders = [
  {
    id: '1',
    name: 'SafeGuard Insurance',
    baseRate: 120,
    rating: 4.8,
    features: ['24/7 Claims Support', 'Roadside Assistance', 'Accident Forgiveness'],
  },
  {
    id: '2',
    name: 'Prime Coverage Co.',
    baseRate: 135,
    rating: 4.5,
    features: ['Bundle Discounts', 'New Car Replacement', 'Gap Coverage'],
  },
  {
    id: '3',
    name: 'TrustShield Auto',
    baseRate: 110,
    rating: 4.3,
    features: ['Low Deductible Options', 'Flexible Payment Plans', 'Multi-Policy Discount'],
  },
  {
    id: '4',
    name: 'Elite Motor Insurance',
    baseRate: 145,
    rating: 4.9,
    features: ['Premium Coverage', 'Concierge Service', 'Rental Car Reimbursement'],
  },
  {
    id: '5',
    name: 'Budget Protect',
    baseRate: 95,
    rating: 4.1,
    features: ['Affordable Rates', 'Basic Coverage', 'Quick Claims Process'],
  },
];

export const generateQuotes = (request: QuoteRequest): InsuranceQuote[] => {
  const quotes: InsuranceQuote[] = [];

  insuranceProviders.forEach((provider) => {
    let monthlyPremium = provider.baseRate;

    // Age factor
    if (request.driver.age < 25) {
      monthlyPremium *= 1.5;
    } else if (request.driver.age >= 25 && request.driver.age < 65) {
      monthlyPremium *= 1.0;
    } else {
      monthlyPremium *= 1.2;
    }

    // Driving experience factor
    if (request.driver.drivingExperience < 3) {
      monthlyPremium *= 1.3;
    } else if (request.driver.drivingExperience >= 10) {
      monthlyPremium *= 0.9;
    }

    // Accidents factor
    monthlyPremium *= 1 + (request.driver.accidents * 0.25);

    // Violations factor
    monthlyPremium *= 1 + (request.driver.violations * 0.15);

    // Vehicle age factor
    const vehicleAge = new Date().getFullYear() - request.vehicle.year;
    if (vehicleAge < 3) {
      monthlyPremium *= 1.1;
    } else if (vehicleAge > 10) {
      monthlyPremium *= 0.85;
    }

    // Mileage factor
    if (request.vehicle.annualMileage > 15000) {
      monthlyPremium *= 1.15;
    } else if (request.vehicle.annualMileage < 8000) {
      monthlyPremium *= 0.9;
    }

    // Coverage options factor
    const coverageMultiplier = {
      basic: 0.8,
      standard: 1.0,
      premium: 1.3,
    };
    monthlyPremium *= coverageMultiplier[request.coverage.liability];

    if (request.coverage.collision) monthlyPremium *= 1.2;
    if (request.coverage.comprehensive) monthlyPremium *= 1.15;
    if (request.coverage.uninsuredMotorist) monthlyPremium *= 1.1;
    if (request.coverage.medicalPayments) monthlyPremium *= 1.08;
    if (request.coverage.roadsideAssistance) monthlyPremium *= 1.05;

    // Add some randomness to simulate real quotes
    monthlyPremium *= 0.95 + Math.random() * 0.1;

    const annualPremium = monthlyPremium * 12;
    const deductible = request.coverage.liability === 'premium' ? 250 : 
                       request.coverage.liability === 'standard' ? 500 : 1000;

    // Calculate savings compared to average
    const avgPremium = quotes.length > 0 ? 
      quotes.reduce((sum, q) => sum + q.annualPremium, 0) / quotes.length : 
      annualPremium;
    const savings = Math.max(0, avgPremium - annualPremium);

    quotes.push({
      id: provider.id,
      provider: provider.name,
      monthlyPremium: Math.round(monthlyPremium * 100) / 100,
      annualPremium: Math.round(annualPremium * 100) / 100,
      deductible,
      coverage: request.coverage,
      rating: provider.rating,
      features: provider.features,
      savings: Math.round(savings * 100) / 100,
    });
  });

  // Sort by annual premium (lowest first)
  return quotes.sort((a, b) => a.annualPremium - b.annualPremium);
};

export const getBestDeal = (quotes: InsuranceQuote[]): InsuranceQuote => {
  // Calculate a score based on price, rating, and features
  const scoredQuotes = quotes.map(quote => {
    const priceScore = (1 - (quote.annualPremium / Math.max(...quotes.map(q => q.annualPremium)))) * 40;
    const ratingScore = quote.rating * 10;
    const featuresScore = quote.features.length * 2;
    return {
      ...quote,
      totalScore: priceScore + ratingScore + featuresScore,
    };
  });

  return scoredQuotes.reduce((best, current) => 
    current.totalScore > best.totalScore ? current : best
  );
};
