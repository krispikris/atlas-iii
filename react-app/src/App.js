import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "./components/Navigation";
import User from "./components/Users/User";
import { authenticate } from "./store/session";
import GetPosts from "./components/Posts/GetPosts";
import PostDetails from "./components/Posts/PostDetails";
import LoginForm from "./components/Auth/LoginFormModal/LoginForm.js";
import SignUpForm from "./components/Auth/SignupFormModal/SignUpForm";
import UsersList from "./components/Users/UsersList";

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
          <Route path="/signup" exact={true}>
            <SignUpForm />
          </Route>
          <Route path="/users" exact={true}>
            <UsersList />
          </Route>
          <Route path="/users/:userId" exact={true}>
            <h1>Current User Information</h1>
            <User />
          </Route>
          <Route path="/home" exact={true}>
            <h1>My Home Page</h1>
          </Route>
          <Route path="/discover" exact={true}>
            <h1>Discovery Page</h1>
            <GetPosts />
          </Route>
          <Route path="/posts" exact={true}>
            <h1>All Posts</h1>
            <GetPosts />
          </Route>
          <Route path="/posts/current" exact={true}>
            <h1>Current User's Posts</h1>
          </Route>
          <Route path="/posts/:postId" exact={true}>
            <PostDetails />
          </Route>
        </Switch>
      )}
    </BrowserRouter>
  );
};

export default App;
