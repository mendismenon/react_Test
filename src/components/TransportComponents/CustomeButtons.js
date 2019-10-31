import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import ConfComponent from '../CommonComponents/ConfComponent';
import ExcelExportComponent from '../CommonComponents/ExcelExportComponent';

class CustomeButtons extends Component {
	constructor(props) {
			super(props);
			this.state = {"columnData":[],"tableData":{},fixedAlignment:false,checkBoxData:[false,false,false],
			showModal:false,addCustomer:false,showConfModal:false,compType:"",mainHead:"",msgContent:"","ExcelExport":false, "ExcelExported" : true}
			console.log("in CustomeButtons props :: "+JSON.stringify(props));
	}
	ImportClicked = (e) =>
	{
		debugger;
		e.preventDefault();
		if(this.state.ExcelExported)
		{
			this.setState({showConfModal:true,compType:"Q",mainHead:"Confirmation",msgContent:"Do you want the sample excel format for uploading customers?"})
		}
		else
		{
			this.showUploadCustMod();
		}
	}
	deleteBtnClicked = () =>
	{
		if(this.props.onCallbackBtnFn)
		{
			this.props.onCallbackBtnFn("Delete");
		}
	}
	addBtnClicked = () =>
	{
		if(this.props.onCallbackBtnFn)
		{
			this.props.onCallbackBtnFn("Add");
		}
	}
	closeConfModalState = (pstatus) =>
	{
		if(pstatus)
 		{
 			this.setState({showModal:true,compType:"I",mainHead:"Success",msgContent:"Selected customer(s) removed successfully .",showConfModal:false,"ExcelExport":true})	
 		}
 		else
 		{
 			this.setState({showConfModal:false})
 			this.showUploadCustMod();
 		}
 	}
 	showUploadCustMod = () => {
 		if(this.props.onCallbackBtnFn)
		{
			this.props.onCallbackBtnFn("Upload");
		}
 	}
 	exportedExcelFn = () =>
 	{
 		this.setState({"ExcelExport":true,"ExcelExported":false})
 	}
	render(){
			const isExportExcel = this.state.ExcelExport;
			const isExportExcelConfMod = this.state.ExcelExported;
			return(

				<div className="fltLft dispFlex">
				<button className="ui button" onClick={this.deleteBtnClicked}>
				    <i className="trash icon"></i>
				    Delete
				</button>
				<button className="ui button" onClick={this.addBtnClicked}>
				    <i className="plus icon"></i>
				    Add New
				</button>
				<button className="ui button" onClick={this.ImportClicked}>
				    <i className="upload icon"></i>
				    Import Transport
				</button>
				{	
					isExportExcelConfMod ? (
					<ConfComponent fromParent="custBtnsComp" openClose={this.state.showConfModal} compType={this.state.compType} mainHead={this.state.mainHead} content={this.state.msgContent} onCallbackConfModal={this.closeConfModalState}/>): (
			        <div></div>
			      )
				}
				{
					isExportExcel ? (
			        <ExcelExportComponent fromParent="custBtnsComp" afterExported={this.exportedExcelFn} sampleCustomerData={this.props.sampleCustomerData}/>
			      ) : (
			        <div></div>
			      )
				}
				</div>	
			)
		
	}
}
export default CustomeButtons