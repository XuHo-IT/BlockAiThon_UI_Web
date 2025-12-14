# MEI - Multi-Exchange Indicator Sync

A modern web application for synchronizing trading signals and indicators from TradingView to multiple cryptocurrency exchanges like Binance.

## 🚀 Features

- **Multi-Exchange Sync**: Sync trading signals across multiple exchanges
- **TradingView Integration**: Extract trading setups and indicators (RSI, MA, etc.)
- **Chrome Extension**: Browser extension for capturing and applying chart configurations
- **AI-Powered Suggestions**: AI integration for intelligent trading command suggestions
- **Telegram Integration**: Receive alerts and notifications via Telegram
- **Dashboard**: Comprehensive dashboard with statistics and sync management
- **Modern UI**: Beautiful dark theme with emerald/green trading aesthetics

## 🛠️ Tech Stack

- **React 18.2.0** with TypeScript
- **React Router DOM** for routing
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Lucide React** for icons

## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd BlockAiThon_UI_Web
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create `.env` file
   ```env
   VITE_API_URL=http://localhost:3000/api
   ```

4. Start development server
   ```bash
   npm run dev
   ```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 Routes

- `/` - Landing page
- `/login` - User login
- `/signup` - User registration
- `/forgot-password` - Password recovery
- `/dashboard` - Main dashboard (protected)
- `/download` - Extension download and setup tutorial

## 📱 Chrome Extension

The Chrome extension allows you to:
- Capture TradingView chart configurations
- Save indicator setups (RSI, MA, etc.)
- Apply saved configurations to Binance charts
- Integrate with AI for trading suggestions

Setup instructions are available on the `/download` page.

## 🚀 Deployment

Build for production:
```bash
npm run build
```

The build output will be in the `dist/` directory. Set the `VITE_API_URL` environment variable in your production environment.

---

**Built with ❤️ for traders who want seamless multi-exchange synchronization**
