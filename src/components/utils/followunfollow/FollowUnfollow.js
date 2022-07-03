import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  followStation,
  loadFollowed,
  unFollowStation,
} from "../../../redux/actions/stationActions";
import FollowButton from "../map/modal/FollowButton";
import UnFollowButton from "../map/modal/UnFollowButton";
import NotOnlyLoggedIn from "../ProtectedComponents/NotOnlyLoggedIn";

export default function FollowUnfollow({ id }) {
  // Getting connected user id
  const user = useSelector((state) => state.auth.user);

  // Calling hook for dispatching the action
  const dispatch = useDispatch();

  // Retrieving followed station by a user

  const followedStationArray = useSelector(
    (state) => state.station?.followedByUser
  );

  // Getting loading state
  const loading = useSelector((state) => state.station.loading);

  // Following a station
  const follow = async (idStation) => {
    const data = {
      id: user._id,
      idStation: idStation,
    };
    dispatch(followStation(data));
  };

  useEffect(() => {
    dispatch(loadFollowed());
  }, [dispatch]);

  // Unfollowing  a station

  const unFollow = async (idStation) => {
    const data = {
      id: user._id,
      idStation: idStation,
    };
    dispatch(unFollowStation(data));
  };

  return (
    <NotOnlyLoggedIn>
      {followedStationArray?.includes(id) ? (
        <UnFollowButton
          loading={loading}
          onClick={() => {
            unFollow(id ? id : "");
          }}
        />
      ) : (
        <FollowButton
          loading={loading}
          onClick={() => {
            follow(id ? id : "");
          }}
        />
      )}
    </NotOnlyLoggedIn>
  );
}
