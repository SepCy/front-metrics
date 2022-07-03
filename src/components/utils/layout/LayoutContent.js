import React from "react";

export default function LayoutContent({ children }) {
  return (
    <div class=" bg-white-100 w-80 rounded-md mx-auto my-24 inline-block">
      {children}
    </div>
  );
}
