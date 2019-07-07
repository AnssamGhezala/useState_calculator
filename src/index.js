import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const initialState = {
  firstnumber: 0,
  secondnumber: 0,
  operator: "+",
  result: 0
};

function App() {
  const [state, setState] = useState(initialState);

  const ExecuteComputation = () => {
    let z = null;
    let operator = state.operator;
    let firstnumber = state.firstnumber;
    let secondnumber = state.secondnumber;

    switch (operator) {
      case "+":
        z = firstnumber + secondnumber;
        break;
      case "-":
        z = firstnumber - secondnumber;
        break;
      case "/":
        z = firstnumber / secondnumber;
        break;
      case "*":
        z = firstnumber * secondnumber;
        break;
      default:
        throw new Error();
    }
    setState({ ...state, result: z });
  };

  const operatorUpdate = evt => {
    setState({ ...state, operator: evt.target.value });
  };

  const firstNumUpdate = evt => {
    setState({ ...state, firstnumber: Number(evt.target.value) });
  };

  const secondNumUpdate = evt => {
    setState({ ...state, secondnumber: Number(evt.target.value) });
  };

  return (
    <form>
      <label>
        <div>
          Number 1 :
          <input
            type="text"
            onChange={evt => firstNumUpdate(evt)}
            value={state.firstnumber}
          />
        </div>
        <br />
        <div>
          Number 2 :
          <input
            type="text"
            onChange={evt => secondNumUpdate(evt)}
            value={state.secondnumber}
          />
        </div>
        <br />
        <div>
          <select onChange={evt => operatorUpdate(evt)}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
          <br />
          <br />
        </div>
        <input type="button" onClick={ExecuteComputation} value="Execute" />
        <div />
        <br />
        <input type="text" value={state.result} />
      </label>
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
