

import React, { Component } from "react";
import ReactDOM from "react-dom";
import style from './App.styl'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: "app"
    };
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        {this.state.value}
        <Footer />
      </ React.Fragment> 
    )
  }
}

export default App

const root = document.getElementById('root');
root ? ReactDOM.render(<App />, root) : false;
