import React, { Component } from 'react';
import { Context } from './ContextProvider';
import ShowDataExcelUI from './ShowDataExcelUI';
import '../../css/LandingComponent.css';
import '../../css/dragdrop.css';
import InfoComponent from './InfoComponent';
import FileDrop from 'react-file-drop';
import ConfComponent from './ConfComponent';
import * as XLSX from 'xlsx';

class UploadCustComponent extends Component {
	 constructor(props) {
	 	super(props);
	 	this.state = {"testdata" : "testData",showModal:false,compType:"",mainHead:"",content:"","sheetDroped":false,"sheetData":{},showConfModal:false,saveFlag:false}
	 	console.log("Props in constructor :: "+JSON.stringify(props));
	 }
    closeInfoModal = () =>{
      debugger;
      this.setState({"showModal":false});
      if(this.props.onAddCust)
      {
         this.props.onAddCust();  
      }
    }
	 componentDidMount() {
	 	console.log('in did mount');
      console.log("Inside Reg did mount :: "+JSON.stringify(this.context));
      window.jQuery('.ui.modal').modal('show');
      window.jQuery('.chkBxShw').attr('style','opacity:1 !important');
      window.scrollTo(0, 0);
	 }
   backFromUpload = () => {
      window.jQuery('.ui.modal').modal('hide');
      this.setState({"showConfModal":true,"compType":"Q","mainHead":"Confirmation","msgContent":"Are you sure that you want to go back?"});
   }
   saveData = () => {
      window.jQuery('.ui.modal').modal('hide');
            this.setState({"showModal":true,"compType":"I","mainHead":"Success","msgContent":"Uploaded Successfully.",saveFlag:true});
   }
   closeConfModalState = (pstatus) => {
        window.jQuery('.ui.modal').modal('show');
        this.setState({"showConfModal":false});
        if(pstatus)
        {
            if(this.props.onbackClicked)
            {
                this.props.onbackClicked();
            }
        }
     }
     closeModalState = () => {
        window.jQuery('.ui.modal').modal('show');
            this.setState({"showModal":false,"compType":"E","mainHead":"Error","msgContent":"Please upload the xlsx file."});
            if(this.state.saveFlag && this.props.onSaveData)
            {
              this.props.onSaveData();
            }
     }
   handleChange = (e) =>{
        e.stopPropagation(); e.preventDefault();
        let file;
        let scope = this;
        const files = e.target.files;
        if(files && files[0]) {
          file = files[0];
        }
        let lextentionCharCount = file.name.lastIndexOf(".");
       let lextention = file.name.substring(lextentionCharCount+1,file.name.length);
       if(lextention == "xlsx")
       {
         const reader = new FileReader();
          const rABS = !!reader.readAsBinaryString;
          reader.onload = (e) => {
                /* Parse data */
                let lsheetData = {};
                lsheetData.sheets = [];
                const bstr = e.target.result;
                //const wb = XLSX.read(bstr, {type:rABS ? 'binary' : 'array'});
                const wb = XLSX.read(bstr, {type:'binary'});
                /* Get first worksheet */
                //const wsname = wb.SheetNames[0];
                // looping the sheets
                wb.SheetNames.forEach(function(wsname) {
                  console.log("Sheet Name :: "+wsname)
                  let ws = wb.Sheets[wsname];
                /* Convert array of arrays */
                    const data = XLSX.utils.sheet_to_json(ws, {header:1});
                    var oJS = XLSX.utils.sheet_to_row_object_array(ws);
                    // in json
                    let lsheetLength = lsheetData.sheets.length; 
                    lsheetData.sheets[lsheetLength] = {};
                    lsheetData.sheets[lsheetLength].sheetName = wsname;
                    lsheetData.sheets[lsheetLength].sheetData = oJS;
                    console.log(JSON.stringify(lsheetData));
                    debugger;
                    scope.setState({"sheetDroped":true,"sheetData":lsheetData});
                });
          };
          if(rABS) reader.readAsBinaryString(file); else reader.readAsArrayBuffer(file);
        }
        else
        {
            window.jQuery('.ui.modal').modal('hide');
            this.setState({"showModal":true,"compType":"E","mainHead":"Error","msgContent":"Please upload the xlsx file."});
        }
    };
    handleDrop = (file, evnt) => {
      //debugger;
      evnt.stopPropagation(); evnt.preventDefault();
      let scope = this;
      const files = evnt.dataTransfer.files;
       if(files && files[0])  file = files[0];//this.props.handleFile(files[0]);
       let lextentionCharCount = file.name.lastIndexOf(".");
       let lextention = file.name.substring(lextentionCharCount+1,file.name.length);
       if(lextention == "xlsx")
       {
         const reader = new FileReader();
          const rABS = !!reader.readAsBinaryString;
          reader.onload = (e) => {
                /* Parse data */
                let lsheetData = {};
                lsheetData.sheets = [];
                const bstr = e.target.result;
                //const wb = XLSX.read(bstr, {type:rABS ? 'binary' : 'array'});
                const wb = XLSX.read(bstr, {type:'binary'});
                /* Get first worksheet */
                //const wsname = wb.SheetNames[0];
                // looping the sheets
                wb.SheetNames.forEach(function(wsname) {
                  console.log("Sheet Name :: "+wsname)
                  let ws = wb.Sheets[wsname];
                /* Convert array of arrays */
                    const data = XLSX.utils.sheet_to_json(ws, {header:1});
                    var oJS = XLSX.utils.sheet_to_row_object_array(ws);
                    // in json
                    let lsheetLength = lsheetData.sheets.length; 
                    lsheetData.sheets[lsheetLength] = {};
                    lsheetData.sheets[lsheetLength].sheetName = wsname;
                    lsheetData.sheets[lsheetLength].sheetData = oJS;
                    console.log(JSON.stringify(lsheetData));
                    debugger;
                    scope.setState({"sheetDroped":true,"sheetData":lsheetData});
                });
          };
          if(rABS) reader.readAsBinaryString(file); else reader.readAsArrayBuffer(file);
        }
        else
        {
            window.jQuery('.ui.modal').modal('hide');
            this.setState({"showModal":true,"compType":"E","mainHead":"Error","msgContent":"Please upload the xlsx file."});
        }
     }
     failureCallback = (pmsgContent) => {
        window.jQuery('.ui.modal').modal('hide');
            this.setState({"showModal":true,"compType":"E","mainHead":"Error","msgContent":pmsgContent});
     }
	 render() {
      debugger;
      const styles = { border: '1px solid black', width: 600, color: 'black', padding: 20 };
      let checkSteetData = this.state.sheetDroped;
      let lclassName = "ui button "
      if(!checkSteetData)
      {
         lclassName = lclassName + "dispnone";
      }
      console.log("Inside render checkSteetData :: "+checkSteetData);
       return (
        <div>
         <div id="react-file-drop-demo" className="brd1pxGrey pad2Per" style={{styles}}>
           <FileDrop onDrop={this.handleDrop}>
             Drop some files here!
           </FileDrop>
           </div>
           <div className="pad2Per">
           OR
           </div>
           <form className="form-inline brd1pxGrey">
            <div className="form-group">
              <label htmlFor="file">Spreadsheet</label>
              <input type="file" className="form-control" id="file" onChange={this.handleChange} />
            </div>
          </form>
           <InfoComponent openClose={this.state.showModal} compType={this.state.compType} mainHead={this.state.mainHead} content={this.state.msgContent} onCallbackModal={this.closeModalState} fromParent="uploadCustComp"/>
           <ConfComponent fromParent="uploadComp" openClose={this.state.showConfModal} compType={this.state.compType} mainHead={this.state.mainHead} content={this.state.msgContent} onCallbackConfModal={this.closeConfModalState}/>
            {
                {checkSteetData} ?
                (
                  <ShowDataExcelUI excelData={this.state.sheetData} sheetDroped={this.state.sheetDroped} onCallbackSuccess={this.sucessCallBack} onFailureCallBack={this.failureCallback}/>
                )
                :
                (
                  <div>
                  </div>
                )
            }
            <div className="fltLft dispFlex pad2Per">
              <button className={lclassName} onClick={this.saveData}>
                  Save
              </button>
              <button className="ui button" onClick={this.backFromUpload}>
                  Back
              </button>
            </div>
          </div>
       )
     }
	 
	}
   UploadCustComponent.contextType = Context;
	export default UploadCustComponent
