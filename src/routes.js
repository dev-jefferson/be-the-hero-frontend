import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Profile from "./pages/Profile";

// import { Container } from './styles';
export default function Routes() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/profile" component={Profile}/>
      </Switch>
    </BrowserRouter>
  );
}

