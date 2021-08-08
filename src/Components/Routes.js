import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from './Authentication/SignUp'
import Login from './Authentication/Login'



const Routes = () =>
    <Switch>
      <Route path='/sign_up'><SignUp /></Route>
      <Route path='/login'><Login /></Route>
    </Switch>

export default Routes;