import {connect} from "react-redux";
import {login} from "../../actions/session_actions";
import SessionForm from "./session_form";

const mSTP = (state, ownProps) =>{
  return {
    // loggedIn: (state.session.id === null) ? false : true,
    errors: state.errors.session.errors,
    formType: "Log in"
  };
};

const mDTP = (dispatch, ownProps) =>{
  return {
    processForm: (user) => dispatch(login(user))
  };
};

export default connect(mSTP, mDTP)(SessionForm);