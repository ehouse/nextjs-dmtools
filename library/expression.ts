/**
 * Crunch the expression and return a single number result
 *
 * @param e Expression to be evaluated
 * @returns number
 */
const evalExpression = (e: Expression): number => {
  // Return 0 if null expression
  if (e === null) {
    return 0;
  }

  if (e.tag === "math") {
    if (e.op === "+") {
      if (e.right === null) {
        return evalExpression(e.left) + 0;
      }
      return evalExpression(e.left) + evalExpression(e.right);
    }
    if (e.op === "-") {
      if (e.right === null) {
        return evalExpression(e.left) + 0;
      }
      return evalExpression(e.left) - evalExpression(e.right);
    }
    if (e.op === "*") {
      if (e.right === null) {
        return evalExpression(e.left) * 1;
      }
      return evalExpression(e.left) * evalExpression(e.right);
    }
    if (e.op === "/") {
      if (e.right === null) {
        return evalExpression(e.left) * 1;
      }
      return evalExpression(e.left) / evalExpression(e.right);
    }
  } else if (e.tag === "number") {
    return e.n;
  }
  return 0;
};

export { evalExpression };
