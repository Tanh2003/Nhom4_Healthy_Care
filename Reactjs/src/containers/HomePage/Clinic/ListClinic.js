import React, { Component } from "react";
import { connect } from "react-redux";
import DoctorHeader from "../Doctor/DoctorHeader";
import '../Doctor/DRHeader.scss';
import '../Specialty/ListSpecialty.scss'


import * as actions  from'../../../store/actions';
import { LANGUAGES} from '../../../utils/constant';
import { withRouter } from 'react-router';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import anh1 from "../../../assets/images/home2.jpg";



class ListClinic extends Component {
  

  constructor(props){
    super(props);
   
    this.state={
   
      
    
       
    }
}
async componentDidMount(){

}



  render() {

    
    
    

    return (
      <div>
          <div className="doctor-header-container">
          
          <div className="doctor-header-content">
            
            <div className="doctor-left-content">
            <Link className="custom-link" to='/home'>
            <i className="fas fa-arrow-left"></i>
            
            <span className="text-doctor">Cơ sở  y tế</span> 
            </Link>
           
            
              
            </div>
            <div className="doctor-center-content">
             
            </div>
            <div className="doctor-right-content">
              
              
            </div>
          </div>
        </div>
       
          <div className="search-container">
          <input type="text" placeholder="Tìm kiếm chuyên khoa "/>
          
          </div>





        
    
        <div className="mb-2 mt-3 px-3"><b>Cơ sở</b></div>

        
              

              
      
                
           
<div class="specialty-container mb-2">
                    <div class=" specialty-image" style={{backgroundImage:`url(${anh1})`}}>
                      

                    </div>
                    <div class="specialty-info">  
                        <div class="specialty-specialty">Cơ sở 1</div>
                    </div>
              </div>
              <div class="specialty-container mb-2">
                    <div class=" specialty-image" style={{backgroundImage:`url(${anh1})`}}>
                      

                    </div>
                    <div class="specialty-info">  
                        <div class="specialty-specialty"> NguyenTuan Anh</div>
                    </div>
              </div>
              <div class="specialty-container mb-2">
                    <div class=" specialty-image" style={{backgroundImage:`url(${anh1})`}}>
                      

                    </div>
                    <div class="specialty-info">  
                        <div class="specialty-specialty"> NguyenTuan Anh</div>
                    </div>
              </div>
              <div class="specialty-container mb-2">
                    <div class=" specialty-image" style={{backgroundImage:`url(${anh1})`}}>
                      

                    </div>
                    <div class="specialty-info">  
                        <div class="specialty-specialty"> NguyenTuan Anh</div>
                    </div>
              </div>

      
      
      
         
      
       

       
      
      
      
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language:state.app.language,
   
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadTopDoctors:()=>dispatch(actions.fetchTopDoctor())


  };
};

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(ListClinic));
