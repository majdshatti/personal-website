import { NavLink } from "react-router-dom";
import {
  handleMouseEnterForProject,
  handleMouseLeaveForProject,
} from "../../utils/cursor";
import { logosHeights } from "/src/data/logosHeights.js";

export const ProjectCard = ({ project }) => {
  return (
    <NavLink
      to={"/project/" + project.slug}
      className="img-link flex flex-col justify-between dark:text-white bg-secondary-700 shadow-md shadow-[rgba(229,216,203,0.1)] rounded-xl"
      onMouseEnter={handleMouseEnterForProject}
      onMouseLeave={handleMouseLeaveForProject}
    >
      <div className="flex flex-col">
        <div className="text-xl lg:text-2xl px-7 mt-8 flex items-center justify-between">
          <p className="text-prim-400">{project.name}</p>
          <a href="#" className="md:hidden">
            <img src={"/svg/arrow-tr.svg"} className="" />
          </a>
        </div>
        <div className="text-base lg:text-lg text-white px-7 mt-4">
          {project.sections[0].body}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-5 px-7 pb-8 mt-8">
        {project?.skills?.map((skill, index) => (
          <img
            key={index}
            src={skill.image}
            className={logosHeights[skill.name].height + " w-auto"}
          />
        ))}
      </div>
    </NavLink>
  );
};
