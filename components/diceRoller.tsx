import { useState } from "react";

import Die from "../components/dice";
import Calculator from "./calculator";
import Results from "./results";

function DiceRoller() {
  const [expression, setExpression] = useState<Expression>(null);

  const clearExpression = () => {
    setExpression(null);
  };

  return (
    <div className="container mx-auto flex flex-col px-4">
      <h1 className=" p-4 text-3xl font-bold">Prophecy DM Tool</h1>
      <div className=" flex flex-col gap-8">
        <Calculator
          setExpression={setExpression}
          clearExpression={clearExpression}
          expression={expression}
        />
        <Results expression={expression} />
      </div>
    </div>
  );
}

export default DiceRoller;
