import { useState } from "react";
import { FaRegCircle, FaRegDotCircle, FaTrash } from "react-icons/fa";

import { reRollExpression, expressionToString } from "../../library/expression";

function Memory(props: {
  expression: Expression;
  setExpression: (e: Expression) => void;
}) {
  const [cell, setCell] = useState<Record<number, Expression>>({});

  const dispatchMemory = (cellNumber: number, clear?: Boolean) => {
    // If Clearing a cell, perform the action and terminate the dispatch
    if (clear) {
      setCell({ ...cell, [cellNumber]: null });
      return;
    }

    // Check if cell contains expression
    if (cell[cellNumber]) {
      // ReRoll Expression in cell and execute
      props.setExpression(reRollExpression(cell[cellNumber]));
    } else {
      // Assign expression to empty cell
      setCell({ ...cell, [cellNumber]: props.expression });
    }
  };

  return (
    <div className="flex flex-col justify-between">
      <div className="group relative">
        <button
          onClick={() => dispatchMemory(1)}
          className="calculator-button-cell"
        >
          {cell[1] ? <FaRegDotCircle /> : <FaRegCircle />}
        </button>
        {cell[1] && (
          <button
            className="trashcan-hover absolute right-1.5 top-1.5 p-0.5"
            onClick={() => dispatchMemory(1, true)}
          >
            <FaTrash />
          </button>
        )}
        <span className="cell-tip group-hover:scale-100">
          {expressionToString(cell[1] ?? null)}
        </span>
      </div>
      <div className="group relative">
        <button
          onClick={() => dispatchMemory(2)}
          className="calculator-button-cell"
        >
          {cell[2] ? <FaRegDotCircle /> : <FaRegCircle />}
        </button>
        {cell[2] && (
          <button
            className="trashcan-hover absolute right-1.5 top-1.5 p-0.5"
            onClick={() => dispatchMemory(2, true)}
          >
            <FaTrash />
          </button>
        )}
        <span className="cell-tip group-hover:scale-100">
          {expressionToString(cell[2] ?? null)}
        </span>
      </div>
      <div className="group relative">
        <button
          onClick={() => dispatchMemory(3)}
          className="calculator-button-cell"
        >
          {cell[3] ? <FaRegDotCircle /> : <FaRegCircle />}
        </button>
        {cell[3] && (
          <button
            className="trashcan-hover absolute right-1.5 top-1.5 p-0.5"
            onClick={() => dispatchMemory(3, true)}
          >
            <FaTrash />
          </button>
        )}
        <span className="cell-tip group-hover:scale-100">
          {expressionToString(cell[3] ?? null)}
        </span>
      </div>
      <div className="group relative">
        <button
          onClick={() => dispatchMemory(4)}
          className="calculator-button-cell"
        >
          {cell[4] ? <FaRegDotCircle /> : <FaRegCircle />}
        </button>
        {cell[4] && (
          <button
            className="trashcan-hover absolute right-1.5 top-1.5 p-0.5"
            onClick={() => dispatchMemory(4, true)}
          >
            <FaTrash />
          </button>
        )}
        <span className="cell-tip group-hover:scale-100">
          {expressionToString(cell[4] ?? null)}
        </span>
      </div>
    </div>
  );
}

export default Memory;
