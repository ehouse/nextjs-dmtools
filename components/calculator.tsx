import { useState } from "react";

interface Props {
  rollLog: RollLog;
  clearLog: () => void;
}

function Calculator(props: Props) {
  const [calcInput, setCalcInput] = useState("");

  return (
    <div className=" flex w-72 flex-col rounded-t-md bg-slate-100">
      <div className=" h-72 flex-grow items-end overflow-auto rounded-t-md pr-6 pt-4 shadow-inner shadow-gray-300">
        <ul className=" text-right">
          {props.rollLog.map((rollGroup) => (
            <li>
              {rollGroup.map((roll) => {
                return <span>{roll[1]}</span>;
              })}
            </li>
          ))}
        </ul>
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
