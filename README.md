# Auto Insurance Agent

A modern React + TypeScript application that helps users find the best auto insurance deals quickly and efficiently. This intelligent agent saves users hours of time and phone calls by comparing quotes from multiple insurance providers in minutes.

## Features

- 🚀 **Fast Quote Generation**: Get insurance quotes from multiple providers in under 5 minutes
- 💰 **Cost Comparison**: Compare prices and find the best deals to save money
- 🎯 **Smart Recommendations**: AI-powered suggestions based on your specific needs
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Clean, intuitive interface built with Tailwind CSS
- 🔒 **Type-Safe**: Built with TypeScript for better code quality and maintainability

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **PostCSS** - CSS processing

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd auto-insurance-glm
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## Usage

### Getting a Quote

1. Click the "Get Your Free Quote" button on the homepage
2. Fill in your driver information (age, gender, ZIP code, driving experience, etc.)
3. Provide vehicle details (make, model, year, mileage, usage)
4. Select your preferred coverage options
5. Click "Get Quotes" to see comparisons from multiple providers

### Understanding the Results

- **Best Deal**: Highlighted in green, this is our top recommendation based on price, rating, and features
- **Monthly/Annual Premium**: The cost of insurance per month and per year
- **Deductible**: The amount you pay out-of-pocket before insurance kicks in
- **Savings**: How much you save compared to other quotes
- **Rating**: Provider rating based on customer reviews
- **Features**: Additional benefits included in the plan

## Project Structure

```
auto-insurance-glm/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Hero.tsx            # Landing page hero section
│   │   ├── HowItWorks.tsx      # Step-by-step guide
│   │   ├── QuoteForm.tsx       # Multi-step quote request form
│   │   ├── QuoteResults.tsx    # Display and compare quotes
│   │   └── Footer.tsx          # Page footer
│   ├── services/
│   │   └── insuranceService.ts # Quote generation logic
│   ├── types.ts                # TypeScript interfaces
│   ├── App.tsx                 # Main application component
│   ├── main.tsx                # Application entry point
│   └── index.css               # Global styles
├── public/                     # Static assets
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── postcss.config.js          # PostCSS configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## How It Works

The application uses a sophisticated algorithm to generate insurance quotes:

1. **Data Collection**: Collects driver, vehicle, and coverage preferences
2. **Risk Assessment**: Calculates risk factors based on age, experience, driving history
3. **Provider Matching**: Matches user profile with insurance providers
4. **Quote Generation**: Generates personalized quotes from multiple providers
5. **Smart Ranking**: Ranks quotes based on price, rating, and features
6. **Best Deal Selection**: Identifies the optimal balance of cost and coverage

## Customization

### Adding Insurance Providers

Edit `src/services/insuranceService.ts` to add new insurance providers:

```typescript
const insuranceProviders = [
  {
    id: '6',
    name: 'Your Provider Name',
    baseRate: 150,
    rating: 4.7,
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  // ... more providers
];
```

### Adjusting Quote Algorithm

Modify the quote generation logic in `generateQuotes()` function to customize how premiums are calculated based on various factors.

### Styling

The application uses Tailwind CSS. Customize the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      },
    },
  },
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Disclaimer

This is a demonstration application. The insurance quotes shown are for illustrative purposes only and do not represent actual insurance offers. For real insurance quotes, please contact licensed insurance providers directly.

## Support

For questions or issues, please open an issue on the GitHub repository.
