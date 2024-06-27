import React, { useEffect, useState } from "react";
import "./BmiCalculator.css";
import Parameters from "./Parameters";

const BmiCalculator = () => {
  const [result, setResult] = useState(0);
  console.log("render");

  const getVerdict = () => {
    if (result < 18.5) {
      return "Underweight";
    }
    if (result >= 18.5 && result < 25) {
      return "Healty";
    }
    if (result >= 25 && result < 30) {
      return "Overweight";
    }
    if (result > 30) {
      return "Obese";
    }
  };

  const verdict = getVerdict();

  return (
    <div className="page">
      <div className="calculator">
        <div className="header">
          <img
            src="https://www.shutterstock.com/shutterstock/photos/2142503859/display_1500/stock-vector-body-mass-index-flat-concept-fit-woman-on-diet-control-normal-weight-and-fat-level-with-bmi-obese-2142503859.jpg"
            alt="Body mass index flat concept. Fit woman on diet control normal weight and fat level with BMI. Obese chart scales, measure of obesity. Healthy lifestyle, nutrition and physical activity concept."
            className="img"
          />
        </div>
        <div className="body">
          <Parameters setResult={setResult} />
          <div className="display">
            <div className="result">{result}</div>
            {result ? (
              <div className="message">
                <p>You Are</p>
                <p className={`verdict_${verdict}`}>{verdict}</p>
              </div>
            ) : (
              "Enter data for calculation"
            )}
          </div>
        </div>
        <div className="footer">
          <div className="underweight">
            <p className="describe">Underweight</p>
            <p>Below 18.5</p>
          </div>
          <div className="healty">
            <p className="describe">Healty</p>
            <p>18.5 - 24.9</p>
          </div>
          <div className="owerweight">
            <p className="describe">Owerweight</p>
            <p>25 - 29.9</p>
          </div>
          <div className="obese">
            <p className="describe">Obese</p>
            <p>30 and above</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BmiCalculator;
