import { useState } from "react";

const Counter3 = () => {
  const initialValue = {
    firstName: '',
    lastName: ''
  }
  const [name, setName] = useState(initialValue)
  const handleChange1 = (e) => {
    setName({...name, firstName: e.target.value})
  }
  const handleChange2 = (e) => {
    setName({...name, lastName: e.target.value})
  }
  
  return (
  <form className="flex flex-col">
    <input className="border-2 my-2 px-2" type="text" onChange={handleChange1} />
    <input className="border-2 my-2 px-2" type="text" onChange={handleChange2} />
    <h2>My first name is: {name.firstName}</h2>
    <h2>My first name is: {name.lastName}</h2>
  </form>
  );
};

export default Counter3;
