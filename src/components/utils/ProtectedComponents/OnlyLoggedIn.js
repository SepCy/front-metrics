import { connect } from "react-redux";

function OnlyLoggedIn({ children, auth }) {
  if (!auth.isAuthenticated) {
    return children;
  }
  return null;
}

const mapStatetoProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStatetoProps)(OnlyLoggedIn);
