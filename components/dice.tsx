interface Props {
  face: number;
  appendRoll: (arg0: RollGroup) => void;
}

function Die(props: Props) {
  return (
    <button
      onClick={() => {
        const roll = Math.floor(Math.random() * props.face + 1);
        props.appendRoll([[props.face, roll]]);
      }}
      className="mx-auto w-full rounded-lg border border-slate-600 bg-slate-500 p-2 font-semibold text-white shadow shadow-slate-600 hover:bg-slate-600 active:bg-slate-700 active:shadow-none"
    >
      D{props.face}
    </button>
  );
}

export default Die;
