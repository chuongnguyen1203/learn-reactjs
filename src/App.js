import React from "react";
// import "./App.css";
import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";

function App() {
  const name = "Bumm";
  const age = 18;
  const isFemale = true;
  const student = {
    name: "Bummm",
  };
  const colorList = ["red", "green", "blue"];

  return (
    <div className="App">
      <AlbumFeature />
      {/* <TodoFeature /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Xin chao {name}</p>

        {isFemale && <p>Nam</p>}
        {isFemale && (
          <React.Fragment>
            <p>Nam</p>
            <p>Nam</p>
            <p>Nam</p>
            <p>Nam</p>
          </React.Fragment>
        )}

        <ul>
          {colorList.map((color) => (
            <li style={{ color }}>{color}</li>
          ))}
        </ul>
      </header> */}
    </div>
  );
}

export default App;
