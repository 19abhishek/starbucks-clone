import React from "react";

import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import HomeScreen from "./screens/HomeScreen";
import Header from "./Header";
import { Footer } from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "./features/userSlice";
import LoginScreen from "./screens/LoginScreen";
import { useEffect } from "react";
import { auth } from "./firebase";
import { logout } from "./features/userSlice";
import SignUpScreen from "./screens/SignUpScreen";
import MenuScreen from "./screens/MenuScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <HomeScreen />
          <Fade>
            <Footer />
          </Fade>
        </Route>
        <Route exact path="/account/signin">
          {user ? <Redirect to="/menu" /> : <LoginScreen />}
        </Route>
        <Route exact path="/account/create">
          {user ? <Redirect to="/menu" /> : <SignUpScreen />}
        </Route>
        <Route exact path="/menu">
          {!user ? (
            <Redirect to="account/signin" />
          ) : (
            <>
              <Header menuPage />
              <MenuScreen />
            </>
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
