import React, { Component } from 'react';
import { BrowserRouter,Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import {Container, Row, Col} from 'react-bootstrap';
import fireApp from '../firebase/config';

export default class signup extends React.Component{
	constructor(){
		super();
		this.state={
				password : "",
				email: "",
				status: false
		};
		this.handlePasswordChange=this.handlePasswordChange.bind(this);
		this.handleEmailChange=this.handleEmailChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
	}

	handleEmailChange(e){
		this.setState({email: e.target.value});
	}

	handlePasswordChange(e){   
		this.setState({password: e.target.value});
	}


	handleSubmit(e){
		e.preventDefault();
		const data = {
			email: this.state.email,
			password: this.state.password,
		}
		const auth=fireApp.auth();
		console.log("Hey");
		console.log(data);
		return auth.createUserWithEmailAndPassword(data.email,data.password).then((data) => {
			console.log("User successfully created", data);
			this.setState({status: true});
			this.forceUpdate();
		}
		)
	}
  
   render(){
   	if(this.state.status){
		    return <Redirect to='/signin'  />
		 }
    else{
	   	return(
		    <Container className="divStyle dark_background">
			<div className="divStyle">
			<h2> Sign Up </h2>
			<h3> Hello! We are glad to have you on board. </h3>
			<form onSubmit={this.handleSubmit}>
			<div className="divStyle">
			<label>
			Email: 
			    <input type="email" 
	               name="email" onChange={this.handleEmailChange}/>
	        </label>
	        </div>
	        <div className="divStyle">
	        <label>
			Password: 
			    <input type="password" name="password" onChange={this.handlePasswordChange} value={this.state.password}/>
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