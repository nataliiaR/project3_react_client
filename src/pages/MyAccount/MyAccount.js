import React, { Component } from 'react';
import './Home.css';
import logo from './imageIndexLarge.jpg';
import '../../utils/dietConfig';
import DietModal from '../../components/MyDetails/MyDetails';


class MyAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
          response: '', // I am not sure about the purpose of this, leaving it as it is
          currentMode: 'form1',
        };
      }
    
      // returns the corresponding Form based on currentMode
      getForm(currentMode) {
        const forms =  {
          form1: <Form1/>,
          form2: <Form2/>,
          form3: <Form3/>,
          form4: <Form4/>
        };
    
        return forms[currentMode];
      }
    
      // update currentMode when ConfigurationMenu triggers the callback
      toggleForm(currentMode) {
        this.setState({ currentMode });
      }

  render() {
    return (

    <div className= "container-flex"> 
        <div className="row">
            <div className="col-md-4">
                <button id="myDetails"> My Details </button>
                <button id = "myFavorites"> My Favorites </button>
            </div>

            <div className="col-md-8">
              
                <div>
                <div>
        <ConfigurationMenu toggleForm={this.toggleForm} />
        <div>
          {this.getForm(this.state.currentMode)}
        </div>
      </div>
                
                </div> 
              
               
            </div>

        </div>
    </div>


    );
  }
}

export default MyAccount;
