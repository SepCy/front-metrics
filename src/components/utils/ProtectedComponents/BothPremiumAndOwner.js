import { connect } from "react-redux";

function BothPremiumAndOwner({ children, auth }) {
  if (auth.user) {
    if (auth.user.roles === "premium" || auth.user.roles === "owner") {
      return children;
    }
  }

  return null;
}

const mapStatetoProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStatetoProps)(BothPremiumAndOwner);
