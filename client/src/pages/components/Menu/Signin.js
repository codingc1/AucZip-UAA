import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withMobileDialog } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  modalDialog: {
    backgroundColor: "#121C48",
  },
  modalHeader: {
    backgroundColor: "#121C48",
  },
  modalBody: {},
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
  inputRoot: {
    fontSize: "2rem",
  },
  labelRoot: {
    fontSize: 30,
    color: "#121C48",
    "&$labelFocused": {
      color: "#ED8DB7",
    },
  },
  labelFocused: {},
}));

const SignIn = (props) => {
  const classes = useStyles();

  const [userInfo, setUserInfo] = useState({
    email: "",
    id: "",
    password: "",
  });

  const handleInputValue = (key) => (e) => {
    setUserInfo({ [key]: e.target.value });
  };

  return (
    <div>
      <div className={classes.root}></div>
      <Button
        className={classes.button}
        variant="contained"
        id="modalTest"
        data-toggle="modal"
        data-target="#login"
      >
        로그인
      </Button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetch("http://localhost:3000/login", {
            method: "POST",
            body: JSON.stringify(userInfo),
            headers: {
              "Content-Type": "application/json",
            },
          }).then((data) => {
            if (data.status === 200) {
              alert("로그인에 성공하셨습니다");

              this.props.isLogin = true;
              this.props.handleLogin(props.isLogin);
              this.props.handleUserinfo(data);
            } else {
              alert("로그인 실패하였습니다");
            }
          });
        }}
      >
        <div
          class="modal fade"
          id="login"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              {/* <div class="modal-header">
                <h4 class="modal-title" id="myModalLabel">
                  로그인
                </h4>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div> */}

              <div class="modal-body">
                {/* <TextField
                  InputProps={{
                    classes: {
                      root: classes.inputRoot,
                    },
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.labelRoot,
                      focused: classes.labelFocused,
                    },
                  }}
                  label="Email"
                  type="email"
                  name="email"
                  onChange={handleInputValue("email")}
                />
                <br /> */}

                <TextField
                  InputProps={{
                    classes: {
                      root: classes.inputRoot,
                    },
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.labelRoot,
                      focused: classes.labelFocused,
                    },
                  }}
                  label="ID"
                  type="text"
                  name="id"
                  onChange={handleInputValue("id")}
                />
                <br />

                <TextField
                  InputProps={{
                    classes: {
                      root: classes.inputRoot,
                    },
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.labelRoot,
                      focused: classes.labelFocused,
                    },
                  }}
                  label="Password"
                  type="password"
                  name="password"
                  onChange={handleInputValue("password")}
                />
                <br />
              </div>
              <div class="modal-footer">
                <div>sign in Google</div>
                <button
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                >
                  취소
                </button>
                <button type="submit" class="btn btn-primary" type="submit">
                  로그인
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
