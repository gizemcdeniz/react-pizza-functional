import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";
import Pizza from "./components/Pizza";

function App() {
  return (
    <Fragment>
      <Header />
      <PizzaForm />
      <PizzaList />
    </Fragment>
  );
}

export default App;
