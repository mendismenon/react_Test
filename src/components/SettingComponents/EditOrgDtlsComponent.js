import React, { Component } from 'react';
import { Context } from '../CommonComponents/ContextProvider';
import '../../css/LandingComponent.css';
import InfoComponent from '../CommonComponents/InfoComponent';
import ConfComponent from '../CommonComponents/ConfComponent';

class EditOrgDtlsComponent extends Component {
	 constructor(props) {
	 	super(props);
	 	this.state = {"testdata" : "testData",showModal:false,compType:"",mainHead:"",content:"",editOrgDtls:{}}
	 	console.log("Props in constructor :: "+JSON.stringify(props));
	 }
	  editOrg = (e) =>  
	 {
	 	e.preventDefault();
      window.jQuery('.ui.modal').modal('hide');
      this.setState({"showModal":true,"compType":"I","mainHead":"Success","msgContent":"Organisation details updated successfully."});
	 }
    backClicked = (e) =>
    {
      e.preventDefault();
      window.jQuery('.ui.modal').modal('hide');
      this.setState({showConfModal:true,compType:"T",mainHead:"Confirmation",msgContent:"Are you sure, do you want to go back?"})
    }
    closeConfModalState = (pstatus) =>{
      if(pstatus)
      {
         if(this.props.onEditClicked)
         {
            this.props.onEditClicked();
         }
      }
      else
      {
         window.jQuery('.ui.modal').modal('show');
         this.setState({showConfModal:false})
      }
   }
    closeInfoModal = () =>{
      debugger;
      this.setState({"showModal":false});
      if(this.props.onEditClicked)
      {
         this.props.onEditClicked();
      }
    }
    componentWillMount () {
      this.prepareState();
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
    prepareState = () => {
      var lobj = {};
      lobj.heading = "Edit Organisation";
      lobj.companyName= "Tech Solutions Pvt Ltd.";
      lobj.pancard="BHTPA6552M";
      lobj.gstNum="1227892349";
      lobj.address="#43, 3rd main, Tavarekare, Bangalore";
      lobj.pincode="560034";
      lobj.state="Karnataka";
      lobj.city="Bangalore";
      lobj.landMark="Near St.Thomas Chruch";
      lobj.country="India";
      lobj.faxNumber="080-235467";
      lobj.webSite="www.testsite.com";
      lobj.Email="arun.n61@gmail.com";
      this.setState({editOrgDtls:lobj})
    }
    onTodoChange = (pvalue,pnode) => {
         let lcustData = this.state.editOrgDtls;
         lcustData[pnode] = pvalue;
         this.setState({editOrgDtls:lcustData});
    }
	 render () {
	 	return (
         <React.Fragment>
      <div>
   <div className="ui modal">
      <div className="header modalHeadCls">{this.state.editOrgDtls.heading}</div>
      <div className="content">
         <form className="ui form">
            
            <div className="ui form">
               <div className="fields">
                  <div className="field">
                     <label>Company Name</label>
                     <input type="text" placeholder="Company Name" value={this.state.editOrgDtls.companyName} onChange={e => this.onTodoChange(e.target.value,"companyName")}/>
                  </div>
                  <div className="field">
                     <label>Pancard</label>
                     <input type="text" placeholder="Pancard" onChange={e => this.onTodoChange(e.target.value,"pancard")} value={this.state.editOrgDtls.pancard}/>
                  </div>
                  <div className="field">
                     <label>GST Number</label>
                     <input onChange={e => this.onTodoChange(e.target.value,"gstNum")} value={this.state.editOrgDtls.gstNum}/>
                  </div>
                  <div className="field">
                     <label>Address</label>
                     <textarea rows={2} defaultValue={""} onChange={e => this.onTodoChange(e.target.value,"address")} value={this.state.editOrgDtls.address}/>
                  </div>
               </div>
               <div className="fields">
                  <div className="field">
                     <label>Pincode</label>
                     <input type="text" placeholder="Pincode" onChange={e => this.onTodoChange(e.target.value,"pincode")} value={this.state.editOrgDtls.pincode}/>
                  </div>
                  <div className="field">
                     <label>Landmark</label>
                     <input type="text" placeholder="Landmark" onChange={e => this.onTodoChange(e.target.value,"landMark")} value={this.state.editOrgDtls.landMark}/>
                  </div>
                  <div className="field">
                     <label>Country</label>
                     <select className="ui fluid dropdown" onChange={e => this.onTodoChange(e.target.value,"country")} value={this.state.editOrgDtls.country}>
                        <option value>Select</option>
                        <option value="India">India</option>
                     </select>
                  </div>
                  <div className="field">
                     <label>State</label>
                     <select className="ui fluid dropdown" onChange={e => this.onTodoChange(e.target.value,"state")} value={this.state.editOrgDtls.state}>
                        <option value>Select</option>
                        <option value="kerala">kerala</option>
                        <option value="Karnataka">Karnataka</option>
                     </select>
                  </div>
                  <div className="field">
                     <label>City</label>
                     <select className="ui fluid dropdown" onChange={e => this.onTodoChange(e.target.value,"city")} value={this.state.editOrgDtls.city}>
                        <option value>Select</option>
                        <option value="kodungallur">Kodungallur</option>
                        <option value="Bangalore">Bangalore</option> 
                     </select>
                  </div>
               </div>
               <div className="fields">
                  <div className="field">
                     <label>Fax Number</label>
                     <input type="text" placeholder="Fax Number" onChange={e => this.onTodoChange(e.target.value,"faxNumber")} value={this.state.editOrgDtls.faxNumber}/>
                  </div>
                  <div className="field">
                     <label>Website</label>
                     <input type="text" placeholder="Website" onChange={e => this.onTodoChange(e.target.value,"webSite")} value={this.state.editOrgDtls.webSite}/>
                  </div>
                  <div className="field">
                     <label>Email</label>
                     <input type="text" placeholder="Email" onChange={e => this.onTodoChange(e.target.value,"Email")} value={this.state.editOrgDtls.Email}/>
                  </div>
               </div>
            </div>
            
            
            <div>
           <button className="ui green basic button" onClick={(e) => this.editOrg(e)}>Save</button>
           <button className="ui basic button" onClick={(e) => this.backClicked(e)}>Back</button>
           </div>
         </form>
      </div>
   </div>
</div>
   <InfoComponent fromParent="editOrg" openClose={this.state.showModal} compType={this.state.compType} mainHead={this.state.mainHead} content={this.state.msgContent} onCallbackModal={this.closeInfoModal}/>
   <ConfComponent fromParent="editOrg" openClose={this.state.showConfModal} compType={this.state.compType} mainHead={this.state.mainHead} content={this.state.msgContent} onCallbackConfModal={this.closeConfModalState}/>
</React.Fragment>
    );
	 }
	}
   EditOrgDtlsComponent.contextType = Context;
	export default EditOrgDtlsComponent
