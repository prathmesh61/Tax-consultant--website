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
      <div className="flex justify-center items-center  p-2 border-b border-y-[#e9e9e9] border-opacity-20">
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
