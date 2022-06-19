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
    <button onClick={roll} className="die">
      <FaDiceD6 size="24" color="rgb(30 58 138)" />
      <span className=" text-center text-2xl font-semibold text-blue-900 ">
        {props.face}
      </span>
    </button>
  );
}

export default Die;
