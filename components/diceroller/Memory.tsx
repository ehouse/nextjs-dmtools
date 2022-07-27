import { useState } from "react";
import { FaRegCircle, FaRegDotCircle, FaTrash } from "react-icons/fa";

import { reRollExpression, expressionToString } from "../../library/expression";

function TrashCan(props: { onClick: () => void }) {
  return (
    <button
      className="absolute right-1.5 top-1.5 p-0.5 text-slate-100 hover:text-slate-400"
      onClick={props.onClick}
    >
      <FaTrash />
    </button>
  );
}

function MemoryButton(props: {
  cell: Expression;
  cellID: number;
  dispatchMemory: (id: number, clear?: boolean) => void;
}) {
  return (
    <div className="group relative">
      <button
        onClick={() => props.dispatchMemory(props.cellID)}
        className="button rounded-2xl bg-gradient-to-tr from-sky-700 to-sky-600 p-7 text-4xl text-slate-100 "
      >
        {props.cell ? <FaRegDotCircle /> : <FaRegCircle />}
      </button>
      {props.cell && (
        <TrashCan onClick={() => props.dispatchMemory(props.cellID, true)} />
      )}
      <span className="tip left-[6rem] top-[1.5rem]">
        {expressionToString(props.cell ?? null) || "Empty"}
      </span>
    </div>
  );
}

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
    <div className="hidden flex-col justify-between md:flex">
      <MemoryButton cell={cell[1]} cellID={1} dispatchMemory={dispatchMemory} />
      <MemoryButton cell={cell[2]} cellID={2} dispatchMemory={dispatchMemory} />
      <MemoryButton cell={cell[3]} cellID={3} dispatchMemory={dispatchMemory} />
      <MemoryButton cell={cell[4]} cellID={4} dispatchMemory={dispatchMemory} />
    </div>
  );
}

export default Memory;
