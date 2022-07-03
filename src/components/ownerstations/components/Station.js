import React, { useState } from "react";
import { useLocation } from "react-router";
import SettingsIcon from "./SettingsIcon";
import SettingsModal from "./SettingsModal";
import NotificationIcon from "./NotificationIcon";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedId } from "../../../redux/actions/stationActions";
import PlaceAlert from "./PlaceAlert";
import FollowUnfollow from "../../utils/followunfollow/FollowUnfollow";

export default function Station({ value }) {
  // Checking if station is selected
  const selected = useSelector((state) => state.station?.selectedId);

  // Getting location

  const pathname = useLocation();

  // Handleclick for "plus de details"

  // Dispatching action utility

  const dispatch = useDispatch();

  const handleClick = (value) => {
    dispatch(getSelectedId(value));
  };

  const [toggle, setToggle] = useState(false);

  // Toggle action

  const toggleAction = () => {
    setToggle(!toggle);
  };

  return (
    <div
      class={`${
        selected?.id === value?.id ? "border-blue-300 " : ""
      } flex flex-col shadow-sm text-sm w-full border border-gray-200 bg-white p-6 rounded-md`}
    >
      <div class="flex justify-between items-center">
        <div class="font-semibold text-gray-600">{value ? value.name : ""}</div>
        {pathname.pathname !== "/stations-suivies" ? (
          <div
            class="cursor-pointer text-gray-600 hover:text-blue-600 relative"
            onClick={() => toggleAction()}
          >
            <SettingsIcon />
            <div class="absolute z-20 mt-1 right-0 ">
              {toggle ? <SettingsModal /> : ""}
            </div>
          </div>
        ) : (
          <div class="relative">
            <div
              class="cursor-pointer text-gray-600  relative"
              onClick={() => toggleAction()}
            >
              <NotificationIcon />
            </div>
            <div class="absolute border rounded-md z-20 mt-1 right-0 ">
              {toggle ? <PlaceAlert /> : ""}
            </div>
          </div>
        )}
      </div>

      <div class="mt-6  flex flex-col ">
        <div
          onClick={() => handleClick(value)}
          class="flex justify-center hover:bg-blue-50 text-blue-600 mb-5 py-2 px-4 rounded-md cursor-pointer"
        >
          Plus de details
        </div>
        <div class="flex justify-center items-center">
          <div></div>
          <div class="align-self-right">
            <FollowUnfollow id={value._id} />
          </div>
        </div>
      </div>
    </div>
  );
}
