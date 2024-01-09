import { useState } from "react";

const Counter4 = () => {
  const [items, setItems] = useState([]);
  const handleClick = () => {
    setItems([...items, {
      id: items.length,
      value: Math.floor(Math.random() * 1000)
    }])
  }

  return (
    <div>
      <button className="border-2 my-2 px-2" onClick={handleClick}>
        Add a random number
      </button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Counter4;
