import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

class ForgotPassComponent extends Component {
	 render() {
    return (
    	<div className="frgtPassDiv">
    		<label htmlFor="fullname">Email</label>
              <input className="form-styling" type="text" name="fullname" placeholder={"Email"} />
              <a className="btn-signup">Forgot Password</a>
              </div>
    	);
	}
}
export default ForgotPassComponent;