import gsap from "gsap";
import { useEffect } from "react";

export const Cursor = () => {
  useEffect(() => {
    const circle = document.querySelector(".circle"); // outer circle
    const customCursor = document.querySelector(".custom-cursor"); // inner dot

    // on mouse move, move the inner dot with the mouse
    window.addEventListener("mousemove", (e) => {
      customCursor.style.left = e.clientX + "px";
      customCursor.style.top = e.clientY + "px";
    });

    // circle animation
    gsap.set(".circle", { xPercent: -50, yPercent: -50 });

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.2;

    const xSet = gsap.quickSetter(circle, "x", "px");
    const ySet = gsap.quickSetter(circle, "y", "px");

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });
  }, []);

  return (
    <>
      <div className="max-sm:hidden z-50 circle w-7 h-7 fixed top-0 left-0 border-[3px] rounded-[50%] pointer-events-none mix-blend-difference transition-[width,height] flex items-center justify-center">
        <span className="text-in-circle dark:text-white text-sm hidden mix-blend-difference ">
          <img src={"/svg/arrow-tr.svg"} className="" />
        </span>
      </div>
      <div className="max-sm:hidden z-40 custom-cursor w-2 h-2 fixed bg-white rounded-[50%] pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-difference"></div>
    </>
  );
};
