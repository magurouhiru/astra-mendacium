import { ROUTES_MAP } from "@/router";
import { Link } from "react-router";

function Footer() {
  return (
    <footer className="bg-gray-600 p-4 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
        <nav className="flex gap-6">
          <Link
            to={ROUTES_MAP.Home}
            className="font-medium text-sm hover:text-gray-200 hover:underline"
          >
            Home
          </Link>
        </nav>
        <div className="text-gray-300 text-sm">
          © 2026 Astra Mendacium. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
