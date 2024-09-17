import circle_shape from "../assets/circle_shape.png";
import rectangle_shape from "../assets/rectangle_shape.png";
import triangle_shape from "../assets/triangle_shape.png";
import square_shape from "../assets/square_shape.png";

function ShapeTools_Component({ tool, setTool }) {
  return (
    <div className="w-full flex flex-col items-center gap-2 px-5">
      <h5 className="font-mono">Shapes</h5>
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => setTool("rectangle")}
          className={`w-4 h-4 bg-gray-50 border border-gray-400 ${
            tool === "rectangle" && "border-2 border-cyan-500 bg-gray-500"
          }`}
        >
          <img src={rectangle_shape} alt="rectangle_shape" />
        </button>

        <button
          onClick={() => setTool("square")}
          className={`w-4 h-4 bg-gray-50 border border-gray-400 ${
            tool === "square" && "border-2 border-cyan-500 bg-gray-500"
          }`}
        >
          <img src={square_shape} alt="square_shape" />
        </button>

        <button
          onClick={() => setTool("circle")}
          className={`w-4 h-4 bg-gray-50 border border-gray-400 ${
            tool === "circle" && "border-2 border-cyan-500 bg-gray-500"
          }`}
        >
          <img src={circle_shape} alt="circle_shape" />
        </button>

        <button
          onClick={() => setTool("triangle")}
          className={`w-4 h-4 bg-gray-50 border border-gray-400 ${
            tool === "triangle" && "border-2 border-cyan-500 bg-gray-500"
          }`}
        >
          <img src={triangle_shape} alt="triangle_shape" />
        </button>
      </div>
    </div>
  );
}

export default ShapeTools_Component;
