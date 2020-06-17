import React, { PureComponent } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import * as routes from 'Constants/routes'

import Categories from './Pages/Categories'
import { CardFlipGame } from './Blocks'

class App extends PureComponent {

  render() {
    const { location } = this.props
    return (
        <Switch location={location}>
          <Route component={CardFlipGame} exact path={routes.initial} />
          <Redirect to="/" />
        </Switch>
    )
  }
}

const actions = {
}

const selector = createStructuredSelector({
})

export default connect(
  selector,
  actions
)(App)
