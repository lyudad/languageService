import React, { PureComponent } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import * as routes from 'Constants/routes'

import Categories from './Pages/Categories'
import { Auth } from 'Components/Blocks'


class App extends PureComponent {

  render() {
    const { location } = this.props
    return (
        <Switch location={location}>
          <Route component={Auth} exact path={routes.initial} />
          <Redirect to="/" />
        </Switch>
    )
  }
}
// import { from } from 'rxjs'

const actions = {
}

const selector = createStructuredSelector({
  
})

export default connect(
  selector,
  actions
)(App)
