import React from "react";

export default function NavIconText({ icon, text }) {
  return (
    <div class="flex  flex-col-reverse bg-gray-200 py-4 items-center justify-center  w-2/12 shadow-md border-white border">
      <div class="px-2 text-center">{text}</div>
    </div>
  );
}
