import React, { PureComponent } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// import * as routes from "Constants/routes";

// import Categories from "./Pages/Categories"
import CardFlipGame from "Components/Blocks/CartFlipGame/index"
import { Auth } from 'Components/Blocks/index' 
import { ProfilePage } from "Components/Blocks/index"


class App extends PureComponent {
  render() {
    const { location } = this.props;
    return (
      <Switch location={location}>
        <Route path="/game" component={CardFlipGame} />
        <Route path="/auth" component={Auth} />   
        <Route path="/profile" component={ProfilePage} />     
        <Redirect to="/" />
      </Switch>
    );
  }
}

const actions = {};

const selector = createStructuredSelector({
  
})
export default connect(selector, actions)(App);
