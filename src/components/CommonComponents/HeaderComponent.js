import React, { Component } from 'react';
import '../../css/common.css';
import { Redirect } from 'react-router';
//import jQuery from 'jquery'; //<-to import jqueryd
import 'bootstrap';

class HeaderComponent extends Component {
	constructor(props) {
			super(props);
			this.state = {"logoutClick":false}
		}
		logout = (e) =>
		{
			debugger;
			try{
			e.preventdefault(); }catch(e){}
			this.setState({logoutClick : true});
		}
		render()
		{
			if(this.state.logoutClick)
			{
				return <Redirect to={{
		            pathname: '/',
		            state: { id: '123' }
       			}} />
			}
			else{
			return (
					<div className="ui block header headerDivCls">
						<h3 className="headrTextCls">
						  Test Billing App
						</h3>
						<button className="ui red basic button logoutBtnCls" onClick={(e) => this.logout(e)}>Logout</button>
					</div>
				);
			}
		}
	}
	export default HeaderComponent