import "./styles.css";
import { useState } from "react";

export default function App() {
  let value;
  const [da, setDa] = useState([]);
  const inp = (event) => {
    value = event.target.value;
  };
  const disp = () => {
    console.log(value);
    setDa((oldvalue) => [...oldvalue, value]);
    console.log(da);
  };
  return (
    <div className="App">
      <h1>Enter the hobby</h1>
      <input type="text" onChange={inp}></input>
      <button onClick={disp}>Add</button>
      <div>
        <h1>Display</h1>
        {da.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </div>
    </div>
  );
}
