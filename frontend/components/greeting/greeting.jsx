import React from "react";
import { Link } from "react-router-dom";
class Greeting extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    if(this.props.currentUser === undefined){
      return (<>
        <Link to="/signup/"> Signup </Link>
        <Link to="/login"> Login </Link>
      </>)
    }
    else{
      return (<>
        <h1>Welcome {this.props.currentUser.username}</h1>
        <button onClick={this.props.logout}>Logout</button>
      </>)
    }
  }
};
export default Greeting;