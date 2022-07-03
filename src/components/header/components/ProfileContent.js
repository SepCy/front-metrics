import React from "react";
import { useDispatch } from "react-redux";
import { STATIONS } from "../../../navigation/CONSTANTS";
import { logout } from "../../../redux/actions/authActions";
import LogoutIcon from "./LogoutIcon";
import ProfileIcon from "./ProfileIcon";
import StationIcon from "./StationIcon";
import SubmenuLink from "./SubmenuLink";

export default function ProfileContent() {
  // Logout user
  const dispatch = useDispatch();

  return (
    <ul class="flex w-full flex-col text-gray-600 bg-white shadow-lg rounded-md px-3 py-4">
      <SubmenuLink icon={<ProfileIcon />} text="Profile" link="" />
      <SubmenuLink icon={<StationIcon />} text="Stations" link={STATIONS} />
      <SubmenuLink
        onClick={() => dispatch(logout())}
        icon={<LogoutIcon />}
        text="Deconnexion"
        link=""
      />
    </ul>
  );
}
