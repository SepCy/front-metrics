import { connect } from "react-redux";

function OnlyPremium({ children, auth }) {
  if (auth.user) {
    if (auth.user.roles === "premium") {
      return children;
    }
  }

  return null;
}

const mapStatetoProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStatetoProps)(OnlyPremium);
