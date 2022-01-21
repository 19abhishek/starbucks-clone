import React, { useState } from "react";
import "./SignUpForm.css";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FormSubmit from "./FormSubmit";

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [passwordShown, setPasswordShown] = useState(false);

  const onSubmit = () => {};

  return (
    <div className="signupForm">
      <div class="signupForm__container">
        <form onSubmit={handleSubmit(onSubmit)} className="signupForm__form">
          <h4 className="signupForm__section">Personal Information</h4>
          <div className="signupForm__inputContainer">
            <TextField
              label="First Name"
              {...register("fName", { required: true })}
              variant="standard"
              type="text"
              InputLabelProps={{
                style: { color: "rgba(0,0,0,.56)" },
              }}
              InputProps={{ style: { fontWeight: "800" } }}
              className="signupForm__input"
            />
            {errors.fName && (
              <div className="signupForm__error">
                <CloseIcon fontSize="small" />
                <span>Enter your first name.</span>
                <ReportProblemIcon
                  fontSize="small"
                  className="signupForm__reportIcon"
                />
              </div>
            )}
          </div>
          <div className="signupForm__inputContainer">
            <TextField
              label="Last Name"
              {...register("lName", { required: true })}
              variant="standard"
              type="text"
              InputLabelProps={{
                style: { color: "rgba(0,0,0,.56)" },
              }}
              InputProps={{ style: { fontWeight: "800" } }}
              className="signupForm__input"
            />
            {errors.lName && (
              <div className="signupForm__error">
                <CloseIcon fontSize="small" />
                <span>Enter your last name.</span>
                <ReportProblemIcon
                  fontSize="small"
                  className="signupForm__reportIcon"
                />
              </div>
            )}
          </div>
          <h4 className="signupForm__section">Account Security</h4>
          <div className="signupForm__inputContainer">
            <TextField
              label="Email Address"
              {...register("email", { required: true })}
              variant="standard"
              type="email"
              InputLabelProps={{
                style: { color: "rgba(0,0,0,.56)" },
              }}
              InputProps={{ style: { fontWeight: "800" } }}
              className="signupForm__input"
            />
            {errors.email && (
              <div className="signupForm__error">
                <CloseIcon fontSize="small" />
                <span>Enter an email.</span>
                <ReportProblemIcon
                  fontSize="small"
                  className="signupForm__reportIcon"
                />
              </div>
            )}
          </div>
          <div className="signupForm__inputContainer">
            <TextField
              label="Password"
              {...register("password", { required: true })}
              variant="standard"
              type={passwordShown ? "text" : "password"}
              InputLabelProps={{
                style: { color: "rgba(0,0,0,.56)" },
              }}
              InputProps={{ style: { fontWeight: "800" } }}
              className="signupForm__input"
            />
            {passwordShown ? (
              <VisibilityIcon
                onClick={() => setPasswordShown(!passwordShown)}
                className="signupForm__visibilityIcon"
              />
            ) : (
              <VisibilityOffIcon
                onClick={() => setPasswordShown(!passwordShown)}
                className="signupForm__visibilityIcon"
              />
            )}
            {errors.password && (
              <div className="signupForm__error">
                <CloseIcon fontSize="small" />
                <span>Enter a password.</span>
                <ReportProblemIcon
                  fontSize="small"
                  className="login__reportIcon"
                />
              </div>
            )}
          </div>
          <h4 className="signupForm__rewards">
            COLLECT MORE STARS & EARN REWARDS
          </h4>
          <span className="signupForm__span">
            Email is a great way to know about offers and what’s new from
            Starbucks.
          </span>
          <FormSubmit name="Create account" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
