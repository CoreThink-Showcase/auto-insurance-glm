import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import QuoteForm from './components/QuoteForm';
import QuoteResults from './components/QuoteResults';
import Footer from './components/Footer';
import { QuoteRequest, InsuranceQuote } from './types';
import { generateQuotes, getBestDeal } from './services/insuranceService';

const App: React.FC = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [quotes, setQuotes] = useState<InsuranceQuote[]>([]);
  const [bestDeal, setBestDeal] = useState<InsuranceQuote | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetQuote = () => {
    setShowQuoteForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuoteSubmit = (request: QuoteRequest) => {
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      const generatedQuotes = generateQuotes(request);
      const best = getBestDeal(generatedQuotes);
      
      setQuotes(generatedQuotes);
      setBestDeal(best);
      setIsLoading(false);
    }, 1500);
  };

  const handleReset = () => {
    setQuotes([]);
    setBestDeal(null);
    setShowQuoteForm(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {!showQuoteForm && !quotes.length && (
        <>
          <Hero />
          <HowItWorks />
          <section id="get-quote" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Ready to Find Your Best Deal?
                </h2>
                <p className="text-xl text-gray-600">
                  Get started now and compare quotes from top providers
                </p>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={handleGetQuote}
                  className="bg-primary-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors shadow-lg"
                >
                  Get Your Free Quote
                </button>
              </div>
            </div>
          </section>
        </>
      )}

      {showQuoteForm && !quotes.length && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <QuoteForm onSubmit={handleQuoteSubmit} isLoading={isLoading} />
          </div>
        </section>
      )}

      {quotes.length > 0 && bestDeal && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <QuoteResults quotes={quotes} bestDeal={bestDeal} onReset={handleReset} />
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default App;
