import { Link } from "react-router";
import Logo from "../../assets/logo.svg";
import LogoText from "../../assets/logo-text.svg";
import { PATHS } from "../../router";

function Header() {
  return (
    <header className="bg-fuchsia-700 p-4">
      <nav className="container mx-auto flex items-center justify-between">
        <Link
          to={PATHS.home.path}
          className="flex w-fit items-center gap-3 transition-opacity hover:opacity-90"
        >
          <img src={Logo} alt="Astra Mendacium Logo" className="h-10 w-10" />
          <img src={LogoText} alt="Astra Mendacium" className="h-8" />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
