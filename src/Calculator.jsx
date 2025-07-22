import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("0");

  const buttons = [
    ["AC", "+/-", "%", "÷"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  const handleClick = (value) => {
    if (value === "AC") {
      setInput("0");
    } else if (value === "+/-") {
      setInput((prev) => (prev.charAt(0) === "-" ? prev.slice(1) : "-" + prev));
    } else if (value === "%") {
      setInput((prev) => (parseFloat(prev) / 100).toString());
    } else if (value === "=") {
      try {
        const expression = input.replace(/×/g, "*").replace(/÷/g, "/");
        setInput(eval(expression).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput((prev) => (prev === "0" ? value : prev + value));
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        {buttons.flat().map((btn, i) => (
          <button
            key={i}
            className={`btn ${
              ["÷", "×", "-", "+", "="].includes(btn)
                ? "orange"
                : btn === "AC" || btn === "+/-" || btn === "%"
                ? "light-gray"
                : "dark-gray"
            } ${btn === "0" ? "zero" : ""}`}
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
