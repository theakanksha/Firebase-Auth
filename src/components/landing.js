import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default class login extends React.Component
{
  	render(){
   	return(

	    <div className="divStyle text">
		    <h2>Hey! Lets get started!</h2>
			<div>
			    <ul>
			     <div className="divStyle">
			      <li>
			       <h3>Have an account? <Link to={ROUTES.SIGN_IN}>Sign In</Link></h3>
			      </li>
			      <li>
			       <h3> Need an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link> </h3>
			      </li>	
			      </div>		      
			    </ul>
		  	</div>
	    </div>
		);
}
}
