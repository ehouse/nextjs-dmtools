import Die from "../die";

function DiceSection() {
  return (
    <div className="flex flex-col gap-2 ">
      <Die face={4} />
      <Die face={6} />
      <Die face={8} />
      <Die face={10} />
      <Die face={12} />
      <Die face={20} />
    </div>
  );
}
export default DiceSection;
