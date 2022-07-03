import React from "react";
import ValueRow from "./ValueRow";

export default function DetailsDay() {
  return (
    <div class="flex flex-col">
      <div class="mt-8">
        <div class="text-sm font-semibold text-gray-500 mb-4">
          1 janvier 2021
        </div>
        <div class="my-2">
          <ValueRow />
          <ValueRow />
          <ValueRow />
          <ValueRow />
          <ValueRow />
          <ValueRow />
          <ValueRow />
        </div>
      </div>
    </div>
  );
}
