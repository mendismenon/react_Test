import React, { Component } from 'react';
import ConfComponent from '../CommonComponents/ConfComponent';
import InfoComponent from '../CommonComponents/InfoComponent';
import '../../css/dataTable.css';
const $ = require('jquery'); 
$.DataTable = require('datatables.net');
let g_changeHeightCheck = false;
//https://github.com/BorisKozo/react-datatables/tree/master/src
//https://medium.com/@zbzzn/integrating-react-and-datatables-not-as-hard-as-advertised-f3364f395dfa
class CustomerTableComponent extends Component {
	constructor(props) {
			super(props);
			this.state = {"columnData":[],"tableData":{},fixedAlignment:false,checkBoxData:[false,false,false],"showModal":false,"compType":"","mainHead":"","msgContent":"","showConfModal":false}
			console.log("in TableComponent props :: "+JSON.stringify(props));
	}
	componentWillMount()
	{
		g_changeHeightCheck = true;
	}
	componentDidMount(){
 		var self = this;
 		$('#mytable').DataTable({
		  "bAutoWidth": false,
		  "bDestroy": true,		
		  "fnDrawCallback": function() {		  		
            	self.forceUpdate();        	
          }, 
		});
 	}
 	componentWillReceiveProps(nextProps){
 		debugger;
 		if(nextProps.deleteCust)
 		{
 			this.deleteSelectCust();
 			if(this.props.onCallbackCustTable)
 			{
 				this.props.onCallbackCustTable();	
 			}
 		}
 	}
 	deleteSelectCust = () =>{
 		let lselectFlag = false;
 		for(let i=0;i<this.state.checkBoxData.length;i++)
 		{
 			if(this.state.checkBoxData[i])
 			{
 				lselectFlag = true;
 			}
 		}
 		if(lselectFlag == false)
 		{
 			this.setState({showModal:true,compType:"E",mainHead:"Error",msgContent:"Please select the customer(s)."})
 		}
 		else
 		{
 			//this.setState({showModal:true,compType:"I",mainHead:"Success",msgContent:"Selected customer(s) removed successfully ."})	
 			this.setState({showConfModal:true,compType:"T",mainHead:"Confirmation",msgContent:"Are you sure, do you want to delete the selected customer(s)?"})
 		}
 	}
 	closeModalState = () =>{
 		this.setState({showModal:false})
 	}
 	closeConfModalState = (pstatus) =>{
 		if(pstatus)
 		{
 			this.setState({showModal:true,compType:"I",mainHead:"Success",msgContent:"Selected customer(s) removed successfully .",showConfModal:false})	
 		}
 		else
 		{
 			this.setState({showConfModal:false})
 		}
 	}
 	componentDidUpdate(){
 		$('#mytable').DataTable({
		  "bAutoWidth": false,
		  "bDestroy": true,	
		});
		if(g_changeHeightCheck)
		{
			g_changeHeightCheck = false;
			let ldiffDivClac = $('#custTableId').offset().top - $('#customeBtnsId').offset().top;
			ldiffDivClac = ldiffDivClac + 40;
			$('.custmer_CustmBtn_Prnt_Div').attr('style','margin-top:'+ldiffDivClac+'px');
		}
 	}
 	selectAll = (e) =>
	{
		let lArr = [];
		if(e.target.checked)
		{
			for(let i=0;i<3;i++)
			{
				lArr[i] = true;
			}
		}
		else
		{
			for(let i=0;i<3;i++)
			{
				lArr[i] = false;
			}	
		}
		this.setState({checkBoxData:lArr})
	}
	currentSelect = (e) => {
		debugger;
		let lArrCount = parseInt(e.target.getAttribute('iptcount'));
		let lcheckedStatus = e.target.checked;
		let lstateStatus = this.state.checkBoxData;
		if(lcheckedStatus)
		{
			lstateStatus[lArrCount] = true;
		}
		else
		{
			lstateStatus[lArrCount] = false;
		}
		this.setState({checkBoxData:lstateStatus});
	}
	currentEdit = (e) => {
		let lArrCount = parseInt(e.target.getAttribute('iptcount'));
		if(this.props.onEditClick)
		{
			this.props.onEditClick();
		}
	}
 	render(){
 		var x = [];
 		let lcustNameArr = ["Darshan Tech","Jay Traders","Verma	Solutions"];
 		let loutStandPayArr = [54352.50,87539.21,0.00];
 		let lcontactNumArr = [9895673453,9385476534,8123764534];
 		let lcustTypeArr = ["Customer","Customer","Customer"];
 		let lstateArr = ["Tamil Nadu","Maharastra","Kerala"];
 		for(let i =0;i<lcustNameArr.length;i++)
 		{
 			x.push(
            <tr key={i+"_tr"}>
            <td key={i+"_ipt"} className="wid1per"><input iptcount={i} onClick={((e) => this.currentSelect(e))} checked={this.state.checkBoxData[i]} type="checkbox" className="iptTableCls" name="vehicle1" value="Bike" /> </td>
            <td key={i+"_custName"}>{lcustNameArr[i]}</td>
            <td key={i+"_otStand"}>{loutStandPayArr[i]}</td>
            <td key={i+"_contctNum"}>{lcontactNumArr[i]}</td>
            <td key={i+"_custType"}>{lcustTypeArr[i]}</td>
            <td key={i+"_state"}>{lstateArr[i]}</td>
            <td key={i+"_edit"}><button className="ui button" iptcount={i} onClick={((e) => this.currentEdit(e))}>
			    <i className="edit icon"></i>
			    Edit
			</button></td></tr>
        	)
 		}
 		return(
 			<div>
 				<table className="table table-bordered display cell-border custTable" id="mytable">
 				<thead>
						<tr className="" key="13">
							<th key="17" className="selectAllCustTable" ><input onClick={((e) => this.selectAll(e))} type="checkbox" name="vehicle1" value="Bike" className="iptTableCls"/> </th>
							<th key="14">Customer/Vendor Name</th>
							<th key="15">Outstanding Payment</th>
							<th key="16">Contact Number</th>
							<th key="20">Company Type</th>
							<th key="18">State</th>
							<th key="19">Action</th>
						</tr>	
					</thead>
					<tbody>
						{x}
					</tbody>
 				</table>
 				{<InfoComponent openClose={this.state.showModal} compType={this.state.compType} mainHead={this.state.mainHead} fromParent="custTabComp" content={this.state.msgContent} onCallbackModal={this.closeModalState}/>}
 				{<ConfComponent fromParent="custTabComp" openClose={this.state.showConfModal} compType={this.state.compType} mainHead={this.state.mainHead} content={this.state.msgContent} onCallbackConfModal={this.closeConfModalState}/>}
 			</div>
 		);
 	}
}
export default CustomerTableComponent