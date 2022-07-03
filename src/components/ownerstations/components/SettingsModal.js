import React from "react";
import SubmenuLink from "../../header/components/SubmenuLink";
import DeleteIcon from "./DeleteIcon";
import EditIcon from "./EditIcon";

export default function SettingsModal() {
  return (
    <ul class="bg-white z-20  border p-3 shadow-xl rounded-md">
      <SubmenuLink icon={<EditIcon />} text="Editer" />
      <SubmenuLink
        color="text-red-400"
        icon={<DeleteIcon />}
        text="Supprimer"
      />
    </ul>
  );
}
