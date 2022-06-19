import { useState } from "react";

interface Props {
  rollLog: Roll[][];
  clearLog: () => void;
}

function Line(props: { group: Roll[] }) {
  return (
    <div className="flex justify-end gap-2">
      {props.group.map((roll, index) => {
        return (
          <span
            className={` flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 font-semibold 
            ${roll[0] === roll[1] && "bg-green-900 text-green-400"}
            ${roll[1] === 1 && "bg-red-600 text-white"}`}
            key={index}
          >
            {roll[1]}
          </span>
        );
      })}
    </div>
  );
}

function Calculator(props: Props) {
  const [calcInput, setCalcInput] = useState("");

  return (
    <div className="flex w-72 flex-col rounded-t-md bg-slate-100">
      <div className="h-72 flex-grow items-end overflow-auto rounded-t-md p-4 shadow-inner shadow-gray-300">
        <div className=" flex flex-col-reverse gap-4">
          {props.rollLog.map((rollGroup, index) => (
            <div key={index}>
              <Line group={rollGroup} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex shadow-sm shadow-slate-300">
        <button
          className=" w-12 bg-zinc-300 hover:bg-zinc-400 active:bg-zinc-300 active:shadow-inner"
          onClick={props.clearLog}
        >
          C
        </button>
        <input
          className=" h-9 flex-grow px-2 text-right shadow-inner shadow-slate-100"
          value={calcInput}
          onChange={(e) => setCalcInput(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Calculator;
