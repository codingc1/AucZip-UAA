import React, { useState, useEffect } from "react";

import TextField from "@material-ui/core/TextField";
import ChangePW from "./ChangePW";
import Deposit from "./Deposit";
import { fetchUserInfo } from "../../../api/fetchApi";
import getToken from "../../../helper/user/getToken";
const MyInfo = (props) => {
  // const userInfo = props
  const [userInfo, setuserInfo] = useState([]);

  useEffect(() => {
    const Token = getToken();
    fetchUserInfo(Token).then((result) => {
      setuserInfo(result.data);
      console.log(result.data, "user info data");
    });
  }, []);

  return (
    <div>
      <div>test: {userInfo ? userInfo.name : ""}</div>
      <TextField
        label="Name"
        type="text"
        name="name"
        defaultValue={userInfo ? userInfo.name : ""}
      />
      <br />
      <TextField
        label="ID"
        type="text"
        name="memberId"
        defaultValue={userInfo.memberId}
      />
      <br />
      <TextField
        label="Name"
        type="text"
        name="name"
        defaultValue={userInfo.name}
      />
      <br />
      <TextField
        label="ID"
        type="text"
        name="memberId"
        defaultValue={userInfo.memberId}
      />
      <br />
      <TextField
        label="Email"
        type="email"
        name="email"
        defaultValue={userInfo.email}
      />
      <br />
      <TextField
        label="Password"
        type="password"
        name="password"
        defaultValue={userInfo.password}
      />
      <ChangePW /> <br />
      <TextField
        label="Phone"
        type="text"
        name="phone"
        defaultValue={userInfo.phone}
      />
      <br />
      {/* <TextField label="deposit" type="text" name="deposit" defaultValue={userInfo.deposit} /><Deposit /> */}
      <br />
    </div>
  );
};

export default MyInfo;
