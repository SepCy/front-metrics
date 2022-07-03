import React from "react";
import { NavLink } from "react-router-dom";

export default function NavigationLink({ link, name, activeClassName }) {
  return (
    <NavLink
      activeClassName={activeClassName ? "selected" : ""}
      class="mx-2 hover:bg-gray-100 py-2 px-4 rounded-md text-sm"
      to={link}
    >
      {name}
    </NavLink>
  );
}

const styles = {
  fontWeight: "bold",
  color: "blue",
};
