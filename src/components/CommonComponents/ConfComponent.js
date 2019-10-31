import React, { Component } from 'react'
import { Button, Modal, Header} from 'semantic-ui-react'

class ConfComponent extends Component {
  state = { open: false ,closeOnEscape:false,closeOnDimmerClick:false,icon:"",mainHead:"",content:""}
  componentWillReceiveProps(nextProps)
  {
      if(nextProps.openClose)
      {
        this.closeConfigShow(true, false,nextProps);
      }
      else
      {
          
      }
    
  }
  componentDidMount(){
      if(this.props.openClose)
      {
        this.closeConfigShow(true, false,this.props);
      }
      else
      {
          
      }
  }
  closeConfigShow = (closeOnEscape, closeOnDimmerClick,nextProps)  => {
    let licon ="";
    if(nextProps.compType === "T")
    {
        licon = "trash";
    }
    else if(nextProps.compType === "Q")
    {
        licon = "question circle";
    }
    this.setState({ closeOnEscape, closeOnDimmerClick, open: nextProps.openClose, icon : licon,mainHead:nextProps.mainHead, content:nextProps.content })
  }
  closeConf = () => {

  }
  close = (e,pflag) => {
    if(this.state.open)
    {
     this.setState({ open: false , mainHead:""});
     if(this.props.onCallbackConfModal)
     {
        this.props.onCallbackConfModal(pflag);
     }
   }
   try{
    e.preventDefault();}catch(e){}
  }
  render() {
    const { open, closeOnEscape, closeOnDimmerClick } = this.state

    return (
      <div>
        {/*<Button onClick={this.closeConfigShow(false, true)}>
          No Close on Escape
        </Button>
        <Button onClick={this.closeConfigShow(true, false)}>
          No Close on Dimmer Click
        </Button>*/}

        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.closeConf}
        >
          {/*<Modal.Header icon="close icon">Delete Your Account</Modal.Header>*/}
          <Header icon={this.state.icon} content={this.state.mainHead} />
          <Modal.Content>
            <p>{this.state.content}</p>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={(e)=>this.close(e,false)} negative>
              No
            </Button>
            <Button
              onClick={(e)=>this.close(e,true)}
              positive
              labelPosition='right'
              icon='checkmark'
              content='Yes'
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ConfComponent
