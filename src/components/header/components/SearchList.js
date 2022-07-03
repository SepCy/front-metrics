import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchedValue } from "../../../redux/actions/searchActions";
import EmojiSad from "./EmojiSad";
import SubmenuLink from "./SubmenuLink";

export default function SearchList({ searched }) {
  // Getting the stations from the store

  const stations = useSelector((state) => state.station.stations);

  // Dispatching the searchedValue
  const dispatch = useDispatch();

  //   Filtering the values
  const filtered = stations.filter((value) =>
    value.name.toLocaleLowerCase().includes(searched.toLocaleLowerCase())
  );

  //   Dispatching the event

  const searchedValue = (value, id) => {
    dispatch(getSearchedValue(value, id));
  };

  return (
    <ul class="rounded-md w-full py-4 px-3 absolute top-11 left-0 right-0 bg-gray-50 shadow-md">
      {filtered.length !== 0 ? (
        filtered.map((value) => (
          <div key={value._id}>
            <SubmenuLink
              onClick={() => searchedValue(value.name, value._id)}
              text={`${value.name}`}
            />
          </div>
        ))
      ) : (
        <div class="text-sm text-center opacity-60 flex justify-center items-center">
          <div class="mr-4">
            <EmojiSad />
          </div>
          <div>Aucun résultat correspondant</div>
        </div>
      )}
    </ul>
  );
}
