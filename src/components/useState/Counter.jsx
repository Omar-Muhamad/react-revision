import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count+1)
  }
  return (
    <button onClick={handleClick} className="border-2 my-2 px-2">Counter: {count}</button>
  )
}

export default Counter