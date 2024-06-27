import React, { useState } from "react";

const Parameters = ({ setResult }) => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const changeHeight = (event) => {
    setHeight(event.target.value);
  };

  const changeWeight = (event) => {
    setWeight(event.target.value);
  };

  const clearItem = () => {
    setHeight(0);
    setWeight(0);
    setResult(0);
  };

  const bmiCalculate = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setResult(bmiValue);
    } else {
      setResult(0);
    }
  };

  return (
    <div className="parameters">
      <div className="height">
        <input
          type="number"
          id="height"
          onInput={(e) => {
            e.target.value = e.target.value.slice(0, 3);
          }}
          min="1"
          max="999"
          step="1"
          value={height}
          onChange={changeHeight}
        />

        <label htmlFor="height">height (cm):</label>
        <button onClick={clearItem}>Reset</button>
      </div>
      <div className="weight">
        <input
          type="number"
          id="weight"
          onInput={(e) => {
            e.target.value = e.target.value.slice(0, 3);
          }}
          min="1"
          max="999"
          step="1"
          value={weight}
          onChange={changeWeight}
        />
        <label htmlFor="weight">weight (kg):</label>
        <button onClick={bmiCalculate}>Calculate</button>
      </div>
    </div>
  );
};

export default Parameters;
