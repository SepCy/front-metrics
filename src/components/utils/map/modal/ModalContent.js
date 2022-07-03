import React from "react";
import TemperatureIcon from "../../../../assets/icons/temp.svg";
import WaterIcon from "../../../../assets/icons/water.svg";
import WindIcon from "../../../../assets/icons/wind.svg";
import WindDirectionIcon from "../../../../assets/icons/windDirection.svg";
import RainIcon from "../../../../assets/icons/rain.svg";
import GroundIcon from "../../../../assets/icons/ground.svg";
import Value from "./Value";

export default function ModalContent({ station }) {
  return (
    <div class="flex flex-col bg-gray-50 border-t-2 border-b-2 rounded-md p-8">
      <div class="flex justify-between mb-6 ">
        <div class="flex justify-between ">
          <div class="text-gray-800 font-semibold opacity-70 text-sm">
            Longitude
          </div>
          <div class="ml-4 text-blue-600 text-sm">
            {station ? Math.ceil(station.longitude) : ""}
          </div>
        </div>

        <div class="flex justify-between">
          <div class="text-gray-800 font-semibold opacity-70 text-sm">
            Latitude
          </div>
          <div class="ml-4 text-blue-600 text-sm">
            {station ? Math.ceil(station.latitude) : ""}
          </div>
        </div>
      </div>
      <div class="grid gap-y-10 grid-cols-3 sm:grid-cols-1 justify-between sm:px-4 md:px-8 bg-white shadow-sm rounded-md py-4 md:py-8">
        <Value
          name="Température"
          icon={TemperatureIcon}
          stationData={
            station.values ? `${station?.values.at(-1)?.temperature} °` : ""
          }
        />
        <Value
          name="Wind Speed"
          icon={WindIcon}
          stationData={
            station.values ? `${station?.values.at(-1)?.windSpeed} km/h` : ""
          }
        />

        <Value
          name="Humidité"
          icon={WaterIcon}
          stationData={
            station?.values ? `${station?.values.at(-1)?.humidity} %` : ""
          }
        />

        <Value
          name="Rain"
          icon={RainIcon}
          stationData={
            station?.values ? `${station?.values.at(-1)?.rain} ` : ""
          }
        />
        <Value
          name="PH soil"
          icon={GroundIcon}
          stationData={
            station?.values ? `${station?.values.at(-1)?.phSoil} ` : ""
          }
        />
        <Value
          name="Soil moisture"
          icon={GroundIcon}
          stationData={
            station?.values ? `${station?.values.at(-1)?.soilMoisture} ` : ""
          }
        />
      </div>
    </div>
  );
}
