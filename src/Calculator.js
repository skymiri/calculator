import React, { useState } from "react";
import { calculatorButtons } from "./Button.js"; // 버튼 데이터 가져오기

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("결과:");
  const [error, setError] = useState("에러:");
  const [history, setHistory] = useState([]);

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const calculate = () => {
    const regex = /([-+*/])|\d+/g;
    const tokens = input.match(regex);

    if (tokens === null) {
      setError("에러: 유효하지 않은 계산식입니다.");
      setResult("결과:");
      return;
    }

    let calculationResult = parseFloat(tokens[0]);
    for (let i = 1; i < tokens.length; i += 2) {
      const operator = tokens[i];
      const operand = parseFloat(tokens[i + 1]);

      if (isNaN(operand)) {
        setError("에러: 유효하지 않은 계산식입니다.");
        setResult("결과:");
        return;
      }

      switch (operator) {
        case "+":
          calculationResult += operand;
          break;
        case "-":
          calculationResult -= operand;
          break;
        case "*":
          calculationResult *= operand;
          break;
        case "/":
          calculationResult /= operand;
          break;
        default:
          setError("에러: 유효하지 않은 계산식입니다.");
          setResult("결과:");
          return;
      }
    }

    setError("에러:");
    setResult(`결과: ${calculationResult}`);
    setHistory([...history, `${input} = ${calculationResult}`]);
  };

  return (
    <div>
      <h1>Apple Calculator</h1>
      <input
        type="text"
        placeholder="계산식을 입력하세요 (예: 3 + 5)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="button-container">
        {/* 버튼 데이터를 사용하여 버튼 생성 */}
        {calculatorButtons.map((button, index) => (
          <button
            key={index}
            className={button.className}
            onClick={() => handleButtonClick(button.value)}
          >
            {button.text}
          </button>
        ))}
      </div>
      <button onClick={calculate}>계산하기</button>
      <p>{result}</p>
      <p>{error}</p>
      <div>
        <p>계산 히스토리</p>
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Calculator;
