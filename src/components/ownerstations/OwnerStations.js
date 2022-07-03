import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSelectedId } from "../../redux/actions/stationActions";
import SidebarDashboardMyStations from "./components/SidebarDashboardMyStations";
import StationDetails from "./components/StationDetails";
import Layout from "./Layout";

export default function OwnerStations() {
  // Getting selected id
  const selectedValue = useSelector((state) => state.station?.selectedId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearSelectedId());
  }, [dispatch]);

  return (
    <Layout
      sidebar={<SidebarDashboardMyStations />}
      content={selectedValue ? <StationDetails value={selectedValue} /> : ""}
    />
  );
}
