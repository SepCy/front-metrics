import { connect } from "react-redux";

function NotBothPremiumOrOwner({ children, auth }) {
  if (auth.user) {
    if (auth.user.roles === "premium" || auth.user.roles === "owner") {
      return null;
    }
  }

  return children;
}

const mapStatetoProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStatetoProps)(NotBothPremiumOrOwner);
