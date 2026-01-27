import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-primary-600 to-primary-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <div>
              <h1 className="text-2xl font-bold">Auto Insurance Agent</h1>
              <p className="text-primary-100 text-sm">Find Your Best Deal in Minutes</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="hover:text-primary-200 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-primary-200 transition-colors">
              How It Works
            </a>
            <a href="#get-quote" className="hover:text-primary-200 transition-colors">
              Get Quote
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
