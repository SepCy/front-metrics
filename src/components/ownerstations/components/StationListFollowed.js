import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EmojiSad from "../../header/components/EmojiSad";
import Station from "./Station";

export default function StationListFollowed({ stations }) {
  // Getting stations list

  const stationsList = useSelector((state) => state.station.stations);

  // Initializing stations' id of followed stations by the user
  const [stationsIds, setStationIds] = useState([]);

  useEffect(() => {
    setStationIds(stations);
  }, [stations]);

  // Filtering the data
  const filtered = stationsList.filter((value) =>
    stationsIds?.includes(value._id)
  );

  return (
    <div
      id="stationsList"
      class=" overflow-y-scroll flex flex-col pr-2 justify-start"
    >
      {filtered.length !== 0 ? (
        filtered.map((value) => (
          <div key={value._id} class="mb-2">
            <Station value={value} />
          </div>
        ))
      ) : (
        <div class="flex mt-10 justify-center text-gray-500 items-center">
          <EmojiSad />
          <div class="ml-4 text-sm">Aucune station suivie</div>
        </div>
      )}
    </div>
  );
}
