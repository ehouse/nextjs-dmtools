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
  } else if (e.tag === "roll") {
    if (Array.isArray(e.n)) {
      return e.n.reduce((a, b) => a + b);
    } else {
      return e.n;
    }
  }
  return 0;
};

function reRollExpression(e: Expression): Expression {
  if (e === null || e.tag === "number") {
    /* Terminate recursion */
  } else if (e.tag === "roll") {
    const roll = Math.floor(Math.random() * e.sides + 1);
    return { tag: "roll", sides: e.sides, n: roll };
  } else if (e.tag === "math") {
    /* Handle recursing through Expression data structure */
    return e;
  }

  return e;
}

function expressionToString(e: Expression): string {
  if (e === null) {
    return "Empty";
  } else if (e.tag === "number") {
    return String(e.n);
  } else if (e.tag === "roll") {
    return `${Array.isArray(e.n) ? e.n.length : 1}d${e.sides}`;
  }
  return "Unsure";
}

export { evalExpression, reRollExpression, expressionToString };
