import logo from './logo.svg';
import './App.css';
import PreLaunchHomePage from './components/PreLaunchHomePage/PreLaunchHomePage';
import ForPharmacies from './components/ForPharmacies/ForPharmaciesLanding';
import ForEmployers from './components/ForEmployers/ForEmployersLanding';

function App() {
  return (
    <div className="App">
      {/* <PreLaunchHomePage/> */}
      {/* <ForPharmacies/> */}
      <ForEmployers />
    </div>
  );
}

export default App;
