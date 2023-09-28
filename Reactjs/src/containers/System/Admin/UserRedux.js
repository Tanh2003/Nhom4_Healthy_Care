import React, { Component } from 'react';
import "../Admin/UserRedux.scss"
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import {getAllCodeService} from "../../../services/userService";
import { LANGUAGES } from '../../../utils/constant';
class UserRedux extends Component {

    constructor(props){
        super(props);
        this.state={
            genderArr:[]

        }
    }

   async componentDidMount() {
        try {
            let res=await getAllCodeService('gender');
            if(res&&res.errcode===0){
                this.setState({
                    genderArr:res.data
                })
            }

            
        
        } catch (e) {
            console.log(e);
            
        }
    }


    render() {
        console.log( this.state.genderArr)
        let genders=this.state.genderArr;
        let language =this.props.language;
        return (
            <div className='user-redux-container'>
                <div className='title'>
                Manage UserRedux NTanh


            </div>

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
                                    <option selected>Choose...</option>
                                    <option>Admin</option>
                                    <option>Doctor</option>
                                    <option></option>

                                </select>
                                </div>
                                
                               
                                <div className="form-group col-md-3">
                                <label for="inputState"><FormattedMessage id={'manage-user.role'}/></label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>Admin</option>
                                    <option>Doctor</option>
                                    <option></option>

                                </select>
                                </div>
                                <div className="form-group col-md-3">
                                <label for="inputZip"><FormattedMessage id={'manage-user.image'}/></label>
                                <input type="text" className="form-control" id="inputZip"/>
                                </div>
                            </div>
                           
                            <button type="submit" className="btn btn-primary px-3"><FormattedMessage id={'manage-user.save'}/></button>
                 </form>
                </div>
            </div>
            </div>
            </div>
            
        )
    }

}

const mapStateToProps = state => {
    return {
        language:state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
