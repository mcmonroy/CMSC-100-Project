import React, { Component } from 'react';
import { Input, Button, Container } from 'semantic-ui-react';
import 'semantic-ui/dist/semantic.min.css';
import '../css/login.css'

class LogIn extends Component {
  constructor(props) {
  	super(props);

  	this.state = {
  		username: "",
  		password: ""
  	}
  	

  	this.handleUsernameChange = this.handleUsernameChange.bind(this);
  	this.handlePasswordChange = this.handlePasswordChange.bind(this);

  }

  handleUsernameChange(e) {
  	this.setState({username: e.target.value});
  }

  handlePasswordChange(e) {
  	this.setState({password: e.target.value});
  }


  render() {
    return (
      <div class="login">
	      <Container class="container">
	      	<InputField
	      		label="Username"
	      		changeHandler={this.handleUsernameChange}
	      		type="text"
	      		placeholder="Username"
	      	/>
	      	<InputField
	      		label="Password"
	      		changeHandler={this.handlePasswordChange}
	      		type="password"
	      		placeholder="Password"
	      	/>
	      	<LogInButton/>
	      </Container>
      </div>
    );
  }
}


class InputField extends Component {
	render() {
		return (
			<div>
				<label> {this.props.label} </label>
				<Input type={this.props.type}
					placeholder={this.props.placeholder}
					onChange={this.props.changeHandler} required
				/> 
			</div>
		);
	}
}

class LogInButton extends Component {
	render() {
		return (
			<div>
				<Button> LogIn </Button>
			</div>
		);
	}
}


export default LogIn;

