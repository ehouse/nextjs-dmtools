import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface Initiative {
  name: string;
  roll?: number;
  status: "ACTIVE" | "DISABLED" | "DEAD";
}

function Entry(props: { entry: Initiative }) {
  return (
    <>
      <div className="group col-span-3 inline-flex gap-2">
        <button className="invisible text-orange-800 group-hover:visible">
          <FaMinus />
        </button>
        <div className=" self-center text-lg">{props.entry.name}</div>
      </div>
      <div className="col-start-4 self-center text-2xl font-light">
        {props.entry.roll}
      </div>
    </>
  );
}

function InitiativeInput(props: {
  name: string;
  roll?: number;
  setName: (name: string) => void;
  setRoll: (roll: number) => void;
  commit: () => void;
}) {
  return (
    <div className="mt-6 rounded-b-xl bg-gray-100 px-4 pt-4 pb-4">
      <div className="flex gap-4">
        <div>
          <input
            type="text"
            value={props.name}
            onChange={(e) => props.setName(e.target.value)}
            placeholder="Boaty McBoatface"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
        </div>
        <div className="w-20">
          <input
            type="text"
            value={props.roll}
            onChange={(e) => props.setRoll(Number(e.target.value))}
            placeholder="14"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
        </div>
        <div className="-ml-1 flex items-end pb-[2px]">
          <button
            onClick={() => props.commit()}
            className="inline-flex items-center rounded-full border border-blue-700 p-2.5 text-center text-sm font-medium text-blue-700 hover:bg-blue-700 hover:text-white active:bg-blue-800 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white"
          >
            <FaPlus />
            <span className="sr-only">Icon description</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function Initiative() {
  const [entries, setEntries] = useState<Initiative[]>([]);
  const [name, setName] = useState<string>("");
  const [roll, setRoll] = useState<number>();

  const commit = () => {
    if (name.length === 0) {
      return;
    }
    const newEntry: Initiative = { name: name, roll: roll, status: "ACTIVE" };
    setEntries([...entries, newEntry]);
    setName("");
    setRoll(undefined);
  };

  return (
    <div className="mt-12 flex flex-col rounded-xl bg-white shadow-md shadow-gray-400">
      <div className="grid grid-cols-4 gap-1 px-4 pt-4">
        <div className="col-span-2 pl-6 text-gray-500">Name</div>
        <div className="col-start-4 text-gray-500">Roll</div>
        <hr className="col-span-full pb-1" />
        {entries
          .sort((a, b) => {
            const aRoll = a.roll ?? Number.NEGATIVE_INFINITY;
            const bRoll = b.roll ?? Number.NEGATIVE_INFINITY;
            if (aRoll < bRoll) {
              return 1;
            } else if (aRoll > bRoll) {
              return -1;
            } else {
              return 0;
            }
          })
          .map((x) => (
            <Entry key={x.name} entry={x} />
          ))}
        {entries.length === 0 && (
          <>
            <div className="col-span-3 select-none pl-6 text-gray-300">
              Character Name
            </div>
            <div className="select-none text-gray-300">14</div>
          </>
        )}
      </div>
      <InitiativeInput
        name={name}
        roll={roll}
        setName={setName}
        setRoll={setRoll}
        commit={commit}
      />
    </div>
  );
}

export default Initiative;
