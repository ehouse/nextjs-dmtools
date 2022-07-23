type Sides = number;
type Total = number;
/**
 * Single roll containing a die face and a result
 * Roll[0] is the total number of sides
 * Roll[1] is the amount rolled
 */
type Roll = [Sides, Total];

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
