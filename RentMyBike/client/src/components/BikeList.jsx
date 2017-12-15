import React, { Component } from 'react';

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

    renderBikes(){
        return this.state.bikeList.map(bike => {
            return (
                <div className="bike" key={bike.id}>
                {bike.image}
                <h2>{bike.model}</h2>
                <p>{bike.color}</p>
                <p>{bike.condition}</p>
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