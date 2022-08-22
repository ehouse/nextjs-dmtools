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

  /**
   * Handle when the backspace button is pressed
   */
  const dispatchBackspace = () => {
    if (props.expression === null) {
      /* Do nothing */
    } else if (props.expression.tag === "number") {
      const slice = Number(String(props.expression.n).slice(0, -1));
      if (slice === 0) {
        props.setExpression(null);
      } else {
        props.setExpression({ tag: "number", n: slice });
      }
    } else if (props.expression.tag === "roll") {
      props.setExpression(null);
    } else if (props.expression.tag === "math") {
      if (props.expression.right === null) {
        /* Remove top arithmetic operation */
        const slice = props.expression.left;
        props.setExpression(slice);
      } else if (props.expression.right.tag === "number") {
        /* Remove right most digit in the right leaf node */
        const slice = Number(String(props.expression.right.n).slice(0, -1));
        let newNumber: NumberExpression = { tag: "number", n: slice };
        let newExpression: Expression;

        if (slice === 0) {
          newExpression = { ...props.expression, right: null };
        } else {
          newExpression = { ...props.expression, right: newNumber };
        }
        props.setExpression(newExpression);
      } else if (props.expression.right.tag === "roll") {
        /* Remove the roll on the right */
        props.setExpression({ ...props.expression, right: null });
      }
    }
  };

  /**
   * Handles when a new number is pressed
   *
   * @param digit The number pressed
   */
  const dispatchNumber = (digit: number) => {
    if (props.expression === null) {
      /* If completely unset, set to a single number */
      props.setExpression({ tag: "number", n: digit });
    } else if (props.expression.tag === "number") {
      /* Add a digit to a single number expression */
      let newExpression: NumberExpression = {
        tag: "number",
        n: props.expression.n * 10 + digit,
      };
      props.setExpression(newExpression);
    } else if (props.expression.tag === "roll") {
      /* Handle clicking a number after entering a roll */
      props.setExpression({ tag: "number", n: digit });
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

  /**
   * Handles when an arithmetic operation needs to be dispatched to the expression
   *
   * @param operation Arithmetic operation pressed
   */
  const dispatchOperation = (operation: Operation) => {
    if (
      props.expression?.tag === "number" ||
      props.expression?.tag === "roll" ||
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
        className="calculator-button-op rounded-tr-md"
        onClick={() => dispatchOperation("*")}
      >
        *
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
        onClick={() => dispatchOperation("/")}
      >
        /
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
        onClick={() => dispatchOperation("-")}
      >
        -
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
      <button onClick={dispatchBackspace} className="calculator-button-op">
        <FaBackspace />
      </button>

      <button
        onClick={() => dispatchOperation("+")}
        className="calculator-button-op rounded-br-md"
      >
        +
      </button>
    </div>
  );
}

export default Calculator;
