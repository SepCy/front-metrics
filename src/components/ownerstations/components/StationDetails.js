import React from "react";
import DetailsDay from "./DetailsDay";
import LocationIcon from "./LocationIcon";
import StationDescriptionNav from "./StationDescriptionNav";

export default function StationDetails({ value }) {
  return (
    <div>
      <div class="flex items-center justify-between mb-12">
        <div class="font-semibold text-md">
          Station de <span class="text-blue-600">{value?.name}</span>
        </div>
        <div class="flex items-center">
          <div class="flex mr-12 items-center text-gray-600">
            <div class="-mr-10 text-blue-600">
              <LocationIcon />
            </div>
          </div>
          <div class="flex mr-8 text-sm">
            <div class="mr-4">Longitude</div>
            <div class="text-blue-600">{value?.longitude}</div>
          </div>
          <div class="flex text-sm">
            <div class="mr-4">Latitude</div>
            <div class="text-blue-600 mr-4">{value?.latitude}</div>
          </div>
        </div>
      </div>
      <div>
        {" "}
        <StationDescriptionNav />
      </div>
      <div class="flex flex-col h-screen overflow-y-scroll pl-2">
        <DetailsDay />
        <DetailsDay />
        <DetailsDay />
        <DetailsDay />
        <DetailsDay />
        <DetailsDay />
        <DetailsDay />
        <DetailsDay />
        <DetailsDay />
        <DetailsDay />
      </div>
    </div>
  );
}
