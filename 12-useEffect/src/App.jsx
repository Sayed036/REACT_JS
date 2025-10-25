import React, { useEffect, useState } from "react";

function App() {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(5);

  useEffect(function () {
    console.log("Runninggg num 1");
  }, [num1]);

  useEffect(function () {
    console.log("Runninggg num 2");
  }, [num2]);

  return (
    <div>
      <h1>value of num1 is {num1}</h1>
      <h1>value of num1 is {num2}</h1>
      <button onClick={ ()=>{
        setNum1(num1 + 1)
      } }>Increase num</button>
      <button onClick={ ()=>{
        setNum2(num2 - 1)
      } }>Decrease num</button>
    </div>
  );
}

export default App;
