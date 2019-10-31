import React, { Component } from 'react';
import '../../css/common.css';
//import jQuery from 'jquery'; //<-to import jqueryd
import 'bootstrap';
import { Redirect } from 'react-router';

let gflag = false;
class MenuComponent extends Component {
	constructor(props) {
	 	super(props);
	 	this.state = {"testdata" : "testData",menuContents:[
	 		{
	 			name:"Dashboard",
	 			icon:"home icon",
	 		},
	 		{
	 			name:"Setting",
	 			icon:"cog icon"
	 		},
	 		{
	 			name:"Customers",
	 			icon:"users icon"
	 		},
	 		{
	 			name:"Transport",
	 			icon:"truck icon"
	 		},
	 		{
	 			name:"Products",
	 			icon:"boxes icon"
	 		},
	 		{
	 			name:"Stock",
	 			icon:"cubes icon"
	 		},
	 		{
	 			name:"Sales Invoice",
	 			icon:"print icon"
	 		},
	 		{
	 			name:"Purchase Invoice",
	 			icon:"print icon"
	 		},
	 		{
	 			name:"Delivery Challan",
	 			icon:"print icon"
	 		},
	 		{
	 			name:"Export",
	 			icon:"upload icon"
	 		},
	 		{
	 			name:"GST Filling",
	 			icon:"sync icon"
	 		}
	 	],"currMenuSel":""}
	 	console.log("Props in menu constructor :: "+JSON.stringify(props));
	 }
	 componentWillMount()
	 {
	 	//console.log("inside componentWillMount :: "+JSON.stringify(this.props));
	 	var lmenuArr = this.state.menuContents.slice();
	 	lmenuArr.map((item,key) => {
	 		if(this.props.activeClass === item.name)
	 		{
	 			item.activeClass = "active";
	 		}
	 		else
	 		{
	 			item.activeClass = "";
	 		}
	 	});
	 	//console.log("Menu Contents :: "+JSON.stringify(lmenuArr[0]));
	 }
	 menuSelected = (e,pdata) =>
	 {
	 	console.log("Menu Selected :: "+JSON.stringify(pdata));
	 	gflag = true;
	 	if(pdata.name === "Dashboard")
	 	{
	 		this.setState({"currMenuSel":"/Dashboard"});
	 	}
	 	else if(pdata.name === "Setting")
	 	{
	 		this.setState({"currMenuSel":"/Setting"});
	 	}
	 	else if(pdata.name === "Customers")
	 	{
	 		this.setState({"currMenuSel":"/Customers"});
	 	}
	 	else if(pdata.name === "Transport")
	 	{
	 		this.setState({"currMenuSel":"/Transport"});
	 	}
	 }	
	 render () {
	 	if(gflag)
	 	{
	 		gflag = false;
	 		return (<Redirect to={{
	            pathname: this.state.currMenuSel,
	            state: { id: '123' }
	   		}} />);
	 	}
	 	else {
	 		return (
	 		 	<div className={this.props.menuDetails.parentClass}>
	 		 	{
		 		 	this.state.menuContents.map((item,key) =>{
		 		 		//console.log("Item :: "+JSON.stringify(item) +" and key :: "+key);
		 		 		 return (<a className={"item "+ item.activeClass} key={key} 
		 		 		 				onClick={((e) => this.menuSelected(e, item))}>
				         	 	<i className={item.icon} />
				          			{item.name}
				        	</a>	
		        		)
		 		 	})
		 		}
		      </div>
	 		);
	 	}
 	}	
}
export default MenuComponent