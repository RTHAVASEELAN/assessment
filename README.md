# Employee Management Dashboard

A modern, responsive React application for employee performance tracking and KPI visualization. Built with React 19, Redux Toolkit, and Vite for optimal performance and developer experience.

## 🚀 Features

- **Interactive KPI Dashboard**: Real-time visualization of employee performance metrics
- **Employee Management**: Employee selection, search, and filtering capabilities
- **Performance Analytics**: Charts and progress indicators for departmental insights
- **Dark/Light Mode**: Seamless theme switching for better user experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Data Export**: Excel file handling for data portability
- **Fast Loading**: Vite-powered development with lazy loading and suspense
- **Error Resilience**: Comprehensive error boundaries and fallback UI

## 🛠 Tech Stack

### Frontend Framework
- **React 19** - Latest React with concurrent features
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing

### State Management
- **Redux Toolkit** - Efficient state management with slices

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful SVG icons

### Data & Visualization
- **Recharts** - Declarative charting library
- **XLSX** - Excel file processing
- **React Error Boundary** - Error handling and recovery

### Infrastructure
- **Firebase** - Hosting and analytics
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing and optimization

## 📋 Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

## 🚀 Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RTHAVASEELAN/assessment.git
   cd assessment-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📜 Available Scripts

```bash
# Development
npm run dev        # Start development server

# Building
npm run build      # Build for production
npm run preview    # Preview production build locally

# Quality
npm run lint       # Run ESLint for code quality
npm run deploy     # Deploy to Firebase hosting
```

## 🔧 Project Structure

```
src/
├── Components/          # Reusable UI components
│   ├── KPICards.jsx     # KPI metric cards
│   ├── KPICharts.jsx    # Data visualization charts
│   ├── KPITables.jsx    # Data tables with sorting
│   ├── Header.jsx       # Navigation header
│   └── ...
├── Pages/               # Page components
│   ├── Dashboard/       # Main dashboard functionality
│   └── Landing/         # Landing page components
├── Firebase/            # Firebase configuration
├── store/               # Redux store and slices
└── App.jsx              # Main application component
```

## 🌐 Deployment

This project is configured for Firebase Hosting:

```bash
# Build the project
npm run build

# Deploy to Firebase
npm run deploy
```

The application is hosted at: `employee-management-dba79.firebaseapp.com`

## 📊 Key Components

- **KPICards**: Display key performance indicators
- **KPICharts**: Interactive charts using Recharts
- **KPITables**: Sortable tables with search functionality
- **KPIProgress**: Progress bars for metrics tracking
- **Navbar/Header**: Responsive navigation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 📞 Support

For support or questions, please contact the development team.
