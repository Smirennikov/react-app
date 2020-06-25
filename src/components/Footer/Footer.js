import React, { Component } from "react";
import ReactDOM from "react-dom";
import style from './Footer.styl'

class Footer extends Component {
  constructor() {
    super();

    this.state = {
      value: "footer"
    };
  }

  render() {
    return (
      <footer className={style.footer}>
        {this.state.value}
      </footer>
    )
  }
}

export default Footer
