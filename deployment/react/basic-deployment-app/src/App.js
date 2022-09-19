import React, { useEffect, useState } from "react";
import "./App.css";
import CounterComponent from "./CounterComponent";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    const storedCount = localStorage.getItem("count");
    if(storedCount){
      setCount(parseInt(storedCount))
    }
  })
  
  const incrementCount = () => {
    const newCount = count+1;
    setCount(newCount);
    localStorage.setItem("count",newCount);
  };

  const decrementCount = () => {
    const newCount = count-1;
    setCount(newCount);
    localStorage.setItem("count", newCount)
  };
  return (
    <div className="App">
      <h1>Counter Application</h1>
      <CounterComponent
        count={count}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
      />
    </div>
  );
}

export default App;
