import React, { useState } from "react";
import ProfileContent from "./ProfileContent";

export default function Profile({ name }) {
  // Handling open close state

  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      class="rounded-full shadow-lg relative cursor-pointer hover:bg-blue-500 flex justify-center items-center text-white bg-blue-400 w-11 h-11"
    >
      {name}
      {open ? (
        <div class="absolute right-0 top-11 z-10">
          <ProfileContent />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
