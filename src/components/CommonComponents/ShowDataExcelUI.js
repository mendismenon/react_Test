import React, { Component } from 'react';
// SpreadJS imports
import '@grapecity/spread-sheets-react';
/* eslint-disable */
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css";
import { SpreadSheets, Worksheet, Column } from '@grapecity/spread-sheets-react';

class ShowDataExcelUI extends Component {

	constructor(props) {
	 	super(props);
	 	this.state = {"changedExcel":false,"excelData":[],showModal:false,compType:"",mainHead:"",content:""};
	 	console.log("Props in constructor :: "+JSON.stringify(props));
	 }
	 handleValueChanged = (e,obj) =>
	 {
	 	debugger;
	 	if(obj.sheet.getDataSource() != null)
	 	{
	 		console.log("chnaged sheet :: "+JSON.stringify(obj.sheet.getDataSource()));
	 		for(let i=0;i<this.state.excelData.sheets.length;i++)
	 		{
	 			if(this.state.excelData.sheets[i].sheetName === obj.sheetName)
	 			{
	 				let lsheetData = this.state.excelData;
	 				lsheetData.sheet[i].sheetData = obj.sheet.getDataSource();
	 				this.setState = ({"changedExcel":true,excelData:lsheetData});
	 			}
	 		}
	 	}
	 	else
	 	{
	 		if(this.props.onFailureCallBack)
	 		{
	 			this.props.onFailureCallBack("You cannot add a sheet here.");
	 		}
	 	}
	 }
	 closeModalState = () => {
	 	this.setState({showModal:false})
	 }
	 componentWillReceiveProps(nextProps)
	 {
	 	debugger;
	 	console.log("in next props :: "+nextProps);
	 	if(nextProps.sheetDroped)
	 	{
	 		this.setState({excelData:nextProps.excelData});
	 	}
	 }
		 /*excelData.sheets.map(object => {
			Object.keys(object.sheetData[0]).map(function(key)
					            	{ 
		   console.log("Key :: "+key); 
		});
		});*/
	 render(){
	 	debugger;
	 	let config = {
	        sheetName: '',
	        hostClass: ' spreadsheet',
	        autoGenerateColumns: false,
	        width: 200,
	        visible: true,
	        resizable: true,
	        priceFormatter: '$ #.00',
	        chartKey: 1
    	}
    	if(!this.props.excelData.excelData)
    	{
    		this.props.excelData.excelData = {};
    	}
    	let excelData = this.props.excelData;
    	console.log("Excel data in show data :: "+JSON.stringify(excelData));
    	if(!excelData.sheets)
    	{
    		excelData.sheets = [];
    	}
    	if(!this.props.sheetDroped)
    	{
    		return(
	 		<div> </div>)
    	}
    	else {
		 	return(
		 		<div>
			 		<SpreadSheets hostClass={config.hostClass} valueChanged={this.handleValueChanged}>
			 			{                                           
	                		excelData.sheets.map(object => {
				            	return(<Worksheet name={object.sheetName} dataSource={object.sheetData} autoGenerateColumns={config.autoGenerateColumns}>
				            	{
					            	Object.keys(object.sheetData[0]).map(function(key)
					            	{ 
						                
						                return(
						                	<Column width="auto" dataField={key} headerText={key}></Column>
						                )
						            })
						        }
					            </Worksheet>
					            )
					        })
				        }
					</SpreadSheets>
	       	 	</div>
		 	) 
		}
	 }
}
export default ShowDataExcelUI;