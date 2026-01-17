import { Link } from "react-router";
import { PATHS } from "@/router";

function Footer() {
  const linkItems = Object.values(PATHS)
    .filter((path) => path.label !== "Test2_3")
    .map((path) => (
      <Link
        key={path.label}
        to={path.path}
        className="font-medium text-sm hover:text-gray-200 hover:underline"
      >
        {path?.label}
      </Link>
    ));
  return (
    <footer className="bg-gray-600 p-4 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
        <nav className="flex gap-6">{linkItems}</nav>
        <div className="text-gray-300 text-sm">
          © 2026 Astra Mendacium. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
