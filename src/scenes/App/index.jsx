import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Scenes
import Store from '../Store';
import ListStores from '../Store/scenes/List';

const NotFoundPage = () => (<h1>NotFoundPage</h1>);

const App = () => (
  <Switch>
    <Route exact path="/" component={ListStores} />
    <Route path="/cadastrar-loja" component={Store} />
    <Route component={NotFoundPage} />
  </Switch>
);
export default App;

