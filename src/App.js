import React, { useState, useEffect } from "react";

function Calculator() {
  const [Num1, setFirstNumber] = useState("");
  const [Num2, setSecondNumber] = useState("");
  const [result, setResult] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState("");

  const validateInputs = () => {
    
    if (Num1 === "") {
      setErrorMessage("Error: Num1 cannot be empty");
      return false;
    } else if (Num2 === "") {
      setErrorMessage("Error: Num2 cannot be empty");
      return false;
    }

    // Check if inputs are valid numbers
    if (isNaN(Num1) || isNaN(Num2)) {
      setErrorMessage("Inputs must be numbers");
      return false;
    }

    // Inputs are valid
    setErrorMessage("");
    return true;
  };
  // eslint-disable-next-line
  useEffect(() => {
    if (result !== "") {
      setTimeout(() => {
        setFirstNumber("");
        setSecondNumber("");
      }, 2000);
    }
  }, [result]);

  const handleAddition = () => {
    if (!validateInputs()) return;

    setResult(Number(Num1) + Number(Num2));
    setSuccess("Success : Your result is shown above!");
  };

  const handleSubtraction = () => {
    if (!validateInputs()) return;

    setResult(Number(Num1) - Number(Num2));
    setSuccess("Success : Your result is shown above!");
  };

  const handleMultiplication = () => {
    if (!validateInputs()) return;

    setResult(Number(Num1) * Number(Num2));
    setSuccess("Success : Your result is shown above!");
  };

  const handleDivision = () => {
    if (!validateInputs()) return;

    // Check if second number is 0
    if (Num2=== 0) {
      setErrorMessage("Cannot divide by 0");
      setSuccess("Success : Your result is shown above!");
      return;
    }

    setResult(Number(Num1) / Number(Num2));
  };

  return (
    <div className="Cal">
      <h1>React Calculator</h1>

      <input
        type="text"
        value={Num1}
        
        onChange={(e) => setFirstNumber(e.target.value)}
      />
      <br></br>
      <input
        type="text"
        value={Num2}
        onChange={(e) => setSecondNumber(e.target.value)}
      />
      <div className="Button">
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>x</button>
        <button onClick={handleDivision}>/</button>
      </div>
      {<div className="result-message">Result:{result}</div>}
      <div>
        <p style={{ color: "green" }}>{success}</p>
      </div>
      {<div className="error-message">{errorMessage}</div>}
    </div>
  );
}

export default Calculator;
