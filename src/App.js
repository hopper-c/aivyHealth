import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/ForPatients/HomePage';
import ForPharmacies from './components/ForPharmacies/ForPharmaciesLanding';
import ForEmployers from './components/ForEmployers/ForEmployersLanding';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/patients" element={<HomePage />} />
          <Route path="/pharmacies" element={<ForPharmacies />} />
          <Route path="/employers" element={<ForEmployers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
