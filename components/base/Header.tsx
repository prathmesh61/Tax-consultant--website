import { navLinks } from "@/utils/NavLinks";
import HeaderAction from "./HeaderAction";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col max-w-[1440px]  mx-auto  px-6 py-2">
      <HeaderAction />
      <div className="flex items-center justify-center lg:justify-between gap-x-3 py-2">
        <span className="text-xl font-extrabold  text-white">LOGO</span>
        <div className="lg:flex items-center gap-x-10 hidden ">
          {navLinks.map((link) => (
            <Link
              href={link.link}
              key={link.name}
              className="text-[10px] lg:text-sm font-medium cursor-pointer text-white whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-brand py-1 px-3 font-medium text-xs rounded-sm lg:block hidden ">
            Make Appointment
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
