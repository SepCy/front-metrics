import React from "react";
import { useSelector } from "react-redux";
import StationListMyStations from "./StationListMyStations";

export default function SidebarDashboardMyStations() {
  // Getting stations
  const stations = useSelector((state) => state.station?.stations);

  return (
    <>
      <div class="font-semibold text-md text-gray-600 mb-6">Mes stations</div>

      <StationListMyStations stations={stations} />
    </>
  );
}
