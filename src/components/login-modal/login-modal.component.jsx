import React, { Component } from 'react';
import classnames from 'classnames';

//Custom Scripts
import { logout } from './../../helpers/authentication/auth';
import { ref, firebaseAuth } from './../../config/firebaseConfig';
import './login-modal.css';

class LoginModal extends Component {
    constructor(props,context){
        super(props);
        this.state = { messages: []};
    }//end:constructor

    
    componentWillMount(){
        this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
            if (user) {
                console.log('User is authenticated !!', user);
                this.setState({
                    authed: true,
                    loading: false,
                })
            } else {
                console.log('User is NOT authenticated: ', user);
                this.setState({
                    authed: false,
                    loading: false
                })
            }
        });
        
    }//end:componentWillMount
    
    loginAnonymously(){
        firebaseAuth().signInAnonymously().catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });//end:signInAnonymously

    }//end:loginAnonymously
    render(){
        return (
            <div>
                <button onClick={this.loginAnonymously}>Anonymous Login</button>
            </div>
        )
    }//end:render

}//end: LoginModal

export default LoginModal;