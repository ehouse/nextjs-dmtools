type Operation = "+" | "-" | "*" | "/";

type MathExpression = {
  tag: "math";
  op: Operation;
  left: Expression;
  right: Expression;
};

type RollExpression = {
  tag: "roll";
  n: number;
  sides: number;
};

type NumberExpression = {
  tag: "number";
  n: number;
};

type Expression = MathExpression | RollExpression | NumberExpression | null;
