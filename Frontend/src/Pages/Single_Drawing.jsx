import { useNavigate, useParams } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import clear_icon from "../assets/clear_icon.png";
import text_icon from "../assets/text_icon.png";

// Mouse down to start drawing
import handleMouseDown from "../Functions/handleMouseDown.js";
// Mouse move to update drawing
import handleMouseMove from "../Functions/handleMouseMove.js";
// Mouse up to finish drawing
import handleMouseUp from "../Functions/handleMouseUp.js";
// element's drawing function
import drawElement from "../Functions/drawElement.js";
// deleting drawing function
import deleteDrawing from "@/Functions/deleteDrawing.js";
// updating title of a drawing function
import updateTitle from "@/Functions/updateTitle.js";
// getting a single drawing function
import getDrawing from "@/Functions/getDrawing.js";
// creating a new drawing function
import createDrawing from "@/Functions/createDrawing.js";

import { useToast } from "../hooks/use-toast.js";
import ColorTools_Component from "../Components/ColorTools_Component.jsx";
import LineTools_Component from "../Components/LineTools_Component.jsx";
import ShapeTools_Component from "../Components/ShapeTools_Component.jsx";
import Loading_Component from "../Components/Loading_Component.jsx";
import Spinner_Component from "../Components/Spinner_Component.jsx";
import Hamburger_Side_Bar from "../Components/Hamburger_Side_Bar.jsx";

function Single_Drawing() {
  const navigate = useNavigate();
  const { id } = useParams();
  const canvasRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const { toast } = useToast();
  const [title, setTitle] = useState("Untitled drawing");
  const [tool, setTool] = useState("straight");
  const [color, setColor] = useState("black");
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentElement, setCurrentElement] = useState(null);
  const [elements, setElements] = useState([
    {
      lines: [],
    },
    {
      shapes: [],
    },
    {
      texts: [],
    },
  ]);

  // fetch the drawing data initially
  useEffect(() => {
    getDrawing({ id, setTitle, setElements });
  }, []);

  // creating a new drawing
  useEffect(() => {
    createDrawing({
      id,
      elements,
      title,
      setIsLoading,
      navigate,
    });
  }, []);

  // showing draw in the board real time
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const render = () => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      // Drawing the whole elements
      elements.forEach((categories) => {
        if (categories?.lines?.length)
          categories.lines.forEach((element) => drawElement(ctx, element));
        else if (categories?.shapes?.length)
          categories.shapes.forEach((element) => drawElement(ctx, element));
        else if (categories?.texts?.length)
          categories.texts.forEach((element) => drawElement(ctx, element));
      });

      // Drawing the current element
      if (currentElement) {
        drawElement(ctx, currentElement);
      }
    };

    render();
  }, [elements, currentElement]);

  return (
    <div className="bg-gray-300 w-full min-h-screen relative m-0 p-0">
      {/* header component  */}
      <Header title="All Drawings" />

      <main className="w-full h-[calc(100vh-120px)] mx-auto p-4 relative lg:flex lg:gap-10 gap-6">
        {/* drawing tools bar  */}
        <div className="w-28 h-full bg-gray-100 hidden lg:flex flex-col justify-center items-center gap-2 ">
          {/* color tools  */}
          <ColorTools_Component color={color} setColor={setColor} />
          {/* text tool  */}
          <div className="w-full flex flex-col items-center gap-1 px-5">
            <h5 className="font-mono">Text</h5>
            <div className="grid grid-cols-1">
              <button
                onClick={() => setTool("text")}
                className={`w-5 h-5 flex justify-center items-center bg-gray-50 border border-gray-400 ${
                  tool === "text" && "border-2 border-cyan-500 bg-gray-500"
                }`}
              >
                <img className="w-4" src={text_icon} alt="straight_line" />
              </button>
            </div>
          </div>
          {/* line tools  */}
          <LineTools_Component tool={tool} setTool={setTool} />
          {/* shape tools  */}
          <ShapeTools_Component tool={tool} setTool={setTool} />
          {/* clear tool  */}
          <div className="w-full flex flex-col items-center gap-1 px-5">
            <h5 className="font-mono">Clear</h5>
            <div className="grid grid-cols-1">
              <button
                onClick={() =>
                  setElements([
                    {
                      lines: [],
                    },
                    {
                      shapes: [],
                    },
                    {
                      texts: [],
                    },
                  ])
                }
                className="w-10 h-5 bg-gray-50 border border-gray-400 flex justify-center items-center hover:border-2 hover:border-cyan-500 hover:bg-gray-300 transition-all delay-75 ease-out"
              >
                <img className="w-6" src={clear_icon} alt="straight_line" />
              </button>
            </div>
          </div>
        </div>

        {/* hamburger side bar  */}
        <Hamburger_Side_Bar
          color={color}
          tool={tool}
          setTool={setTool}
          setColor={setColor}
          setElements={setElements}
        />

        {/* updating status and delete button  */}
        <div className="flex flex-col lg:hidden items-center ms-10 mt-14 gap-8">
          <div>
            <Loading_Component title="Updating" />
          </div>
          <button
            type="button"
            className="px-6 py-3 w-24 text-base font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 flex justify-center items-center"
          >
            Delete
            {/* <Spinner_Component /> */}
          </button>
        </div>

        {/* drawing board  */}
        <div className="lg:w-[60%] w-full h-full relative p-3">
          <input
            type="text"
            value={title}
            className="text-2xl font-medium mb-2 ps-3 pb-1 leading-[1.2] bg-gray-300 outline-gray-500"
            onChange={(e) => {
              setTitle(e.target.value);
              updateTitle({ elements, title, id, setIsLoading });
            }}
          />

          <canvas
            ref={canvasRef}
            width={800}
            height={450}
            className="border-2 border-gray-400  bg-gray-100 rounded-sm"
            onMouseDown={(event) =>
              handleMouseDown({
                event,
                tool,
                currentElement,
                color,
                setCurrentElement,
                setElements,
                setIsDrawing,
              })
            }
            onMouseMove={(event) =>
              handleMouseMove({
                event,
                setCurrentElement,
                setElements,
                setIsLoading,
                currentElement,
                isDrawing,
                elements,
                title,
                id,
              })
            }
            onMouseUp={() =>
              handleMouseUp({
                setIsDrawing,
                setElements,
                setCurrentElement,
                setIsLoading,
                isDrawing,
                currentElement,
                elements,
                title,
                id,
              })
            }
          ></canvas>
        </div>

        {/* updating status and delete button  */}
        <div className="hidden lg:flex flex-col items-center ms-10 mt-14 gap-8">
          <div className="text-2xl font-semibold text-gray-500">
            {isLoading ? <Loading_Component title="Updating" /> : "Updated"}
          </div>
          <button
            onClick={() => {
              deleteDrawing({ id, setDeleteLoading, navigate });
              toast({
                className: "bg-gray-50 text-green-700 fixed top-5 right-5 w-80",
                variant: "success",
                title: "Success",
                description: "Drawing has been deleted.",
                duration: 2000,
              });
            }}
            type="button"
            className="px-6 py-3 w-24 text-base font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 flex justify-center items-center"
          >
            {deleteLoading ? <Spinner_Component /> : "Delete"}
          </button>
        </div>
      </main>

      {/* footer component  */}
      <Footer />
    </div>
  );
}

export default Single_Drawing;
