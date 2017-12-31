import React, { Component } from 'react';
//Custom Scripts
import LoginModal from './../../components/login-modal/login-modal.component';
import PreviewCard from './../../components/preview-cards/preview-card.component';
//CSS and Assets
import logo from './../../assets/logo/logo.svg';
import './login.css';

class Login extends Component {
    render() {
        return (
            <div className="login">
                <header>
                    <div className="logo-image">
                        <img src={logo} width="80%" height="auto"/>
                    </div>
                    <div className="logo-content">
                        <div className="title">Smile Greetings Online</div>
                        <div className="subtitle">Create.Share.Celebrate</div>
                    </div>
                </header>
                <section>
                    <div className="login-modal-section">
                        <LoginModal></LoginModal>
                    </div>
                    <div className="rotating-card-section">
                        <PreviewCard></PreviewCard>
                    </div>
                </section>
            </div>
        );
    }//end:render
}//end:LoginComponent

export default Login;