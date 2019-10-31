import React, { Component } from 'react';
export const productOptFn = () =>
	 {
	 	let lprodtDtls = {};
	 	lprodtDtls.pagination = true;
	 	lprodtDtls.tableTitle = "Product Details";
	 	lprodtDtls.page = true;
	 	lprodtDtls.parentCls = "OrgTblContentCls";
	 	lprodtDtls.size = 10;
	 	lprodtDtls.data = {
	 		"TableDtls":{}
	 	};
	 	let ltableHeadLbls = ["Option Name","Status","Action"];
	 	let ltableheadAcces = ["optionName","status","action"];
	 	lprodtDtls.data.TableDtls.head=[];
	 	for(let i=0;i<ltableHeadLbls.length;i++)
	 	{
	 		lprodtDtls.data.TableDtls.head[i] = {};
	 		lprodtDtls.data.TableDtls.head[i].Header = ltableHeadLbls[i];
	 		lprodtDtls.data.TableDtls.head[i].accessor = ltableheadAcces[i];
	 		lprodtDtls.data.TableDtls.head[i].headerStyle = { whiteSpace: 'unset' };
	 		lprodtDtls.data.TableDtls.head[i].style = { whiteSpace: 'unset' };
	 		if(i == ltableHeadLbls.length-1)
	 		{
	 			lprodtDtls.data.TableDtls.head[i].id = 'click-me-button';
  				lprodtDtls.data.TableDtls.head[i].render = ({ row }) => (<button onClick={(e) => this.handleButtonClick(e, row)}>Click Me</button>);
  				lprodtDtls.data.TableDtls.head[i].Cell= (props) => <button onClick={(e) => this.handleButtonClick(e)}>Edit </button>
  			}
	 	}
	 	lprodtDtls.data.TableDtls.data = [];
	 	for(let i=0;i<1;i++)
	 	{
	 		lprodtDtls.data.TableDtls.data[i] = {};
	 		lprodtDtls.data.TableDtls.data[i].optionName = "Brand";
		 	lprodtDtls.data.TableDtls.data[i].status = "Currently Active";
		 	lprodtDtls.data.TableDtls.data[i].action = '';
	 	}
	 	let pageSizeOpt = [];
	 	let ldefltPagSize = false;
	 	if(lprodtDtls.data.TableDtls.data.length > 0)
	 	{
		 	let lcount = 0;
		 	let maxPageSize = lprodtDtls.data.TableDtls.data.length/5;
		 	for(let i=0;i<maxPageSize-1;i++)
		 	{
		 		lcount = lcount +5;
		 		ldefltPagSize = true;
		 		pageSizeOpt.push(lcount);
		 	}
		 	pageSizeOpt.push(lprodtDtls.data.TableDtls.data.length);
		}
	 	lprodtDtls.pageSizeOpt = pageSizeOpt;
	 	if(ldefltPagSize)
	 	{
	 		lprodtDtls.defaultPagSize = 5;
	 	}
	 	else
	 	{
	 		lprodtDtls.defaultPagSize = lprodtDtls.data.TableDtls.data.length; 	
	 	}
	 	return lprodtDtls;
	 }