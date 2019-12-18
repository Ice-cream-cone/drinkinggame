import React from "react";

import "./Spinner.css";
import wheel from "../pics/spinner.png";
import pointer from "../pics/pointer.png";
import Descriptions from "./Descriptions";

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
      // return 'yellow';
      return 1;
    } else if (deg >= 31 && deg <= 60) {
      // return 'orange';
      return 2;
    } else if (deg >= 61 && deg <= 90) {
      // return 'red';
      return 3;
    } else if (deg >= 91 && deg <= 120) {
      // return 'dark-pink';
      return 4;
    } else if (deg >= 121 && deg <= 150) {
      // return 'pink';
      return 5;
    } else if (deg >= 151 && deg <= 180) {
      // return 'purple';
      return 6;
    } else if (deg >= 181 && deg <= 210) {
      // return 'dark-purple';
      return 7;
    } else if (deg >= 211 && deg <= 240) {
      // return 'dark-blue';
      return 8;
    } else if (deg >= 241 && deg <= 270) {
      // return 'blue';
      return 9;
    } else if (deg >= 271 && deg <= 300) {
      // return 'cyan';
      return 10;
    } else if (deg >= 301 && deg <= 330) {
      // return 'green';
      return 11;
    } else if (deg >= 331 && deg <= 360) {
      // return 'lime';
      return 12;
    } else {
      // return 'you suck';
      return "you suck";
    }
  }

  spin() {
    const obj = this.wheel.current;
    const obj1 = this;

    obj.style.transition = "5s cubic-bezier(0.27, 0.38, 0.03, 0.98)";
    const random = Math.random() * (1560 - 1200) + 1200;
    this.wheel.current.style.transform = `rotate(${random}deg)`;

    this.btn.current.classList.toggle("disabled");

    const initial = random % 360;

    setTimeout(() => {
      obj1.setState({ color: obj1.getColor(initial) });
      obj.style.transition = "0s";
      obj.style.transform = `rotate(${initial}deg)`;
      this.btn.current.classList.toggle("disabled");
    }, 5000);
  }

  render() {
    return (
      <div>
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
        <Descriptions result={this.state.color} />
      </div>
    );
  }
}

export default Spinner;
