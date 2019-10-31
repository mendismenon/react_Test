import React from 'react'

export const Context = React.createContext();
class ContextProvider extends React.Component {

    state = { g_objDtls:{registerUser: false,loginStatus: false}}

    render() {
        return (<Context.Provider value={{ g_objDtls: this.state.g_objDtls, onChangeGlobalState: (lcurrObj) =>
        	{
        		console.log("in provider :: "+JSON.stringify(lcurrObj));
         		this.setState({ g_objDtls: lcurrObj});}
          }} >
            {this.props.children}
        </Context.Provider>)
    }
}
export default ContextProvider