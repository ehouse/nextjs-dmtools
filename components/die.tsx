import { FaDiceD6, FaDiceD20 } from "react-icons/fa";

interface Props {
  face: number;
}

function Die(props: Props) {
  return (
    <div className="relative">
      <button type="button" className="die active:shadow-none">
        <FaDiceD20 size="68" className="fill-blue-900/50" />
        <span className="absolute text-center text-5xl font-semibold text-slate-100 shadow-white drop-shadow-md">
          {props.face}
        </span>
      </button>
    </div>
  );
}

export default Die;
