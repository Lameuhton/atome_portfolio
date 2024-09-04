import Link from "next/link";

// icons
import {
  RiLinkedinLine,
  RiGithubLine,
  RiDiscordLine,
  RiAtLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-2xl">
      <Link
        href={"mailto:col.gregoire@gmail.com"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiAtLine />
      </Link>
      <a
        target="_blank"
        href={"https://www.linkedin.com/in/colingregoire"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </a>
      <a
        target="_blank"
        href={"https://github.com/Atome1212"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </a>
      <a
        target="_blank"
        href={"https://discord.gg/ZSNWMFr3xg"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiDiscordLine />
      </a>
    </div>
  );
};

export default Socials;
