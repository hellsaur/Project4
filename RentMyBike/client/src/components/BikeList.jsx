import React, { Component } from 'react';

import EditBike from './EditBike';

class BikeList extends Component {
    constructor(){
        super();
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


    updateInfo(data){
        fetch('api/update', {
          method: 'PUT',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          },
          
        }).catch(err => console.log(err))
    
      }
  
    renderBikes(){
        return this.state.bikeList.map(bike => {
            return (
                <div className="bike" key={bike.id}>
                <img src={bike.image} style={{ width: '600px' }} alt=""/>
                <h2>{bike.model}</h2>
                <h4>Color : {bike.color}</h4>
                <h4>Condition : {bike.condition}</h4>
                <button onClick={() => this.props.handleDelete()}>DELETE</button>
                </div>
            )
        })
    }
    render(){
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