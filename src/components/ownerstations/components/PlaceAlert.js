import React from "react";
import ButtonContainer from "../../utils/button/ButtonContainer";

export default function PlaceAlert() {
  return (
    <div class="bg-white rounded-md p-4 shadow-lg">
      <div class="text-sm font-semibold">Placer une alerte</div>
      <div>
        <div class="my-8">
          <select class="bg-gray-50 border border-gray-300 rounded-md p-2 form-select block w-full mt-1">
            <option>Pluviométrie</option>
            <option>Température</option>
            <option>Vitesse du vent</option>
            <option>Direction du vent</option>
            <option>Humidité</option>
            <option>PH du sol</option>
          </select>
        </div>
        <div class="mb-8 flex justify-between">
          <label class="inline-flex items-center">
            <input
              type="radio"
              class="form-radio"
              name="accountType"
              value="superieur"
            />
            <span class="ml-2">Supérieur</span>
          </label>
          <label class="inline-flex items-center ml-6">
            <input
              type="radio"
              class="form-radio"
              name="accountType"
              value="inferieur"
            />
            <span class="ml-2">Inférieur</span>
          </label>
        </div>
        <div class="my-2">
          <input
            placeholder="Entre le seuil"
            class=" py-2  border-gray-300 px-4 border rounded-md"
            type="number"
            name="alert"
          />
        </div>
        <div class="mt-8">
          <ButtonContainer name="Sauvegarder" />
        </div>
        <div class="mt-2 text-red-700 cursor-pointer rounded-md text-center hover:bg-gray-100 text-sm px-2 py-2">
          Annuler
        </div>
      </div>
    </div>
  );
}
