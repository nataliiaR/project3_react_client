import React, { Component } from 'react';
import './Home.css';
import logo from './imageIndexLarge.jpg';
import '../../utils/dietConfig';
import DietModal from '../../components/DietModal/DietModal';


class App extends Component {

  render() {
    return (

    <div className= "container-flex"> 
        <div className="row">
            <div className="col-md-7">
                <img className= "logo" src ={logo}/>
              
            </div>

            <div className="col-md-5">
              
                <div>
                    <h2>Welcome to iEat! </h2>

                    <p>To generate a meal plan please select and submit diet preferenences</p>
                    <DietModal />
                
                </div> 
              
               
            </div>

        </div>
    </div>


    );
  }
}

export default App;
