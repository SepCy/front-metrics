import React from "react";
import FacebookIcon from "../../../../assets/icons/facebook.svg";
import TwitterIcon from "../../../../assets/icons/twitter.svg";

export default function SocialLinks() {
  return (
    <div class="flex justify-between items-center w-16">
      <img class="w-5 cursor-pointer" src={FacebookIcon} alt="Facebook Icon" />
      <img class="w-5 cursor-pointer" src={TwitterIcon} alt="Twitter Icon" />
    </div>
  );
}
