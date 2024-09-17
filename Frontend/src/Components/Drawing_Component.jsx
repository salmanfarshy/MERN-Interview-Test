import { useEffect, useRef } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

// element's drawing function
import drawElement from "../Functions/drawElement";

const Drawing_Component = ({ drawing }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Clear the canvas before drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Drawing elements
    drawing?.elements?.forEach((categories) => {
      if (categories?.lines?.length)
        categories?.lines.forEach((element) => drawElement(ctx, element));
      else if (categories?.shapes?.length)
        categories?.shapes?.forEach((element) => drawElement(ctx, element));
      else if (categories?.texts?.length)
        categories?.texts?.forEach((element) => drawElement(ctx, element));
    });
  }, [drawing]);

  return (
    <Link
      to={`/${drawing.id}`}
      className="max-w-[310px] w-fit border bg-gray-100/90 py-4 px-6 rounded-lg block hover:shadow-xl shadow-white transition-shadow delay-75 ease-out relative"
    >
      {/* Drawing tag */}
      <div className="absolute top-2 right-3 text-xs font-medium bg-amber-500 px-2 py-[3px] rounded-md text-gray-100 select-none">
        Drawing
      </div>

      {/* Title of the drawing*/}
      <h1 className="text-xl text-cyan-800 font-bold leading-[1.2] mt-1 break-words">
        {drawing.title}
      </h1>

      {/* Canvas for drawing */}
      <canvas
        ref={canvasRef}
        width={250}
        height={200}
        className="border-slate-500 border rounded-lg bg-white my-3"
      ></canvas>

      {/* Created and Updated dates */}
      <div className="text-base">
        <p className="mb-1">
          <strong className="text-cyan-700">Created at:</strong>{" "}
          <span className="text-sm font-medium text-gray-900">
            {moment(drawing.created_at).format("DD-MM-YYYY hh:mm A")}
          </span>
        </p>
        <p>
          <strong className="text-cyan-700">Updated at:</strong>{" "}
          <span className="text-sm font-medium text-gray-900">
            {moment(drawing.updated_at).format("DD-MM-YYYY hh:mm A")}
          </span>
        </p>
      </div>
    </Link>
  );
};

export default Drawing_Component;
