import React, { Component } from 'react';
export const invoiceOptFn = () => {
	 	let linvoiceOpt = {};
	 	linvoiceOpt.pagination = true;
	 	linvoiceOpt.tableTitle = "Invoice Options";
	 	linvoiceOpt.page = true;
	 	linvoiceOpt.parentCls = "OrgTblContentCls";
	 	linvoiceOpt.size = 10;
	 	linvoiceOpt.data = {
	 		"TableDtls":{}
	 	};
	 	let ltableHeadLbls = ["Bank Name","Bank IFSC","Account Number","Branch Name","VPA","Action"];
	 	let ltableheadAcces = ["bankName","bankIFSC","accNum","branchName","VPA","action"];
	 	linvoiceOpt.data.TableDtls.head=[];
	 	for(let i=0;i<ltableHeadLbls.length;i++)
	 	{
	 		linvoiceOpt.data.TableDtls.head[i] = {};
	 		linvoiceOpt.data.TableDtls.head[i].Header = ltableHeadLbls[i];
	 		linvoiceOpt.data.TableDtls.head[i].accessor = ltableheadAcces[i];
	 		linvoiceOpt.data.TableDtls.head[i].headerStyle = { whiteSpace: 'unset' };
	 		linvoiceOpt.data.TableDtls.head[i].style = { whiteSpace: 'unset' };
	 		if(i == ltableHeadLbls.length-1)
	 		{
	 			linvoiceOpt.data.TableDtls.head[i].id = 'click-me-button';
  				linvoiceOpt.data.TableDtls.head[i].render = ({ row }) => (<button onClick={(e) => this.handleButtonClick(e, row)}>Click Me</button>);
  				linvoiceOpt.data.TableDtls.head[i].Cell= (props) => <button onClick={(e) => this.handleButtonClick(e)}>Edit </button>
  			}
	 	}
	 	linvoiceOpt.data.TableDtls.data = [];
	 	for(let i=0;i<1;i++)
	 	{
	 		linvoiceOpt.data.TableDtls.data[i] = {};
	 		linvoiceOpt.data.TableDtls.data[i].bankName = "HDFC Bank";
		 	linvoiceOpt.data.TableDtls.data[i].bankIFSC = "ABC12345";
		 	linvoiceOpt.data.TableDtls.data[i].accNum = "567492746568";
		 	linvoiceOpt.data.TableDtls.data[i].branchName = "Koramangala";
		 	linvoiceOpt.data.TableDtls.data[i].VPA = "mendis@hdfcbank";
		 	linvoiceOpt.data.TableDtls.data[i].action = '';
	 	}
	 	let pageSizeOpt = [];
	 	let ldefltPagSize = false;
	 	if(linvoiceOpt.data.TableDtls.data.length > 0)
	 	{
		 	let lcount = 0;
		 	let maxPageSize = linvoiceOpt.data.TableDtls.data.length/5;
		 	for(let i=0;i<maxPageSize-1;i++)
		 	{
		 		lcount = lcount +5;
		 		ldefltPagSize = true;
		 		pageSizeOpt.push(lcount);
		 	}
		 	pageSizeOpt.push(linvoiceOpt.data.TableDtls.data.length);
		}
	 	linvoiceOpt.pageSizeOpt = pageSizeOpt;
	 	if(ldefltPagSize)
	 	{
	 		linvoiceOpt.defaultPagSize = 5;
	 	}
	 	else
	 	{
	 		linvoiceOpt.defaultPagSize = linvoiceOpt.data.TableDtls.data.length; 	
	 	}
	 	return linvoiceOpt;
	 }