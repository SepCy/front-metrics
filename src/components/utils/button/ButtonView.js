import React from "react";
import Spinner from "../spinner/Spinner";

export default function ButtonView({
  name,
  onClick,
  form,
  disabled,
  formState,
  loadingAction,
}) {
  const isSubmitting = formState && formState.isSubmitting;

  const loading = formState && formState.isSubmitting;

  return (
    <>
      {disabled ? (
        <button
          disabled
          onClick={onClick}
          form={form}
          class={`disabled:opacity-50 cursor-not-allowed  text-sm w-full flex justify-center items-center text-white rounded-md px-8 py-3 shadow-md bg-blue-500 hover:bg-blue-700`}
        >
          <span>{name}</span>
        </button>
      ) : (
        <button
          form={form}
          onClick={onClick}
          class={`disabled:opacity-50 text-sm cursor-pointer  w-full flex justify-center items-center text-white rounded-md px-5 py-2 shadow-md bg-blue-500 hover:bg-blue-700`}
        >
          {loading || loadingAction ? (
            <span>
              <Spinner />
            </span>
          ) : (
            ""
          )}

          <span>{name}</span>
        </button>
      )}
    </>
  );
}
