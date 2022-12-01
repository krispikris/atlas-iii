import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "./components/Navigation";
import LoginForm from "./components/Auth/LoginFormModal/LoginForm";
import SignUpForm from "./components/Auth/SignupFormModal/SignUpForm";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import UsersList from "./components/Users/UsersList";
import User from "./components/Users/User";
import { authenticate } from "./store/session";

const App = () => {
  const dispatch = useDispatch();
  const [isLoaded, setisLoaded] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setisLoaded(true);
    })();
  }, [dispatch]);

  if (!isLoaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Navigation sessionUser={sessionUser} isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login" exact={true}>
            <LoginForm />
          </Route>
          <Route path="/sign-up" exact={true}>
            <SignUpForm />
          </Route>
          <Route path="/users" exact={true}>
            <UsersList />
          </Route>
          <Route path="/users/:userId" exact={true}>
            <User />
          </Route>
          <Route path="/" exact={true}>
            <h1>My Home Page</h1>
          </Route>
        </Switch>
      )}
    </BrowserRouter>
  );
};

export default App;
