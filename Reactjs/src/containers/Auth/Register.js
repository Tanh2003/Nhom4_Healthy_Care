import { forEach } from 'lodash';
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button,Modal,ModalHeader,ModalBody,ModalFooter } from 'reactstrap';
import {emitter} from '../../utils/emitter';
import './Registter.scss';




class Register extends Component {

    constructor(props){
        super(props);
        this.state ={
          email:'',
          password:'',
          firstName:'',
          lastName:'',
          
          phoneNumber:'',
         



        }
        this.listenToEmitter();
    }
    listenToEmitter=()=>{
      emitter.on('EVENT_CLEAR_MODAL_DATA',()=>{
        //reset state
        this.setState({
          email:'',
          password:'',
          firstName:'',
          lastName:'',
          
          phoneNumber:'',
          
        })
      });

    }
    componentDidMount() {
       
    }
   
      toggle=()=>{
       this.props.toggleFromParent();

      }

      handleOnChangeInput=(event,id)=>{
        //bad code.
        /**
         * this.state={
         * email:'',
         * password:''
         * }
         * this.state.email==this.state['emal']
         * 
         * 
         * 
         */
        // this.state[id]=event.target.value;
        // this.setState({
        //   ...this.state
        // },()=>{
        //   console.log('check bad state : ',this.state)
        // })



        //good code
        let copyState={...this.state};
        copyState[id]=event.target.value;
        this.setState({
          ...copyState
        },()=>{
         // console.log('check good state: ',this.state);
        })
        //console.log('copystate: ',copyState);
      
       // console.log(event.target.value,id)
      }
      checkValideInput=()=>{
        let isValid=true;
        let arrInput=['email','password','firstName','lastName','phoneNumber'];
       
        for(let i=0;i<arrInput.length;i++){
          console.log('check inside loop',this.state[arrInput[i]],arrInput[i]);
          if(!this.state[arrInput[i]])
          {
            isValid=false;
            alert('Missing parameter: '+arrInput[i]);
            break;
          }
        }
        
        return isValid;
      }



      handleAddNewUser=()=>{
        let isValid= this.checkValideInput();

        if(isValid==true){
          //call api create modal
        //  console.log('check props child:',this.props);
          this.props.createNewUser(this.state);
        // console.log('data modal:',this.state)
        

        }

     
       

      }
      handleDangNhapTuDK =()=>{
        this.props.history.push('/login');

      }

      handleShowHidePassword=()=>{
        this.setState({
         isShowPassword: !this.state.isShowPassword //  lenh nay dung de  gan gia tri true false
        })
     }


    

    
    render() {
      
     
        return (
          <div className='login-background'> 
          <div className='login-container'>
           <div className='login-content row'>
               <div className='col-12  text-login'>Login</div>
               <div className='col-12 form-group login-input'>
                   <label>Username: </label>
                   <input type='text' className='form-control ' placeholder='Enter your Username'
                    //value={this.state.username}
                    onChange={(event)=>{
                      this.handleOnChangeInput(event,'email')
              
                    }}
                    value={this.state.email}
                    >

                    </input>

               </div>
               <div className='col-12 form-group login-input'>
                   <label>Password: </label>
                   <div className='custom-input-password'>
                   <input type={this.state.isShowPassword ? 'text':"password"} className='form-control' placeholder='Enter your Password
                   ' //value={this.state.password}
                   onChange={(event)=>{
                    this.handleOnChangeInput(event,'password')
            
                  }}
                  value={this.state.password}>

                   </input>
                   <span
                   onClick={()=>this.handleShowHidePassword()}
                   > 
                   <i class={this.state.isShowPassword?"fas fa-eye":"fas fa-eye-slash"}></i>
                   </span>
              
                   
                   </div>
                  

               </div>
               <div className='col-12 form-group login-input'>
                   <label>First Name: </label>
                   <input type='text' className='form-control ' placeholder='Anh'
                    //value={this.state.username}
                    onChange={(event)=>{
                      this.handleOnChangeInput(event,'firstName')
              
                    }}
                    value={this.state.firstName}
                    
                    >

                    </input>

               </div>
               <div className='col-12 form-group login-input'>
                   <label>Last Name: </label>
                   <input type='text' className='form-control ' placeholder='Tuan Anh'
                    //value={this.state.username}
                    onChange={(event)=>{
                      this.handleOnChangeInput(event,'lastName')
              
                    }}
                    value={this.state.lastName}
                    
                    >

                    </input>

               </div>
             
               <div className='col-12 form-group login-input'>
                   <label>Phone: </label>
                   <input type='text' className='form-control ' placeholder='0123456789'
                    //value={this.state.username}
                    onChange={(event)=>{
                      this.handleOnChangeInput(event,'phoneNumber')
              
                    }}
                    value={this.state.phoneNumber}
                    
                    >

                    </input>

               </div>
               <div className='col-12' style={{color:'red'}}>
                   {this.state.errMessage}

               </div>
               <div className='col-12'>
               <button className='btn-login ' onClick={()=>{this.handleAddNewUser()}}>Register</button>
               </div>
              
              
              
               <div className='col-12'>
               <a className='forgot-password' onClick={()=>this.handleDangNhapTuDK()}>Đăng Nhập</a>
               </div>
              
               

              
           </div>
          </div>

          </div>



          




          
      
     

      
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);








