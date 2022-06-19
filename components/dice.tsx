import { FaDiceD6 } from "react-icons/fa";

interface Props {
  face: number;
  mod: number;
  appendRoll: (arg0: Roll[]) => void;
}

function Die(props: Props) {
  const roll = () => {
    let log: Roll[] = [];

    for (let index = 0; index < props.mod; index++) {
      const roll = Math.floor(Math.random() * props.face + 1);
      log.push([props.face, roll]);
    }
    props.appendRoll(log);
  };

  return (
    <button onClick={roll} className=" relative rounded-xl bg-blue-400 p-3">
      <FaDiceD6 size="42" color="rgb(30 58 138)" />
      <span className=" absolute top-4 right-5 w-[27px] text-center text-2xl font-semibold text-white drop-shadow-md ">
        {props.face}
      </span>
    </button>
  );
}

export default Die;
