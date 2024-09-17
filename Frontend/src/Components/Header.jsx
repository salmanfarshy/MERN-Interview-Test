import { Link, useLocation } from "react-router-dom";
import drawing_icon from "../assets/drawing_icon.png";
import allDrawing_icon from "../assets/allDrawing_icon.png";

function Header({ title }) {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <header className="w-full h-20 sticky top-0 z-50 bg-zinc-500/90">
      <Link
        to="/"
        className="flex justify-between items-center border h-full px-10"
      >
        <p className="text-white sm:text-xl text-base font-mono font-semibold leading-[1.2]">
          White Board <span className="text-lime-100">Drawing</span>
        </p>
        <Link
          to={currentPath === "/" ? "/new" : "/"}
          className="md:me-20 me-0 text-white text-sm font-medium bg-blue-600 sm:px-6 px-2 py-3 rounded-3xl hover:translate-y-[0.4px] hover:-skew-y-[0.3deg] group"
        >
          {title}
          <img
            src={currentPath === "/" ? drawing_icon : allDrawing_icon}
            className="w-5 translate-x-2 str invert group-hover:translate-x-3 transition-all ease-out delay-75 sm:inline-block hidden"
            alt=""
          />
        </Link>
      </Link>
    </header>
  );
}

export default Header;
