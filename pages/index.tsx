import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Die from "../components/dice";
import Calculator from "../components/calculator";

const Home: NextPage = () => {
  const [rollLog, setRollLog] = useState<RollLog>([]);

  // Deletes all rolles from the log
  const clearRoll = () => {
    setRollLog([]);
  };

  // Apend a group of rolls plus modifiers to the log
  const appendRoll = (rollGroup: RollGroup) => {
    setRollLog((oldLog) => [...oldLog, rollGroup]);
  };

  return (
    <div className="container mx-auto flex flex-col px-4">
      <h1 className=" p-4 text-3xl font-bold">Prophecy DM Tool</h1>
      <div className=" flex flex-auto gap-8">
        <div className="flex flex-col items-start gap-2">
          <Die face={4} appendRoll={appendRoll} />
          <Die face={6} appendRoll={appendRoll} />
          <Die face={8} appendRoll={appendRoll} />
          <Die face={10} appendRoll={appendRoll} />
          <Die face={12} appendRoll={appendRoll} />
          <Die face={20} appendRoll={appendRoll} />
        </div>
        <Calculator rollLog={rollLog} clearLog={clearRoll} />
      </div>
    </div>
  );
};

export default Home;
