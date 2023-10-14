import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import {
  addCursorEvents,
  handleMouseLeaveForProject,
  removeCursorEvents,
} from "../utils/cursor";
import { projects } from "../data/projectsData";
import { logosHeights } from "../data/logosHeights";
import { withLoader } from "/src/components/HOC";

const ProjectDetails = () => {
  let navigate = useNavigate();
  const { slug } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    // Reset cursor
    handleMouseLeaveForProject();

    // Add cursor events
    addCursorEvents();

    // Get project
    let fetchedProject = projects.filter((project) => project.slug === slug);

    if (fetchedProject.length > 0) {
      fetchedProject = fetchedProject[0];
      setProject(fetchedProject);
    } else {
      navigate("/404");
    }

    return () => {
      removeCursorEvents();
    };
  }, [slug]);

  const getSectionContent = (section) => {
    if (section.type === "paragraph") return section.body;
    else if (section.type === "list")
      return (
        <ul className="list-disc px-4">
          {section.items.map((item, index) => (
            <li className="mt-2" key={index}>
              {item.body}
            </li>
          ))}
        </ul>
      );
  };

  const getProjectShowcaseContent = (showcase) => {
    if (!showcase)
      return (
        <div className="w-full h-screen flex items-center justify-center text-prim-500 bg-secondary-700">
          No documents available yet, Coming soon..
        </div>
      );

    if (showcase.type === "images") {
      return (
        <div className="flex flex-col gap-y-1">
          {showcase?.data?.map((image, index) => (
            <img key={index} src={"/images/showcase/" + image} />
          ))}
        </div>
      );
    } else if (showcase.type === "iframe")
      return <iframe src={showcase.url} className="w-full h-full"></iframe>;
    else if (showcase.type === "grid") {
      // this variable is just for tailwind to generate the following classes
      const availableCols = "grid-cols-2 grid-cols-3";

      return (
        <div className={`grid grid-cols-${showcase.cols} gap-2 p-2`}>
          {showcase?.data?.map((image, index) => (
            <img key={index} src={"/images/showcase/" + image} />
          ))}
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col xl:flex-row h-auto xl:h-screen xl:overflow-hidden">
      <div className="w-full xl:w-1/3 h-full p-5 dark:text-white">
        <div></div>
        <div className="flex justify-between items-center">
          <div className="flex gap-x-4 sm:gap-x-3  items-center">
            <div onClick={() => navigate("/")}>
              <img
                className="w-4 md:w-6 def-link"
                src={"/svg/arrow-left.svg"}
              />
            </div>
            <a
              href={project.url}
              className="max-sm:underline def-link text-2xl md:text-4xl font-semibold text-prim-500"
            >
              {project.name}
            </a>
          </div>
          <div className="flex gap-x-5 sm:gap-x-7">
            <div className="flex items-center">
              <NavLink
                to={"/project/" + project.prevProject}
                className="def-link"
              >
                <img className=" w-5 md:w-7" src={"/svg/caret-left.svg"} />
              </NavLink>
              <NavLink
                to={"/project/" + project.nextProject}
                className="def-link"
              >
                <img
                  className="def-link w-5 md:w-7"
                  src={"/svg/caret-right.svg"}
                />{" "}
              </NavLink>
            </div>
            <a
              target="_blank"
              rel="noreferrer"
              href={project.url ?? "#"}
              className={
                "hidden sm:block px-3 sm:px-6 py-1 border text-sm xl:text-lg " +
                (project.url
                  ? "def-link border-white"
                  : "border-gray-600 text-gray-600")
              }
            >
              Visit
            </a>
          </div>
        </div>
        <div className="mt-8 dark:text-gray-400">
          <div className="flex items-center gap-x-4">
            <img className="w-6" src={"/svg/code-slash.svg"} />
            {project.role}
          </div>
          <div className="flex items-center gap-x-4 mt-4 xl:mt-6">
            <img className="w-6" src={"/svg/tag.svg"} />
            <div>
              {project.association ? (
                <>
                  {"Company Associated "}
                  <a
                    href={project.association.url}
                    className="mono def-link text-prim-500"
                  >
                    #{project.association.name}
                  </a>{" "}
                </>
              ) : (
                <a className="mono text-prim-500">#Freelance</a>
              )}
            </div>
          </div>
        </div>
        <div className="mt-8 sm:text-lg md:text-xl">
          {project.sections?.map((section, index) => (
            <div className="mt-6" key={index}>
              {getSectionContent(section)}
            </div>
          ))}
        </div>
        <div className="mt-10 flex gap-x-4 items-center">
          {project.skills?.map((skill, index) => (
            <img
              key={index}
              src={skill.image}
              className={logosHeights[skill.name].height + " w-auto"}
            />
          ))}
        </div>
      </div>
      <div className="w-full xl:w-2/3 h-full overflow-y-auto">
        {getProjectShowcaseContent(project?.showcase)}
      </div>
    </div>
  );
};
const WrappedProjectDetails = withLoader(ProjectDetails);
export { WrappedProjectDetails as ProjectDetails };
