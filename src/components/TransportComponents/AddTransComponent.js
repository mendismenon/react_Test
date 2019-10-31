import React, { Component } from 'react';
import { Context } from '../CommonComponents/ContextProvider';
import '../../css/LandingComponent.css';
import InfoComponent from '../CommonComponents/InfoComponent';

class AddTransComponent extends Component {
	 constructor(props) {
	 	super(props);
	 	this.state = {"testdata" : "testData",showModal:false,compType:"",mainHead:"",content:"",editTransport:false,editTransportData:{}}
	 	console.log("Props in constructor :: "+JSON.stringify(props));
	 }
	  addTransportSave = (e) =>  
	 {
	 	e.preventDefault();
      window.jQuery('.ui.modal').modal('hide');
      if(this.props.editTransport && this.props.editTransport == "true")
      {
         this.setState({"showModal":true,"compType":"I","mainHead":"Success","msgContent":"Transport saved successfully."});
      }
      else
      {
         this.setState({"showModal":true,"compType":"I","mainHead":"Success","msgContent":"Transport added successfully."});
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
      if(this.props.onAddComponent)
      {
         this.props.onAddComponent();  
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
      if(this.props.editFlag && this.props.editFlag == "true")
      {
         this.prepareState();
      }
	 }
    prepareDefaultState = () => {
      var lobj = {};
      lobj.heading = "Add Transport";
      lobj.transportName="";
      lobj.transportId="";
      lobj.AddressLine1="";
      lobj.AddressLine2="";
      lobj.contactNumber="";
      lobj.landMark="";
      lobj.country="Select";
      lobj.state="Select";
      lobj.city="Select";
      lobj.vehicleType="Select";
      lobj.pincode="";
      lobj.vehicleNumber="";
      lobj.webSite="";
      lobj.Email="";
      this.setState({editTransportData:lobj})
    }
    prepareState = () => {
      var lobj = {};
      lobj.heading = "Edit Transport";
      lobj.transportName="Himalaya Travels";
      lobj.transportId="THT823764287";
      lobj.AddressLine1="#54, 3rd Main, 4th Cross";
      lobj.AddressLine2="Madiwala, Bangalore";
      lobj.contactNumber="9900127755";
      lobj.landMark="Near St.Thomas Church";
      lobj.country="India";
      lobj.state="Karnataka";
      lobj.city="Bangalore";
      lobj.vehicleType="Heavy Vehicle";
      lobj.pincode="560034";
      lobj.vehicleNumber="KA 51 EW 2725";
      lobj.webSite="www.Himalayatrans.com";
      lobj.Email="enquire@himalayatrans.com";
      this.setState({editTransportData:lobj,editCustomer:true})
    }
    onTodoChange = (pvalue,pnode) => {
         let lcustData = this.state.editTransportData;
         lcustData[pnode] = pvalue;
         this.setState({editTransportData:lcustData});
    }
	 render () {
	 	return (
         <React.Fragment>
      <div>
   <div className="ui modal">
      <div className="header modalHeadCls">{this.state.editTransportData.heading}</div>
      <div className="content">
         <form className="ui form">
            
            <div className="ui form">
               <div className="fields">
                  <div className="field">
                     <label>Transport Name</label>
                     <input type="text" placeholder="Transport Name" value={this.state.editTransportData.transportName} onChange={e => this.onTodoChange(e.target.value,"transportName")}/>
                  </div>
                  <div className="field">
                     <label>Transport ID</label>
                     <input type="text" placeholder="Transport ID" onChange={e => this.onTodoChange(e.target.value,"transportId")} value={this.state.editTransportData.transportId}/>
                  </div>
                  <div className="field">
                     <label>Address Line 1</label>
                     <textarea rows={2} defaultValue={""} onChange={e => this.onTodoChange(e.target.value,"AddressLine1")} value={this.state.editTransportData.AddressLine1}/>
                  </div>
                  <div className="field">
                     <label>Address Line 2</label>
                     <textarea rows={2} defaultValue={""} onChange={e => this.onTodoChange(e.target.value,"AddressLine2")} value={this.state.editTransportData.AddressLine2}/>
                  </div>
               </div>
               <div className="fields">
                  <div className="field">
                     <label>Contact Number</label>
                     <input type="text" placeholder="Contact Number" onChange={e => this.onTodoChange(e.target.value,"contactNumber")} value={this.state.editTransportData.contactNumber}/>
                  </div>
                  <div className="field">
                     <label>Landmark</label>
                     <input type="text" placeholder="Landmark" onChange={e => this.onTodoChange(e.target.value,"landMark")} value={this.state.editTransportData.landMark}/>
                  </div>
                  <div className="field">
                     <label>Country</label>
                     <select className="ui fluid dropdown" onChange={e => this.onTodoChange(e.target.value,"country")} value={this.state.editTransportData.country}>
                        <option value>Select</option>
                        <option value="India">India</option>
                     </select>
                  </div>
                  <div className="field">
                     <label>State</label>
                     <select className="ui fluid dropdown" onChange={e => this.onTodoChange(e.target.value,"state")} value={this.state.editTransportData.state}>
                        <option value>Select</option>
                        <option value="kerala">kerala</option>
                        <option value="Karnataka">Karnataka</option>
                     </select>
                  </div>
                  <div className="field">
                     <label>City</label>
                     <select className="ui fluid dropdown" onChange={e => this.onTodoChange(e.target.value,"city")} value={this.state.editTransportData.city}>
                        <option value>Select</option>
                        <option value="kodungallur">Kodungallur</option>
                        <option value="Bangalore">Bangalore</option> 
                     </select>
                  </div>
                  <div className="field">
                     <label>Vehicle Type</label>
                     <select className="ui fluid dropdown" onChange={e => this.onTodoChange(e.target.value,"vehicleType")} value={this.state.editTransportData.vehicleType}>
                        <option value>Select</option>
                        <option value="Heavy Vehicle">Heavy Vehicle</option>
                        <option value="Travels">Travels</option>
                     </select>
                  </div>
               </div>
               <div className="fields">
                  <div className="field">
                     <label>Pin Code</label>
                     <input type="text" placeholder="Pin Code" onChange={e => this.onTodoChange(e.target.value,"pincode")}value={this.state.editTransportData.pincode}/>
                  </div>
                  <div className="field">
                     <label>Vehicle Number</label>
                     <input type="text" placeholder="Vehicle Number" onChange={e => this.onTodoChange(e.target.value,"vehicleNumber")} value={this.state.editTransportData.vehicleNumber}/>
                  </div>
                  <div className="field">
                     <label>Website</label>
                     <input type="text" placeholder="Website" onChange={e => this.onTodoChange(e.target.value,"webSite")} value={this.state.editTransportData.webSite}/>
                  </div>
                  <div className="field">
                     <label>Email</label>
                     <input type="text" placeholder="Email" onChange={e => this.onTodoChange(e.target.value,"Email")} value={this.state.editTransportData.Email}/>
                  </div>
               </div>
            </div>
            
            
            <div>
           <button className="ui green basic button" onClick={(e) => this.addTransportSave(e)}>Save</button>
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
   AddTransComponent.contextType = Context;
	export default AddTransComponent
