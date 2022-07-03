import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { CONNEXION } from "./CONSTANTS";

function PrivateRoute({ children, auth, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.isAuthenticated ? (
          children
        ) : (
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

export default connect(mapStatetoProps)(PrivateRoute);
