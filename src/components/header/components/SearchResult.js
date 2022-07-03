import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchViewport } from "../../../redux/actions/mapActions";
import { getSearchedValues } from "../../../redux/actions/searchActions";
import FollowUnfollow from "../../utils/followunfollow/FollowUnfollow";
import SocialLinks from "../../utils/map/modal/SocialLinks";
import SearchResultItem from "./SearchResultItem";

export default function SearchResult({ id }) {
  // Getting the values

  const values = useSelector((state) => state.search.searchedValues);

  const dispatch = useDispatch();

  // new viewport

  useEffect(() => {
    const viewport = {
      longitude: values ? values[0]?.longitude : 12.25444,
      latitude: values ? values[0]?.latitude : 5.79142,
    };
    dispatch(getSearchedValues(id));
    dispatch(searchViewport(viewport));
  }, [id, dispatch]);

  return (
    <div class="rounded-md w-full py-6 px-6 absolute top-11 left-0 right-0 bg-gray-50 shadow-md">
      <div class="flex justify-between items-center">
        <div class="font-semibold">
          Station de {values ? values[0]?.name : ""}
        </div>
        <div class="text-blue-600 text-sm cursor-pointer hover:underline">
          Placer une alerte
        </div>
      </div>
      <div class="overflow-y-scroll h-80 pr-4 mt-4 ">
        <div class="rounded-md text-sm bg-gray-100 px-4 py-4">
          <SearchResultItem name="Heure de prise" value="20 GMT" />
          <SearchResultItem name="Vitesse du vent" value="20 GMT" />
          <SearchResultItem name="Temperature" value="20 GMT" />
          <SearchResultItem name="Humidité" value="20 GMT" />
          <SearchResultItem name="Direction du vent" value="20 GMT" />
          <SearchResultItem name="pH du sol" value="20 GMT" />
          <SearchResultItem name="Pluviométrie" value="20 GMT" />
        </div>
        <div class="rounded-md text-sm mt-4 bg-gray-100 px-4 py-4">
          <SearchResultItem name="Heure de prise" value="20 GMT" />
          <SearchResultItem name="Vitesse du vent" value="20 GMT" />
          <SearchResultItem name="Temperature" value="20 GMT" />
          <SearchResultItem name="Humidité" value="20 GMT" />
          <SearchResultItem name="Direction du vent" value="20 GMT" />
          <SearchResultItem name="pH du sol" value="20 GMT" />
          <SearchResultItem name="Pluviométrie" value="20 GMT" />
        </div>
        <div class="rounded-md text-sm mt-4 bg-gray-100 px-4 py-4">
          <SearchResultItem name="Heure de prise" value="20 GMT" />
          <SearchResultItem name="Vitesse du vent" value="20 GMT" />
          <SearchResultItem name="Temperature" value="20 GMT" />
          <SearchResultItem name="Humidité" value="20 GMT" />
          <SearchResultItem name="Direction du vent" value="20 GMT" />
          <SearchResultItem name="pH du sol" value="20 GMT" />
          <SearchResultItem name="Pluviométrie" value="20 GMT" />
        </div>
      </div>

      <div class="flex justify-between items-center mt-5">
        <SocialLinks />
        <FollowUnfollow id={id} />
      </div>
    </div>
  );
}
