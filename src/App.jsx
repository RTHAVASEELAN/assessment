import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Loader from "./Components/Loader";
import { ErrorBoundary } from "./Components/ErrorFallback";

const EmployeeLandingPage = lazy(() => import("./Pages/Landing/Landing"));
const Dashboard = lazy(() => import("./Pages/Dashboard/Dashboard"));

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<EmployeeLandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
