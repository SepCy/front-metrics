import React from "react";
import { Link } from "react-router-dom";
import ArrowIcon from "./ArrowIcon";

export default function BackButton({ link }) {
  return (
    <>
      <Link
        class="flex  text-blue-500 items-center justify-between w-12"
        to={link}
      >
        <div class="mr-2 hover:mr-3">
          <ArrowIcon />
        </div>
        <div>Retour</div>
      </Link>
    </>
  );
}
