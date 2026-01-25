import { Link } from "react-router";
// import { Logo } from "./logo";
import Logo from "@/assets/logo.svg";
import LogoText from "@/assets/logo-text.svg";
import { PATHS } from "@/router";

function Header() {
  return (
    <header className="bg-fuchsia-700 p-4">
      <nav className="container mx-auto flex items-center justify-between">
        <Link
          to={PATHS.home.path}
          className="flex w-fit items-center transition-opacity hover:opacity-90"
        >
          {/* <Logo className="h-10 w-10 text-fuchsia-50" /> */}
          <img
            src={Logo}
            alt="Astra Mendacium Logo"
            className="filter-[brightness(0)_saturate(100%)_invert(99%)_sepia(26%)_saturate(287%)_hue-rotate(176deg)_brightness(114%)_contrast(100%)] h-10 w-10"
          />
          <img src={LogoText} alt="Astra Mendacium" className="ml-1 h-8" />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
