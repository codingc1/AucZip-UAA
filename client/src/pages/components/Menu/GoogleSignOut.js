import React from "react";
import { withRouter } from "react-router-dom";
import { GoogleLogout } from "react-google-login";

function GoogleSignOut(props) {
  return (
    <GoogleLogout
      clientId="51190329735-2kb96bt3o726mj1r2ffnv5tnfhle5l8u.apps.googleusercontent.com"
      buttonText="google Logout"
      // onSuccess={(result) => responseGoogle(result, props)}
      onLogoutSuccess={(result) => console.log(result, "out")}
      // onFailure={responseGoogle}
      onFailure={(result) => console.log(result, "err")}
    />
  );
}

export default withRouter(GoogleSignOut);
