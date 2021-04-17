import React from "react";
import "../components/Keypad.css";

const Keypad = (props) => {
  return (
    <div className="keypad">
      <div className="button-wrapper">
        <button value="(" onClick={props.operand}>
          (
        </button>
        <button value=")" onClick={props.operand}>
          )
        </button>
        <button value="%" onClick={props.operand}>
          %
        </button>
        <button onClick={props.clear}>AC</button>
        <button value="7" onClick={props.operand}>
          7
        </button>
        <button value="8" onClick={props.operand}>
          8
        </button>
        <button value="9" onClick={props.operand}>
          9
        </button>
        <button value="/" onClick={props.operand}>
          ÷
        </button>
        <button value="4" onClick={props.operand}>
          4
        </button>
        <button value="5" onClick={props.operand}>
          5
        </button>
        <button value="7" onClick={props.operand}>
          6
        </button>
        <button value="*" onClick={props.operand}>
          x
        </button>
        <button value="1" onClick={props.operand}>
          1
        </button>
        <button value="2" onClick={props.operand}>
          2
        </button>
        <button value="3" onClick={props.operand}>
          3
        </button>
        <button value="-" onClick={props.operand}>
          -
        </button>
        <button value="0" onClick={props.operand}>
          0
        </button>
        <button value="." onClick={props.operand}>
          .
        </button>
        <button id="equal-button" onClick={props.result}>
          =
        </button>
        <button value="+" onClick={props.operand}>
          +
        </button>
      </div>
    </div>
  );
};

export default Keypad;
