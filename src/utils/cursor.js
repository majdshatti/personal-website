export const addCursorEvents = () => {
  const allAnchorTags = document.querySelectorAll(".def-link");

  allAnchorTags.forEach((anchor) => {
    anchor.addEventListener("mouseenter", handleMouseEnter);
    anchor.addEventListener("mouseleave", handleMouseLeave);
  });
};

export const removeCursorEvents = () => {
  const allAnchorTags = document.querySelectorAll(".def-link");

  allAnchorTags.forEach((anchor) => {
    anchor.removeEventListener("mouseenter", handleMouseEnter);
    anchor.removeEventListener("mouseleave", handleMouseLeave);
  });
};

export const handleMouseEnterForProject = () => {
  const circle = document.querySelector(".circle");
  const circleText = document.querySelector(".text-in-circle");

  circle.style.width = "50px";
  circle.style.height = "50px";
  circle.style.backgroundColor = "white";
  circle.style.mixBlendMode = "unset";
  circle.style.borderColor = "#070312";
  circleText.style.display = "block";
};

export const handleMouseLeaveForProject = () => {
  const circle = document.querySelector(".circle");
  const circleText = document.querySelector(".text-in-circle");

  circle.style.width = "28px";
  circle.style.height = "28px";
  circle.style.backgroundColor = "unset";
  circle.style.mixBlendMode = "difference";
  circle.style.borderColor = "white";
  circleText.style.display = "none";
};

const handleMouseEnter = () => {
  const circle = document.querySelector(".circle");

  circle.style.width = "50px";
  circle.style.height = "50px";
};

const handleMouseLeave = () => {
  const circle = document.querySelector(".circle");

  circle.style.width = "28px";
  circle.style.height = "28px";
};
