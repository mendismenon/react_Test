import React, { Component } from 'react';
import { Button, Select, Input } from 'semantic-ui-react';
import InfoComponent from '../CommonComponents/InfoComponent';

const options = [
  { key: 'name', text: 'Name', value: 'name' },
  { key: 'contactNum', text: 'Contact Number', value: 'articles' }
]

class SearchInputComponent extends Component {
	constructor(props)
	{
		console.log("inside serach Const :: ");
		super(props);
		this.state = {"showModal":false,"compType":"_","mainHead":"","msgContent":""}
	}
	closeModalState = () =>
	{
		this.setState({"showModal":false,"compType":"E","mainHead":"Error","msgContent":"Customer/Vendor is not present. Kindly change the search criteria."});
	}
	searchCustFn  = (e) =>
	{
		e.preventDefault();
		console.log('b4 :: '+JSON.stringify(this.state));
		console.log("In search cust");
		this.setState({"showModal":true,"compType":"E","mainHead":"Error","msgContent":"Customer/Vendor is not present. Kindly change the search criteria."});
		console.log('after :: '+JSON.stringify(this.state));
	}
	render(){
		return(<div>
			<React.Fragment>
	  <Input type='text' placeholder={'Search using...'+this.state.compType} action>
	    <input />
	    <Select compact options={options} defaultValue='articles' />
	    <Button type='submit' onClick={this.searchCustFn}>Search</Button>
	  </Input>
	  <InfoComponent openClose={this.state.showModal} compType={this.state.compType} mainHead={this.state.mainHead} content={this.state.msgContent} onCallbackModal={this.closeModalState} fromParent="searchIptComp"/>
	  </React.Fragment> </div>
	  )
	}
}

export default SearchInputComponent