import React from "react";
import { Route } from "react-router-dom";

import {AuthRoute} from "../util/route_util";
import Greeting from "./greeting/greeting_container";
import Signup from "./session/signup_form_container";
import Login from "./session/login_form_container";

const App = () => (
  <div>
    <h1>Bench BnB</h1>
    <Greeting />
    <AuthRoute path="/signup" component={Signup}/>
    <AuthRoute path="/login" component={Login}/>
  </div>
);

export default App;