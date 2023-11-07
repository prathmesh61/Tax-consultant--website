import { mapLink } from "@/utils/NavLinks";
import {
  Facebook,
  Instagram,
  Locate,
  LocateIcon,
  Mail,
  MapPin,
  MessagesSquare,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
const HeaderAction: React.FC = () => {
  return (
    <>
      {/* Upper Navbar */}
      <div className="flex justify-center items-center  p-2 border-b border-y-[#e9e9e9] border-opacity-20">
        {/* Main Navbar */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-start gap-x-1">
            <MapPin size={15} fill="orange" />
            <Link
              href={mapLink}
              target="_blank"
              className="text-xs whitespace-pre-wrap hover:underline text-white"
            >
              Shop No 107, 1st floor, Anantam Heights, chatrapati Shivaji
              Maharaj Chowk, Bhiwandi - 421302
            </Link>
          </div>
          <div className="flex items-center gap-x-1">
            <Phone size={15} fill="orange" />
            <span className="text-xs whitespace-nowrap  text-white">
              +91-7887700770
            </span>
          </div>
          <div className="flex items-center gap-x-1">
            <MessagesSquare size={15} fill="orange" />
            <Link
              href={"https://wa.me/c/917887700770"}
              target="_blank"
              className="text-xs whitespace-nowrap  text-white hover:underline"
            >
              Message us on whatsapp
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderAction;
