import React from "react";
import { SiInstagram } from "react-icons/si";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
const Followon = () => {
  return (
    <div className="faded-text pt-2">
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="www.instagram.com">
          <SiInstagram  size={20}/>
        </a>

        <a href="www.youtube.com"></a>
        <FaYoutube  size={20}/>
        <a href="www.twiter.com"></a>
        <FaTwitter size={20} />
      </div>
    </div>
  );
};

export default Followon;
