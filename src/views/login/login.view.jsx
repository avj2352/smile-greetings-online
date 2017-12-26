import React, { Component } from 'react';
import logo from './../../assets/logo/logo.png';
import classnames from 'classnames';
import './login.css';

class Login extends Component {
    render() {
        return (
            <div className="login">
                <header>
                    <div className="logo-image">
                        <img src={logo} width="10%" height="auto"/>
                    </div>
                    <div className="title">Smile Greetings Online</div>
                </header>
            </div>
        );
    }//end:render
}//end:LoginComponent

export default Login;