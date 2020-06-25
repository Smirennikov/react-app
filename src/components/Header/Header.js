
import React, { Component } from "react";
import ReactDOM from "react-dom";
import style from'./Header.styl'

class Header extends Component {
  constructor() {
    super();

    this.state = {
      value: "header"
    };
  }

  render() {
    return (
      <header className={style.header}>
        {this.state.value}
      </header>
    )
  }
}

export default Header
