import { CopyrightIcon, MapPin, MessagesSquare, Phone } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="max-w-[1540px] mx-auto px-6 py-4">
      <div className="flex flex-wrap justify-between items-center gap-4 ">
        <div className="flex flex-wrap items-center gap-2 text-center">
          <div className="flex items-start gap-x-1">
            <MapPin size={15} fill="orange" />
            <span className="text-xs whitespace-pre-wrap  text-black">
              Shop No 107, 1st floor, Anantam Heights, chatrapati Shivaji
              Maharaj Chowk, Bhiwandi - 421302
            </span>
          </div>
          <div className="flex items-center gap-x-1">
            <Phone size={15} fill="orange" />
            <span className="text-xs whitespace-nowrap  text-black">
              +91-7887700770
            </span>
          </div>
          <div className="flex items-center gap-x-1">
            <MessagesSquare size={15} fill="orange" />
            <span className="text-xs whitespace-nowrap  text-black">
              Message me on whatsapp
            </span>
          </div>
        </div>
        <div className="flex items-center gap-x-1">
          <CopyrightIcon size={15} fill="orange" />

          <span className="text-xs whitespace-nowrap  text-black">
            Copyright © 2023. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
