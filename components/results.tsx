import React from "react";

import { evalExpression } from "../library/expression";

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
    prime.push(<span>_</span>);
  } else if (expression.tag === "number") {
    // Terminate recursion if leaf node with number
    prime.push(<span>{expression.n}</span>);
    // Terminate recursion if leaf node is a die roll
  } else if (expression.tag === "roll") {
    prime.push(<span>{expression.n}</span>);
  } else if (expression.tag === "math") {
    // If a math expression, generate the left/right node via recursion and return combined array
    const left = GenerateElements(expression.left);
    const op = <span>{expression.op}</span>;
    const right = GenerateElements(expression.right);
    prime = [...left, op, ...right];
  }

  return prime;
}

function Results(props: { expression: Expression }) {
  const renderedResults = GenerateElements(props.expression);
  const expressionTotal = evalExpression(props.expression);

  return (
    <div className="flex flex-col">
      <div>{renderedResults}</div>
      <div>Total: {expressionTotal}</div>
    </div>
  );
}

export default Results;
