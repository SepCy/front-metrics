import React from "react";

export default function SearchResultItem({ name, value }) {
  return (
    <div class="flex justify-between my-4">
      <div>{name}</div>
      <div class="text-blue-900">{value}</div>
    </div>
  );
}
