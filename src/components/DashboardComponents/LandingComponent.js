import React, { Component } from 'react';
import '../../css/LandingComponent.css';
import RegisterComponent from './RegisterComponent';
import InvoiceSummary from './InvoiceSummary';
import AccntSummAndInvce from './AccntSummAndInvce';
import MenuComponent from '../CommonComponents/MenuComponent';
import HeaderComponent from '../CommonComponents/HeaderComponent';
import ChartComponent from '../CommonComponents/ChartComponent';
import TableComponent from '../CommonComponents/TableComponent';
import { Context } from '../CommonComponents/ContextProvider';
//import $ from 'jquery'; 
//import jQuery from 'jquery'; //<-to import jqueryd
import 'bootstrap';


class LandingComponent extends Component {
	 constructor(props) {
	 	super(props);
	 	this.state = {g_gobj:{},"testdata" : "testData","RegisterComponent":true,invoiceCountChrt:{},invoiceCountChrtLd:"Not Loaded",
	 		amountCountChart:"",summaryDtls:{},tableprops:{},"menuDetails":{"parentClass":"ui compact vertical labeled icon menu menuContents"}}
	 	console.log("Props in constructor :: "+JSON.stringify(props));
	 }
	 loadTableProps = () =>
	 {
	 	var ltblProps = {};
	 	ltblProps.pagination = true;
	 	ltblProps.tableTitle = "Invoice Due";
	 	ltblProps.page = true;
	 	ltblProps.parentCls = "TableContentCls";
	 	ltblProps.size = 10;
	 	ltblProps.data = {
	 		"TableDtls":{}
	 	};
	 	let ltableHeadLbls = ["Invoice NO.","Company Name","Name","Mobile Number","Due Date","Payment","Action"];
	 	let ltableheadAcces = ["invoiveId","companyName","name","phone","dueDate","payment","action"];
	 	ltblProps.data.TableDtls.head=[];
	 	for(let i=0;i<ltableHeadLbls.length;i++)
	 	{
	 		ltblProps.data.TableDtls.head[i] = {};
	 		ltblProps.data.TableDtls.head[i].Header = ltableHeadLbls[i];
	 		ltblProps.data.TableDtls.head[i].accessor = ltableheadAcces[i];
	 		ltblProps.data.TableDtls.head[i].headerStyle = { whiteSpace: 'unset' };
	 		ltblProps.data.TableDtls.head[i].style = { whiteSpace: 'unset' };
	 		if(i == ltableHeadLbls.length-1)
	 		{
	 			ltblProps.data.TableDtls.head[i].id = 'click-me-button';
  				ltblProps.data.TableDtls.head[i].render = ({ row }) => (<button onClick={(e) => this.handleButtonClick(e, row)}>Click Me</button>);
  				ltblProps.data.TableDtls.head[i].Cell= (props) => <button onClick={(e) => this.handleButtonClick(e)}>Edit </button>
  			}
	 	}
	 	ltblProps.data.TableDtls.data = [];
	 	for(let i=0;i<39;i++)
	 	{
	 		ltblProps.data.TableDtls.data[i] = {};
	 		ltblProps.data.TableDtls.data[i].invoiveId = "ID_"+i;
		 	ltblProps.data.TableDtls.data[i].companyName = "CompanyName_"+i;
		 	ltblProps.data.TableDtls.data[i].name = "Name_"+i;
		 	ltblProps.data.TableDtls.data[i].phone = "Mobile Number_"+i;
		 	ltblProps.data.TableDtls.data[i].dueDate = "Due Date_"+i;
		 	ltblProps.data.TableDtls.data[i].payment = "Payment_"+i;
		 	ltblProps.data.TableDtls.data[i].action = '';
	 	}
	 	let pageSizeOpt = [];
	 	let ldefltPagSize = false;
	 	if(ltblProps.data.TableDtls.data.length > 0)
	 	{
		 	let lcount = 0;
		 	let maxPageSize = ltblProps.data.TableDtls.data.length/5;
		 	for(let i=0;i<maxPageSize-1;i++)
		 	{
		 		lcount = lcount +5;
		 		ldefltPagSize = true;
		 		pageSizeOpt.push(lcount);
		 	}
		 	pageSizeOpt.push(ltblProps.data.TableDtls.data.length);
		}
	 	ltblProps.pageSizeOpt = pageSizeOpt;
	 	if(ldefltPagSize)
	 	{
	 		ltblProps.defaultPagSize = 5;
	 	}
	 	else
	 	{
	 		ltblProps.defaultPagSize = ltblProps.data.TableDtls.data.length; 	
	 	}
	 	return ltblProps;
	 }
	 submitRegisterFn = (props) =>
	 {
	 	console.log('in submitReg :: '+JSON.stringify(props));
	 	//this.setState({"RegisterComponent":false})
	 	this.loadChartDtlsFn();
	 }
	 loadDashboardDtls = () =>
	 {
	 	// total prdts, total customers, ttle sales invoice, total pruchase invoise, ttle sales amnt, total pruchase amt
	 	let ldtls = {
	 		"totalProducts": 100,
	 		"totalCustomers": 30,
	 		"totalSalesInvoice":54,
	 		"totalPurchaseInvoice":67,
	 		"totalSalesAmount":568384,
	 		"totalPurchaseAmount":647433
	 	}
	 	return ldtls;
	 }
	 loadChartDtlsFn = () =>
	 {
	 	let lamtChrtSummDtls = this.loadInvoiceAmntSummryChrt();
	 	console.log('inside loadChartDtlsFn, lamtChrtSummDtls :: '+JSON.stringify(lamtChrtSummDtls));
	 	let lloadDashBrdDtls = this.loadDashboardDtls();
	 	console.log("Dashboard Dtls :: "+lloadDashBrdDtls);
	 	let ltableProps = this.loadTableProps();
	 	console.log("Table Dtls :: "+ltableProps);
	 	let invoiceChartDtls = {};
		invoiceChartDtls.width = "520px";
		invoiceChartDtls.height = "450px";
		invoiceChartDtls.chartType = "Bar";
		invoiceChartDtls.data={lchrtData:[{'Year':'Year', 'Purchase':'Purchase', 'Sales':'Sales'},
		{'Year':'2014', 'Purchase':1000, 'Sales':400},
		{'Year':'2015', 'Purchase':1170, 'Sales':460},
		{'Year':'2016', 'Purchase':660, 'Sales':1120}]};
        invoiceChartDtls.options = {
          // Material design options
          chart: {
            title: 'Invoice Count Summary',
            subtitle: 'Sales, Purchase: 2014-2017',
          },
        };
        invoiceChartDtls.chartParentDivCls = "chartparentCls";
        this.setState({invoiceCountChrt:invoiceChartDtls, "RegisterComponent":false,amountCountChart:lamtChrtSummDtls,
    		summaryDtls:lloadDashBrdDtls,tableprops:ltableProps});
        console.log('StateObj :: '+JSON.stringify(this.state));
	 }
	 loadInvoiceAmntSummryChrt = () =>
	 {
	 	console.log('inside loadInvoiceAmntSummryChrt');
	 	let lamnrChrtChartDtls = {};
		lamnrChrtChartDtls.width = "520px";
		lamnrChrtChartDtls.height = "450px";
		lamnrChrtChartDtls.chartType = "Line";
		lamnrChrtChartDtls.data={lchrtData:[{'Year':'Year', 'Purchase':'Purchase', 'Sales':'Sales'},
		{'Year':'2017', 'Purchase':1000, 'Sales':400},
		{'Year':'2018', 'Purchase':1170, 'Sales':460},
		{'Year':'2019', 'Purchase':660, 'Sales':1120}]};
        lamnrChrtChartDtls.options = {
		    hAxis: {
		      title: 'Year',
		    },
		    vAxis: {
		      title: 'Amount',
		    },
		    series: {
		      1: { curveType: 'function' },
		    },
		    chart: {
	            title: 'Invoice Amount Summary',
	            subtitle: 'Sales, Purchase: 2017-2019',
	        },
		};
        lamnrChrtChartDtls.chartParentDivCls = "chartparentCls";
        return lamnrChrtChartDtls;
	 }
	 componentWillMount()
	 {

	 	console.log('StateObj b4 :: '+JSON.stringify(this.state));
	 	let g_State = this.context;
	 	if(g_State && g_State.g_objDtls.registerUser)
 		{
 			if(this.state.invoiceCountChrtLd === "Not Loaded")
 			{
 				this.loadChartDtlsFn();
 			}
 		}
	 }
	/* componentDidUpdate()
	 {
	 	if(this.state.invoiceCountChrtLd === "Not Loaded")
		{
			this.loadChartDtlsFn();
		}
	 }*/
	 render () {
	 	console.log("inside render LP :: "+JSON.stringify(this.context));
	 	let g_State = this.context;
	 	if(g_State.g_objDtls.registerUser === false)
 		{
 			return (
  				<RegisterComponent onSubmitRegister={this.submitRegisterFn}/>
			);
		}
	 	else
	 	{
	 		return (
	 				<React.Fragment>
		 				<HeaderComponent />
		 				<div>
		      				<MenuComponent activeClass="Dashboard" menuDetails={this.state.menuDetails}/>
		      				<AccntSummAndInvce summaryDtls={this.state.summaryDtls}/>
		      				<InvoiceSummary summaryDtls={this.state.summaryDtls}/>
		      				<div className="alignChartsCls">
			      				<ChartComponent chartProps={this.state.invoiceCountChrt}/>
			      				<ChartComponent chartProps={this.state.amountCountChart}/>
		      				</div>
		      				<TableComponent tableDataProps={this.state.tableprops}/>
	      				</div>
	      			</React.Fragment>
    			);
	 	}
	}
}
LandingComponent.contextType = Context;
export default LandingComponent