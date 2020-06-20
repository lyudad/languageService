import { connect } from "react-redux";
import  {Auth}  from "Components/Blocks/Auth/Auth";
import { authAction } from "Redux/actions/auth";

const mapStateToProps = (store) => {};
const mapDispathToProps = {
  authUser: authAction,
};

export default connect(null, mapDispathToProps)(Auth);
