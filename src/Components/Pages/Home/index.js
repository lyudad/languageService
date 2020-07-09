import {connect} from 'react-redux'

import { createStructuredSelector } from 'reselect'
import {Home} from './Home'
import {getContent} from "Redux/selectors/homepage"

const selector = createStructuredSelector({
    content: getContent,
})

export default connect(selector)(Home)

