import React, { Component } from 'react';
import { Context } from '../CommonComponents/ContextProvider';
import ShowDataExcelUI from '../CommonComponents/ShowDataExcelUI';
import '../../css/LandingComponent.css';
import '../../css/dragdrop.css';
import InfoComponent from '../CommonComponents/InfoComponent';
import FileDrop from 'react-file-drop';
import ConfComponent from '../CommonComponents/ConfComponent';
import * as XLSX from 'xlsx';

class UploadCustComponent extends Component {
	 constructor(props) {
	 	super(props);
	 	this.state = {"testdata" : "testData",showModal:false,compType:"",mainHead:"",content:"","sheetDroped":false,"sheetData":{}}
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
     closeModalState = () => {
        window.jQuery('.ui.modal').modal('show');
            this.setState({"showModal":false,"compType":"E","mainHead":"Error","msgContent":"Please upload the xlsx file."});
     }
	 render() {
      const styles = { border: '1px solid black', width: 600, color: 'black', padding: 20 };
      let checkSteetData = this.state.sheetDroped;
      console.log("Inside render checkSteetData :: "+checkSteetData);
       return (
        <div>
         <div id="react-file-drop-demo" style={{styles}}>
           <FileDrop onDrop={this.handleDrop}>
             Drop some files here!
           </FileDrop>
           </div>
           <InfoComponent openClose={this.state.showModal} compType={this.state.compType} mainHead={this.state.mainHead} content={this.state.msgContent} onCallbackModal={this.closeModalState} fromParent="uploadCustComp"/>
            {
                {checkSteetData} ?
                (
                  <ShowDataExcelUI excelData={this.state.sheetData} sheetDroped={this.state.sheetDroped}/>
                )
                :
                (
                  <div>
                  </div>
                )
            }
          </div>
       )
     }
	 
	}
   UploadCustComponent.contextType = Context;
	export default UploadCustComponent
