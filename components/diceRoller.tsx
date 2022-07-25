import { useState } from "react";

import Calculator from "./diceroller/calculator";
import Results from "./diceroller/results";
import DiceSection from "./diceroller/DiceSection";
import Memory from "./diceroller/Memory";

function DiceRoller() {
  const [expression, setExpression] = useState<Expression>(null);

  const clearExpression = () => {
    setExpression(null);
  };

  return (
    <div className="container mx-auto flex flex-col px-8">
      <h1 className="py-8 text-3xl font-bold">Prophecy DM Tool</h1>
      <div className="flex flex-col gap-8">
        <div className="flex gap-8">
          <DiceSection setExpression={setExpression} expression={expression} />
          <div>
            <div className="flex flex-row gap-6">
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
      </div>
    </div>
  );
}

export default DiceRoller;
