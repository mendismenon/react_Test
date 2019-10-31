import React, { Component } from 'react';
import '../../css/dashboard.css';

class InvoiceSummary extends Component {
	constructor(props) {
			super(props);
			console.log("in constr InvoiceSummary :: "+JSON.stringify(props))
		}
		render()
		{
			return (
					<div className="parentsummaryBlockCls">
					<div className="ui placeholder segment invoiceBlockCls">
					<div className="blckHeaderDivCls">
				   <p className="blckHeaderCls">Invoive Summary - Till Date</p>
				</div>
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider"></div>
          <div className="middle aligned row">
            <div className="column">
              <div className="ui icon header">
                <i className="money bill alternate outline icon reduceOpacity" />
                <h1 className="fntStyleCountCls">
                	{this.props.summaryDtls.totalSalesAmount}
                </h1>
              </div>
              <h4>
              	Total Sales Amount
              </h4>
            </div>
            <div className="column">
              <div className="ui icon header">
                <i className="money bill alternate outline icon reduceOpacity" />
                <h1 className="fntStyleCountCls">
                	{this.props.summaryDtls.totalPurchaseAmount}
                </h1>
              </div>
              <h4>
              	Total Purchase Amount
              </h4>
            </div>
          </div>
        </div>
      </div>
      </div>
				);
		}
}
export default InvoiceSummary