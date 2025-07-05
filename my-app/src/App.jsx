import logo from "./logo.svg";
import "./App.css";
import { data } from "./data";
function App() {
  return (
    <div className="App">
      {data.map((data) => (
        <div key={data.id}>
          <h1>{data.title}</h1>
          <img src={data.image} alt={data.title} />
          <a href={data.url}>
            {data.google}
          </a>
          <ul className="list">
            <li className="red">{data.red}</li>
            <li className="blue">{data.blue}</li>
            <li className="green">{data.green}</li>
          </ul>
          <ul className="numlist">
            <li className="num">{data.num}</li>
            <li className="num2">{data.num2}</li>
            <li className="num3">{data.result}</li>
          </ul>
          
        </div>
      ))}
    </div>
  );
}

export default App;
