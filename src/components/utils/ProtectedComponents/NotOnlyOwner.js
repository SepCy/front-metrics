import { connect } from "react-redux";

function NotOnlyOwner({ children, auth }) {
  if (auth.user) {
    if (auth.user.roles === "owner") {
      return null;
    }
  }

  return children;
}

const mapStatetoProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStatetoProps)(NotOnlyOwner);
