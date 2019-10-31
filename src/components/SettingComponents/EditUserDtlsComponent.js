import React, { Component } from 'react';
import { Context } from '../CommonComponents/ContextProvider';
import '../../css/LandingComponent.css';
import InfoComponent from '../CommonComponents/InfoComponent';
import ConfComponent from '../CommonComponents/ConfComponent';

class EditUserDtlsComponent extends Component {
	 constructor(props) {
	 	super(props);
	 	this.state = {"testdata" : "testData",showModal:false,compType:"",mainHead:"",content:"",editUsrDtls:{}}
	 	console.log("Props in constructor :: "+JSON.stringify(props));
	 }
	  editUsr = (e) =>  
	 {
	 	e.preventDefault();
      window.jQuery('.ui.modal').modal('hide');
      this.setState({"showModal":true,"compType":"I","mainHead":"Success","msgContent":"User details updated successfully."});
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
      lobj.heading = "Edit User";
      lobj.userId= "mendis007";
      lobj.userName="mendis_menon";
      lobj.phone="9900126655";
      lobj.address="#43, 3rd main, Tavarekare, Bangalore";
      lobj.pincode="560034";
      lobj.state="Karnataka";
      lobj.city="Bangalore";
      lobj.landMark="Near St.Thomas Chruch";
      lobj.country="India";
      lobj.password="*******";
      lobj.webSite="www.testsite.com";
      lobj.Email="arun.n61@gmail.com";
      this.setState({editUsrDtls:lobj})
    }
    onTodoChange = (pvalue,pnode) => {
         let lcustData = this.state.editUsrDtls;
         lcustData[pnode] = pvalue;
         this.setState({editUsrDtls:lcustData});
    }
	 render () {
	 	return (
         <React.Fragment>
      <div>
   <div className="ui modal">
      <div className="header modalHeadCls">{this.state.editUsrDtls.heading}</div>
      <div className="content">
         <form className="ui form">
            
            <div className="ui form">
               <div className="fields">
                  <div className="field">
                     <label>User ID</label>
                     <input type="text" placeholder="User ID" value={this.state.editUsrDtls.userId} onChange={e => this.onTodoChange(e.target.value,"userId")}/>
                  </div>
                  <div className="field">
                     <label>User Name</label>
                     <input type="text" placeholder="User Name" onChange={e => this.onTodoChange(e.target.value,"userName")} value={this.state.editUsrDtls.userName}/>
                  </div>
                  <div className="field">
                     <label>Phone</label>
                     <input onChange={e => this.onTodoChange(e.target.value,"phone")} value={this.state.editUsrDtls.phone}/>
                  </div>
                  <div className="field">
                     <label>Address</label>
                     <textarea rows={2} defaultValue={""} onChange={e => this.onTodoChange(e.target.value,"address")} value={this.state.editUsrDtls.address}/>
                  </div>
               </div>
               <div className="fields">
                  <div className="field">
                     <label>Pincode</label>
                     <input type="text" placeholder="Pincode" onChange={e => this.onTodoChange(e.target.value,"pincode")} value={this.state.editUsrDtls.pincode}/>
                  </div>
                  <div className="field">
                     <label>Landmark</label>
                     <input type="text" placeholder="Landmark" onChange={e => this.onTodoChange(e.target.value,"landMark")} value={this.state.editUsrDtls.landMark}/>
                  </div>
                  <div className="field">
                     <label>Country</label>
                     <select className="ui fluid dropdown" onChange={e => this.onTodoChange(e.target.value,"country")} value={this.state.editUsrDtls.country}>
                        <option value>Select</option>
                        <option value="India">India</option>
                     </select>
                  </div>
                  <div className="field">
                     <label>State</label>
                     <select className="ui fluid dropdown" onChange={e => this.onTodoChange(e.target.value,"state")} value={this.state.editUsrDtls.state}>
                        <option value>Select</option>
                        <option value="kerala">kerala</option>
                        <option value="Karnataka">Karnataka</option>
                     </select>
                  </div>
                  <div className="field">
                     <label>City</label>
                     <select className="ui fluid dropdown" onChange={e => this.onTodoChange(e.target.value,"city")} value={this.state.editUsrDtls.city}>
                        <option value>Select</option>
                        <option value="kodungallur">Kodungallur</option>
                        <option value="Bangalore">Bangalore</option> 
                     </select>
                  </div>
               </div>
               <div className="fields">
                  <div className="field">
                     <label>Password</label>
                     <input type="text" placeholder="Password" value={this.state.editUsrDtls.password}/>
                  </div>
                  <div className="field">
                     <label>Website</label>
                     <input type="text" placeholder="Website" onChange={e => this.onTodoChange(e.target.value,"webSite")} value={this.state.editUsrDtls.webSite}/>
                  </div>
                  <div className="field">
                     <label>Email</label>
                     <input type="text" placeholder="Email" onChange={e => this.onTodoChange(e.target.value,"Email")} value={this.state.editUsrDtls.Email}/>
                  </div>
               </div>
            </div>
            
            
            <div>
           <button className="ui green basic button" onClick={(e) => this.editUsr(e)}>Save</button>
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
   EditUserDtlsComponent.contextType = Context;
	export default EditUserDtlsComponent
