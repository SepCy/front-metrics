import { connect } from "react-redux";

function OnlyOwner({ children, auth }) {
  if (auth.user) {
    if (auth.user.roles === "owner") {
      return children;
    }
  }

  return null;
}

const mapStatetoProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStatetoProps)(OnlyOwner);
