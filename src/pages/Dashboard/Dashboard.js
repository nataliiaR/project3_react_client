import React, { Component } from "react";
import API from "../../utils/API";
import RecipeItem from "../../components/RecipeItem/RecipeItem.js"
import ReactModal from 'react-modal';
import Carousel from 'react-bootstrap/Carousel'

import "./Dashboard.css";
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
    },
    overlay:{
        position: 'fixed',
        left:'2em',
        right:'2em',
        zIndex:'1'
    }
  };
  

class Dashboard extends Component {
    constructor (){

        super();
        this.state = {
            showModal: false
          };
          
          this.handleOpenModal = this.handleOpenModal.bind(this);
          this.handleCloseModal = this.handleCloseModal.bind(this);
        }
        
        handleOpenModal () {
          this.setState({ showModal: true });
        }
        
        handleCloseModal () {
          this.setState({ showModal: false });
        }
    login() {
        this.props.auth.login();
    }
    state = {
        menuOptions: []
    };

    // ==============================================================
    // Component loads menu and sets a placholder in current items
    componentDidMount() {
        // get all recipes
        API.getSchedule()
            .then(data => {
              console.log("lalal")  // this.setState({ menuOptions: data.data });
            });
        // get all orders

    }

    // ==============================================================
    // Handle adding and deleting of menu items

    getRecipe = recipe => {
        API.getRecipe(recipe)
            .then(data => {
            });
    }

    handleDelete = index => {
        API.deleteRecipe(index)
            .then(data => {
                console.log("lalal");

            });
    }


    // Render function
    render() {

        return (
        <div>
                <Carousel className = "carousel" interval={0} wrap ={false}>
                <Carousel.Item>
                 
                        <p className="dayTittle"> Day 1 </p>
                        <br />
                        <div className="row">
                            <div className = "hvr-grow col-md-4">
                                <p>Breakfast recipe: Eggs, dumplings and more</p>
                                <img className = "image_cust" src="https://cdn.pixabay.com/photo/2017/03/10/13/57/cooking-2132874_960_720.jpg" />
                                <button className= "btn" onClick={this.handleOpenModal}> View Recipe</button>
  
                                    {this.state.showModal ? <ReactModal 
                                        isOpen={this.state.showModal}
                                        contentLabel="Minimal Modal Example"
                                        style={customStyles}>
                                        <RecipeItem /> 	
                                        <button onClick={this.handleCloseModal}>Close Modal</button></ReactModal>: null}
                            </div>
                            <div className = "col-md-4">
                                <p>Lunch recipe: Pizza pizza</p>
                                <img className = "image_cust" src="https://cdn.pixabay.com/photo/2017/12/10/14/47/piza-3010062_960_720.jpg" />
                                <button className= "btn" onClick={() => alert("Recipe 2")}> View Recipe</button>
                            </div>
                            <div className = "col-md-4">
                                <p>Dinner recipe: meat, asparagus abn more</p>
                                <img className = "image_cust" src="https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_960_720.jpg" />
                                <button className= "btn" onClick={() => alert("Recipe 3")}> View Recipe</button>
                            </div>
                        </div>
                  
                </Carousel.Item>

                <Carousel.Item>
                <p> Day 2 </p>
                        <br />
                        <div className="row">
                            <div className = "col-md-4" onClick={() => alert("lalala")} >
                                <img className = "image_cust" src="https://cdn.pixabay.com/photo/2017/03/10/13/57/cooking-2132874_960_720.jpg" />
                            </div>
                            <div className = "col-md-4">
                                <img className = "image_cust" src="https://cdn.pixabay.com/photo/2017/12/10/14/47/piza-3010062_960_720.jpg" />
                            </div>
                            <div className = "col-md-4">
                                <img className = "image_cust" src="https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_960_720.jpg" />
                            </div>
                        </div>
                </Carousel.Item>
                <Carousel.Item>
                
                <p> Day 3 </p>
                        <br />
                        <div className="row">
                            <div className = "col-md-4" onClick={() => alert("lalala")} >
                                <img className = "image_cust" src="https://cdn.pixabay.com/photo/2017/03/10/13/57/cooking-2132874_960_720.jpg" />
                            </div>
                            <div className = "col-md-4">
                                <img className = "image_cust" src="https://cdn.pixabay.com/photo/2017/12/10/14/47/piza-3010062_960_720.jpg" />
                            </div>
                            <div className = "col-md-4">
                                <img className = "image_cust" src="https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_960_720.jpg" />
                            </div>
                        </div>
                </Carousel.Item>
   
                </Carousel>
                
            

    </div>
        );
    }
}

export default Dashboard;