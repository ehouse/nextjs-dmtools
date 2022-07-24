import { useState } from "react";
import { FaSync, FaBackspace } from "react-icons/fa";

interface Props {
  setExpression: (arg0: Expression) => void;
  clearExpression: () => void;
  expression: Expression;
}

function Calculator(props: Props) {
  const clear = () => {
    props.clearExpression();
  };

  const dispatchNumber = (digit: number) => {
    if (props.expression === null) {
      // If completely unset, set to a single number
      props.setExpression({ tag: "number", n: digit });
    } else if (props.expression.tag === "number") {
      // Add a digit to a single number expression
      let newExpression: NumberExpression = {
        tag: "number",
        n: props.expression.n * 10 + digit,
      };
      props.setExpression(newExpression);
    } else if (props.expression.tag === "math") {
      // If a math expression, append to the right leaf node
      if (props.expression.right === null) {
        // Check if the leaf node is null, set to a number
        let newNumber: NumberExpression = { tag: "number", n: digit };
        let newExpression = { ...props.expression, right: newNumber };
        props.setExpression(newExpression);
      } else if (props.expression.right.tag === "number") {
        let newNumber: NumberExpression = {
          tag: "number",
          n: props.expression.right.n * 10 + digit,
        };
        let newExpression = { ...props.expression, right: newNumber };
        props.setExpression(newExpression);
      }
    }
  };

  const dispatchOperation = (operation: Operation) => {
    if (
      props.expression?.tag === "number" ||
      (props.expression?.tag === "math" && props.expression.right !== null)
    ) {
      let newExpression: MathExpression = {
        tag: "math",
        op: operation,
        left: props.expression,
        right: null,
      };
      props.setExpression(newExpression);
    }
  };

  return (
    <div className="grid grid-cols-4">
      <button
        value={7}
        onClick={(e) => dispatchNumber(Number(e.currentTarget.value))}
        className="calculator-button-number rounded-tl-md"
      >
        7
      </button>
      <button
        value={8}
        onClick={(e) => dispatchNumber(Number(e.currentTarget.value))}
        className="calculator-button-number"
      >
        8
      </button>
      <button
        value={9}
        onClick={(e) => dispatchNumber(Number(e.currentTarget.value))}
        className="calculator-button-number"
      >
        9
      </button>
      <button
        onClick={() => dispatchOperation("+")}
        className="calculator-button-op rounded-tr-md"
      >
        +
      </button>
      <button
        value={4}
        onClick={(e) => dispatchNumber(Number(e.currentTarget.value))}
        className="calculator-button-number"
      >
        4
      </button>
      <button
        value={5}
        onClick={(e) => dispatchNumber(Number(e.currentTarget.value))}
        className="calculator-button-number"
      >
        5
      </button>
      <button
        value={6}
        onClick={(e) => dispatchNumber(Number(e.currentTarget.value))}
        className="calculator-button-number"
      >
        6
      </button>
      <button
        className="calculator-button-op"
        onClick={() => dispatchOperation("-")}
      >
        -
      </button>
      <button
        value={1}
        onClick={(e) => dispatchNumber(Number(e.currentTarget.value))}
        className="calculator-button-number"
      >
        1
      </button>
      <button
        value={2}
        onClick={(e) => dispatchNumber(Number(e.currentTarget.value))}
        className="calculator-button-number"
      >
        2
      </button>
      <button
        value={3}
        onClick={(e) => dispatchNumber(Number(e.currentTarget.value))}
        className="calculator-button-number"
      >
        3
      </button>
      <button
        className="calculator-button-op"
        onClick={() => dispatchOperation("/")}
      >
        /
      </button>
      <button
        value={"-"}
        className="calculator-button-op rounded-bl-md"
        onClick={clear}
      >
        <FaSync />
      </button>
      <button
        value={0}
        onClick={(e) => dispatchNumber(Number(e.currentTarget.value))}
        className="calculator-button-number"
      >
        0
      </button>
      <button className="calculator-button-op">
        <FaBackspace />
      </button>
      <button
        className="calculator-button-op rounded-br-md"
        onClick={() => dispatchOperation("*")}
      >
        *
      </button>
    </div>
  );
}

export default Calculator;
