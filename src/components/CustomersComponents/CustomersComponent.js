import React, { Component } from 'react';
import MenuComponent from '../CommonComponents/MenuComponent';
import HeaderComponent from '../CommonComponents/HeaderComponent';
import TableComponent from '../CommonComponents/TableComponent';
import SubIconHeaderComponent from '../CommonComponents/SubIconHeaderComponent';
import { Button, Select, Input, Icon } from 'semantic-ui-react'
import SearchInputComponent from './SearchInputComponent';
import CustomerTableComponent from './CustomerTableComponent';
import CustomeButtons from './CustomeButtons';
import AddCustComponent from './AddCustComponent';
import UploadCustComponent from '../CommonComponents/UploadComponent';
import SampleCustomerData from './sampleCustomerData.json';


class CustomersComponent extends Component {	
	constructor(props) {
		console.log('in cust');
	 	super(props);
	 	this.state = {"showList":"No", "menuDetails":{"parentClass":"ui compact vertical labeled icon menu menuContents"},"deleteCustomer":false,"addCustomer":false,"uploadCustomer":false,editCustomer:false}
	}
	showAllData = () =>
	{
		this.setState({"showList":"Yes"})
	}
	btnActionCustComp = (pflag) =>{
		debugger;
		if(pflag == "Delete")
		{
			console.log("in parent del");
			this.setState({"deleteCustomer":true})
		}
		else if(pflag == "Add")
		{
			console.log("in parent add");
			this.setState({"addCustomer":true,showList:"No"});
		}
		else if(pflag == "Upload")
		{
			console.log("in parent upld");
			this.setState({"uploadCustomer":true,showList:"No"});
		}
	}
	addCustomer = () =>
	{
		this.setState({addCustomer:false,showList:"Yes"});
	}
	editCustomer = () => {
		this.setState({"editCustomer":true,showList:"No"});
	}
	editCustomerSave = () => {
		this.setState({"editCustomer":false,showList:"Yes"});
	}
	onSaveCustomer = () => {
		this.setState({"uploadCustomer":false,showList:"Yes"})
	}
	custTableDtls = () =>{
		debugger;
		this.setState({"deleteCustomer":false})
	}
	addBackClicked = () =>{
		this.setState({"addCustomer":false,showList:"Yes",editCustomer:false,uploadCustomer:false})
	}
	render(){
		if(this.state.showList == "Yes")
		{
		 	return(
		 		<React.Fragment>
					<HeaderComponent />
					<div>
						<MenuComponent activeClass="Customers" menuDetails={this.state.menuDetails}/>
					</div>
					<div>
						<div className="searchCustCls_CustCmp_Parent">
							<div className="searchCustCls_CustCmp">
								<SubIconHeaderComponent icon="search" content="Search Customer / Vendor"/>
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
								<SubIconHeaderComponent icon="search" content="Customer / Vendor List"/>
							</div>
					    	<div>
							<CustomerTableComponent onCallbackCustTable={this.custTableDtls} deleteCust={this.state.deleteCustomer} onEditClick={this.editCustomer}/>
							</div>
							<div id="custTableId">
							</div>
						</div>
						</div>
						<div className="custmer_CustmBtn_Prnt_Div">
						<div className="tableParentCls_custComp" id="customeBtnsId">
							<CustomeButtons onCallbackBtnFn={this.btnActionCustComp} sampleCustomerData={SampleCustomerData}/>
						</div>
						</div>

					</div>
					{/*<TableComponent tableDataProps={this.state.customerDetails}/>*/}
				</React.Fragment>
		 	);
		}
		else if(this.state.addCustomer || this.state.uploadCustomer || this.state.editCustomer)
		{
			return (
				<React.Fragment>
					<HeaderComponent />
					<div>
						<MenuComponent activeClass="Customers" menuDetails={this.state.menuDetails}/>
					</div>
					{
						this.state.addCustomer ?
						(<div className="addCustCmpCls">
							<AddCustComponent onbackClicked={this.addBackClicked} onAddCust={this.addCustomer}/>
						</div>)
						: this.state.editCustomer ? 
						(<div className="addCustCmpCls">
							<AddCustComponent onbackClicked={this.addBackClicked} onEditCust={this.editCustomerSave} editCustomer="true" onAddCust={this.addCustomer}/>
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
						<MenuComponent activeClass="Customers" menuDetails={this.state.menuDetails}/>
					</div>
					<div>
						<div className="searchCustCls_CustCmp_Parent">
							<div className="searchCustCls_CustCmp">
								<SubIconHeaderComponent icon="search" content="Search Customer / Vendor"/>
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
export default CustomersComponent