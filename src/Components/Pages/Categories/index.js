import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { setHeaderCat } from 'Redux/actions/main'

import { getIndustries } from 'Redux/selectors/industries'

import Component from './Categories'

const selector = createStructuredSelector({
  industries: getIndustries,
})

const actions = {
  onSetHeaderCat: setHeaderCat,
}

export default connect(
  selector,
  actions
)(Component)
