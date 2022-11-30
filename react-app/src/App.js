import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
// import LoginForm from "./components/Auth/LoginFormModal";
// import SignUpForm from './components/Auth/SignUpFormModal';
import Navigation from "./components/Navigation";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import UsersList from "./components/Users/UsersList";
import User from "./components/Users/User";
import { authenticate } from "./store/session";

const App = () => {
  const dispatch = useDispatch();
  const [isLoaded, setisLoaded] = useState(false);

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
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login" exact={true}>
            <LoginForm />
          </Route>
          <Route path="/sign-up" exact={true}>
            <SignUpForm />
          </Route>
          <ProtectedRoute path="/users" exact={true}>
            <UsersList />
          </ProtectedRoute>
          <ProtectedRoute path="/users/:userId" exact={true}>
            <User />
          </ProtectedRoute>
          <Route path="/" exact={true}>
            <h1>My Home Page</h1>
          </Route>
        </Switch>
      )}
    </BrowserRouter>
  );
};

export default App;
