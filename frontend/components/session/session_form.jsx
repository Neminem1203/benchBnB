import React from "react";
import {Redirect} from "react-router-dom";

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      username: "",
      password: "",
    };
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  updateField(field){
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }
  

  render(){
    // if (this.props.loggedIn) {return <Redirect to="/" />;}

    const errors = (this.props.errors) ? <h1> Errors: {this.props.errors[0]}</h1> : <></> ;
    return (
      <form className="session-form" onSubmit={this.handleSubmit}>
      <h1> User {this.props.formType} </h1>
        {errors}
      <input type="text" onChange={this.updateField("username")} placeholder="Username"/>
      <input type="password" onChange={this.updateField("password")} placeholder="Password"/>
      <button>{this.props.formType}</button>
    </form>
    );
  }
}
export default SessionForm;