import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mSTP = (state, ownProps) => {
  return {
    errors: state.errors.session.errors,
    loggedIn: (state.session.id === null) ? false : true,
    formType: "Sign up"
  };
};

const mDTP = (dispatch, ownProps) => {
  return {
    processForm: (user) => dispatch(signup(user))
  };
};

export default connect(mSTP, mDTP)(SessionForm);