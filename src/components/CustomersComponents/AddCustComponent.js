import React, { Component } from 'react';
import { Context } from '../CommonComponents/ContextProvider';
import '../../css/LandingComponent.css';
import InfoComponent from '../CommonComponents/InfoComponent';

class AddCustComponent extends Component {
	 constructor(props) {
	 	super(props);
	 	this.state = {"testdata" : "testData",showModal:false,compType:"",mainHead:"",content:"",editCustomer:false,editCustomerData:{}}
	 	console.log("Props in constructor :: "+JSON.stringify(props));
	 }
	  addCust = (e) =>  
	 {
	 	e.preventDefault();
      window.jQuery('.ui.modal').modal('hide');
      if(this.props.editCustomer && this.props.editCustomer == "true")
      {
         this.setState({"showModal":true,"compType":"I","mainHead":"Success","msgContent":"Customer/Vendor saved successfully."});
      }
      else
      {
         this.setState({"showModal":true,"compType":"I","mainHead":"Success","msgContent":"Customer/Vendor added successfully."});
      }
	 }
    backClicked = (e) =>
    {
      e.preventDefault();
      if(this.props.onbackClicked)
      {
         this.props.onbackClicked();  
      }
    }
    closeInfoModal = () =>{
      debugger;
      this.setState({"showModal":false});
      if(this.props.onAddCust)
      {
         this.props.onAddCust();  
      }
    }
    componentWillMount () {
      this.prepareDefaultState();
    }
	 componentDidMount() {
	 	console.log('in did mount');
      console.log("Inside Reg did mount :: "+JSON.stringify(this.context));
      window.jQuery('.ui.modal').modal('show');
      window.jQuery('.chkBxShw').attr('style','opacity:1 !important');
      window.scrollTo(0, 0);
      if(this.props.editCustomer && this.props.editCustomer == "true")
      {
         this.prepareState();
      }
	 }
    prepareDefaultState = () => {
      var lobj = {};
      lobj.heading = "Add Customer/ Vender";
      lobj.name="";
      lobj.contactPerson="";
      lobj.AddressLine1="";
      lobj.AddressLine2="";
      lobj.contactNumber="";
      lobj.landMark="";
      lobj.country="Select";
      lobj.state="Select";
      lobj.city="Select";
      lobj.companyType="Select";
      lobj.pincode="";
      lobj.faxNumber="";
      lobj.webSite="";
      lobj.Email="";
      lobj.gst_pan="";
      this.setState({editCustomerData:lobj})
    }
    prepareState = () => {
      var lobj = {};
      lobj.heading = "Edit Customer/ Vender";
      lobj.name="Antony";
      lobj.contactPerson="Mark";
      lobj.AddressLine1="#45, 3rd cross,";
      lobj.AddressLine2="Madiwala, Bangalore";
      lobj.contactNumber="9900124433";
      lobj.landMark="Near Balaji Temple";
      lobj.country="India";
      lobj.state="Karnataka";
      lobj.city="Bangalore";
      lobj.companyType="Customer";
      lobj.pincode="560034";
      lobj.faxNumber="080-235467";
      lobj.webSite="www.testsite.com";
      lobj.Email="arun.n61@gmail.com";
      lobj.gst_pan="BHTPA6552M";
      this.setState({editCustomerData:lobj,editCustomer:true})
    }
    onTodoChange = (pvalue,pnode) => {
         let lcustData = this.state.editCustomerData;
         lcustData[pnode] = pvalue;
         this.setState({editCustomerData:lcustData});
    }
	 render () {
	 	return (
         <React.Fragment>
      <div>
   <div className="ui modal">
      <div className="header modalHeadCls">{this.state.editCustomerData.heading}</div>
      <div className="content">
         <form className="ui form">
            
            <div className="ui form">
               <div className="fields">
                  <div className="field">
                     <label>Customer/Vendor Name</label>
                     <input type="text" placeholder="Customer/Vendor Name" value={this.state.editCustomerData.name} onChange={e => this.onTodoChange(e.target.value,"name")}/>
                  </div>
                  <div className="field">
                     <label>Contact Person</label>
                     <input type="text" placeholder="Contact Person" onChange={e => this.onTodoChange(e.target.value,"contactPerson")} value={this.state.editCustomerData.contactPerson}/>
                  </div>
                  <div className="field">
                     <label>Address Line 1</label>
                     <textarea rows={2} defaultValue={""} onChange={e => this.onTodoChange(e.target.value,"AddressLine1")} value={this.state.editCustomerData.AddressLine1}/>
                  </div>
                  <div className="field">
                     <label>Address Line 2</label>
                     <textarea rows={2} defaultValue={""} onChange={e => this.onTodoChange(e.target.value,"AddressLine2")} value={this.state.editCustomerData.AddressLine2}/>
                  </div>
               </div>
               <div className="fields">
                  <div className="field">
                     <label>Contact Number</label>
                     <input type="text" placeholder="Contact Number" onChange={e => this.onTodoChange(e.target.value,"contactNumber")} value={this.state.editCustomerData.contactNumber}/>
                  </div>
                  <div className="field">
                     <label>Landmark</label>
                     <input type="text" placeholder="Landmark" onChange={e => this.onTodoChange(e.target.value,"landMark")} value={this.state.editCustomerData.landMark}/>
                  </div>
                  <div className="field">
                     <label>Country</label>
                     <select className="ui fluid dropdown" onChange={e => this.onTodoChange(e.target.value,"country")} value={this.state.editCustomerData.country}>
                        <option value>Select</option>
                        <option value="India">India</option>
                     </select>
                  </div>
                  <div className="field">
                     <label>State</label>
                     <select className="ui fluid dropdown" onChange={e => this.onTodoChange(e.target.value,"state")} value={this.state.editCustomerData.state}>
                        <option value>Select</option>
                        <option value="kerala">kerala</option>
                        <option value="Karnataka">Karnataka</option>
                     </select>
                  </div>
                  <div className="field">
                     <label>City</label>
                     <select className="ui fluid dropdown" onChange={e => this.onTodoChange(e.target.value,"city")} value={this.state.editCustomerData.city}>
                        <option value>Select</option>
                        <option value="kodungallur">Kodungallur</option>
                        <option value="Bangalore">Bangalore</option> 
                     </select>
                  </div>
                  <div className="field">
                     <label>Company Type</label>
                     <select className="ui fluid dropdown" onChange={e => this.onTodoChange(e.target.value,"companyType")} value={this.state.editCustomerData.companyType}>
                        <option value>Select</option>
                        <option value="Customer">Customer</option>
                     </select>
                  </div>
               </div>
               <div className="fields">
                  <div className="field">
                     <label>Pin Code</label>
                     <input type="text" placeholder="Pin Code" onChange={e => this.onTodoChange(e.target.value,"pincode")}value={this.state.editCustomerData.pincode}/>
                  </div>
                  <div className="field">
                     <label>Fax Number</label>
                     <input type="text" placeholder="Fax Number" onChange={e => this.onTodoChange(e.target.value,"faxNumber")} value={this.state.editCustomerData.faxNumber}/>
                  </div>
                  <div className="field">
                     <label>Website</label>
                     <input type="text" placeholder="Website" onChange={e => this.onTodoChange(e.target.value,"webSite")} value={this.state.editCustomerData.webSite}/>
                  </div>
                  <div className="field">
                     <label>Email</label>
                     <input type="text" placeholder="Email" onChange={e => this.onTodoChange(e.target.value,"Email")} value={this.state.editCustomerData.Email}/>
                  </div>
                  <div className="field">
                     <label>GST IN / PAN</label>
                     <input type="text" placeholder="GST IN / PAN" onChange={e => this.onTodoChange(e.target.value,"gst_pan")} value={this.state.editCustomerData.gst_pan}/>
                  </div>
               </div>
            </div>
            
            
            <div>
           <button className="ui green basic button" onClick={(e) => this.addCust(e)}>Save</button>
           <button className="ui basic button" onClick={(e) => this.backClicked(e)}>Back</button>
           </div>
         </form>
      </div>
   </div>
</div>
   <InfoComponent fromParent="addCustomer" openClose={this.state.showModal} compType={this.state.compType} mainHead={this.state.mainHead} content={this.state.msgContent} onCallbackModal={this.closeInfoModal}/>
</React.Fragment>
    );
	 }
	}
   AddCustComponent.contextType = Context;
	export default AddCustComponent
