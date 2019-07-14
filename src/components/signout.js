import React, { Component } from 'react';
import signup from './signup';
import { BrowserRouter, Link } from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap';
import fireApp from '../firebase/config';
export default class login extends React.Component
{
	constructor(){
		super();
		this.state={
			status:true
		};
		this.handleSubmit=this.handleSubmit.bind(this);
	}
	handleSubmit(e){
		e.preventDefault();
		const auth=fireApp.auth();
		auth.signOut().then(() => {
		  this.setState({status:false})
		  this.forceUpdate();
		}).catch(function(error) {
		  console.log(error);
		});
  	}
 
  	render(){
  		if(!this.state.status)
   		{
   			return(
   				<div className="divStyle text dark_background">
   				<h3 style={{margin:"50px"}}> You have successfully logged out </h3>
   				</div>
   				);
   		}
   	else
   		{
	   		return(
	   			<div className="dark_background">
	   			<div>
	   			   	<h3 style={{marginLeft:"600px"}}> You have successfully logged in </h3>
	   			</div>

		        <div className="divStyle">
		        <label> 
				    <input type="button" 
		               name="Login" value="Signout" onClick={this.handleSubmit} className="submit"/>
		        </label>
		        </div>
		        </div>

			);
		}
	}
}
