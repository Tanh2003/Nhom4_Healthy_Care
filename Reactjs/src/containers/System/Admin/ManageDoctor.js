import React, { Component } from 'react';
import { CRUD_ACTIONS, LANGUAGES} from '../../../utils/constant';
import { connect } from 'react-redux';
import './ManageDoctor.scss';
import * as actions from '../../../store/actions';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import Select from 'react-select';
import {getDetailInforDoctor} from "../../../services/userService";
import Footer from'./Footer';
const mdParser = new MarkdownIt(/* Markdown-it options */);





class ManageDoctor extends Component {
    constructor(props){
        super(props);
        this.state={
            contentMarkdown:'',
            contentHTML:'',
            selectedOption:'',
            description:'',
            listDoctor:[],
            hanOldData: false
          
             
           }
    }
    componentDidMount(){
        this.props.fetchAllDoctorRedux();

    }
    buildDataInputSelect=(inputdata)=>{
        let result=[];
        let {language}=this.props
        if(inputdata&&inputdata.length>0){
            inputdata.map((item,index)=>{

            
            let object={};
            let labelVi=`${item.lastName} ${item.firstName}`;
            let labelEn=`${item.firstName} ${item.lastName}`;
            object.label=language==LANGUAGES.VI?labelVi:labelEn;
            object.value=item.id;
            result.push(object)
            })

            
        }
       
        return result;
       


    }
    componentDidUpdate(prevProps,preState,snapshot){

        if(prevProps.allDoctors!==this.props.allDoctors){
            let dataSelect=this.buildDataInputSelect(this.props.allDoctors)
            this.setState({
                listDoctor:dataSelect
            })
        }

        if(prevProps.language !==this.props.language){
            let dataSelect=this.buildDataInputSelect(this.props.allDoctors)
            this.setState({
                listDoctor:dataSelect
            })
        }
       

    }
     handleEditorChange=({ html, text })=> {
       
        this.setState({
            contentMarkdown:text,
            contentHTML:html,
        })
    }

    handleSaveContenMarkDown=()=>{
        let{hanOldData}=this.state
        
    this.props.saveDetaiDatalDoctorRedux({
        contentHTML:this.state.contentHTML,
        contentMarkdown:this.state.contentMarkdown,
        description:this.state.description,
        doctorId:this.state.selectedOption.value,
        action:hanOldData===true?CRUD_ACTIONS.EDIT:CRUD_ACTIONS.CREATE
    });

   

    }
    handleChangeSelect =async (selectedOption) => {
        console.log("xem options",this.state.listDoctor)
        this.setState({ selectedOption });

     let res =   await getDetailInforDoctor(selectedOption.value)

        if(res && res.errcode===0&& res.data.Markdown){
            let markdown =res.data.Markdown;
            this.setState({
                contentHTML:markdown.contentHTML,
                contentMarkdown:markdown.contentMarkdown,
                description:markdown.description,
                hanOldData:true
               

            })

        }else{
            this.setState({
                contentHTML:'',
                contentMarkdown:'',
                description:'',
                hanOldData:false
            })

        }
      };

      handleOnChangeDescription=(event)=>{
        this.setState({
            description:event.target.value
        })
      }

    

    render() {
        let{hanOldData}=this.state;
       
        return (
            
           <div className='manage-doctor-container'>
                <div  className='manage-doctor-title mb-5 mt-3 px-3'>
                    <b>Tạo thêm Thông tin bác sĩ</b>
                </div>
                <div className='more-infor'>
                    <div className='content-left form-group'>
                       
                    <label>Chọn bác sĩ</label>
                        
                        <Select
                            value={this.state.selectedOption}
                            onChange={this.handleChangeSelect}
                            options={this.state.listDoctor}
                            className="mb-5"

                        />

                    </div>
                    <div className='content-right'>
                    <label>Thông tin giới thiệu</label>
                    <textarea className='form-control'rows="4"
                    onChange={(event)=>this.handleOnChangeDescription(event)}
                    value={this.state.description}
                    >
                        


                    </textarea>

                    </div>
                    


                </div>
                <div className='manage-doctor-editor'>
                <MdEditor style={{ height: '500px' }} 
                renderHTML={text => mdParser.render(text)} 
                onChange={this.handleEditorChange}
                value={this.state.contentMarkdown}
                />

                </div>
                <button className={hanOldData===true?"save-content-doctor btn btn-warning  mt-3 mb-5 px-3":"create-content-doctor  btn btn-primary mt-3 mb-5 px-3"}
                onClick={()=>this.handleSaveContenMarkDown()}
                
                >{
                    hanOldData===true?
                    <span>Lưu thông tin</span>:<span>Tạo thông tin</span>
                }</button>


                <Footer/>


            </div>  
        );
    }

}

const mapStateToProps = state => {
    return {
        language:state.app.language,
        allDoctors:state.admin.allDoctors
    };
};

const mapDispatchToProps = dispatch => {
    return {
       
        fetchAllDoctorRedux:()=>dispatch(actions.fetchAllDoctor()),
        saveDetaiDatalDoctorRedux:(data)=>dispatch(actions.saveDetaiDatalDoctor(data))
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
