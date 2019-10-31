import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

class SignUpComponent extends Component {
	 render() {
    return (
    	<div>
    		<label htmlFor="fullname">Full name</label>
              <input className="form-styling" type="text" name="fullname" placeholder={"Fullname"} />
              <label htmlFor="email">Email</label>
              <input className="form-styling" type="text" name="email" placeholder={"Email"} />
              <label htmlFor="password">Password</label>
              <input className="form-styling" type="text" name="password" placeholder={"Password"} />
              <label htmlFor="confirmpassword">Confirm password</label>
              <input className="form-styling" type="text" name="confirmpassword" placeholder={"Confirm Password"} />
              <label htmlFor="mobileNumber">Mobile Number</label>
              <input className="form-styling" type="text" name="mobileNumber" placeholder={"Mobile Number"} />
              <a className="btn-signup">Sign Up</a>
              </div>
    	);
	}
}
export default SignUpComponent;