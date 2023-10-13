import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { addCursorEvents, removeCursorEvents } from "../../utils/cursor";

export const NotFound = () => {
  useEffect(() => {
    addCursorEvents();

    return () => {
      removeCursorEvents();
    };
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center text-center">
      <div>
        <div className="text-prim-500 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
          404 | Not Found
        </div>
        <div className="text-white mt-4 sm:text-sm md:text-base lg:text-lg xl:text-xl">
          Oops, something is missing, go{" "}
          <NavLink to="/" className={"text-prim-500 underline def-link"}>
            Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};
