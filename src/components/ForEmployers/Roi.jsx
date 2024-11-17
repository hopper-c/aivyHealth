import React from "react";

function Roi() {
  const [employees, setEmployees] = React.useState(300);
  const [salary, setSalary] = React.useState(30000);

  React.useEffect(() => {
    const employeesSlider = document.getElementById('numEmployees');
    const employeesValue = document.getElementById('employees-value');

    employeesSlider.oninput = function() {
      employeesValue.innerHTML = this.value;
    };

    const salarySlider = document.getElementById('salary-slider');
    const salaryValue = document.getElementById('salary-value');

    salarySlider.oninput = function() {
      salaryValue.innerHTML = '$' + parseInt(this.value).toLocaleString();
    };
  });

  const handleEmployeeChange = (event) => {
    setEmployees(event.target.value);
  };

  const handleSalaryChange = (event) => {
    setSalary(event.target.value);
  };

  const calculateSavings = () => {
    if (document.getElementById('employees-value')) {
      const employeesValue = document.getElementById('numEmployees').value;
      const salaryValue = document.getElementById('salary-slider').value;
      const medicalSavingsEle = document.getElementById('medical-savings');
      const productivityEle = document.getElementById('productivity');
      const equivalentsEle = document.getElementById('equivalents');
      var medicalSavings = employeesValue * salaryValue * 0.06;
      var productivity = employeesValue * 12;
      var equivalents = (employeesValue * 12) / 2080;
      medicalSavingsEle.innerHTML = '$' + medicalSavings;
      equivalentsEle.innerHTML = Math.round(equivalents);
      productivityEle.innerHTML = productivity + ' hrs';
    }
  };

  const calculateEmployeeBackground = () => {
    const min = 50;
    const max = 10000;
    const percentage = ((employees - min) / (max - min)) * 100;
    calculateSavings()
    return `linear-gradient(90deg, #49708A ${percentage}%, #e0e0e0 ${percentage}%)`;
  };

  const calculateSalaryBackground = () => {
    const min = 30000;
    const max = 250000;
    const percentage = ((salary - min) / (max - min)) * 100;
    calculateSavings()
    return `linear-gradient(90deg, #49708A ${percentage}%, #e0e0e0 ${percentage}%)`;
  };

  return (
    <>
      <section className="roi-container">
        <div className="text-container">
          <h3>The Aivy Health ROI</h3>
          <span>Cut costs and increase productivity</span>
          <p>Curious about the impact of wellness on your workplace?
            Use our ROI calculator to see the real savings Aivy Health can bring.
            Just plug in your number of employees and their average salary, and we'll do the rest.
            It’s not just about wellness—it’s about smarter business.
          </p>
        </div>
        <div className="roi-calculator">
          <h3>Number of employees</h3>
          <label id="employees-value" htmlFor="numEmployees">300</label>
          <input id="numEmployees" type="range" min="50" max="10000" value={employees} step="10" onChange={handleEmployeeChange} style={{background: calculateEmployeeBackground()}} />
          <div className="slider-labels">
            <span>50</span>
            <span>10,000</span>
          </div>
          <h3>Average Salary</h3>
          <label id="salary-value" htmlFor="average">$30000</label>
          <input id="salary-slider" min="30000" max="250000" value={salary} step="100" type="range" onChange={handleSalaryChange} style={{background: calculateSalaryBackground()}} />
          <div className="slider-labels">
            <span>$30k</span>
            <span>$250k</span>
          </div>
        </div>
      </section>
      <section className="annual-savings-container">
        <h3>Your annual savings</h3>
        <div className="results flex-column flex-md-row">
          <div className="column-1">
            <span className="x-result" id="medical-savings">
              xxxxxx
            </span>
            <span className="result-text">
              of savings on medical cost and absenteeism
            </span>
          </div>
          <div className="column-2">
            <span className="x-result" id="productivity">
              xxxxxx
            </span>
            <span className="result-text">
              of productivity gained
            </span>
          </div>
          <div className="column-3">
            <span className="x-result" id="equivalents">
              xxxxxx
            </span>
            <span className="result-text">
              full-time employee equivalents
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Roi;
