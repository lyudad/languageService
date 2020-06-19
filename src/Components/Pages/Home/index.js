import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {getContent} from 'Redux/selectors/homepage'

import {Home} from './Home'

const selector = createStructuredSelector({
    content: getContent
})

export default connect(selector)(Home)
