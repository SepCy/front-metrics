import React from "react";
import NotOnlyOwner from "../utils/ProtectedComponents/NotOnlyOwner";
import PricingList from "./components/PricingList";
import PricingToggle from "./components/PricingToggle";

export default function AbonnementView({ subscribe, sub }) {
  return (
    <NotOnlyOwner>
      <div class="flex flex-col">
        <PricingToggle />
        <PricingList subscribe={subscribe} sub={sub} />
      </div>
    </NotOnlyOwner>
  );
}
