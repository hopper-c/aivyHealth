import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PreLaunchHomePage from './components/PreLaunchHomePage/PreLaunchHomePage';
import ForPharmacies from './components/ForPharmacies/ForPharmaciesLanding';
import ForEmployers from './components/ForEmployers/ForEmployersLanding';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PreLaunchHomePage />} />
          <Route path="/patients" element={<PreLaunchHomePage />} />
          <Route path="/pharmacies" element={<ForPharmacies />} />
          <Route path="/employers" element={<ForEmployers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
