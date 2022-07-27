import React from "react";

import { evalExpression } from "../../library/expression";

function WaitingInput() {
  return <span className="animate-ping px-1 text-slate-500">_</span>;
}

function DieRoll(props: { roll: RollExpression }) {
  const die = (
    <span className="text-xl text-slate-500">{`${
      Array.isArray(props.roll.n) ? props.roll.n.length : ""
    }d${props.roll.sides}(`}</span>
  );
  const result = Array.isArray(props.roll.n) ? (
    <span className="px-1">{props.roll.n.reduce((a, b) => a + b)}</span>
  ) : (
    <span
      className={`px-1 
      ${props.roll.sides == 20 && props.roll.n == 20 ? "text-green-700" : null}
      ${props.roll.sides == 20 && props.roll.n == 1 ? "text-red-700" : null}`}
    >
      {props.roll.n}
    </span>
  );
  return (
    <span>
      {die}
      {result}
      <span className="text-xl text-slate-500">)</span>
    </span>
  );
}

/**
 * Run through an expression and generate an array of ReactElements to be displayed
 * @param expression Expression to be parsed
 * @returns React.ReactElement[] to be displayed via Results
 */
function GenerateElements(expression: Expression): React.ReactElement[] {
  // Array of components passed in, will append new elements and eventually return
  let prime: React.ReactElement[] = [];

  if (expression === null) {
    // Terminate recursion if nullish case
  } else if (expression.tag === "number") {
    // Terminate recursion if leaf node with number
    prime.push(<span className="">{expression.n}</span>);
    // Terminate recursion if leaf node is a die roll
  } else if (expression.tag === "roll") {
    prime.push(<DieRoll roll={expression} />);
  } else if (expression.tag === "math") {
    // If a math expression, generate the left/right node via recursion and return combined array
    const left = GenerateElements(expression.left);
    const op = (
      <span className="px-2 font-light text-slate-500">{expression.op}</span>
    );
    const right = GenerateElements(expression.right);
    prime = [...left, op, ...right];
  }

  return prime;
}

function Results(props: { expression: Expression }) {
  const renderedResults = GenerateElements(props.expression);
  const expressionTotal = evalExpression(props.expression);

  return (
    <div className="mt-4 flex flex-col rounded-sm border border-solid border-slate-300 bg-slate-50 p-3 text-2xl md:mt-10">
      <div>
        {renderedResults}
        <WaitingInput />
      </div>
      <div className="pt-3">
        <span className="pr-2 text-xl text-slate-500">Result:</span>
        {expressionTotal}
      </div>
    </div>
  );
}

export default Results;
