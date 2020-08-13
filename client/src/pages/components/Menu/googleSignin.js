import React from "react";
import { withRouter } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
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

function Admin(props) {
  return (
    <GoogleLogin
      clientId="51190329735-ciio9gh389l8k5hus2a2584qps7req7j.apps.googleusercontent.com"
      buttonText="google Login"
      onSuccess={(result) => responseGoogle(result, props)}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default withRouter(Admin);
