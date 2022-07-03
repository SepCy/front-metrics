import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { ABONNEMENT, CONNEXION } from "./CONSTANTS";

function OwnerRoute({ children, auth, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.isAuthenticated ? (
          children
        ) : (
          // :// auth.isAuthenticated ? (
          //   <Redirect
          //     to={{
          //       pathname: ABONNEMENT,
          //       state: { from: location },
          //     }}
          //   />
          // )
          <Redirect
            to={{
              pathname: CONNEXION,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
const mapStatetoProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStatetoProps)(OwnerRoute);
