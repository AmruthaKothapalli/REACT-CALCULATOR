import React, { Component } from "react";
import "./Calculator.css";

export default class Calcu extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  numbers = (num) => {
    this.setState({ value: this.state.value + num });
  };

  del = () => {
    this.setState({
      value: this.state.value.substring(0, this.state.value.length - 1),
    });
  };

  allClear = (ac) => {
    this.setState({ value: ac });
  };

  operations = (oper) => {
    if (this.state.value.slice(-1) === oper) {
      return;
    } else {
      this.setState({ value: this.state.value + oper });
    }
  };

  equalTo = () => {
    this.setState({
      value: eval(this.state.value),
    });
  };

  render() {
    console.log(this);
    return (
      <>
        <section id="buttons">
          <div id="text" className="align">
            <input
              type="text"
              id="text1"
              className="input"
              value={this.state.value}
            />
          </div>

          <div className="align">
            <button
              id="btnOB"
              className="but"
              onClick={() => {
                this.operations("(");
              }}
            >
              (
            </button>
          </div>
          <div className="align">
            <button
              id="btnCB"
              className="but"
              onClick={() => {
                this.operations(")");
              }}
            >
              )
            </button>
          </div>
          <div className="align">
            <button
              id="del"
              className="but"
              onClick={() => {
                this.del();
              }}
            >
              del
            </button>
          </div>
          <div className="align">
            <button
              id="AC"
              className="but"
              onClick={() => {
                this.allClear("");
              }}
            >
              AC
            </button>
          </div>

          <div className="align">
            <button
              id="btn7"
              className="but"
              onClick={() => {
                this.numbers(7);
              }}
            >
              7
            </button>
          </div>
          <div className="align">
            <button
              id="btn8"
              className="but"
              onClick={() => {
                this.numbers(8);
              }}
            >
              8
            </button>
          </div>
          <div className="align">
            <button
              id="btn9"
              className="but"
              onClick={() => {
                this.numbers(9);
              }}
            >
              9
            </button>
          </div>
          <div className="align">
            <button
              id="btnDiv"
              className="but"
              onClick={() => {
                this.operations("/");
              }}
            >
              /
            </button>
          </div>

          <div className="align">
            <button
              id="btn4"
              className="but"
              onClick={() => {
                this.numbers(4);
              }}
            >
              4
            </button>
          </div>
          <div className="align">
            <button
              id="btn5"
              className="but"
              onClick={() => {
                this.numbers(5);
              }}
            >
              5
            </button>
          </div>
          <div className="align">
            <button
              id="btn6"
              className="but"
              onClick={() => {
                this.numbers(6);
              }}
            >
              6
            </button>
          </div>
          <div className="align">
            <button
              id="btnMul"
              className="but"
              onClick={() => {
                this.operations("*");
              }}
            >
              X
            </button>
          </div>

          <div className="align">
            <button
              id="btn1"
              className="but"
              onClick={() => {
                this.numbers(1);
              }}
            >
              1
            </button>
          </div>
          <div className="align">
            <button
              id="btn2"
              className="but"
              onClick={() => {
                this.numbers(2);
              }}
            >
              2
            </button>
          </div>
          <div className="align">
            <button
              id="btn3"
              className="but"
              onClick={() => {
                this.numbers(3);
              }}
            >
              3
            </button>
          </div>
          <div className="align">
            <button
              id="btnSub"
              className="but"
              onClick={() => {
                this.operations("-");
              }}
            >
              -
            </button>
          </div>

          <div className="align">
            <button
              id="btn00"
              className="but"
              onClick={() => {
                this.numbers("00");
              }}
            >
              00
            </button>
          </div>
          <div className="align">
            <button
              id="btn0"
              className="but"
              onClick={() => {
                this.numbers(0);
              }}
            >
              0
            </button>
          </div>
          <div className="align">
            <button
              id="btnPoint"
              className="but"
              onClick={() => {
                this.operations(".");
              }}
            >
              <sup>.</sup>
            </button>
          </div>
          <div className="align">
            <button
              id="btnAdd"
              className="but"
              onClick={() => {
                this.operations("+");
              }}
            >
              +
            </button>
          </div>

          <div className="align">
            <button
              id="btnMod"
              className="but"
              onClick={() => {
                this.operations("%");
              }}
            >
              %
            </button>
          </div>
          <div id="equals" className="align">
            <button
              id="btnEqualTo"
              className="but"
              onClick={() => {
                this.equalTo();
              }}
            >
              =
            </button>
          </div>
        </section>
      </>
    );
  }
}
