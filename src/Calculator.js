import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("결과:");
  const [error, setError] = useState("에러:");
  const [history, setHistory] = useState([]);

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
      <h1>사칙연산 계산기</h1>
      <input
        type="text"
        placeholder="계산식을 입력하세요 (예: 3 + 5)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={calculate}>계산하기</button>
      <p>{result}</p>
      <p>{error}</p>
      <p>history</p>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Calculator;
