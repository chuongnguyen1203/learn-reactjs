import React from "react";
import { Link, NavLink, Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./components/NoFound";
// import "./App.css";
import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";

function App() {
  // const name = "Bumm";
  // const age = 18;
  // const isFemale = true;
  // const student = {
  //   name: "Bummm",
  // };
  // const colorList = ["red", "green", "blue"];

  return (
    <div className="App">
      HomePage
      <p>
        <Link to="/todos">Todos </Link>
      </p>
      <p>
        <Link to="/albums">Albums</Link>
      </p>
      <p>
        <NavLink to="/todos" activeClassName="active-menu">
          Todos{" "}
        </NavLink>
      </p>
      <p>
        <NavLink to="/albums" activeClassName="active-menu">
          Albums
        </NavLink>
      </p>
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/todo-list/:todosId" to="/todos/:todosId" exact />

        <Route path="/" component={TodoFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound} />
      </Switch>
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
