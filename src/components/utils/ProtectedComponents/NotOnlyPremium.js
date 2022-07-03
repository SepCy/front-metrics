import { connect } from "react-redux";

function NotOnlyPremium({ children, auth }) {
  if (auth.user) {
    if (auth.user.roles === "premium") {
      return null;
    }
  }

  return children;
}

const mapStatetoProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStatetoProps)(NotOnlyPremium);
