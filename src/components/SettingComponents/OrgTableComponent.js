import React, { Component } from 'react';
import ConfComponent from '../CommonComponents/ConfComponent';
import InfoComponent from '../CommonComponents/InfoComponent';
import '../../css/dataTable.css';
const $ = require('jquery'); 
$.DataTable = require('datatables.net');
let g_changeHeightCheck = false;
//https://github.com/BorisKozo/react-datatables/tree/master/src
//https://medium.com/@zbzzn/integrating-react-and-datatables-not-as-hard-as-advertised-f3364f395dfa
class OrgTableComponent extends Component {
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
 		$('#orgtable').DataTable({
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
 	closeModalState = () =>{
 		this.setState({showModal:false})
 	}
 	currentOrgEdit = () =>{
 		if(this.props.onEditClicked)
 		{
 			this.props.onEditClicked();
 		}
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
 		$('#orgtable').DataTable({
		  "bAutoWidth": false,
		  "bPaginate": false,
		  "bInfo": false,
		  "bDestroy": true,	
		  "bFilter": false
		});
		/*if(g_changeHeightCheck)
		{
			g_changeHeightCheck = false;
			let ldiffDivClac = $('#custTableId').offset().top - $('#customeBtnsId').offset().top;
			ldiffDivClac = ldiffDivClac + 40;
			$('.custmer_CustmBtn_Prnt_Div').attr('style','margin-top:'+ldiffDivClac+'px');
		}*/
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
 		let lcmpnyName = ["Test Pvt Ltd"];
 		let lpanCard = ["BHTPA6427M"];
 		let lgstNum = ["123345467"];
 		let laddress = ["#43, 3rd main, Tavarekare"];
 		let lpincode = ["560029"];
 		let lstate = ["Karnataka"];
 		let lcity = ["Bangalore"];
 		for(let i =0;i<lcmpnyName.length;i++)
 		{
 			x.push(
            <tr key={i+"_tr"}>
            <td key={i+"_custName"}>{lcmpnyName[i]}</td>
            <td key={i+"_otStand"}>{lpanCard[i]}</td>
            <td key={i+"_contctNum"}>{lgstNum[i]}</td>
            <td key={i+"_custType"}>{laddress[i]}</td>
            <td key={i+"_pin"}>{lpincode[i]}</td>
            <td key={i+"_state"}>{lstate[i]}</td>
            <td key={i+"_scity"}>{lcity[i]}</td>
            <td key={i+"_edit"}><button className="ui button" iptcount={i} onClick={((e) => this.currentOrgEdit(e))}>
			    <i className="edit icon"></i>
			    Edit
			</button></td></tr>
        	)
 		}
 		return(
 			<div>
 				<table className="table table-bordered display cell-border custTable" id="orgtable">
 				<thead>
						<tr className="" key="13">
							<th key="14">Company Name</th>
							<th key="15">Pancard</th>
							<th key="16">GST NO.</th>
							<th key="20">Address</th>
							<th key="18">Pincode</th>
							<th key="19">State</th>
							<th key="22">City</th>
							<th key="21">Action</th>
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
export default OrgTableComponent