import React from "react";

export default function Value({ name, icon, stationData, parameter }) {
  return (
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between items-center">
      <div class="mb-5 sm:mb-0 text-gray-800 font-semibold opacity-70 text-sm">
        {name}
      </div>{" "}
      <div class="flex justify-center items-center">
        <div>
          <img id="icon" class="w-4 mr-4" src={icon} alt="Icône du vent icon" />
        </div>
        <div class="text-blue-600 text-sm">{stationData}</div>
      </div>
    </div>
  );
}
