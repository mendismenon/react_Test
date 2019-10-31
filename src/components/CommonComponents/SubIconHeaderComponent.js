import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react';

class SubIconHeaderComponent extends Component {
	constructor(props) {
		console.log('in cust');
	 	super(props);
	 	this.state = {"customerDetails":{}, "menuDetails":{"parentClass":"ui compact vertical labeled icon menu menuContents"}}
	}
	render(){
	 	return(
	 		<Header as='h2' icon={this.props.icon} content={this.props.content} />
	 	);
	 }
}
export default SubIconHeaderComponent