import React from "react";

import "./Button.css";

class Button extends React.Component {
  btnClick(e) {
    if (e.classList.contains("primary") === false) {
      e.classList.toggle("primary");

      this.props.setTable(Number(e.getAttribute("table")));

      const btn = document.querySelectorAll(".sb");

      for (var i = 0; i < btn.length; i++) {
        if (btn[i].id !== e.id && btn[i].classList.contains("primary")) {
          btn[i].classList.toggle("primary");
        }
      }
    }
  }
  render() {
    return (
      <div className="btn-ctn">
        <div className="ui buttons">
          <button
            id="b1"
            table="0"
            className="ui primary button sb"
            onClick={e => this.btnClick(e.target)}
          >
            Beer
          </button>
          <div className="or"></div>
          <button
            id="b2"
            table="1"
            className="ui button sb"
            onClick={e => this.btnClick(e.target)}
          >
            Vodka
          </button>
          <div className="or"></div>
          <button
            id="b3"
            table="2"
            className="ui button sb"
            onClick={e => this.btnClick(e.target)}
          >
            Both
          </button>
        </div>
      </div>
    );
  }
}

export default Button;
