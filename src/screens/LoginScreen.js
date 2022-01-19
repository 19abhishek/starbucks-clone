import React from "react";
import { Link } from "react-router-dom";
import "./LoginScreen.css";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";

function LoginScreen() {
  const { register, handleSubmit } = useForm();
  const onSubmit = ({ email, password }) => console.log(email);

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
      <div class="loginScreen__right">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Standard"
            variant="standard"
            name="email"
            type="email"
            InputLabelProps={{
              style: { color: "rgba(0,0,0,.56)" },
            }}
            InputProps={{ style: { fontWeight: "800" } }}
            className="loginScreen__input"
          />
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;
