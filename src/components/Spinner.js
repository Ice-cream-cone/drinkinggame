import React from "react";

import "./Spinner.css";
import wheel from "../pics/spinner.png";
import pointer from "../pics/pointer.png";

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.wheel = React.createRef();
    this.btn = React.createRef();
    this.counter = 0;
    this.state = { color: "" };
  }

  getColor(deg) {
    if (deg >= 1 && deg <= 30) {
      return "yellow";
    } else if (deg >= 31 && deg <= 60) {
      return "orange";
    } else if (deg >= 61 && deg <= 90) {
      return "red";
    } else if (deg >= 91 && deg <= 120) {
      return "dark-pink";
    } else if (deg >= 121 && deg <= 150) {
      return "pink";
    } else if (deg >= 151 && deg <= 180) {
      return "purple";
    } else if (deg >= 181 && deg <= 210) {
      return "dark-purple";
    } else if (deg >= 211 && deg <= 240) {
      return "dark-blue";
    } else if (deg >= 241 && deg <= 270) {
      return "blue";
    } else if (deg >= 271 && deg <= 300) {
      return "cyan";
    } else if (deg >= 301 && deg <= 330) {
      return "green";
    } else if (deg >= 331 && deg <= 360) {
      return "lime";
    } else {
      return "you suck";
    }
  }

  spin() {
    const obj = this.wheel.current;

    obj.style.transition = "5s cubic-bezier(0.27, 0.38, 0.03, 0.98)";
    const random = Math.random() * (1560 - 1200) + 1200;
    this.wheel.current.style.transform = `rotate(${random}deg)`;

    this.btn.current.classList.toggle("disabled");

    const initial = random % 360;
    this.setState({ color: this.getColor(initial) });

    setTimeout(() => {
      obj.style.transition = "0s";
      obj.style.transform = `rotate(${initial}deg)`;
      this.btn.current.classList.toggle("disabled");
    }, 5000);
  }

  render() {
    return (
      <div className="spin-ctn">
        <img className="pointer" src={pointer} alt="pointer" />
        <img className="wheel" ref={this.wheel} src={wheel} alt="wheel" />
        <button
          className="ui button black spin-btn"
          onClick={() => this.spin()}
          ref={this.btn}
        >
          Spin
        </button>
        {this.state.color}
      </div>
    );
  }
}

export default Spinner;
