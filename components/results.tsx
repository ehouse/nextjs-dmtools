interface Props {
  expression: Expression;
}

const evalExpression = (e: Expression): number => {
  // Return 0 if null expression
  if (e === null) {
    return 0;
  }

  if (e.tag === "math") {
    if (e.op === "+") {
      return evalExpression(e.left) + evalExpression(e.right);
    }
    if (e.op === "-") {
      return evalExpression(e.left) - evalExpression(e.right);
    }
    if (e.op === "*") {
      return evalExpression(e.left) * evalExpression(e.right);
    }
    if (e.op === "/") {
      return evalExpression(e.left) / evalExpression(e.right);
    }
  } else if (e.tag === "number") {
    return e.n;
  }
  return 0;
};

function Results(props: Props) {
  return (
    <div className="flex flex-col">
      <div>{evalExpression(props.expression)}</div>
      <div>{props.expression && JSON.stringify(props.expression)}</div>
    </div>
  );
}

export default Results;
