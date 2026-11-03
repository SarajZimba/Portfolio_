
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-4 sm:px-8 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center py-5 sm:py-6 xl:py-0">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <p className="text-white text-2xl sm:text-3xl xl:text-4xl whitespace-nowrap">
              <b className="font-semibold">saraj</b>
              &nbsp;
              <span className="font-light">
                Gimba<span>.</span>
              </span>
            </p>
          </Link>

          {/* Socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
