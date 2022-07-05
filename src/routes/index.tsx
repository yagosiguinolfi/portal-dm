import React, { Fragment } from 'react';
import { Route, Routes as Switch } from 'react-router-dom';


import SignIn from '../pages/SignIn';
import { Principal } from '../components/Principal';
import Home from '../pages/Home';
import Financeiro from '../pages/Financeiro';
import Site from '../pages/Site';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" element={<Site />} />
    <Route path="/home" element={<Home />} />
    <Route path="/financeiro" element={<Financeiro />} />
    {/* <Route path="/signin" component={SignIn} /> */}
    {/* <Route path="/principal" component={Principal} isPrivate /> */}
  </Switch>
);

export default Routes;