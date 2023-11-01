import {
  Facebook,
  Instagram,
  Locate,
  LocateIcon,
  Mail,
  MapPin,
  Twitter,
  Youtube,
} from "lucide-react";
const HeaderAction: React.FC = () => {
  return (
    <>
      {/* Upper Navbar */}
      <div className="flex justify-center lg:justify-between items-center gap-x-3 p-1 border-b border-y-[#e9e9e9] border-opacity-20">
        <div className=" items-center gap-x-4 lg:flex hidden">
          <Twitter size={20} fill="orange" />
          <Facebook size={20} fill="orange" />
          <Instagram size={20} fill="orange" />
          <Youtube size={20} fill="orange" />
        </div>
        {/* Main Navbar */}
        <div className="flex items-center gap-x-3">
          <div className="flex items-center gap-x-1">
            <MapPin size={15} fill="orange" />
            <span className="text-xs whitespace-nowrap  text-white">
              Raya Puputan No 142
            </span>
          </div>
          <div className="flex items-center gap-x-1">
            <Mail size={15} fill="orange" />
            <span className="text-xs whitespace-nowrap  text-white">
              pajax@mail.com
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderAction;
