
import Link from "next/link";
import {
  RiInstagramLine,
  RiFacebookLine,
  RiGithubLine,
  RiLinkedinLine,
} from "react-icons/ri";

const Socials = () => {
  const socials = [
    { icon: <RiInstagramLine />, href: "https://instagram.com/arck__1" },
    { icon: <RiFacebookLine />, href: "https://facebook.com/sarajgimba" },
    { icon: <RiGithubLine />, href: "https://github.com/SarajZimba" },
    { icon: <RiLinkedinLine />, href: "https://linkedin.com/in/sarajgimba" },
  ];

  return (
    <div className="flex items-center gap-x-3 sm:gap-x-5 text-base sm:text-lg shrink-0">
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-all duration-300"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
