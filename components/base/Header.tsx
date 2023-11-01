import { navLinks } from "@/utils/NavLinks";
import HeaderAction from "./HeaderAction";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col max-w-[1440px]  mx-auto  px-6 py-2">
      <HeaderAction />
      <div className="flex items-center justify-between gap-x-3 py-2">
        <span className="text-xl font-extrabold  text-white">LOGO</span>
        <div className="flex items-center gap-x-6">
          {navLinks.map((link) => (
            <Link
              href={link.link}
              className="text-sm font-medium cursor-pointer text-white"
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-brand py-1 px-3 font-medium text-sm rounded-sm  text-white">
            Make Appointment
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
