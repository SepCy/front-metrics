import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getSearchValueOnType } from "../../../redux/actions/searchActions";

export default function Search() {
  // Getting searched Value

  const searched = useSelector((state) => state.search.searchedValue);

  // Dispatch for dispatching actions

  const dispatch = useDispatch();

  // React hook form utilities
  const { register, watch } = useForm();

  // Watching the search field

  const watchField = watch("search");

  useEffect(() => {
    dispatch(getSearchValueOnType(watchField));
  }, [watchField, dispatch]);

  return (
    <div class=" relative mx-auto text-gray-700">
      <input
        class="  bg-gray-50 h-10 px-12 pr-2 bl-2 text-blue-400 rounded-md text-sm focus:outline-none"
        type="search"
        name="search"
        autoComplete="off"
        placeholder="Rechercher une station"
        {...register("search")}
      />
      <button
        type="submit"
        class="absolute left-4 top-0 my-3 mr-4 text-gray-400"
      >
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
}
