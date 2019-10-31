import React, { Component } from 'react';
import '../../css/dashboard.css';

class AccntSummAndInvce extends Component {
	constructor(props) {
			super(props);
			console.log("in constr AccntSummAndInvce :: "+JSON.stringify(props))
		}
		render()
		{
			return (
				<div className="parentsummaryBlockCls">
					<div className="ui placeholder segment summaryBlockCls">
					<div className="blckHeaderDivCls">
				   <p className="blckHeaderCls">Account Summary</p>
				</div>
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider"></div>
          <div className="middle aligned row">
            <div className="column">
              <div className="ui icon header">
                <i className="boxes icon reduceOpacity" />
                <h1 className="fntStyleCountCls">
                	{this.props.summaryDtls.totalProducts}
                </h1>
              </div>
              <h4>
              	Total Products
              </h4>
            </div>
            <div className="column">
              <div className="ui icon header">
                <i className="users icon reduceOpacity" />
                <h1 className="fntStyleCountCls">
                	{this.props.summaryDtls.totalCustomers}
                </h1>
              </div>
              <h4>
              	Total Customers
              </h4>
            </div>
          </div>
        </div>
      </div>


      <div className="ui placeholder segment summaryBlockCls">
      <div className="blckHeaderDivCls">
				   <p className="blckHeaderCls">Total Invoice - Till Date</p>
				</div>
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider"></div>
          <div className="middle aligned row">
            <div className="column">
              <div className="ui icon header">
                <i className="print icon reduceOpacity" />
                <h1 className="fntStyleCountCls">
                	{this.props.summaryDtls.totalSalesInvoice}
                </h1>
              </div>
              <h4>
              	Total Sales Invoice
              </h4>
            </div>
            <div className="column">
              <div className="ui icon header">
                <i className="print icon reduceOpacity" />
                <h1 className="fntStyleCountCls">
                	{this.props.summaryDtls.totalPurchaseInvoice}
                </h1>
              </div>
              <h4>
              	Total Purchase Invoice
              </h4>
            </div>
          </div>
        </div>
      </div>
      </div>
				);
		}
	}
	export default AccntSummAndInvce