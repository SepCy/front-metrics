import React from "react";
import { Link } from "react-router-dom";
import { CREER_COMPTE } from "../../../navigation/CONSTANTS";
import ButtonContainer from "../../utils/button/ButtonContainer";
import Spinner from "../../utils/spinner/Spinner";

export default function LoginFormView({
  handleSubmit,
  onSubmit,
  register,
  errors,
  watch,
  formState,
  loading,
  message,
}) {
  // Watching fields to disable button

  const watchFields = watch(["email", "password"]);

  let disabled = true;

  let messageContent;

  if (watchFields[0] && watchFields[1]) {
    disabled =
      watchFields[0].length === 0 || watchFields[1].length === 0 ? true : false;
  }

  if (message.state) {
    messageContent = message.state.message;
  }

  return (
    <div class="mx-auto relative">
      <div>
        {loading ? (
          <div class="absolute flex justify-center items-center inset-0 bg-white opacity-80 rounded ">
            <Spinner />
          </div>
        ) : (
          ""
        )}
      </div>
      <div class="font-bold mb-10 text-2xl text-gray-600">Se connecter</div>
      {messageContent && (
        <div class="bg-red-600 opacity-70 flex text-white rounded justify-center p-4 mb-8">
          {message.state.message}
        </div>
      )}
      <form id="login" class="" onSubmit={handleSubmit(onSubmit)}>
        {/* Email de l'utilisateur */}
        <label class="flex flex-col">
          <div class="inline-block w-auto text-gray-600">Email</div>
          <input
            class="py-3 px-4 rounded border-gray-400 border focus:outline-none focus:border-blue-300  mt-4 mb-8 w-full text-gray-900"
            type="email"
            name="email"
            required="true"
            placeholder="abc@xyz.com"
            {...register("email", {
              required: true,
            })}
          />
        </label>
        {/* Mot de passe */}
        <label class="flex flex-col">
          <div class="inline-block w-auto text-gray-600">Mot de passe</div>
          <input
            class="py-3 px-4 rounded border-gray-400 border focus:outline-none focus:border-blue-300  mt-4 mb-8 w-full text-gray-600 "
            type="password"
            name="password"
            required="true"
            placeholder="Saisissez votre mot de passe"
            {...register("password", {
              required: true,
            })}
          />
        </label>

        <div class="mt-4">
          <ButtonContainer
            form="login"
            name="Se connecter"
            formState={formState}
            disabled={disabled}
          />
        </div>
      </form>
      <div class="mt-8">
        Pas de compte ?{" "}
        <span class="ml-4 text-blue-500">
          <Link to={CREER_COMPTE}>Créer un compte</Link>
        </span>{" "}
      </div>
    </div>
  );
}
