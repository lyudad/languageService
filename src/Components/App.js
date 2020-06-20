import React, { PureComponent } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import * as routes from "Constants/routes";

<<<<<<< HEAD
import Categories from "./Pages/Categories"
import CardFlipGame from "Components/Blocks/CartFlipGame/index"
import { Auth } from 'Components/Blocks/index' 
=======
import Categories from './Pages/Categories'
import { Auth } from 'Components/Blocks/index'

>>>>>>> develop


class App extends PureComponent {
  render() {
    const { location } = this.props;
    return (
<<<<<<< HEAD
      <Switch location={location}>
        <Route path="/game" component={CardFlipGame} />
        <Redirect to="/" />
      </Switch>
    );
=======
        <Switch location={location}>
          <Route component={Auth} exact path={routes.initial} />
          <Redirect to="/" />
        </Switch>
    )
>>>>>>> develop
  }
}
// import { from } from 'rxjs'

const actions = {};

const selector = createStructuredSelector({
  
<<<<<<< HEAD
}) // from conflict
export default connect(selector, actions)(App);
=======
})

export default connect(
  selector,
  actions
)(App)
>>>>>>> develop
