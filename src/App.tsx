import { useState } from "react";
import "./App.css";
import pieList from "./pieList";

function App() {
  const pietype = [
    ...Array.from("mps").flatMap((suit) =>
      Array.from("123456789").map((num) => num + suit)
    ),
    ...Array.from("1234567").map((num) => num + "z"),
  ];

  const [ans, _setAns] = useState<string>(
    pietype[Math.floor(Math.random() * pietype.length)]
  );
  const [list, setList] = useState<string[]>([]);

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Doradle</h1>
      <header className="App-header">
        {list.map((pie, i) => (
          <div className="wanpai" key={i}>
            <div className="answer ura"></div>
            <div className="answer ura"></div>
            <div className={"answer" + (pie === ans ? " rightAnswer" : "")}>
              <img src={pieList[pie]} alt={pie} />
            </div>
            <div className="answer ura"></div>
            <div className="answer ura"></div>
            <div className="answer ura"></div>
            <div className="answer ura"></div>
          </div>
        ))}
        {!list.includes(ans) && (
          <div className="wanpai">
            <div className="answer ura"></div>
            <div className="answer ura"></div>
            <div className="answer emptyAnswer"></div>
            <div className="answer ura"></div>
            <div className="answer ura"></div>
            <div className="answer ura"></div>
            <div className="answer ura"></div>
          </div>
        )}
        <div className="buttons">
          {pietype.map((pie) => (
            <button
              key={pie}
              onClick={() => {
                if (list.includes(ans)) return;
                setList([...list, pie]);
              }}
              style={{
                backgroundColor: list.includes(pie)
                  ? pie === ans
                    ? "green"
                    : "gray"
                  : "",
              }}
            >
              <img src={pieList[pie]} alt={pie} />
            </button>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
