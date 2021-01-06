import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { Error404 } from "./components/pages";

class App extends Component<any, {}> {
  render(): JSX.Element {
    return (
        <Switch>
          <Route path="*" component={ Error404 } />
        </Switch>
    );
  }
}

export default App;