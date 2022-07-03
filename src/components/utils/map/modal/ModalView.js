import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  followStation,
  loadFollowed,
  unFollowStation,
} from "../../../../redux/actions/stationActions";
import NotOnlyLoggedIn from "../../ProtectedComponents/NotOnlyLoggedIn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CloseIcon from "./CloseIcon";
import FollowButton from "./FollowButton";
import ModalContent from "./ModalContent";
import SocialLinks from "./SocialLinks";
import UnFollowButton from "./UnFollowButton";
import FollowUnfollow from "../../followunfollow/FollowUnfollow";

export default function ModalView({ selectedStation, closeModal, count }) {
  // Calling hook for dispatching the action
  const dispatch = useDispatch();

  // Getting connected user id
  const user = useSelector((state) => state.auth.user);

  // Retrieving followed station by a user

  const followedStationArray = useSelector(
    (state) => state.station?.followedByUser
  );

  // Getting loading state
  const loading = useSelector((state) => state.station.loading);

  // Getting success Message or error message for followed stations

  const successMessage = useSelector((state) => state.station.successMessage);

  // Following a station
  const follow = async (idStation) => {
    const data = {
      id: user._id,
      idStation: idStation,
    };
    dispatch(followStation(data));
  };

  // Unfollowing  a station

  const unFollow = async (idStation) => {
    const data = {
      id: user._id,
      idStation: idStation,
    };
    dispatch(unFollowStation(data));
  };

  useEffect(() => {
    dispatch(loadFollowed());
  }, [dispatch]);

  return (
    <div class="relative bg-white mx-auto my-32 md:w-3/6 sm:w-4/6 lg:w-2/5 xl:w-1/3 2xl:w-1/4 p-8 rounded-md z-20 shadow-lg">
      <div
        class="absolute cursor-pointer  text-red-400 -right-5 -top-5"
        onClick={() => closeModal()}
      >
        <CloseIcon />
      </div>
      <div>
        {successMessage
          ? toast.success(successMessage, {
              toastId: 1,
              position: "top-right",
              autoClose: 1300,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
          : ""}
        <ToastContainer
          position="top-right"
          autoClose={1300}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
      <div class="flex justify-between mt-0 mb-8 border-gray-700 ">
        <div class="font-bold flex">
          <div>Station de </div>
          <div class="ml-2 text-blue-600">
            {selectedStation ? selectedStation.name : ""}
          </div>
        </div>
        <div class="text-blue-600 text-sm">
          {selectedStation ? selectedStation?.values.at(-1)?.time : ""} GMT
        </div>
      </div>
      <ModalContent station={selectedStation} />

      <div class="flex justify-between items-center mt-8">
        <SocialLinks />

        <div>
          <FollowUnfollow id={selectedStation._id} />
        </div>
      </div>
    </div>
  );
}
