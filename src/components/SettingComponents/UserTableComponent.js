import React, { Component } from 'react';
import ConfComponent from '../CommonComponents/ConfComponent';
import InfoComponent from '../CommonComponents/InfoComponent';
import '../../css/dataTable.css';
const $ = require('jquery'); 
$.DataTable = require('datatables.net');
let g_changeHeightCheck = false;
//https://github.com/BorisKozo/react-datatables/tree/master/src
//https://medium.com/@zbzzn/integrating-react-and-datatables-not-as-hard-as-advertised-f3364f395dfa
class UserTableComponent extends Component {
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
 		$('#usrtable').DataTable({
		  "bAutoWidth": false,
		  "bDestroy": true,		
		  "bPaginate": false,
		  "bInfo": false,
		  "bFilter": false,
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
 		$('#usrtable').DataTable({
		  "bAutoWidth": false,
		  "bPaginate": false,
		  "bDestroy": true,	
		  "bInfo": false,
		  "bFilter": false
		});
		if(g_changeHeightCheck)
		{
			g_changeHeightCheck = false;
			let ldiffDivClac = $('#orgTableId').offset().top - $('#userDtlsDiv').offset().top;
			ldiffDivClac = ldiffDivClac + 110;
			$('#userDtlsDiv').attr('style','margin-top:'+ldiffDivClac+'px');
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
		console.log("Edit user data click");
		let lArrCount = parseInt(e.target.getAttribute('iptcount'));
		if(this.props.onEditClicked)
		{
			this.props.onEditClicked();
		}
	}
 	render(){
 		var x = [];
 		let luserId = ["mendis007"];
 		let luserName = ["Mendis Menon"];
 		let lphone = ["9900124433"];
 		let lemail = ["mendismenon@gmail.com"];
 		let lpassword = ["******"];
 		for(let i =0;i<luserId.length;i++)
 		{
 			x.push(
            <tr key={i+"_tr"}>
            <td key={i+"luserId"}>{luserId[i]}</td>
            <td key={i+"luserName"}>{luserName[i]}</td>
            <td key={i+"lphone"}>{lphone[i]}</td>
            <td key={i+"lemail"}>{lemail[i]}</td>
            <td key={i+"lpassword"}>{lpassword[i]}</td>
            <td key={i+"_edit"}><button className="ui button" iptcount={i} onClick={((e) => this.currentEdit(e))}>
			    <i className="edit icon"></i>
			    Edit
			</button></td></tr>
        	)
 		}
 		return(
 			<div>
 				<table className="table table-bordered display cell-border custTable" id="usrtable">
 				<thead>
						<tr className="" key="13">
							<th key="14">User ID</th>
							<th key="15">User Name</th>
							<th key="16">Phone</th>
							<th key="20">Email</th>
							<th key="18">Password</th>
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
export default UserTableComponent