# Quick Setup Guide

## Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to `http://localhost:5173`

## Project Overview

This Auto Insurance Agent application is built with:
- React 18 + TypeScript
- Vite for fast development
- Tailwind CSS for styling
- Fully responsive design

## Key Features Implemented

### 1. Multi-Step Quote Form
- Driver information collection
- Vehicle details input
- Coverage options selection
- Progress indicator

### 2. Intelligent Quote Generation
- 5 insurance providers with different base rates
- Risk factor calculations (age, experience, accidents, violations)
- Vehicle-specific adjustments (age, mileage, usage)
- Coverage level multipliers

### 3. Smart Deal Recommendation
- Price-based scoring
- Provider rating consideration
- Feature set evaluation
- Best deal highlighting

### 4. Comparison Display
- Side-by-side quote comparison
- Monthly and annual pricing
- Deductible information
- Savings calculation
- Star ratings
- Feature lists

### 5. Modern UI Components
- Header with navigation
- Hero section with call-to-action
- How It Works guide
- Responsive footer
- Smooth scrolling

## File Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation
│   ├── Hero.tsx            # Landing section
│   ├── HowItWorks.tsx      # Process guide
│   ├── QuoteForm.tsx       # 3-step form
│   ├── QuoteResults.tsx     # Results display
│   └── Footer.tsx          # Footer
├── services/
│   └── insuranceService.ts  # Quote logic
├── types.ts                # TypeScript types
├── App.tsx                 # Main app
├── main.tsx                # Entry point
└── index.css               # Styles
```

## Customization

### Add New Insurance Providers

Edit `src/services/insuranceService.ts`:

```typescript
const insuranceProviders = [
  {
    id: '6',
    name: 'New Provider',
    baseRate: 130,
    rating: 4.6,
    features: ['Feature 1', 'Feature 2'],
  },
  // ... existing providers
];
```

### Adjust Quote Algorithm

Modify the `generateQuotes()` function to change how premiums are calculated.

### Change Colors

Edit `tailwind.config.js` to customize the color scheme.

## Testing the Application

1. Fill out the 3-step form with sample data
2. Click "Get Quotes"
3. Review the generated quotes
4. Compare different providers
5. See the "Best Deal" recommendation

## Production Build

```bash
npm run build
```

The built files will be in the `dist` directory.

## Notes

- All TypeScript errors shown in the editor will resolve after running `npm install`
- The application uses mock data for demonstration
- Quotes are generated client-side with a simulated delay
- No backend is required for this demo version
