import React, { useState } from 'react';
import './createCommissionAdmin.css'; 


const CreateComissionAdmin = () => {
    const [mode, setMode] = useState("percentage");
    const [amount, setAmount] = useState("");
    const [percentage, setPercentage] = useState("");
    const [amountNumber, setAmountNumber] = useState("");
    const [calculatedAmount, setCalculatedAmount] = useState(0);
  
    const handleModeChange = (event) => {
      setMode(event.target.value);
      setCalculatedAmount(0);
    };
  
    const handleAmountChange = (event) => {
      const newValue = parseFloat(event.target.value);
      setAmount(newValue.toString());
      if (mode === "percentage") {
        const percentageAmount = (newValue * parseFloat(percentage)) / 100;
        setCalculatedAmount(newValue + percentageAmount);
      } else {
        setCalculatedAmount(newValue + parseFloat(amountNumber));
      }
    };
  
    const handlePercentageChange = (event) => {
      setPercentage(event.target.value);
      if (mode === "percentage") {
        const percentageAmount =
          (parseFloat(amount) * parseFloat(event.target.value)) / 100;
        setCalculatedAmount(parseFloat(amount) + percentageAmount);
      }
    };
  
    const handleAmountNumberChange = (event) => {
      setAmountNumber(event.target.value);
      if (mode === "number") {
        setCalculatedAmount(parseFloat(amount) + parseFloat(event.target.value));
      }
    };
  
    return (
      <section className=".centered-container">
        <section className="main-container">
        <div className="input-container">
          <label className="input-label">Amount:</label>
          <input
            type="number"
            placeholder="Enter Amount"
            className="input-field"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="input-container">
          <label className="input-label">Mode:</label>
          <select
            className="select-field"
            value={mode}
            onChange={handleModeChange}
          >
            <option value="percentage">Percentage</option>
            <option value="number">Rupees</option>
          </select>
        </div>
        {mode === "percentage" && (
          <div className="input-container">
            <label className="input-label">Amount Percentage:</label>
            <input
              type="number"
              placeholder="Enter Percentage"
              className="input-field"
              value={percentage}
              onChange={handlePercentageChange}
            />
          </div>
        )}
        {mode === "number" && (
          <div className="input-container">
            <label className="input-label">Amount Number:</label>
            <input
              type="number"
              placeholder="Enter Number"
              className="input-field"
              value={amountNumber}
              onChange={handleAmountNumberChange}
            />
          </div>
        )}
        <div className="input-container">
          <label className="input-label">Calculated Amount:</label>
          <input
            type="number"
            placeholder="Calculated Amount"
            className="input-field"
            value={calculatedAmount}
            readOnly
          />
        </div>
  
        <div>
          <button className="submit-button">
            Send
          </button>
        </div>
        </section>
      </section>
    );
    
}

export default CreateComissionAdmin