import Header from 'components/Header';
import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import productApi from './api/productApi';
import NotFound from './components/NoFound';
// import './App.css';
import AlbumFeature from './features/Album';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo';
import Product from './features/Product';

function App() {
  // const name = "Bumm";
  // const age = 18;
  // const isFemale = true;
  // const student = {
  //   name: "Bummm",
  // };
  // const colorList = ["red", "green", "blue"];

  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await productApi.getAll();
      console.log(productList);
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Header />

      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/todo-list/:todosId" to="/todos/:todosId" exact />

        <Route path="/" component={CounterFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route path="/products" component={Product} />

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
