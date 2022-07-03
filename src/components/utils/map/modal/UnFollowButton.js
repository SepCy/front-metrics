import React from "react";
import Spinner from "../../spinner/Spinner";

export default function UnFollowButton({ onClick, loading }) {
  return (
    <div class="relative flex justify-center items-center">
      <div
        onClick={onClick}
        class="flex bg-red-600 w-46 rounded-md text-white py-2 justify-center px-5 mx-auto cursor-pointer hover:bg-red-700 text-sm items-center"
      >
        {loading ? (
          ""
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
        {loading ? <Spinner /> : <div class="ml-4">Ne plus suivre</div>}
      </div>
    </div>
  );
}
