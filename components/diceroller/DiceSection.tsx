import Die from "./Die";

function DiceSection(props: {
  setExpression: (arg0: Expression) => void;
  expression: Expression;
}) {
  const dispatchRoll = (face: number) => {
    // Calculate the die roll
    const roll = Math.floor(Math.random() * face + 1);

    if (props.expression === null) {
      /* Nothing is provided and a die is rolled */
      props.setExpression({ tag: "roll", sides: face, n: roll });
    } else if (props.expression.tag === "number") {
      /* A number is provided before a die roll ex. 6d20 */
      if (props.expression.n === 0) {
        /* Handle set number if it's smaller then 0 */
        props.setExpression({ tag: "number", n: 0 });
      } else if (props.expression.n > 999) {
        /* Handle set numbers larger then 999 */
        const largeRoll =
          Math.floor(Math.random() * (face * props.expression.n)) +
          props.expression.n;
        props.setExpression({
          tag: "roll",
          sides: face,
          n: [largeRoll, props.expression.n],
        });
      } else {
        const rolls = Array.from({ length: props.expression.n }, () =>
          Math.floor(Math.random() * face + 1)
        );
        props.setExpression({ tag: "roll", sides: face, n: rolls });
      }
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
        if (props.expression.right.n === 0) {
          /* Handle set number if it's smaller then 0 */
          props.setExpression({
            ...props.expression,
            right: { tag: "number", n: 0 },
          });
        } else if (props.expression.right.n > 999) {
          /* Handle set numbers larger then 999 */
          const largeRoll =
            Math.floor(Math.random() * (face * props.expression.right.n)) +
            props.expression.right.n;
          props.setExpression({
            ...props.expression,
            right: {
              tag: "roll",
              sides: face,
              n: [largeRoll, props.expression.right.n],
            },
          });
        } else {
          /* A number is provided before a die roll ex. 6d20 */
          const rolls = Array.from({ length: props.expression.right.n }, () =>
            Math.floor(Math.random() * face + 1)
          );
          let newRoll: RollExpression = { tag: "roll", sides: face, n: rolls };
          let newExpression = { ...props.expression, right: newRoll };
          props.setExpression(newExpression);
        }
      }
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-1 py-2 md:flex-col md:gap-2 md:py-0 lg:justify-start">
      <Die onClick={dispatchRoll} face={4} />
      <Die onClick={dispatchRoll} face={6} />
      <Die onClick={dispatchRoll} face={8} />
      <Die onClick={dispatchRoll} face={10} />
      <Die onClick={dispatchRoll} face={12} />
      <Die onClick={dispatchRoll} face={20} />
    </div>
  );
}
export default DiceSection;
