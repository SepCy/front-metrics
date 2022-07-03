import React from "react";
import Spinner from "../../spinner/Spinner";

export default function FollowButton({ onClick, loading }) {
  return (
    <div class="relative">
      <div class="relative flex justify-center items-center">
        <div
          onClick={onClick}
          class="flex bg-blue-600 w-46 rounded-md text-white justify-center py-2 px-5 mx-auto cursor-pointer hover:bg-blue-700 text-sm items-center"
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
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
          {loading ? <Spinner /> : <div class="ml-4">Suivre</div>}
        </div>
      </div>
    </div>
  );
}
