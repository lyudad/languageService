import {connect} from 'react-redux'

import {Home} from './Home'
import {ShowContentAction} from "../../../Redux/actions/homepage.actions"

const actions =  {
    ShowContentAction
}


 
export const HomePage = connect (null, actions)(Home)