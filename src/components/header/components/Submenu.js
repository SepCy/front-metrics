import React from "react";
import { Link } from "react-router-dom";
import {
  ACCUEIL,
  STATIONS,
  TARIF,
  VISUALISER,
} from "../../../navigation/CONSTANTS";
import BothPremiumAndOwner from "../../utils/ProtectedComponents/BothPremiumAndOwner";
import NotBothPremiumOrOwner from "../../utils/ProtectedComponents/NotBothPremiumOrOwner";
import NotOnlyLoggedIn from "../../utils/ProtectedComponents/NotOnlyLoggedIn";
import AbonnementIcon from "./AbonnementIcon";
import HomeIcon from "./HomeIcon";
import SeeIcon from "./SeeIcon";
import StationIcon from "./StationIcon";
import SubmenuLink from "./SubmenuLink";
import VisualiserIcon from "./VisualiserIcon";

export default function Submenu({ onClick }) {
  return (
    <section class="rounded-md w-48 py-4 absolute top-11 left-0 right-0 bg-white shadow-md">
      <ul class=" flex justify-between flex-col mx-4">
        <SubmenuLink
          onClick={() => onClick(false)}
          icon={<HomeIcon />}
          text="Accueil"
          link={ACCUEIL}
        />

        <NotOnlyLoggedIn>
          <SubmenuLink
            onClick={() => onClick(false)}
            icon={<StationIcon />}
            text="Stations"
            link={STATIONS}
          />
        </NotOnlyLoggedIn>
        <BothPremiumAndOwner>
          <SubmenuLink
            onClick={() => onClick(false)}
            icon={<VisualiserIcon />}
            text="Visualiser"
            link={VISUALISER}
          />
        </BothPremiumAndOwner>

        {/*  <NotBothPremiumOrOwner>
          <SubmenuLink
            onClick={() => onClick(false)}
            icon={<AbonnementIcon />}
            text="Abonnement"
            link={TARIF}
          />
        </NotBothPremiumOrOwner>
        */}
      </ul>
    </section>
  );
}
