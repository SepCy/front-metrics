import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { CONNEXION } from "../../../navigation/CONSTANTS";
import ButtonContainer from "../../utils/button/ButtonContainer";
import { ErrorMessage } from "@hookform/error-message";
import Spinner from "../../utils/spinner/Spinner";

export default function RegisterFormView({
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

  const watchFields = watch([
    "email",
    "password",
    "confirmPassword",
    "number",
    "firstName",
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
      <div class="font-bold mb-10 text-2xl text-gray-600">
        Creer votre compte
      </div>
      {messageContent && (
        <div class="bg-red-600 opacity-70 flex text-white rounded justify-center p-4 mb-8">
          {message.state.message}
        </div>
      )}
      <form id="register" onSubmit={handleSubmit(onSubmit)}>
        {/* Email de l'utilisateur */}
        <label class="flex flex-col mt-4">
          <div class="inline-block w-auto text-gray-600">Email</div>
          <input
            class="py-3 px-4 rounded border-gray-400 border focus:outline-none focus:border-blue-300  mt-4 w-full text-gray-900"
            type="email"
            name="email"
            required="true"
            placeholder="abc@xyz.com"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Adresse email invalide",
              },
            })}
          />
        </label>
        {/* Nom de l'utilisateur */}
        <label class="flex flex-col mt-4">
          <div class="inline-block w-auto text-gray-600">Nom</div>
          <input
            class="py-3 px-4 rounded border-gray-400 border focus:outline-none focus:border-blue-300  mt-4 w-full text-gray-600"
            type="text"
            name="firstName"
            required="true"
            placeholder="Saisissez votre nom"
            {...register("firstName", {
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
            <ErrorMessage errors={errors} name="firstName">
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
        {/* Prenom de l'utilisateur */}
        <label class="flex flex-col mt-4">
          <div class="inline-block w-auto text-gray-600">Prenom</div>
          <input
            class="py-3 px-4 rounded border-gray-400 border focus:outline-none focus:border-blue-300  mt-4 w-full text-gray-600"
            type="text"
            name="lastName"
            required="true"
            placeholder="Saisissez votre nom"
            {...register("lastName", {
              pattern: {
                value: /^[a-zA-Z_][a-zA-Z0-9_]*/i,
                message: "Le prenom doit commencer par une lettre",
              },
            })}
          />
          <div class="text-red-400 text-sm pt-4">
            <ErrorMessage errors={errors} name="lastName">
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
        {/* Mot de passe */}
        <label class="flex flex-col mt-4">
          <div class="inline-block w-auto text-gray-600">Mot de passe</div>
          <input
            class="py-3 px-4 rounded border-gray-400 border focus:outline-none focus:border-blue-300  mt-4 w-full text-gray-600 "
            type="password"
            name="password"
            required="true"
            placeholder="Mot de passe (6 caractères minimum)"
            {...register("password", {
              required: true,
              minLength: {
                value: 6,
                message: "Le mot de passe doit avoir 6 caractères minimum",
              },
            })}
          />
          <div class="text-red-400 text-sm pt-4">
            <ErrorMessage errors={errors} name="password">
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
        <label class="flex flex-col mt-4">
          <div class="inline-block w-auto text-gray-600">
            Confirmer votre mot passe
          </div>
          <input
            class="py-3 px-4 rounded border-gray-400 border focus:outline-none focus:border-blue-300  mt-4 w-full text-gray-600"
            type="password"
            name="confirmPassword"
            required="true"
            placeholder="Entrer à nouveau votre Mot de passe"
            {...register("confirmPassword", {
              required: true,
              validate: (value) =>
                value === password.current ||
                "Les mots de passes sont différents",
            })}
          />
          <div class="text-red-400 text-sm pt-4">
            <ErrorMessage errors={errors} name="confirmPassword">
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
        <div class="mt-4">
          <ButtonContainer
            form="register"
            name="Enregistrer"
            disabled={disabled}
          />
        </div>
      </form>
      <div class="mt-8">
        Déjà un compte ?{" "}
        <span class="ml-4 text-blue-500">
          <Link to={CONNEXION}>Se connecter</Link>
        </span>{" "}
      </div>
    </div>
  );
}
