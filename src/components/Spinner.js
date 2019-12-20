import React from 'react';

import './Spinner.css';
import wheel from '../pics/spinner.png';
import pointer from '../pics/pointer.png';
import Descriptions from './Descriptions';
import Button from './Button';

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.wheel = React.createRef();
    this.btn = React.createRef();
    this.counter = 0;
    this.state = { color: '', table: 0 };
  }

  setTable(n) {
    this.setState({ table: n });
  }

  getColor(deg) {
    if (deg >= 1 && deg <= 30) {
      // return 'yellow';
      return 0;
    } else if (deg >= 31 && deg <= 60) {
      // return 'orange';
      return 1;
    } else if (deg >= 61 && deg <= 90) {
      // return 'red';
      return 2;
    } else if (deg >= 91 && deg <= 120) {
      // return 'dark-pink';
      return 3;
    } else if (deg >= 121 && deg <= 150) {
      // return 'pink';
      return 4;
    } else if (deg >= 151 && deg <= 180) {
      // return 'purple';
      return 5;
    } else if (deg >= 181 && deg <= 210) {
      // return 'dark-purple';
      return 6;
    } else if (deg >= 211 && deg <= 240) {
      // return 'dark-blue';
      return 7;
    } else if (deg >= 241 && deg <= 270) {
      // return 'blue';
      return 8;
    } else if (deg >= 271 && deg <= 300) {
      // return 'cyan';
      return 9;
    } else if (deg >= 301 && deg <= 330) {
      // return 'green';
      return 10;
    } else if (deg >= 331 && deg <= 360) {
      // return 'lime';
      return 11;
    }
  }

  spin() {
    const obj = this.wheel.current;
    const obj1 = this;

    obj.style.transition = '5s cubic-bezier(0.27, 0.38, 0.03, 0.98)';
    const random = Math.random() * (1560 - 1200) + 1200;
    this.wheel.current.style.transform = `rotate(${random}deg)`;

    this.btn.current.classList.toggle('disabled');

    const initial = random % 360;

    setTimeout(() => {
      obj1.setState({ color: obj1.getColor(initial) });
      obj.style.transition = '0s';
      obj.style.transform = `rotate(${initial}deg)`;

      this.btn.current.classList.toggle('disabled');
    }, 5000);
  }

  render() {
    return (
      <div id="outer-container">
        <div id="title-box">
          <h3 id="title-text">Drunken Wheel</h3>
        </div>
        <Button setTable={n => this.setTable(n)} />
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
        </div>
        <Descriptions table={this.state.table} result={this.state.color} />
      </div>
    );
  }
}

export default Spinner;
