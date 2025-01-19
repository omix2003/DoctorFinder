import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HealthcarePage from './components/HealthcarePage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-200">
        <HealthcarePage />
      </div>
    </Router>
  );
}