import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from './Authentication/SignUp'


const Routes = () =>
    <Switch>
      <Route path='/sign_up'>
        <SignUp />
      </Route>
    </Switch>

export default Routes;