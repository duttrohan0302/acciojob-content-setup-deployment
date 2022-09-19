import React from "react";

const CounterComponent = ({count, incrementCount, decrementCount}) => {
    
    return(
        <div className="counter-component">
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}

export default CounterComponent;