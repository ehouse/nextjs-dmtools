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
  let prime = e;

  if (prime === null || prime.tag === "number") {
    /* Terminate recursion */
  } else if (prime.tag === "roll") {
    if (Array.isArray(prime.n)) {
      const length = prime.n.length;
      const face = prime.sides;
      const rolls = Array.from({ length: length }, () =>
        Math.floor(Math.random() * face + 1)
      );
      let newRoll: RollExpression = { tag: "roll", sides: face, n: rolls };
      prime = newRoll;
    } else {
      const face = prime.sides;
      const roll = Math.floor(Math.random() * face + 1);
      let newRoll: RollExpression = { tag: "roll", sides: face, n: roll };
      prime = newRoll;
    }
  } else if (prime.tag === "math") {
    const left = reRollExpression(prime.left);
    const right = reRollExpression(prime.right);
    prime = { ...prime, left: left, right: right };
  }

  return prime;
}

function expressionToString(e: Expression): string {
  if (e === null) {
    return "";
  } else if (e.tag === "number") {
    return String(e.n);
  } else if (e.tag === "roll") {
    return `${Array.isArray(e.n) ? e.n.length : 1}d${e.sides}`;
  } else if (e.tag === "math") {
    const left = expressionToString(e.left);
    const right = expressionToString(e.right);
    return `${left} ${e.op} ${right}`;
  }
  return "";
}

export { evalExpression, reRollExpression, expressionToString };
