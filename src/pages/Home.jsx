import { useEffect } from "react";
import { TopNav, Footer } from "/src/components/Common";
import { Welcome, About, Projects } from "/src/components/Pages";
import { Socials } from "/src/components/Socials";
import {
  addCursorEvents,
  handleMouseLeaveForProject,
  removeCursorEvents,
} from "../utils/cursor";
import { withLoader } from "/src/components/HOC";

const Home = () => {
  useEffect(() => {
    handleMouseLeaveForProject();

    addCursorEvents();

    return () => {
      removeCursorEvents();
    };
  }, []);

  return (
    <>
      <TopNav />
      <Socials />
      <Welcome />
      <About />
      <Projects />
      <Footer />
    </>
  );
};

const WrappedHome = withLoader(Home);
export { WrappedHome as Home };
