import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [memory, setMemory] = useState(null); // For the memory feature

  const handleButtonClick = (value) => {
    // Handle Clear button
    if (value === 'C') {
      setInput('');
      return;
    }

    if (value === '=') {
        try {
          setInput(eval(input).toString()); // This line uses eval
        } catch {
          setInput('Error');
        }
        return;
      }
      

    // Handle Memory Save and Recall
    if (value === 'M+') {
      setMemory(input);
      return;
    }
    if (value === 'MR') {
      setInput(memory || '');
      return;
    }

    // Handle percent calculation
    if (value === '%') {
      setInput((parseFloat(input) / 100).toString());
      return;
    }

    // Append value to the input
    setInput((prev) => prev + value);
  };

  return (
    <div className="calculator">
      <Display value={input} />

      {/* Number buttons in rows of three */}
      <div className="button-row">
        {['7', '8', '9'].map((btn) => (
          <Button key={btn} onClick={() => handleButtonClick(btn)}>{btn}</Button>
        ))}
      </div>
      <div className="button-row">
        {['4', '5', '6'].map((btn) => (
          <Button key={btn} onClick={() => handleButtonClick(btn)}>{btn}</Button>
        ))}
      </div>
      <div className="button-row">
        {['1', '2', '3'].map((btn) => (
          <Button key={btn} onClick={() => handleButtonClick(btn)}>{btn}</Button>
        ))}
      </div>
      <div className="button-row">
        <Button onClick={() => handleButtonClick('0')}>0</Button>
        <Button onClick={() => handleButtonClick('.')}>.</Button>
        <Button onClick={() => handleButtonClick('=')}>=</Button>
      </div>

      {/* Operator and special buttons */}
      <div className="button-row">
        {['+', '-', '*', '/', '%', 'C', 'M+', 'MR'].map((btn) => (
          <Button key={btn} onClick={() => handleButtonClick(btn)}>{btn}</Button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
