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
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import LoginScreen from "./screens/LoginScreen";

function App() {
  const user = useSelector(selectUser);
  console.log(user);
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
      </Switch>
    </Router>
  );
}

export default App;
