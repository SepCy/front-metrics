import React, { useEffect, useState } from "react";
import MapView from "./MapView";

export default function MapContainer() {
  // Open close modal
  const [open, setOpen] = useState(false);

  // select station action

  const onClickStation = (station) => {
    setOpen(true);
    setSelectedStation(station);
  };

  // Close Modal action

  const closeModal = () => {
    setOpen(false);
    setSelectedStation("");
  };

  // Dispatch selected station state
  const [selectedStation, setSelectedStation] = useState("");

  // For simulation purposes

  const [count, setCount] = useState("");

  // For simulating values

  useEffect(() => {}, []);

  return (
    <div>
      <MapView
        onClickStation={onClickStation}
        count={count}
        modalStatus={open}
        selectedStation={selectedStation}
        closeModal={closeModal}
      />
    </div>
  );
}
