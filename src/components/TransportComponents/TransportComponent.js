import React, { Component } from 'react';
import MenuComponent from '../CommonComponents/MenuComponent';
import HeaderComponent from '../CommonComponents/HeaderComponent';
import TableComponent from '../CommonComponents/TableComponent';
import SubIconHeaderComponent from '../CommonComponents/SubIconHeaderComponent';
import { Button, Select, Input, Icon } from 'semantic-ui-react'

import SearchInputComponent from './SearchInputComponent';
import TransportTableComponent from './TransportTableComponent';
import CustomeButtons from './CustomeButtons';
import SampleTransportData from './sampleTransportData.json';
import UploadCustComponent from '../CommonComponents/UploadComponent';
import AddTransComponent from './AddTransComponent';
/*import SearchInputComponent from './SearchInputComponent';	TransportTableComponent
import CustomerTableComponent from './CustomerTableComponent';
import CustomeButtons from './CustomeButtons';
import AddTransComponent from './AddTransComponent';
import UploadCustComponent from '../CommonComponents/UploadComponent';
import SampleCustomerData from './sampleCustomerData.json';*/


class TransportComponent extends Component {	
	constructor(props) {
		console.log('in cust');
	 	super(props);
	 	this.state = {"showList":"No", "menuDetails":{"parentClass":"ui compact vertical labeled icon menu menuContents"},"deleteTransport":false,"addTransport":false,"uploadTransport":false,editTransport:false}
	}
	showAllData = () =>
	{
		this.setState({"showList":"Yes"})
	}
	btnActionComp = (pflag) =>{
		debugger;
		if(pflag == "Delete")
		{
			console.log("in parent del");
			this.setState({"deleteTransport":true})
		}
		else if(pflag == "Add")
		{
			console.log("in parent add");
			this.setState({"addTransport":true,showList:"No"});
		}
		else if(pflag == "Upload")
		{
			console.log("in parent upld");
			this.setState({"uploadTransport":true,showList:"No"});
		}
	}
	addCustomer = () =>
	{
		this.setState({"addTransport":false,editTransport:false,addTransport:false,showList:"Yes"});
	}
	editTransport = () => {
		this.setState({"editTransport":true,showList:"No"});
	}
	editCustomerSave = () => {
		this.setState({"editTransport":false,showList:"Yes"});
	}
	onSaveCustomer = () => {
		this.setState({"uploadTransport":false,showList:"Yes"})
	}
	transTableDtls = () =>{
		debugger;
		this.setState({"deleteTransport":false})
	}
	addBackClicked = () =>{
		this.setState({"addTransport":false,editTransport:false,addTransport:false,showList:"Yes"})
	}
	render(){
		if(this.state.showList == "Yes")
		{
		 	return(
		 		<React.Fragment>
					<HeaderComponent />
					<div>
						<MenuComponent activeClass="Transport" menuDetails={this.state.menuDetails}/>
					</div>
					<div>
						<div className="searchCustCls_CustCmp_Parent">
							<div className="searchCustCls_CustCmp">
								<SubIconHeaderComponent icon="search" content="Search Transport"/>
							</div>
							<div>
								<SearchInputComponent resetState=""/>
								 <Button icon labelPosition='right' onClick={this.showAllData}>
							      Show All Data
							      <Icon name='right arrow' />
							    </Button>
						    </div>
						</div>
						<div className="searchCustCls_CustCmp_Parent martop20Per">
						<div className="tableParentCls_custComp">
					    	<div className="searchCustCls_CustCmp">
								<SubIconHeaderComponent icon="search" content="Transport List"/>
							</div>
					    	<div>
							<TransportTableComponent onCallbackCustTable={this.transTableDtls} deleteCust={this.state.deleteTransport} onEditClick={this.editTransport}/>
							</div>
							<div id="custTableId">
							</div>
						</div>
						</div>
						<div className="custmer_CustmBtn_Prnt_Div">
						<div className="tableParentCls_custComp" id="customeBtnsId">
							<CustomeButtons onCallbackBtnFn={this.btnActionComp} sampleCustomerData={SampleTransportData}/>
						</div>
						</div>

					</div>
				</React.Fragment>
		 	); 
		}
		else if(this.state.addTransport || this.state.uploadTransport || this.state.editTransport)
		{
			return (
				<React.Fragment>
					<HeaderComponent />
					<div>
						<MenuComponent activeClass="Transport" menuDetails={this.state.menuDetails}/>
					</div>
					{
						this.state.addTransport ?
						(<div className="addCustCmpCls">
							<AddTransComponent onbackClicked={this.addBackClicked} onAddComponent={this.addCustomer}/>
						</div>)
						: this.state.editTransport ? 
						(<div className="addCustCmpCls">
							<AddTransComponent onbackClicked={this.addBackClicked} onEditCust={this.editCustomerSave} editFlag="true" onAddComponent={this.addCustomer}/>
						</div>)
						: 
						(<div className="uploadCustCmpCls">
							<UploadCustComponent onbackClicked={this.addBackClicked} onSaveData={this.onSaveCustomer}/>
						</div>)
					}
				</React.Fragment>
			);
		}
		else
		{
		 	return(
		 		<React.Fragment>
					<HeaderComponent />
					<div>
						<MenuComponent activeClass="Transport" menuDetails={this.state.menuDetails}/>
					</div>
					<div>
						<div className="searchCustCls_CustCmp_Parent">
							<div className="searchCustCls_CustCmp">
								<SubIconHeaderComponent icon="search" content="Search Transport"/>
							</div>
							<div>
								<SearchInputComponent />
								 <Button icon labelPosition='right' onClick={this.showAllData}>
							      Show All Data
							      <Icon name='right arrow' />
							    </Button>
						    </div>
						</div>
						
					</div>
					{/*<TableComponent tableDataProps={this.state.customerDetails}/>*/}
				</React.Fragment>
		 	);
		}
	 }
}
export default TransportComponent