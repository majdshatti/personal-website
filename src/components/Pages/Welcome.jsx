import { useEffect } from "react";
import { gsap, SteppedEase } from "gsap";
import { Sky } from "/src/components/Common";
export const Welcome = () => {
  useEffect(() => {
    const typingAnimation = gsap.timeline({
      paused: true,
    });

    typingAnimation.fromTo(
      ".anim-typewriter",
      {
        width: "0",
      },
      {
        duration: 2,
        width: window.screen.width > 640 ? "13.8em" : "14.5em",
        ease: SteppedEase.config(37),
      },
      0
    );

    typingAnimation.fromTo(
      ".anim-typewriter",
      {
        "border-right-color": "rgba(255,255,255,0.75)",
      },
      {
        duration: 0.5,
        "border-right-color": "rgba(255,255,255,0)",
        repeat: -1,
        ease: SteppedEase.config(37),
      },
      0
    );

    typingAnimation.play();
  });

  return (
    <div className="relative h-screen w-full bg-cover bg-center overflow-hidden flex items-end sm:items-center max-sm:pb-20">
      {/* Background */}
      <div className="-z-10 absolute top-1/2 -left-[90%] sm:left-1/2 -translate-x-1/2 -translate-y-1/2 full">
        <Sky />
      </div>

      <div className="w-[90%] sm:w-[50%] h-fit mx-auto">
        {/* Hi */}
        <p
          data-aos="fade-right"
          data-aos-duration="2000"
          className="text-sm md:text-lg mono text-white"
        >
          Hi, my name is
        </p>
        {/* Name */}
        <h1 className="text-[2.75rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] font-bold dark:text-white sm:mt-4 md:mt-5 lg:mt-6">
          <span
            data-aos="fade-down"
            className=" whitespace-nowrap text-prim-500"
          >
            Majd Al-Shatti
          </span>
        </h1>
        {/* Title */}
        <h2 className="text-white anim-typewriter border-r-4 overflow-hidden whitespace-nowrap text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light mt-4 sm:mt-6 md:mt-8 lg:mt-9 xl:mt-10 2xl:mt-12">
          I craft end-to-end web solutions
        </h2>
        {/* Dive in */}
        <a
          href="#about-section"
          className="sm:text-lg lg:text-xl 2xl:text-2xl w-fit text-white font-light mt-10 flex items-center gap-x-2 def-link"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          {"Let's"} dive in
          <img src={"/svg/arrow-down.svg"} className="w-6 mt-1" />
        </a>
      </div>
    </div>
  );
};
