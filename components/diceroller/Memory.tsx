import { FaRegCircle } from "react-icons/fa";

function Memory() {
  return (
    <div className="flex flex-col justify-between">
      <button className="calculator-button-cell">
        <FaRegCircle />
      </button>
      <button className="calculator-button-cell">
        <FaRegCircle />
      </button>
      <button className="calculator-button-cell">
        <FaRegCircle />
      </button>
      <button className="calculator-button-cell">
        <FaRegCircle />
      </button>
    </div>
  );
}

export default Memory;
