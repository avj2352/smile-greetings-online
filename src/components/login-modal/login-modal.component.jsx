import React, { Component } from 'react';
import classnames from 'classnames';
import githubLogo from './../../assets/icons/social/001-github.svg';
import googleLogo from './../../assets/icons/social/002-google-plus.svg';
import twitterLogo from './../../assets/icons/social/003-twitter.svg';
import facebookLogo from './../../assets/icons/social/004-facebook.svg';

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

    fbLogin (){
        console.log('Facebook Login');
    }//end:fbLogin

    googleLogin (){
        console.log('Google Login');
    }//end:googleLogin

    twitterLogin (){
        console.log('Twitter Login');
    }//end:twitterLogin

    githubLogin (){
        console.log('Github Login');
    }//end:githubLogin

    render(){
        return (
            <div className="login-modal">
                {/* <button onClick={this.loginAnonymously}>Anonymous Login</button> */}
                <div className="login-modal__header">
                    <h1>SIGN IN</h1>
                    <p>Sign in with your &nbsp;
                        <span className="fbtext">Facebook</span> /&nbsp;
                        <span className="googletext">Google</span> /&nbsp; 
                        <span className="twittertext">Twitter</span> /&nbsp; 
                        <span className="githubtext">Github</span> account
                        </p>
                </div>
                <div className="social-icons-section">
                    <img onClick= {this.fbLogin} src={facebookLogo} alt="facebook" title="Sign in using Facebook"/>
                    <img onClick = {this.googleLogin} src={googleLogo} alt="google" title="Sign in using Google"/>
                    <img onClick = {this.twitterLogin} src={twitterLogo} alt="twitter" title="Sign in using Twitter"/>
                    <img onClick = {this.githubLogin} src={githubLogo} alt="github" title="Sign in using Github account"/>                    
                </div>
                <div className="login-form-section">
                    <form action="form-class-group" onSubmit={this.loginAnonymously}>
                        <input type="text" placeholder="Enter Email/Username"/>
                        <input type="password" placeholder="Enter Password"/>
                        <button type="submit">Sign in</button>
                    </form>
                </div>
                <div className="register-section">
                    <p>or click here to <a href="#">Register / Sign up</a></p>
                </div>
            </div>
        );
    }//end:render

}//end: LoginModal

export default LoginModal;