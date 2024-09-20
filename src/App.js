import React, { useState } from "react";


const AddButton = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleAddClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <h1 className="count">{count}</h1>
      <div className="button-container">
        <button onClick={handleDecrement} className="decrement-button">
          -
        </button>
        <button onClick={handleAddClick} className="add-button">
          Add
        </button>
        <button onClick={handleIncrement} className="increment-button">
          +
        </button>
      </div>
    </div>
  );
};

export default AddButton;