import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";





class HomeHeader extends Component {
  constructor(props){
    super(props);
    
}
componentDidMount() {
       
}

 
  render() {
    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <div className="header-logo"></div>
              <span><h1 style={{color:"red" }}><b>Healthy Care</b></h1></span>
            </div>
            <div className="center-content">
              <div className="child-content">
                <div>
                  <b>Chuyên Khoa</b>
                </div>
                <div className="subs-title">Tìm Bác Sĩ Theo Chuyên Khoa</div>
              </div>
              <div className="child-content">
                <div>
                  <b>Cơ Sở Y Tế</b>
                </div>
                <div className="subs-title">Chọn bệnh viện phòng khám</div>
              </div>
              <div className="child-content">
                <div className="linkne" >
                <Link  to='/listdoctor'>Bác sĩ</Link>
                </div>
                <div className="subs-title">Chọn Bác Sĩ Giỏi</div>
              </div>
              <div className="child-content">
                <div>
                  <b> Gói Khám</b>
                </div>
                <div className="subs-title">Khám Sức Khỏe Tổng Quát</div>
              </div>
            </div>
            <div className="right-content">
              <div className="support" >
              <i className="fas fa-question-circle"></i>
               Hỗ Trợ
              </div>
              <div className="login-homepage">
                <Link to='/login'>Đăng nhập</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div className="content-up">
            <div className="title1">Nền Tảng Y Tế</div>
            <div className="title2">Chăm Sóc Sức Khỏe Toàn Diện</div>
            <div className="search">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Tìm Chuyên Khoa Khám Bệnh" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
