import { SocialLink } from "./SocialLink";

export const Socials = () => {
  return (
    <div className="max-sm:hidden absolute z-[10] left-5 top-9 bottom-0">
      <div className="flex md:flex-col gap-x-4 md:gap-y-6 dark:text-white">
        <SocialLink
          href="https://www.github.com/majdshatti"
          imageSrc={"/svg/github.svg"}
          duration={1000}
        >
          @majdshatti
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/majd-shatti"
          imageSrc={"/svg/linkedin.svg"}
          duration={1500}
        >
          in/majdshatti
        </SocialLink>
        <SocialLink
          href="https://www.gitlab.com/majdshatti"
          imageSrc={"/svg/gitlab.svg"}
          duration={2000}
        >
          @majdshatti
        </SocialLink>
        {/* <SocialLink>@majdshatti</SocialLink> */}
      </div>
    </div>
  );
};
