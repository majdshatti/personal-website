import { useEffect, useRef, useState } from "react";
import { Section, SectionHeader } from "/src/components/Section";

export const About = () => {
  const [allSkills, setAllSkills] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);
  const filterListRef = useRef(null);
  const filterButtonRef = useRef(null);
  const [isFilterListOpen, setIsFilterListOpen] = useState(false);

  useEffect(() => {
    const skills = [
      {
        name: "HTML/CSS/JS",
        categories: ["frontend"],
      },
      {
        name: "PHP",
        categories: ["backend"],
      },
      {
        name: "Laravel",
        categories: ["frontend", "backend"],
      },
      {
        name: "Typescript",
        categories: ["frontend", "backend"],
      },
      {
        name: "Express",
        categories: ["backend"],
      },
      {
        name: "Nest.js",
        categories: ["backend"],
      },
      {
        name: "Redis",
        categories: ["database", "caching"],
      },
      {
        name: "Tailwind",
        categories: ["frontend"],
      },
      {
        name: "Vite",
        categories: ["frontend"],
      },
      {
        name: "React.js",
        categories: ["frontend"],
      },
      {
        name: "AWS (IAM/S3/EC2)",
        categories: ["cloud"],
      },
      {
        name: "Mysql",
        categories: ["database"],
      },
      {
        name: "MongoDB",
        categories: ["database"],
      },
      {
        name: "Typeorm",
        categories: ["database"],
      },
      {
        name: "Mongoose",
        categories: ["database"],
      },
      {
        name: "Socket.io",
        categories: ["real-time"],
      },
      {
        name: "Pusher",
        categories: ["real-time"],
      },
      {
        name: "Server Deployment",
        categories: ["server", "deployment"],
      },
      {
        name: "Linux",
        categories: ["server", "deployment"],
      },
      {
        name: "Nginx",
        categories: ["server", "deployment"],
      },
    ];

    setAllSkills(skills);
    setFilteredSkills(skills);
  }, []);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        isFilterListOpen &&
        filterButtonRef.current !== event.target &&
        filterListRef.current &&
        !filterListRef.current.contains(event.target)
      ) {
        setIsFilterListOpen(false);
      }
    }

    if (isFilterListOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isFilterListOpen]);

  const handleSkillFilterClick = (slug) => {
    if (slug === "all") {
      setFilteredSkills(allSkills);
      setIsFilterListOpen(false);
      return;
    }

    setFilteredSkills(
      allSkills.filter((skill) => skill.categories.includes(slug))
    );

    setIsFilterListOpen(false);
  };

  return (
    <Section id="about-section">
      <SectionHeader>01. About</SectionHeader>
      <p className="text-prim-50 sm:text-lg md:text-xl mt-2 sm:mt-6 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-16 2xl:w-[80%]">
        Hi, my name is Majd Al-Shatti and I am a software engineer with a strong
        foundation in web application development. While I possess the skills
        and expertise to excel in full-stack development, my true passion lies
        in{" "}
        <span className=" text-prim-500">
          crafting robust and efficient backend applications.{" "}
        </span>
      </p>
      <div className="mt-12 grid grid-cols-1 2xl:grid-cols-12 dark:text-white gap-10">
        <div className="2xl:col-span-9 relative">
          {/* <div className="bg-prim-200 absolute top-0 bottom-0 -left-10 w-px"></div> */}
          <h3 className="text-3xl 2xl:text-4xl font-bold">Work Experience</h3>
          <div>
            <div className="mt-10 relative">
              {/* <div className="absolute w-3 h-3 rounded-full bg-prim-300 -left-[45px] top-3"></div>
              <div className="absolute w-3 h-3 rounded-full text-prim-300 -left-36 top-[7px] whitespace-nowrap text-sm italic">
                12/22-10/23
              </div> */}
              <h4 className="text-xl lg:text-2xl 2xl:text-3xl">
                FullStack Developer{" "}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://pan-code.com"
                  className="def-link mono text-prim-500"
                >
                  @Pancode
                </a>
              </h4>
              <p className="text-sm md:text-base mt-2 text-gray-400">
                07/21-12/21
              </p>
              <p className="sm:text-lg md:text-xl mt-4 text-gray-300">
                <ul className="list-disc pl-4">
                  <li className="mt-3">
                    Played a key role in developing Laravel projects.
                  </li>
                  <li className="mt-3">
                    Actively participated in project planning and requirements
                    gathering sessions. Throughout the development process, I
                    collaborated with designers, front-end developers to ensure
                    seamless integration and deliver exceptional user
                    experiences.
                  </li>
                  <li className="mt-3">
                    Gained exposure to deploying and hosting applications,
                    albeit in a limited capacity. I assisted with the deployment
                    of landing websites, working alongside server administrators
                    to ensure smooth transitions from development to production
                    environments.
                  </li>
                </ul>
              </p>
            </div>
            <div className="mt-10 relative">
              {/* <div className="absolute w-3 h-3 rounded-full bg-prim-300 -left-[45px] top-3"></div>
              <div className="absolute w-3 h-3 rounded-full text-prim-300 -left-36 top-[7px] whitespace-nowrap text-sm italic">
                07/21-12/21
              </div> */}
              <h4 className="text-xl lg:text-2xl 2xl:text-3xl">
                Backend Developer{" "}
                <a className="mono text-prim-500">@GrayScale</a>
              </h4>
              <p className="text-sm md:text-base mt-2 text-gray-400">
                07/21-12/21
              </p>
              <p className="sm:text-lg md:text-xl mt-4 text-gray-300">
                During my three-month internship at GrayScale, I dedicated my
                time to intensive learning and skill development in the field of
                web development. While I did not participate in specific
                projects, this experience allowed me to focus on honing my
                technical skills and gaining a deeper understanding of key
                concepts in software engineering.
              </p>
            </div>
          </div>
        </div>
        <div className="2xl:col-span-3">
          <div className="flex justify-between items-center">
            <h3 className="text-3xl 2xl:text-4xl font-bold">Skills</h3>
            <button className="relative">
              <img
                className="w-7 h-7 def-link"
                src={"/svg/filter.svg"}
                ref={filterButtonRef}
                onClick={() => setIsFilterListOpen(true)}
              />
              {isFilterListOpen && (
                <div
                  id="filter-list"
                  ref={filterListRef}
                  className={
                    "animate-[filter-slide-up_0.2s] md:animate-[filter-slide-down_0.2s] fixed bottom-0 left-0 max-md:right-0 h-fit md:absolute md:w-64 md:top-10 md:left-1/2 md:-translate-x-1/2 "
                  }
                >
                  <div className="border border-prim-900 border-opacity-10 flex text-prim-200 bg-secondary-600 rounded-tl-3xl rounded-tr-3xl md:rounded-md md:mb-3 flex-col">
                    <button
                      onClick={() => handleSkillFilterClick("all")}
                      className="def-link cursor-none hover:bg-prim-500 py-3 md:py-2 rounded-tl-3xl rounded-tr-3xl md:rounded-tl-md md:rounded-tr-md"
                    >
                      All
                    </button>
                    <button
                      onClick={() => handleSkillFilterClick("frontend")}
                      className="def-link cursor-none hover:bg-prim-500 py-3 md:py-2"
                    >
                      Front-end Development
                    </button>
                    <button
                      onClick={() => handleSkillFilterClick("backend")}
                      className="def-link cursor-none hover:bg-prim-500 py-3 md:py-2"
                    >
                      Back-end Development
                    </button>
                    <button
                      onClick={() => handleSkillFilterClick("cloud")}
                      className="def-link cursor-none hover:bg-prim-500 py-3 md:py-2"
                    >
                      Cloud Services
                    </button>
                    <button
                      onClick={() => handleSkillFilterClick("real-time")}
                      className="def-link cursor-none hover:bg-prim-500 py-3 md:py-2"
                    >
                      Real-time Communication
                    </button>
                    <button
                      onClick={() => handleSkillFilterClick("database")}
                      className="def-link cursor-none hover:bg-prim-500 py-3 md:py-2 md:rounded-bl-md md:rounded-br-md"
                    >
                      Databases / Caching
                    </button>
                  </div>
                </div>
              )}
            </button>
          </div>
          <div className="flex gap-4 flex-wrap mt-10">
            {filteredSkills.map((skill, index) => (
              <span
                key={index}
                className="bg-prim-900 bg-opacity-10 text-prim-300 px-4 py-2 rounded-full text-sm lg:text-base h-fit"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
