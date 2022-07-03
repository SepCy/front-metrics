import React from "react";
import { Redirect, Route } from "react-router-dom";
import { ABONNEMENT } from "./CONSTANTS";

export default function PremiumRoute({ children, auth, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.isAuthenticated && auth.user.roles === "premium" ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: ABONNEMENT,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
