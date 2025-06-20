# Emergency Ambulance Response PWA

A mobile-responsive Progressive Web App for emergency ambulance response with Driver and Public interfaces.

## Features

### Driver Interface
- Emergency status toggle (ON DUTY/IDLE)
- Route setting with location inputs
- Active emergency tracking with live status
- Real-time speed and alert monitoring

### Public Interface
- Emergency proximity alerts
- Location-based notifications
- Activity history tracking
- Impact statistics

### PWA Features
- Installable on mobile devices
- Offline functionality
- Push notifications ready
- Native app-like experience

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **UI Components**: Radix UI, Lucide Icons
- **State Management**: TanStack Query
- **Routing**: Wouter
- **Build Tool**: Vite

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Application pages
│   │   └── lib/           # Utilities and configuration
├── server/                # Backend Express server
├── shared/                # Shared types and schemas
└── public/               # Static assets and PWA files
```

## Deployment

See [HOSTING_INSTRUCTIONS.md](HOSTING_INSTRUCTIONS.md) for complete deployment guide.

## License

MIT