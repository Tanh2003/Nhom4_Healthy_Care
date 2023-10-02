import React, { Component } from 'react';

import { connect } from 'react-redux';



class Footer extends Component {
    constructor(props){
        super(props);
        this.state={

        }
          
    }
   

    

    render() {
    
      
        return (
            <div>
             
        
                <footer class="page-footer font-small blue">


                <div class="footer-copyright text-center py-3">© NTanh 2023-CNPMNC:
                    <a href="/"> HealthyCare.com</a>
                </div>


                </footer>


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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
