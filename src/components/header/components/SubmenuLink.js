import React from "react";
import { Link } from "react-router-dom";

export default function SubmenuLink({ icon, text, link, onClick, color }) {
  return (
    <li class={color} onClick={onClick}>
      <Link
        class="px-4 py-2 text-sm hover:bg-gray-100  flex items-center rounded-md cursor-pointer"
        to={link}
      >
        {icon ? <div class="mr-5">{icon}</div> : ""} {text}
      </Link>
    </li>
  );
}
