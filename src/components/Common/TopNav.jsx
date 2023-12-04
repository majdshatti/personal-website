import { useState } from "react";
import { SocialLink } from "../Socials/SocialLink";

export const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuStateChange = (booleanValue) => {
    setIsMenuOpen(booleanValue);

    booleanValue
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  };

  return (
    <>
      <nav className="z-10 absolute top-0 right-0 h-16 flex items-center justify-between mx-[4%] md:mx-[2%]">
        <div></div>
        <div>
          <div
            className="flex flex-col gap-y-2 md:hidden -scale-x-100"
            onClick={() => handleMenuStateChange(true)}
          >
            <div className="h-[2px] rounded-full bg-white w-7"></div>
            <div className="h-[2px] rounded-full bg-white w-5"></div>
            <div className="h-[2px] rounded-full bg-white w-3"></div>
          </div>
          <div className="hidden md:flex items-center gap-x-7 dark:text-white text-xl font-bold">
            <a
              data-aos="fade-down"
              data-aos-duration="2000"
              href="#about-section"
              className="def-link  text-[1rem] mono"
            >
              <span className="text-prim-500">01.</span> About
            </a>
            <a
              data-aos="fade-down"
              data-aos-duration="1500"
              href="#projects-section"
              className="def-link  text-[1rem] mono"
            >
              <span className="text-prim-500">02.</span> Projects
            </a>
            <a
              data-aos="fade-down"
              data-aos-duration="1000"
              href="#contact-section"
              className="def-link  text-[1rem] mono"
            >
              <span className="text-prim-500">03.</span> Contact
            </a>
          </div>
        </div>
      </nav>
      <div
        className={
          "z-50 fixed top-0 bottom-0 md:hidden left-0 right-0 bg-secondary-600 overflow-hidden " +
          (isMenuOpen ? "" : "hidden")
        }
      >
        <div
          className="flex justify-end text-white pt-9 pr-6"
          onClick={() => handleMenuStateChange(false)}
        >
          <img className="w-5" src={"/svg/close.svg"} />
        </div>
        <div className="flex flex-col dark:text-white font-bold text-2xl gap-y-10 p-10 mt-14">
          <a
            href="#about-section"
            onClick={() => handleMenuStateChange(false)}
            className="text-[1rem] mono"
          >
            <span className="text-prim-500">01.</span> About
          </a>
          <a
            href="#projects-section"
            onClick={() => handleMenuStateChange(false)}
            className="text-[1rem] mono"
          >
            <span className="text-prim-500">02.</span> Projects
          </a>
          <a
            href="#contact-section"
            onClick={() => handleMenuStateChange(false)}
            className="text-[1rem] mono"
          >
            <span className="text-prim-500">03.</span> Contact
          </a>
        </div>
        <div className="flex md:flex-col gap-x-7 dark:text-white px-10 mt-10">
          <SocialLink imageSrc={"/svg/github.svg"} />
          <SocialLink imageSrc={"/svg/linkedin.svg"} />
          <SocialLink imageSrc={"/svg/gitlab.svg"} />
        </div>
      </div>
      <div className="hidden z-40 md:hidden fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-40"></div>
    </>
  );
};
