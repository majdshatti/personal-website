export const SectionHeader = ({ children }) => {
  return (
    <h2
      data-aos="fade-down"
      data-aos-duration="1000"
      className="text-4xl md:text-5xl  2xl:text-7xl uppercase font-bold dark:text-prim-500 py-4"
    >
      {children}
    </h2>
  );
};
