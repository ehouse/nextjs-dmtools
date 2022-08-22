import { FaDiceD6, FaDiceD20 } from "react-icons/fa";

interface Props {
  onClick: (face: number) => void;
  face: number;
}

function Die(props: Props) {
  return (
    <div className="relative">
      <button
        type="button"
        className="button group flex items-center justify-around rounded-full bg-sky-600 p-2 text-sky-900"
        onClick={() => props.onClick(props.face)}
      >
        <FaDiceD20 size="68" />
        <span className="absolute text-center text-5xl font-semibold text-slate-50 shadow-white drop-shadow-md group-active:text-slate-200">
          {props.face}
        </span>
      </button>
    </div>
  );
}

export default Die;
