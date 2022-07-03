import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSelectedId } from "../../redux/actions/stationActions";
import SidebarDashboardStationsSuivies from "./components/SidebarDashboardStationsSuivies";
import StationDetails from "./components/StationDetails";
import Layout from "./Layout";

export default function OwnerStationsSuivies() {
  // Getting selected id
  const selectedValue = useSelector((state) => state.station?.selectedId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearSelectedId());
  }, [dispatch]);

  return (
    <Layout
      sidebar={<SidebarDashboardStationsSuivies />}
      content={selectedValue ? <StationDetails value={selectedValue} /> : ""}
    />
  );
}
