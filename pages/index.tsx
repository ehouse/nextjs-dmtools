import type { NextPage } from "next";
import React from "react";

import {
  FaDiceD20,
  FaListUl,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import DiceRoller from "../components/diceRoller";

function SidebarButton(props: {
  buttonStyles: string;
  children: React.ReactElement[];
  onClick: () => void;
}) {
  return (
    <button
      onClick={props.onClick}
      className={`group relative mx-auto flex items-center justify-center rounded-full p-3 shadow-md shadow-slate-900 transition-all duration-100 ease-out hover:cursor-pointer active:shadow-none md:mt-6 ${props.buttonStyles}`}
    >
      {props.children}
    </button>
  );
}

const Home: NextPage = () => {
  return (
    <div className="flex flex-col bg-zinc-200 md:flex-row">
      <nav className="flex w-auto items-center bg-slate-800 shadow-lg md:w-20 md:flex-col md:shadow-black ">
        <div className="flex flex-grow md:block ">
          <SidebarButton
            buttonStyles="bg-blue-300 text-sky-900 active:bg-blue-300/80"
            onClick={() => {}}
          >
            <FaDiceD20 size="36px" />
            <span className="tip left-[4.25rem]">Dice Roller</span>
          </SidebarButton>
          <SidebarButton
            buttonStyles="bg-violet-700 text-purple-300 active:bg-violet-800/80 "
            onClick={() => {}}
          >
            <FaListUl size="36px" />
            <span className="tip left-[4.25rem]">Initiative Tracker</span>
          </SidebarButton>
        </div>
        <a
          href="https://github.com/ehouse/prophecy"
          className="sidebar-icon group relative mx-auto hidden items-center justify-center pb-5 text-white md:flex"
        >
          <FaGithub size="42px" />
          <span className="tip left-[3.75rem]">
            <div className="inline-flex items-center gap-1">
              github.com
              <FaExternalLinkAlt />
            </div>
          </span>
        </a>
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
