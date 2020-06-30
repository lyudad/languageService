import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import ProfilePage from "Components/Blocks/ProfilePage/ProfilePage";
import { getUser } from "Redux/selectors/profile";
import {
  editEmailAction,
  editUserNameAction,
  editPasswordAction,
} from "Redux/actions/profile";

const mapStateToProps = (store)=> ({
  user: store.auth.user,

});
// const selector = createStructuredSelector({
//   user: getUser,
// });

const mapDispathToProps = {
  editEmail: editEmailAction,
  editUserName: editUserNameAction,
  editPassword: editPasswordAction,
};

export default connect(mapStateToProps, mapDispathToProps)(ProfilePage);
