import { useState } from "react";

const Counter2 = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="counter">Count: {count}</div>
      <div className="counter-btn flex gap-2">
        <button
          onClick={() => setCount((prevCount) => prevCount + 5)}
          className="border-2 my-2 px-2"
        >
          +5
        </button>
        <button
          onClick={() => setCount((prevCount) => prevCount + 1)}
          className="border-2 my-2 px-2"
        >
          +1
        </button>
        <button onClick={() => setCount(0)} className="border-2 my-2 px-2">
          RESET
        </button>
        <button
          onClick={() => setCount((prevCount) => prevCount - 1)}
          className="border-2 my-2 px-2"
        >
          -1
        </button>
        <button
          onClick={() => setCount((prevCount) => prevCount - 5)}
          className="border-2 my-2 px-2"
        >
          -5
        </button>
      </div>
    </>
  );
};

export default Counter2;
