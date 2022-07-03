import { ErrorMessage } from "@hookform/error-message";
import React, { useRef } from "react";
import { STATIONS } from "../../../navigation/CONSTANTS";
import BackButton from "../../utils/backButton/BackButton";
import ButtonContainer from "../../utils/button/ButtonContainer";
import Spinner from "../../utils/spinner/Spinner";

export default function AddStationFormView({
  handleSubmit,
  onSubmit,
  register,
  errors,
  watch,
  loading,
  message,
}) {
  // Watching fields to disable button

  const watchFields = watch([
    "identificator",
    "name",
    "longitude",
    "latitude",
    "number",
  ]);

  let disabled = true;

  let messageContent;

  // Watching fields onChange

  if (watchFields[0] && watchFields[1]) {
    disabled =
      watchFields[0].length === 0 ||
      watchFields[1].length === 0 ||
      watchFields[2].length === 0 ||
      watchFields[3].length === 0 ||
      watchFields[4].length === 0
        ? true
        : false;
  }

  // Watching confirm password for validation
  const password = useRef({});
  password.current = watch("password", "");

  // Setting error message

  //   if (message.state) {
  //     messageContent = message.state.message;
  //   }

  return (
    <div class="relative w-2/4 bg-red-400 flex justify-between">
      <div class=" pt-32 ">
        <BackButton link={STATIONS} />
      </div>

      <div class="mx-auto w-1/3 pt-32 mb-24 relative">
        <div>
          {loading ? (
            <div class="absolute flex justify-center items-center inset-0 bg-white opacity-80 rounded ">
              <Spinner />
            </div>
          ) : (
            ""
          )}
        </div>
        <div class="font-bold mb-10 text-xl text-gray-600">
          Ajouter une station
        </div>
        {messageContent && (
          <div class="bg-red-600 opacity-70 flex text-white rounded justify-center p-4 mb-8">
            {message.state.message}
          </div>
        )}
        <form id="register" onSubmit={handleSubmit(onSubmit)}>
          {/* Identificateur de la station */}
          <label class="flex flex-col mt-4">
            <div class="inline-block w-auto text-gray-600">Identificateur</div>
            <input
              class="py-3 px-4 rounded border-gray-400 border focus:outline-none focus:border-blue-300  mt-4 w-full text-gray-900"
              type="text"
              name="identificator"
              required="true"
              placeholder="Entrer l'id de la station"
              {...register("identificator", {
                required: true,
              })}
            />
          </label>
          {/* Nom du capteur */}
          <label class="flex flex-col mt-4">
            <div class="inline-block w-auto text-gray-600">Nom</div>
            <input
              class="py-3 px-4 rounded border-gray-400 border focus:outline-none focus:border-blue-300  mt-4 w-full text-gray-600"
              type="text"
              name="name"
              required={true}
              placeholder="Saisissez votre nom"
              {...register("name", {
                required: true,
                minLength: {
                  value: 2,
                  message: "Le nom doit avoir deux caractères minimum",
                },
                pattern: {
                  value: /^[a-zA-Z_][a-zA-Z0-9_]*/i,
                  message: "Le nom doit commencer par une lettre",
                },
              })}
            />
            <div class="text-red-400 text-sm pt-4">
              <ErrorMessage errors={errors} name="name">
                {({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p class="text-red-400 text-xs" key={type}>
                      {message}
                    </p>
                  ))
                }
              </ErrorMessage>
            </div>
          </label>
          {/* Longitude du capteur*/}
          <label class="flex flex-col mt-4">
            <div class="inline-block w-auto text-gray-600">Longitude</div>
            <input
              class="py-3 px-4 rounded border-gray-400 border focus:outline-none focus:border-blue-300  mt-4 w-full text-gray-600"
              type="number"
              name="longitude"
              step="any"
              required="true"
              placeholder="Saisissez la longitude"
              {...register("longitude", {
                required: true,
              })}
            />
            <div class="text-red-400 text-sm pt-4">
              <ErrorMessage errors={errors} name="longitude">
                {({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p class="text-red-400 text-xs" key={type}>
                      {message}
                    </p>
                  ))
                }
              </ErrorMessage>
            </div>
          </label>
          {/* Latitude de la station */}
          <label class="flex flex-col mt-4">
            <div class="inline-block w-auto text-gray-600">Latitude</div>
            <input
              class="py-3 px-4 rounded border-gray-400 border focus:outline-none focus:border-blue-300  mt-4 w-full text-gray-600"
              type="number"
              name="latitude"
              step="any"
              required="true"
              placeholder="Saisissez la latitude"
              {...register("latitude", { required: true })}
            />
            <div class="text-red-400 text-sm pt-4">
              <ErrorMessage errors={errors} name="latitude">
                {({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p class="text-red-400 text-xs" key={type}>
                      {message}
                    </p>
                  ))
                }
              </ErrorMessage>
            </div>
          </label>
          {/* Téléphone de l'utilisateur */}
          <label class="flex flex-col mt-4">
            <div class="inline-block w-auto text-gray-600">
              Numéro de Téléphone
            </div>
            <input
              class="py-3 px-4 rounded border-gray-400 border focus:outline-none focus:border-blue-300  mt-4 w-full text-gray-600"
              type="number"
              name="number"
              required="true"
              placeholder="Saisissez votre nom"
              {...register("number", {
                required: true,
                maxLength: {
                  value: 9,
                  message: "Le numéro contient 9 caractères",
                },
                minLength: {
                  value: 9,
                  message: "Le numéro contient 9 caractères",
                },
              })}
            />
            <div class="text-red-400 text-sm pt-4">
              <ErrorMessage errors={errors} name="number">
                {({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p class="text-red-400 text-xs" key={type}>
                      {message}
                    </p>
                  ))
                }
              </ErrorMessage>
            </div>
          </label>

          <div class="mt-6 ">
            <ButtonContainer
              form="register"
              name="Enregistrer"
              disabled={disabled}
            />
            <div class="mt-10 opacity-0">hjghj</div>
          </div>
        </form>
      </div>
    </div>
  );
}
