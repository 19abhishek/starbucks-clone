import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginScreen.css";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FormSubmit from "../FormSubmit";
import FooterSecondary from "../FooterSecondary";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function LoginScreen() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [passwordShown, setPasswordShown] = useState(false);
  const onSubmit = ({ email, password }) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="loginScreen">
      <div className="loginScreen__left">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
            alt=""
          />
        </Link>
        <div className="loginScreen__info">
          <h1>Sign in or create an account 🌟</h1>
        </div>
      </div>
      <div className="loginScreen__right">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="loginScreen__inputContainer">
            <TextField
              label="Email"
              {...register("email", { required: true })}
              variant="standard"
              type="email"
              InputLabelProps={{
                style: { color: "rgba(0,0,0,.56)" },
              }}
              InputProps={{ style: { fontWeight: "800" } }}
              className="loginScreen__input"
            />
            {errors.email && (
              <div className="loginScreen__error">
                <CloseIcon fontSize="small" />
                <span>Enter an email.</span>
                <ReportProblemIcon
                  fontSize="small"
                  className="loginScreen__reportIcon"
                />
              </div>
            )}
          </div>
          <div className="loginScreen__inputContainer">
            <TextField
              label="Password"
              {...register("password", { required: true })}
              variant="standard"
              type={passwordShown ? "text" : "password"}
              InputLabelProps={{
                style: { color: "rgba(0,0,0,.56)" },
              }}
              InputProps={{ style: { fontWeight: "800" } }}
              className="loginScreen__input"
            />
            {passwordShown ? (
              <VisibilityIcon
                onClick={() => setPasswordShown(!passwordShown)}
                className="loginScreen__visibilityIcon"
              />
            ) : (
              <VisibilityOffIcon
                onClick={() => setPasswordShown(!passwordShown)}
                className="loginScreen__visibilityIcon"
              />
            )}
            {errors.password && (
              <div className="loginScreen__error">
                <CloseIcon fontSize="small" />
                <span>Enter a password.</span>
                <ReportProblemIcon
                  fontSize="small"
                  className="loginScreen__reportIcon"
                />
              </div>
            )}
          </div>
          <div className="loginScreen__resetLinks">
            <Link>Forgot your username?</Link>
            <Link>Forgot your password?</Link>
          </div>
          <FormSubmit name="Sign in" type="submit" />
        </form>
        <div className="loginScreen__rewards">
          <h4>JOIN STARBUCKS® REWARDS</h4>
        </div>
        <div className="loginScreen__joinNow">
          <div className="loginScreen__joinNowContainer">
            <Link to="/account/create">Join now</Link>
            <h4>Create an account and bring on the Rewards!</h4>
            <p>
              Join Starbucks® Rewards to earn free food and drinks, get free
              refills, pay and order with your phone, and more.
            </p>
          </div>
        </div>
        <FooterSecondary paddingLeft={30} flexDirection="column" />
      </div>
    </div>
  );
}

export default LoginScreen;
