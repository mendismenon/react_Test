import React, { Component } from 'react';
export const InventoryOptionFn = () => {
	 	let linventryOpt = {};
	 	linventryOpt.pagination = true;
	 	linventryOpt.tableTitle = "Inventory Options";
	 	linventryOpt.page = true;
	 	linventryOpt.parentCls = "OrgTblContentCls";
	 	linventryOpt.size = 10;
	 	linventryOpt.data = {
	 		"TableDtls":{}
	 	};
	 	let ltableHeadLbls = ["Inventory Options","Status"];
	 	let ltableheadAcces = ["invntryOpt","status"];
	 	linventryOpt.data.TableDtls.head=[];
	 	for(let i=0;i<ltableHeadLbls.length;i++)
	 	{
	 		linventryOpt.data.TableDtls.head[i] = {};
	 		linventryOpt.data.TableDtls.head[i].Header = ltableHeadLbls[i];
	 		linventryOpt.data.TableDtls.head[i].accessor = ltableheadAcces[i];
	 		linventryOpt.data.TableDtls.head[i].headerStyle = { whiteSpace: 'unset' };
	 		linventryOpt.data.TableDtls.head[i].style = { whiteSpace: 'unset' };
	 		if(i == ltableHeadLbls.length-1)
	 		{
	 			linventryOpt.data.TableDtls.head[i].id = 'click-me-button';
  				linventryOpt.data.TableDtls.head[i].Cell= (props) => <text class="curPoint" onClick={(e) => this.handleButtonClick(e)}>Currently Active </text>
  			}
	 	}
	 	linventryOpt.data.TableDtls.data = [];
	 	for(let i=0;i<1;i++)
	 	{
	 		linventryOpt.data.TableDtls.data[i] = {};
	 		linventryOpt.data.TableDtls.data[i].invntryOpt = "Inventory Option";
		 	linventryOpt.data.TableDtls.data[i].action = '';
	 	}
	 	let pageSizeOpt = [];
	 	let ldefltPagSize = false;
	 	if(linventryOpt.data.TableDtls.data.length > 0)
	 	{
		 	let lcount = 0;
		 	let maxPageSize = linventryOpt.data.TableDtls.data.length/5;
		 	for(let i=0;i<maxPageSize-1;i++)
		 	{
		 		lcount = lcount +5;
		 		ldefltPagSize = true;
		 		pageSizeOpt.push(lcount);
		 	}
		 	pageSizeOpt.push(linventryOpt.data.TableDtls.data.length);
		}
	 	linventryOpt.pageSizeOpt = pageSizeOpt;
	 	if(ldefltPagSize)
	 	{
	 		linventryOpt.defaultPagSize = 5;
	 	}
	 	else
	 	{
	 		linventryOpt.defaultPagSize = linventryOpt.data.TableDtls.data.length; 	
	 	}
	 	return linventryOpt;
	 }