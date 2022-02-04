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

  const Modal = () => {
    const shareString =
      "Doradle\n" + list.map((pie) => (pie === ans ? "🟩" : "⬜")).join("\n");
    console.log({ shareString });

    const shareLink = `https://twitter.com/share?text=${encodeURIComponent(
      shareString
    )}`;
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            width: 500,
            padding: 10,
            border: "black solid 2px",
            borderRadius: 5,
            textAlign: "center",
          }}
        >
          <h2>Clear</h2>
          <div>{list.length}</div>
          <a href={shareLink} target="_blank" rel="noreferrer">
            Share
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      {list.includes(ans) && <Modal />}
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
