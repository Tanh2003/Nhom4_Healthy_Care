import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu,doctorMenu } from './menuApp';
import './Header.scss';
import { LANGUAGES, USER_ROLE } from '../../utils/constant';
import { ChangeLanguageApp } from '../../store/actions';
import { FormattedMessage } from 'react-intl';
import _ from 'lodash';
import HomeHeader from './../HomePage/HomeHeader';

class Header extends Component {

    constructor(props){
        super(props);
       
        this.state={
            menuApp:[]
            
          
        
           
        }
    }
    handleChangeLaguage=(language)=>{
        this.props.ChangeLanguageAppRedux(language)
        
    }
    componentDidMount(){
        let{userInfo}=this.props;
        let menu=[];
        if(userInfo&&!_.isEmpty(userInfo)){
            let role=userInfo.roleId;
            if(role===USER_ROLE.ADMIN){
                menu=adminMenu;

            }
            if(role===USER_ROLE.DOCTOR){
                menu=doctorMenu;

            }
            if(role===USER_ROLE.PAITIENT){
                menu=doctorMenu;
               

            }
           

        }
        this.setState({
            menuApp:menu
        })
    }
    render() {
        const { processLogout,language,userInfo} = this.props;
       console.log( "check user info: ",userInfo)

        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={this.state.menuApp} />
                </div>
                <div className='languages'>
                    <span className='welcome'><FormattedMessage id={'adminheader.welcome'}/>{userInfo&&userInfo.firstName?userInfo.firstName:""}
                    </span>
                    {/* <span className={language===LANGUAGES.VI?"language-vi active":"language-vi"}
                       onClick={()=> this.handleChangeLaguage(LANGUAGES.VI)}>
                        
                        VN</span>
                    <span className={language===LANGUAGES.EN?"language-en active":"language-en"}
                     onClick={()=>this.handleChangeLaguage(LANGUAGES.EN)}>
                        
                        EN</span> */}

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
        language:state.app.language,
        userInfo: state.user.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        ChangeLanguageAppRedux:(language)=>dispatch(actions.ChangeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
