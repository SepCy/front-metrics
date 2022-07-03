import React from "react";
import NotOnlyPremium from "../../utils/ProtectedComponents/NotOnlyPremium";
import Pricing from "./Pricing";

import { premium } from "./pricingAdvantages";
import { owner } from "./pricingAdvantages";

export default function PricingList({ subscribe }) {
  return (
    <div class="flex items-center justify-between w-full">
      <NotOnlyPremium>
        <Pricing
          type="Premium"
          advantages={premium}
          price="5.000"
          subscribe={subscribe}
        />{" "}
      </NotOnlyPremium>

      {/* <OnlyPremium> */}
      <Pricing
        type="Owner"
        advantages={owner}
        price="25.000"
        subscribe={subscribe}
      />
      {/* </OnlyPremium> */}
    </div>
  );
}
