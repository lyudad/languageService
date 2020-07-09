import React, { PureComponent } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import * as routes from "Constants/routes";

import Categories from "./Pages/Categories"
import {Home} from "./Pages/Home/Home"
import CardFlipGame from "Components/Blocks/CartFlipGame/index"
import { Auth } from 'Components/Blocks/index' 
import 'antd/dist/antd.css';

class App extends PureComponent {
  render() {
    const { location } = this.props;
    return (
      <Switch location={location}>
        <Route path="/home" component={Home} />
        <Route path="/game" component={CardFlipGame} />
        <Route path="/auth" component={Auth} />
        <Redirect to="/" />
      </Switch>
    );
  }
}
// import { from } from 'rxjs'


const actions = {};

const selector = createStructuredSelector({
  
})
export default connect(selector, actions)(App);

