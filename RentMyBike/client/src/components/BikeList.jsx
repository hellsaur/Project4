import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import EditBike from './EditBike';
import BikeRentalForm from './BikeRentalForm';

class BikeList extends Component {
    constructor(props){
        super(props);
        this.state = {
            bikeList: null,
            bikeListLoaded: false,
        }
        
    }

    componentDidMount() {
        fetch('/bikes')
        .then(res => res.json())
        .then(res => {
            console.log(res);
            this.setState({
                bikeList: res.bikes,
                bikeListLoaded: true,
            })
        }).catch(err => console.log(err));
    }


    
  
    renderBikes(){
        return this.state.bikeList.map(bike => {
            return (
                <div className="bike" key={bike.id}>
                <img className ="bikeImg"src={bike.image} alt=""/>
                <h2> Type :  {bike.model}</h2>
                <h4>Color : {bike.color}</h4>
                <h4>Condition : {bike.condition}</h4>
                <Link to='/rental'>
                    <button>Rent Bike</button>
                </Link>
                </div>
            )
        })
    }
    render(){
        console.log(this.props)
        return(
            <div className="bike-list">
            {(this.state.bikeListLoaded)
                 ? this.renderBikes()
                 : <p> Loading ...</p>}
            </div>
        )
    }
}

export default BikeList;