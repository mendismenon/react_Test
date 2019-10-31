import React, { Component } from 'react';


class Test extends Component {
	 constructor(props) {
	 	super(props);
	 	this.state = {"testdata" : "testData"}
	 	console.log(JSON.stringify(props));
	 }
	 render () {
	 	return (
	 			<div>TestDasta</div>
	 		);
	 }
	}
	export default Test