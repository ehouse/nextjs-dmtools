import type { NextPage } from "next";

import { FaDiceD20 } from "react-icons/fa";

import DiceRoller from "../components/diceRoller";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col bg-zinc-100 md:flex-row">
      <nav className="flex w-auto flex-col items-center bg-sky-600 shadow-md md:w-20 ">
        <div className="sidebar-icon group md:mt-6">
          <FaDiceD20 size="36px" color="rgb(30 58 138)" />
          <span className="sidebar-tip group-hover:scale-100">Dice Roller</span>
        </div>
      </nav>
      <DiceRoller />
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default Home;
