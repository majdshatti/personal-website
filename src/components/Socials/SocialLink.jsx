export const SocialLink = ({ children, imageSrc, href, duration }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      data-aos="fade-right"
      data-aos-duration={duration}
      className="flex items-center gap-x-2 def-link"
    >
      <img src={imageSrc} className="w-5 h-5"></img>
      <span className="hidden">{children}</span>
    </a>
  );
};
