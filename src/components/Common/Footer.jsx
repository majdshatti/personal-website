import { Section } from "/src/components/Section";

export const Footer = () => {
  return (
    <Section
      id="contact-section"
      className="bg-secondary-600 text-center py-5 md:py-6 text-sm 2xl:text-base"
    >
      <h3 className="text-sm 2xl:text-base uppercase font-bold text-prim-500">
        03. Get In Touch
      </h3>
      <div className="flex justify-center gap-x-4 mt-1 dark:text-white">
        <div>majdshatti8@gmail.com</div>
      </div>
      <div className="mono mt-4 dark:text-white text-xs lg:text-base">
        Designed and Built by{" "}
        <span className="dark:text-prim-500 whitespace-nowrap">
          {" { "}Majd Al-Shatti{" }"}
        </span>
      </div>
    </Section>
  );
};
