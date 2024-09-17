import straight_line from "../assets/straight_line.png";
import dashed_line from "../assets/dashed_line.png";
import curved_line from "../assets/curved_line.png";
import freehand_line from "../assets/freehand_line.png";

function LineTools_Component({ tool, setTool }) {
  return (
    <div className="w-full flex flex-col items-center gap-2 px-5">
      <h5 className="font-mono">Lines</h5>
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => setTool("straight")}
          className={`w-4 h-4 bg-gray-50 border border-gray-400 ${
            tool === "straight" && "border-2 border-cyan-500 bg-gray-500"
          }`}
        >
          <img src={straight_line} alt="straight_line" />
        </button>
        <button
          onClick={() => setTool("dashed")}
          className={`w-4 h-4 bg-gray-50 border border-gray-400 ${
            tool === "dashed" && "border-2 border-cyan-500 bg-gray-500"
          }`}
        >
          <img src={dashed_line} alt="dashed_line" />
        </button>
        <button
          onClick={() => setTool("curved")}
          className={`w-4 h-4 bg-gray-50 border border-gray-400 ${
            tool === "curved" && "border-2 border-cyan-500 bg-gray-500"
          }`}
        >
          <img src={curved_line} alt="curved_line" />
        </button>
        <button
          onClick={() => setTool("freehand")}
          className={`w-4 h-4 bg-gray-50 border border-gray-400 ${
            tool === "freehand" && "border-2 border-cyan-500 bg-gray-500"
          }`}
        >
          <img src={freehand_line} alt="freehand_line" />
        </button>
      </div>
    </div>
  );
}

export default LineTools_Component;
