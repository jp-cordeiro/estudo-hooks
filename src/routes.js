import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import UseState from './components/UseState';
import UseEffect from './components/UseEffect';

export default function Routes() {
  return (
    <BrowserRouter basename="/estudo-hooks/">
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/use-state" component={UseState} />
        <Route path="/use-effect" component={UseEffect} />
      </Switch>
    </BrowserRouter>
  );
}
