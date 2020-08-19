import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { fetchSignOut } from "../../../api/fetchApi";
import { isLoggedin } from "../../../store/isLoggedIn";

const useStyles = makeStyles((theme) => ({
  button: {
    "&:hover": {
      background: "#68DCDC",
      color: "black",
    },
    color: "white",
    background: "none",
    fontSize: "2.1rem",
    marginLeft: "1rem",
  },
}));

function SignOut({ navigation }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  function goSignOut() {
    fetchSignOut().then(() => {
      dispatch(isLoggedin(false));
    });
  }
  return (
    <Button
      className={classes.button}
      color="inherit"
      onClick={() => goSignOut()}
    >
      로그아웃
    </Button>
  );
}

export default SignOut;
