function ColorTools_Component({ color, setColor }) {
  return (
    <div className="w-full flex flex-col items-center gap-2 px-5">
      <h5 className="font-mono">Colors</h5>
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => setColor("red")}
          className={`w-4 h-4 bg-red-500 ${
            color === "red" && "border-2 border-cyan-500 bg-red-700"
          }`}
        ></button>
        <button
          onClick={() => setColor("blue")}
          className={`w-4 h-4 bg-blue-500 ${
            color === "blue" && "border-2 border-cyan-500 bg-blue-700"
          }`}
        ></button>
        <button
          onClick={() => setColor("yellow")}
          className={`w-4 h-4 bg-yellow-300 ${
            color === "yellow" && "border-2 border-cyan-500 bg-yellow-400"
          }`}
        ></button>
        <button
          onClick={() => setColor("black")}
          className={`w-4 h-4 bg-black ${
            color === "black" && "border-2 border-cyan-500 bg-gray-800"
          }`}
        ></button>
      </div>
    </div>
  );
}

export default ColorTools_Component;
