import React from "react";
import { Link } from "react-router-dom";
import ButtonView from "./ButtonView";

export default function ButtonContainer({
  name,
  onClick,
  disabled,
  link,
  formState,
  loadingAction,
}) {
  return (
    <>
      {link ? (
        <Link to={link}>
          <ButtonView name={name} formState={formState} disabled={disabled} />
        </Link>
      ) : (
        <ButtonView
          onClick={onClick}
          name={name}
          formState={formState}
          disabled={disabled}
        />
      )}
    </>
  );
}
