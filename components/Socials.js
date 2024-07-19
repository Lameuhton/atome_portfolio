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
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"mailto:col.gregoire@gmail.com"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiAtLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/colingregoire"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={"https://github.com/Atome1212"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://discord.gg/ZSNWMFr3xg"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiDiscordLine />
      </Link>
    </div>
  );
};

export default Socials;
