import { useState } from "react";

import Calculator from "./diceroller/Calculator";
import Results from "./diceroller/Results";
import DiceSection from "./diceroller/DiceSection";
import Memory from "./diceroller/Memory";

function DiceRoller() {
  const [expression, setExpression] = useState<Expression>(null);

  const clearExpression = () => {
    setExpression(null);
  };

  return (
    <div className="gap-8 md:flex">
      <DiceSection setExpression={setExpression} expression={expression} />
      <div>
        <div className="flex flex-row justify-center gap-6">
          <Calculator
            setExpression={setExpression}
            clearExpression={clearExpression}
            expression={expression}
          />
          <Memory expression={expression} setExpression={setExpression} />
        </div>
        <Results expression={expression} />
      </div>
    </div>
  );
}

export default DiceRoller;
