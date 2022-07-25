import Die from "../die";

function DiceSection(props: {
  setExpression: (arg0: Expression) => void;
  expression: Expression;
}) {
  const dieClick = (face: number) => {
    // Calculate the die roll
    const roll = Math.floor(Math.random() * face + 1);

    if (props.expression === null) {
      /* Handles when nothing is provided and a die is rolled */
      props.setExpression({ tag: "roll", sides: face, n: roll });
    } else if (props.expression.tag === "number") {
      /* Handles when a number is provided before a die roll ex. 6d20 */
    } else if (props.expression.tag === "roll") {
      /* Handles when only a roll is provided, and another die is rolled */
      props.setExpression({ tag: "roll", sides: face, n: roll });
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
