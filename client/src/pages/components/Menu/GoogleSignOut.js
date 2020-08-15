import React from "react";
import { withRouter } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import { googleSignin } from "../../../api/fetchApi";

const responseGoogle = (googleUser, props) => {
  if (googleUser.profileObj === undefined) return;
  // console.log(googleUser);
  let obj = {};
  let user = googleUser.profileObj;
  obj.name = user.familyName + user.givenName;
  obj.memberId = user.googleId;
  obj.email = user.email;
  obj.password = googleUser.tokenId;
  // let email = user.email;
  // let memberId = user.googleId;
  console.log(obj, "google obj");

  googleSignin(obj).then((result) => {
    // console.log(result.data, 'get data')
    console.log(result, "result");
    // props.handleClose();
    props.history.push("/");
  });
};

function GoogleSignOut(props) {
  return (
    <GoogleLogout
      clientId="51190329735-2kb96bt3o726mj1r2ffnv5tnfhle5l8u.apps.googleusercontent.com"
      buttonText="google Logout"
      // onSuccess={(result) => responseGoogle(result, props)}
      onLogoutSuccess={(result) => console.log(result, "out")}
      // isSignedIn={true}
      // onFailure={responseGoogle}
      onFailure={(result) => console.log(result, "err")}
      // cookiePolicy={"single_host_origin"}
    />
  );
}

export default withRouter(GoogleSignOut);
