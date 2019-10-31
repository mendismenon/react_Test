import React, { Component } from 'react';
import MenuComponent from '../CommonComponents/MenuComponent';
import HeaderComponent from '../CommonComponents/HeaderComponent';
import TableComponent from '../CommonComponents/TableComponent';
import SubIconHeaderComponent from '../CommonComponents/SubIconHeaderComponent';
import EditOrgDtlsComponent from './EditOrgDtlsComponent';
import EditUserDtlsComponent from './EditUserDtlsComponent';
import EditInVoiceDtlsComponent from './EditInVoiceDtlsComponent';
import OrgTableComponent from './OrgTableComponent'; 
import UserTableComponent from './UserTableComponent';		
import InvoiceTableComponent from './InvoiceTableComponent';	

class SettingComponents extends Component {
	constructor(props) {
	 	super(props);
	 	this.state = {"orgnisationDtls":{},"menuDetails":{"parentClass":"ui compact vertical labeled icon menu setngMenuContents"},
	 		userDtls:{},invoiceOpt:{},inventryOpt:{},productOpt:{},editOrganisationDtls:false,editOrg:false,editUser:false,editInvoice:false}
	 }
	 loadAllDetails = () => {
	 	/*let lprodtDtls = productOptFn();
	 	let lorgDtls = loadOrgnisationDtlsFn();
	 	let lusrDtls = loadUserDtlsFn();
	 	let linvoiceOpt = invoiceOptFn();
	 	let linventryOpt = InventoryOptionFn();
	 	this.setState({orgnisationDtls:lorgDtls,userDtls:lusrDtls,invoiceOpt:linvoiceOpt,inventryOpt:linventryOpt,productOpt:lprodtDtls})*/
	 }
	 editOrgClick =() => {
	 	this.setState({editOrg:true});
	 }
	 saveOrgDtls = () => {
	 	this.setState({editOrg:false});
	 }
	 editUserClick = () => {
	 	this.setState({editUser:true});
	 }
	 saveUsrDtls = () => {
	 	this.setState({editUser:false});	
	 }
	 editInVoiceClick = () => {
	 	this.setState({editInvoice:true});
	 }
	 saveInvoiceDtls = () =>{
	 	this.setState({editInvoice:false});
	 }
	 componentWillMount()
	 {
	 	this.loadAllDetails();
	 }
	 render(){
	 	if(this.state.editOrg || this.state.editUser || this.state.editInvoice)
	 	{
	 		return(
		 		<React.Fragment>
					<HeaderComponent />
					<div>
						<MenuComponent activeClass="Setting" menuDetails={this.state.menuDetails}/>
					</div>
					{
						this.state.editOrg ? 
						(<div className="setEditDivCmp">
							<EditOrgDtlsComponent onEditClicked={this.saveOrgDtls} onbackClicked={this.backOrgDtls}/>
						</div>)
						: this.state.editUser ? 
						(
							<div className="setEditDivCmp">
								<EditUserDtlsComponent onEditClicked={this.saveUsrDtls} onbackClicked={this.backUsrDtls}/>
							</div>
						)
						:
						(<div className="setEditDivCmp">
							<EditInVoiceDtlsComponent onEditClicked={this.saveInvoiceDtls} onbackClicked={this.backUsrDtls}/>
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
						<MenuComponent activeClass="Setting" menuDetails={this.state.menuDetails}/>
					</div>
					<div>
					</div>
					<div className="searchCustCls_CustCmp_Parent">
					<div className="tableParentCls_custComp">
				    	<div className="searchCustCls_CustCmp">
							<SubIconHeaderComponent icon="bars" content="Organisation Details"/>
						</div>
				    	<div>
						<OrgTableComponent tableDataProps={this.state.orgnisationDtls} onEditClicked={this.editOrgClick} />
						</div>
						<div id="orgTableId">
						</div>
					</div>
					</div>
					<div id="userDtlsDiv" className="searchCustCls_CustCmp_Parent">
					<div className="tableParentCls_custComp">
				    	<div className="searchCustCls_CustCmp">
							<SubIconHeaderComponent icon="user circle" content="User Details"/>
						</div>
				    	<div>
						<UserTableComponent tableDataProps={this.state.orgnisationDtls} onEditClicked={this.editUserClick}/>
						</div>
						<div id="usrTableId">
						</div>
					</div>
					</div>
					<div id="invoiceDtlsDiv" className="searchCustCls_CustCmp_Parent">
					<div className="tableParentCls_custComp">
				    	<div className="searchCustCls_CustCmp">
							<SubIconHeaderComponent icon="money bill alternate outline" content="Invoice Options"/>
						</div>
				    	<div>
						<InvoiceTableComponent tableDataProps={this.state.orgnisationDtls} onEditClicked={this.editInVoiceClick}/>
						</div>
						<div id="invoiceTableId">
						</div>
					</div>
					</div>
					{/*<TableComponent tableDataProps={this.state.userDtls}/>
					<TableComponent tableDataProps={this.state.invoiceOpt}/>
					<TableComponent tableDataProps={this.state.inventryOpt}/>
					<TableComponent tableDataProps={this.state.productOpt}/>*/}
				</React.Fragment>
		 	);
		}
	 }
}
export default SettingComponents