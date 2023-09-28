import React, { Component } from 'react';
import "../Admin/UserRedux.scss"
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import {getAllCodeService} from "../../../services/userService";
import { LANGUAGES } from '../../../utils/constant';
import * as actions from '../../../store/actions';
import 'react-image-lightbox/style.css';
import 'react-image-lightbox'
class UserRedux extends Component {

    constructor(props){
        super(props);
        this.state={
            genderArr:[],
            positionArr:[],
            roleArr:[],
            previewImgURL:" ",
            isOpen:false

        }
    }

   async componentDidMount() {
    this.props.fetchGenderStart();
    this.props.fetchPositionStart();
    this.props.fetchRoleStart();

    

        // try {
        //     let res=await getAllCodeService('gender');
        //     if(res&&res.errcode===0){
        //         this.setState({
        //             genderArr:res.data
        //         })
        //     }

            
        
        // } catch (e) {
        //     console.log(e);
            
        // }
    }


    componentDidUpdate(preProps,preState,snapshot){
        if(preProps.genderRedux!== this.props.genderRedux){
            this.setState({
                genderArr:this.props.genderRedux
            })
        }
        if(preProps.roleRedux!== this.props.roleRedux){
            this.setState({
                roleArr:this.props.roleRedux
            })
        }
        if(preProps.positionRedux!== this.props.positionRedux){
            this.setState({
                positionArr:this.props.positionRedux
            })
        }

    }
    handleOnChangeImage=(event)=>{
        let data =event.target.files;
        let file=data[0];
        if(file){
            let objectUrl=URL.createObjectURL(file);
            this.setState({
                previewImgURL:objectUrl

            })
            
        }
       
    }
    openPreviewImage =()=>{
        this.setState({
            isOpen:true
        })
    }


    render() {
        console.log( "ne",this.state)
        let genders=this.state.genderArr;
        let roles=this.state.roleArr;
        let positions=this.state.positionArr;
        let language =this.props.language;
       
        let isGetGenders=this.props.isLoadingGender;
        return (
            <div className='user-redux-container'>
                <div className='title'>
                Manage UserRedux NTanh


            </div >
         
            <div className="user-redux-body" >

               <div className='container center'>
                <div className='row'>
                <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                <label for="inputEmail4"><FormattedMessage id={'manage-user.email'}/></label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="nhoxtuananh@gmail.com"/>
                                </div>
                                <div className="form-group col-md-6">
                                <label for="inputPassword4"><FormattedMessage id={'manage-user.password'}/></label>
                                <input type="password" className="form-control" id="inputPassword4" placeholder="********"/>
                                </div>
                            </div>
                         <div className="form-row">

                            <div className="form-group col-md-6">
                                <label for="inputAddress"><FormattedMessage id={'manage-user.first-name'}/></label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="Anh"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputAddress"><FormattedMessage id={'manage-user.last-name'}/></label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="Tuấn"/>
                            </div>

                            </div>
                            <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputAddress"><FormattedMessage id={'manage-user.address'}/></label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputAddress2"><FormattedMessage id={'manage-user.phone-number'}/></label>
                                <input type="text" className="form-control" id="inputAddress2" placeholder="0123456789"/>
                            </div>

                        </div>
                            <div className="form-row">
                            <div className="form-group col-md-3">
                                <label for="inputState"><FormattedMessage id={'manage-user.gender'}/></label>
                                <select  className="form-control">
                                    {genders&&genders.length>0
                                    && genders.map((item,index)=>{
                                        return(
                                            <option key={index}>{language===LANGUAGES.VI? item.valueVi:item.valueEn}</option>
                                        )
                                    })
                                    
                                    }
                                    
                                </select>
                                </div>
                                <div className="form-group col-md-3">
                                <label for="inputState"><FormattedMessage id={'manage-user.position'}/></label>
                                <select id="inputState" className="form-control">
                                {positions&&positions.length>0
                                    && positions.map((item,index)=>{
                                        return(
                                            <option key={index}>{language===LANGUAGES.VI? item.valueVi:item.valueEn}</option>
                                        )
                                    })
                                    
                                    }

                                </select>
                                </div>
                                
                               
                                <div className="form-group col-md-3">
                                <label for="inputState"><FormattedMessage id={'manage-user.role'}/></label>
                                <select id="inputState" className="form-control">
                                


                                    {roles&&roles.length>0
                                    && roles.map((item,index)=>{
                                        return(
                                            <option key={index}>{language===LANGUAGES.VI? item.valueVi:item.valueEn}</option>
                                        )
                                    })
                                    
                                    }

                                </select>
                                </div>
                                <div className="form-group col-md-3">
                                <label for="inputZip"><FormattedMessage id={'manage-user.image'}/></label>
                                <div className='lamdep'>
                                <input type='file' id='previewImg' hidden
                                onChange={(event)=>this.handleOnChangeImage(event)}
                                
                                ></input>
                                <label className='label-upload' htmlFor='previewImg'>tải ảnh <i className="fas fa-upload"></i></label>
                                <div className='preview-image'
                                style={{backgroundImage:`url(${this.state.previewImgURL})`}}
                               onClick={()=>this.openPreviewImage()}
                               >

                                </div>
                                </div>
                                </div>
                               
                            </div>
                           
                            <button type="submit" className="btn btn-primary px-3"><FormattedMessage id={'manage-user.save'}/></button>
                 </form>
                </div>
            </div>
            {this.state.isOpen===true}
           
            
            </div>
            </div>
            
        )
    }

}

const mapStateToProps = state => {
    return {
        language:state.app.language,
        genderRedux:state.admin.genders,
        roleRedux:state.admin.roles,
        positionRedux:state.admin.positions,
        isLoadingGender:state.admin.isLoadingGender,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGenderStart:()=> dispatch(actions.fetchGenderStart()),
        fetchPositionStart:()=> dispatch(actions.fetchPositionStart()),
        fetchRoleStart:()=> dispatch(actions.fetchRoleStart()),
        // processLogout: () => dispatch(actions.processLogout()),
        // ChangeLanguageAppRedux:(language)=>dispatch(actions.ChangeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
