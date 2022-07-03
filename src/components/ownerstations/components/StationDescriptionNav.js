import React from "react";
import NavIconText from "./NavIconText";
import TemperatureIcon from "../../../assets/icons/temp.svg";
import WindIcon from "../../../assets/icons/wind.svg";
import WindDirection from "../../../assets/icons/windDirection.svg";
import HumidityIcon from "../../../assets/icons/water.svg";
import RainIcon from "../../../assets/icons/rain.svg";
import GroundIcon from "../../../assets/icons/ground.svg";
import TimeIcon from "../../../assets/icons/time.svg";

export default function StationDescriptionNav() {
  return (
    <div class="flex justify-between shadow-sm text-sm">
      <NavIconText icon={TimeIcon} text="Heure" />
      <NavIconText icon={TemperatureIcon} text="Température" />
      <NavIconText icon={WindIcon} text="Vitesse du vent" />
      <NavIconText icon={WindDirection} text="Direction du vent" />
      <NavIconText icon={HumidityIcon} text="Humidité" />
      <NavIconText icon={RainIcon} text="Pluviométrie" />
      <NavIconText icon={GroundIcon} text="PH du sol" />
    </div>
  );
}
