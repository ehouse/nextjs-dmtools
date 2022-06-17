interface Props {
  face: number;
  mod: number;
  appendRoll: (arg0: RollGroup) => void;
}

function Die(props: Props) {
  return (
    <button
      onClick={() => {
        let log: RollGroup = [];

        for (let index = 0; index < props.mod; index++) {
          const roll = Math.floor(Math.random() * props.face + 1);
          log.push([props.face, roll]);
        }
        props.appendRoll(log);
      }}
      className="btn border-slate-600 bg-slate-500 text-white shadow shadow-slate-600 hover:bg-slate-600 active:bg-slate-700 "
    >
      D{props.face}
    </button>
  );
}

export default Die;
