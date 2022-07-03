import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StationListFollowed from "./StationListFollowed";

export default function SidebarDashboardStationsSuivies() {
  const [stationIds, setStationIds] = useState([]);

  // Getting the followed id from the current user

  const followedIds = useSelector((state) => state.station.followedByUser);

  //   Refreshing on followed

  useEffect(() => {
    setStationIds(followedIds);
  }, [followedIds]);

  return (
    <>
      <div class="font-semibold text-md text-gray-600 mb-6">
        Stations suivies
      </div>

      <StationListFollowed stations={stationIds} />
    </>
  );
}
