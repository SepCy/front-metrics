import React, { useEffect, useState } from "react";
import Map, { Marker } from "react-map-gl";

import Location from "../../../assets/icons/marker.png";
import { setViewport } from "../../../redux/actions/mapActions";
import ModalView from "./modal/ModalView";
import { useDispatch, useSelector } from "react-redux";

export default function MapView({
  onClickStation,
  count,
  modalStatus,
  selectedStation,
  closeModal,
}) {
  // Loading stations from the database
  const stations = useSelector((state) => state.station?.stations);

  //  Loading screen animation

  const [loading, setLoading] = useState(true);

  // const getting searched id

  const id = useSelector((state) => state.search?.searchValueId);
  const toggle = useSelector((state) => state.search?.toggle);

  console.log(toggle);

  // Const setting map viewport
  const viewport = useSelector((state) => state.map);

  const dispatch = useDispatch();

  const filteredData = id
    ? toggle
      ? stations?.filter((value) => value._id === id)
      : stations
    : stations;

  console.log(stations);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

  console.log(`content ${filteredData.map((v) => v.name)}`);
  return (
    <>
      <div id="map" class="absolute inset-0">
        <Map
          initialViewState={{ ...viewport }}
          mapboxAccessToken="pk.eyJ1Ijoic2VwY3kiLCJhIjoiY2w0Mmt4NzloMHVjYTNmcjI5emwyeHN4MSJ9.E3m00Uw12dCWZf_YnXjQqA"
          mapStyle="mapbox://styles/sepcy/cklfy4o3847qy17k7lwbi8fo3"
          style={{ width: "100%", height: "100vh" }}
          onMove={(viewport) => {
            dispatch(setViewport(viewport));
          }}
        >
          {filteredData?.map((place) => (
            <div>
              <Marker
                onClick={function () {
                  return onClickStation(place);
                }}
                longitude={place.latitude}
                latitude={place.longitude}
                anchor="bottom"
              >
                <img
                  class=" w-8 hover:scale-105 cursor-pointer "
                  src={Location}
                  alt="Icône de marqueur"
                />
                <div class="absolute inset-0  flex justify-center items-center left-0  cursor-pointer opacity-0 hover:opacity-100">
                  <div class="relative left-6 bottom-8 text-center right-0  text-sm rounded-md  bg-red-600 text-white px-4 py-1">
                    {place.name}
                    <div class="absolute left-0 bottom-0 bg-red-600 w-4 h-2 transform rotate-45"></div>
                  </div>
                </div>
              </Marker>
            </div>
          ))}
          {modalStatus ? (
            <div class="absolute inset-0">
              <ModalView
                selectedStation={selectedStation}
                closeModal={closeModal}
                count={count}
              />
            </div>
          ) : (
            ""
          )}
        </Map>
      </div>
    </>
  );
}
