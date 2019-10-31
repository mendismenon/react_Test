import React, { Component } from 'react';
//import Table from 'react-responsive-data-table';
//import DataTable from 'react-data-table-component';
import ReactTable from 'react-table';

class TableComponent extends Component {
	constructor(props) {
			super(props);
			this.state = {"columnData":[],"tableData":{},fixedAlignment:false}
			console.log("in TableComponent props :: "+JSON.stringify(props));
		}
		componentWillMount()
		{
			console.log("Header Data :: "+JSON.stringify(this.props.tableDataProps.data.TableDtls.head));
			console.log("Table Body Data :: "+JSON.stringify(this.props.tableDataProps.data.TableDtls.data));
			this.setState({"columnData":this.props.tableDataProps.data.TableDtls.head,"tableData":this.props.tableDataProps.data.TableDtls.data})
		}
		render(){
			return (  
				<div style={{ padding: '50px' }} className={this.props.tableDataProps.parentCls}>
					<div className="TblDashHeaderDivCls">
					   <p className="blckHeaderCls">{this.props.tableDataProps.tableTitle}</p>
					</div>
					  <ReactTable
					  	showPagination={this.props.tableDataProps.pagination}
					  	pageSizeOptions= {this.props.tableDataProps.pageSizeOpt}
						defaultPageSize= {this.props.tableDataProps.defaultPagSize}
				        title="Test"
				        columns={this.state.columnData}
						data={this.state.tableData}
				      />
				</div>

					  
				);
		}

}
export default TableComponent