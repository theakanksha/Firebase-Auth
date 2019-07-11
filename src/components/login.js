import React, { Component } from 'react';
import signup from './signup';
import { BrowserRouter, Link, Redirect } from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap';
import fireApp from '../firebase/config';
export default class login extends React.Component
{
	constructor(){
		super();
		this.state={
			email: '',
			password: '',
			status:''
		};
		this.handleSubmit=this.handleSubmit.bind(this);
		this.handlePasswordChange=this.handlePasswordChange.bind(this);
		this.handleEmailChange=this.handleEmailChange.bind(this);
	}
	handleEmailChange(e){

		this.setState({email: e.target.value});

	}
	handlePasswordChange(e){

		this.setState({password: e.target.value});

	}
	handleSubmit(e){
		e.preventDefault();
		const email= this.state.email;
		const password= this.state.password;
		const auth=fireApp.auth();
		console.log(email);
		auth.signInWithEmailAndPassword(email,password).then(() => {
			console.log("logged in");
			this.setState({status:"loggedIn"});
		}
    	)
  	}
 
  	render(){
  		if(this.state.status=="loggedIn")
  		{
  			return <Redirect to="/signout" />
  		}
  		else
  		{
		   	return(

			    <Container className="divStyle">
				<div className="divStyle">
				<h1>Log In</h1>
				<p> Need an account? <Link to="/signup"> Signup </Link> </p>
				<form onSubmit={this.handleSubmit}>
				<div className="divStyle">
				<label>
				Email: 
				    <input type="text" 
		               name="email" onChange={this.handleEmailChange}/>
		        </label>
		        </div>
		        <div className="divStyle">
		        <label>
				Password: 
				    <input type="password" 
		               name="password" onChange={this.handlePasswordChange}/>
		        </label>
		        </div>
		        <div className="divStyle">
		        <label> 
				    <input type="Submit" 
		               name="Login" className="submit"/>
		        </label>
		        </div>
				</form>
				</div>
				</Container>

				);
		}
	}
}
