import React, { useEffect, useState } from "react";
import EmojiSad from "../../header/components/EmojiSad";
import Station from "./Station";

export default function StationListMyStations(stations) {
  // Declaring the user's stations

  const [userStations, setUserStations] = useState([]);

  //   Hot reloading

  useEffect(() => {
    setUserStations(stations.stations);
  }, [stations]);

  return (
    <div
      id="stationsList"
      class=" overflow-y-scroll flex flex-col pr-2 justify-start"
    >
      {userStations ? (
        userStations.map((value) => (
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
