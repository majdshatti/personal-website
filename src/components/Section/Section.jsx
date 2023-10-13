import { twMerge } from "tailwind-merge";

export const Section = ({ className, children, id }) => {
  return (
    <div
      id={id}
      className={twMerge("py-16 md:py-20 overflow-hidden", className)}
    >
      <div className="w-[90%] md:w-[80%] mx-auto">{children}</div>
    </div>
  );
};
