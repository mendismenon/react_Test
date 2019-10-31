import React, { Component } from 'react';
import { Context } from '../CommonComponents/ContextProvider';
import '../../css/LandingComponent.css';


class RegisterComponent extends Component {
	 constructor(props) {
	 	super(props);
	 	this.state = {"testdata" : "testData"}
	 	console.log("Props in constructor :: "+JSON.stringify(props));
	 }
	  submitReg = (e,pcontext) =>
	 {
	 	e.preventDefault();
      console.log("In reg submit :: "+pcontext);
      pcontext.g_objDtls.registerUser = true;
      pcontext.onChangeGlobalState(pcontext.g_objDtls);
	 	this.props.onSubmitRegister({"Registration":true});
	 }
	 componentDidMount() {
	 	console.log('in did mount');
      console.log("Inside Reg did mount :: "+JSON.stringify(this.context));
      let lcurrGObj = this.context;
      debugger;
      if(lcurrGObj)
      {
         if(lcurrGObj.g_objDtls.registerUser === false)
         {
	 	      window.jQuery('.ui.modal').modal('show');
	 	      window.jQuery('.chkBxShw').attr('style','opacity:1 !important');
         }
      }
	 }

	 render () {
	 	return (
         <React.Fragment>
         <Context.Consumer>
            {(context) =>
      <div>
   <div className="ui modal">
      <div className="header">Registration Details</div>
      <div className="content">
         <form className="ui form">
            <h4 className="ui dividing header">Organisation Details</h4>
            <div className="ui form">
               <div className="fields">
                  <div className="field">
                     <label>Company Name</label>
                     <input type="text" placeholder="Company Name" />
                  </div>
                  <div className="field">
                     <label>Company Type</label>
                     <select className="ui fluid dropdown">
                        <option value>Select</option>
                        <option value="Statutory_Companies">Statutory Companies</option>
                     </select>
                  </div>
                  <div className="field">
                     <label>Pan Number</label>
                     <input type="text" placeholder="Pan Number" />
                  </div>
               </div>
               <div className="fields">
                  <div className="field">
                     <label>GST IN</label>
                     <input type="text" placeholder="GST Number" />
                  </div>
                  <div className="field">
                     <label>Address Line 1</label>
                     <textarea rows={2} defaultValue={""} />
                  </div>
                  <div className="field">
                     <label>Address Line 2</label>
                     <textarea rows={2} defaultValue={""} />
                  </div>
               </div>
               <div className="fields">
                  <div className="field">
                     <label>Pin Code</label>
                     <input type="text" placeholder="Pin Code" />
                  </div>
                  <div className="field">
                     <label>City</label>
                     <input type="text" placeholder="City" />
                  </div>
                  <div className="field">
                     <label>State</label>
                     <select className="ui fluid dropdown">
                        <option value>State</option>
                        <option value="KL">Kerala</option>
                     </select>
                  </div>
               </div>
            </div>
            <h4 className="ui dividing header">Contact Details</h4>
            <div className="ui form">
               <div className="ui form">
                  <div className="fields">
                     <div className="field">
                        <label>Full Name</label>
                        <input type="text" placeholder="Full Name" />
                     </div>
                     <div className="field">
                        <label>Mobile Number</label>
                        <input type="text" placeholder="Mobile Number" />
                     </div>
                     <div className="field">
                        <label>Email</label>
                        <input type="text" placeholder="Email" />
                     </div>
                  </div>
               </div>
            </div>
            <div className="field">
               <div className="ui checkbox">
                  <input type="checkbox" tabIndex="0" id="chk_TermsCond" className="chkBxShw" style={{opacity: '1 !important'}}/>
                  <label id="TermsCondLbl" className="TermsCondLblCls">I agree to the Terms and Conditions</label>
               </div>
            </div>
           <button className="ui green basic button" onClick={(e) => this.submitReg(e,context)}>Submit</button>
         </form>
      </div>
   </div>
</div>}
</Context.Consumer>
</React.Fragment>
    );
	 }
	}
   RegisterComponent.contextType = Context;
	export default RegisterComponent
