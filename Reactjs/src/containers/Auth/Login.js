import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
// import * as actions from "../store/actions";
import * as actions from "../../store/actions";
import './Login.scss';

import{handleLoginApi} from '../../services/userService';



class Login extends Component {
    constructor(props) {
        super(props);
      
        this.state={
            username:'',
            password:'',
            isShowPassword: false,
            errMessage:''
         


        }
    }
    handleOnChangeUsername=(event)=>{
        this.setState({
            username: event.target.value
        })
           
        
     

    }
    handleOnChangePassword=(event)=>{
        this.setState({
            password: event.target.value
        })
           
        

    }
    handleLogin= async()=>{
        // in ra conssole
       this.setState({
        errMessage:''
       });

       try {
       let data= await handleLoginApi(this.state.username,this.state.password);
       if( data && data.errcode !== 0){
        this.setState({
            errMessage: data.message
           })
       }
       if(data && data.errcode == 0){
        //todo
        this.props.userLoginSuccess(data.user)
        console.log("login succeeds")
       }
       } catch (error) {

        if(error.response){
            if(error.response.data){
            this.setState({
                    errMessage: error.response.data.message
                });
            }
        }
        console.log("Ntanh",error.response)
     
 
       }
    }
    handleShowHidePassword=()=>{
       this.setState({
        isShowPassword: !this.state.isShowPassword //  lenh nay dung de  gan gia tri true false
       })
    }
    render() {
        //JSX


        return (
            // chỉ render ra 1 khối div thôi
           
        //    <div className='login-background'> 
        //    <div className='login-container'>
        //     <div className='login-content row'>
        //         <div className='col-12  text-login'>Login</div>
        //         <div className='col-12 form-group login-input'>
        //             <label>Username: </label>
        //             <input type='text' className='form-control ' placeholder='Enter your Username'
        //              //value={this.state.username}
        //              onChange={(event)=> this.handleOnChangeUsername(event)}
                     
        //              >

        //              </input>

        //         </div>
        //         <div className='col-12 form-group login-input'>
        //             <label>Password: </label>
        //             <div className='custom-input-password'>
        //             <input type={this.state.isShowPassword ? 'text':"password"} className='form-control' placeholder='Enter your Password
        //             ' //value={this.state.password}
        //              onChange={(event)=> this.handleOnChangePassword(event)}>

        //             </input>
        //             <span
        //             onClick={()=>this.handleShowHidePassword()}
        //             > 
        //             <i class={this.state.isShowPassword?"fas fa-eye":"fas fa-eye-slash"}></i>
        //             </span>
               
                    
        //             </div>
                   

        //         </div>
        //         <div className='col-12' style={{color:'red'}}>
        //             {this.state.errMessage}

        //         </div>
        //         <div className='col-12'>
        //         <button className='btn-login 'onClick={()=>this.handleLogin()}>Login</button>
        //         </div>
               
               
        //         <div className='col-12'>
        //             <span className='forgot-password'> Forgot your password?</span>
        //         </div>
        //         <div className='col-12 text-center mt-3'>
        //             <span className='text-orther-login'>Or Login with:</span>

        //         </div>
        //         <div className='col-12 social-login'> 
        //         <i className="fab fa-google-plus-g google"></i>
        //         <i className="fab fa-facebook facebook"></i>
        //         </div>
                

               
        //     </div>
        //    </div>

        //    </div>










<div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" integrity="sha512-NmLkDIU1C/C88wi324HBc+S2kLhi08PN5GDeUVVVC/BVt/9Izdsc9SVeVfA1UZbY3sHUlDSyRXhCzHfr6hmPPw==" crossorigin="anonymous" referrerpolicy="no-referrer" />



<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />


<div class="header">
  <div class="logo">
    <a href="home.html"><img src="./public/img/Logo.webp" alt="" /></a>
    <p class="login_title"> Đăng nhập </p>
  </div>
</div>
<div class="login">
  <div class="login_view">
    <div class="login_logo">
      <a href="home.html">
        <img src="/assets/img/Logo.webp" alt="" class="logo_width"/>
       <p class="item" href="home.html">HEALTHY CARE</p>
      </a>
    </div>
  </div>
      <div class="login_bg">
        <div id="loginform">
          <p class="title">Đăng nhập</p>

          <input type='text' className='form-control ' placeholder='Enter your Username'
          //value={this.state.username}
          onChange={(event)=> this.handleOnChangeUsername(event)}/>
        

        <input type={this.state.isShowPassword ? 'text':"password"} className='form-control' placeholder='Enter your Password
        ' //value={this.state.password}
         onChange={(event)=> this.handleOnChangePassword(event)}/>
         <span
         onClick={()=>this.handleShowHidePassword()}
         > 
         <i class={this.state.isShowPassword?"fas fa-eye":"fas fa-eye-slash"}></i>
         </span>
        
        <div className='col-12' style={{color:'red'}}>
          {this.state.errMessage}

        </div>

    <div>
    <button className='btn btn-primary px-3 btn-login 'onClick={()=>this.handleLogin()}>Login</button>

    </div>

<div>
<p class="signin" >Bạn là thành viên mới?<a onClick={()=>this.handleLogin()}> Đăng kí</a> tại đây</p>

</div>
      
          
        </div>
      </div>
  </div>



















</div>


































        
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
   
        userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess:(userInfo)=>dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
