import { Sheet, SheetContent, SheetTrigger } from "../Components/ui/sheet";
import hamburger_icon from "../assets/hamburger_icon.png";
import clear_icon from "../assets/clear_icon.png";
import text_icon from "../assets/text_icon.png";
import ColorTools_Component from "./ColorTools_Component";
import LineTools_Component from "./LineTools_Component";
import ShapeTools_Component from "./ShapeTools_Component";

function Hamburger_Side_Bar({ color, tool, setTool, setColor, setElements }) {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden block" asChild>
        <div>
          <img
            width={30}
            height={30}
            src={hamburger_icon}
            alt="hamburger_icon"
          />
        </div>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-44 bg-gray-100 flex justify-center items-center"
      >
        <div className="w-28 h-full bg-gray-100 flex flex-col justify-center items-center gap-2 ">
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
      </SheetContent>
    </Sheet>
  );
}

export default Hamburger_Side_Bar;
