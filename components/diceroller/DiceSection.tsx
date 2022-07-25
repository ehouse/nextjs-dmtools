import Die from "../die";

function DiceSection(props: {
  setExpression: (arg0: Expression) => void;
  expression: Expression;
}) {
  const dieClick = (face: number) => {
    // Calculate the die roll
    const roll = Math.floor(Math.random() * face + 1);

    if (props.expression === null) {
      /* Nothing is provided and a die is rolled */
      props.setExpression({ tag: "roll", sides: face, n: roll });
    } else if (props.expression.tag === "number") {
      /* A number is provided before a die roll ex. 6d20 */
    } else if (props.expression.tag === "roll") {
      /* Only a roll is provided, and another die is rolled */
      props.setExpression({ tag: "roll", sides: face, n: roll });
    } else if (props.expression.tag === "math") {
      /* Left leaf node is an operation */
      if (props.expression.right === null) {
        // Check if the right leaf node is null, set to a roll
        let newRoll: RollExpression = { tag: "roll", sides: face, n: roll };
        let newExpression = { ...props.expression, right: newRoll };
        props.setExpression(newExpression);
      } else if (props.expression.right.tag === "number") {
        /* A number is provided before a die roll ex. 6d20 */
      }
    }
  };

  return (
    <div className="flex flex-col gap-2 ">
      <Die onClick={dieClick} face={4} />
      <Die onClick={dieClick} face={6} />
      <Die onClick={dieClick} face={8} />
      <Die onClick={dieClick} face={10} />
      <Die onClick={dieClick} face={12} />
      <Die onClick={dieClick} face={20} />
    </div>
  );
}
export default DiceSection;
