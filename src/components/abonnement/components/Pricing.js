import React from "react";
import { useSelector } from "react-redux";
import ButtonContainer from "../../utils/button/ButtonContainer";
import Spinner from "../../utils/spinner/Spinner";
import BadgeIcon from "./BadgeIcon";
import StarIcon from "./StarIcon";

export default function Pricing({ advantages, price, type, subscribe }) {
  const subsLoading = useSelector((state) => state.subscription.loading);

  const subsType = useSelector((state) => state.subscription.type);
  return (
    <div class="relative">
      {subsLoading ? (
        <div class="absolute inset-0 bg-white bg-opacity-30">
          <Spinner />
        </div>
      ) : (
        <div
          id="pricing"
          class="flex flex-col h-auto  shadow-xl bg-white border-opacity-10	 border-blue-500 border px-8 py-10 rounded-md"
        >
          <div class="font-semibold opacity-60 mx-auto mb-8">{type}</div>
          <div class="font-bold text-4xl text-blue-800 opacity-80 mx-auto">
            {subsType === "mensuel" ? price : price * 1000 * 12} FCFA
          </div>
          <div class="mt-8">
            {advantages
              ? advantages.map((ad) => (
                  <div class="flex justify-left items-center">
                    <div class="mr-4">
                      <BadgeIcon />
                    </div>
                    <div class="text-sm my-2">{ad}</div>
                  </div>
                ))
              : ""}
            {type === "Owner" ? (
              <div>
                <div class="flex justify-left items-center">
                  <div class="mr-4">
                    <StarIcon />
                  </div>
                  <div class="text-sm my-2">Ajouter modifier une station</div>
                </div>
                <div class="flex justify-left items-center">
                  <div class="mr-4">
                    <StarIcon />
                  </div>
                  <div class="text-sm my-2">Partager une station</div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div class="mt-8">
            <ButtonContainer
              onClick={() => subscribe(type.toLowerCase())}
              name={`Devenir ${type}`}
            />
          </div>
        </div>
      )}
    </div>
  );
}
