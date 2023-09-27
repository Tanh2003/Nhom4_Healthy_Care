import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';
import { LANGUAGES } from '../../utils/constant';
import { ChangeLanguageApp } from '../../store/actions';

class Header extends Component {
    handleChangeLaguage=(language)=>{
        this.props.ChangeLanguageAppRedux(language)
        
    }
    render() {
        const { processLogout,language } = this.props;
       

        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>
                <div className='languages'>
                    <span className={language===LANGUAGES.VI?"language-vi active":"language-vi"}
                       onClick={()=> this.handleChangeLaguage(LANGUAGES.VI)}>
                        
                        VN</span>
                    <span className={language===LANGUAGES.EN?"language-en active":"language-en"}
                     onClick={()=>this.handleChangeLaguage(LANGUAGES.EN)}>
                        
                        EN</span>

                {/* nút logout */}
                <div className="btn btn-logout" onClick={processLogout} title='Logout'>

                    <i className="fas fa-sign-out-alt"></i>
                </div>
                </div>

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language:state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        ChangeLanguageAppRedux:(language)=>dispatch(actions.ChangeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
