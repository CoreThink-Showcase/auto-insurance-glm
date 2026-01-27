import React from 'react';
import { InsuranceQuote } from '../types';

interface QuoteResultsProps {
  quotes: InsuranceQuote[];
  bestDeal: InsuranceQuote;
  onReset: () => void;
}

const QuoteResults: React.FC<QuoteResultsProps> = ({ quotes, bestDeal, onReset }) => {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <svg key={`full-${i}`} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        {hasHalfStar && (
          <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-2 text-sm text-gray-600">({rating})</span>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Insurance Quotes</h2>
        <p className="text-xl text-gray-600">
          We found {quotes.length} quotes from top providers
        </p>
      </div>

      {/* Best Deal Highlight */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-500 rounded-2xl p-8 shadow-xl">
        <div className="flex items-center justify-center mb-4">
          <span className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
            ⭐ Best Deal for You
          </span>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-900">{bestDeal.provider}</h3>
              {renderStars(bestDeal.rating)}
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-green-600">
                ${bestDeal.monthlyPremium}
                <span className="text-lg text-gray-600">/mo</span>
              </div>
              <div className="text-gray-600">
                ${bestDeal.annualPremium}/year
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-gray-900">${bestDeal.deductible}</div>
              <div className="text-sm text-gray-600">Deductible</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-600">
                ${bestDeal.savings}
              </div>
              <div className="text-sm text-gray-600">Your Savings</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-gray-900">
                {bestDeal.features.length}
              </div>
              <div className="text-sm text-gray-600">Features</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-gray-900">
                {bestDeal.rating}
              </div>
              <div className="text-sm text-gray-600">Rating</div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Included Features:</h4>
            <div className="flex flex-wrap gap-2">
              {bestDeal.features.map((feature, index) => (
                <span
                  key={index}
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                >
                  ✓ {feature}
                </span>
              ))}
            </div>
          </div>

          <button className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg">
            Select This Plan
          </button>
        </div>
      </div>

      {/* All Quotes */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Compare All Quotes</h3>
        <div className="grid gap-6">
          {quotes.map((quote) => (
            <div
              key={quote.id}
              className={`bg-white rounded-xl p-6 shadow-lg border-2 ${
                quote.id === bestDeal.id ? 'border-green-500' : 'border-gray-200'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-xl font-bold text-gray-900">{quote.provider}</h4>
                    {quote.id === bestDeal.id && (
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Best Deal
                      </span>
                    )}
                  </div>
                  {renderStars(quote.rating)}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {quote.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gray-900">
                      ${quote.monthlyPremium}
                      <span className="text-lg text-gray-600">/mo</span>
                    </div>
                    <div className="text-gray-600">${quote.annualPremium}/year</div>
                  </div>
                  <div className="text-right text-sm">
                    <div className="text-gray-600">Deductible: ${quote.deductible}</div>
                    {quote.savings > 0 && (
                      <div className="text-green-600 font-semibold">
                        Save ${quote.savings}/year
                      </div>
                    )}
                  </div>
                  <button
                    className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                      quote.id === bestDeal.id
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-primary-600 text-white hover:bg-primary-700'
                    }`}
                  >
                    {quote.id === bestDeal.id ? 'Selected' : 'Select'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={onReset}
          className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
        >
          Get New Quotes
        </button>
      </div>
    </div>
  );
};

export default QuoteResults;
