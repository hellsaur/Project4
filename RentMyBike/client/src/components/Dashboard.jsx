import React, { Component } from 'react';
import Auth from '../modules/Auth';
import AddBikeForm from './AddBikeForm';




class Dashboard extends Component {
    constructor() {
        super();
        this.state ={
            myBikes: null,
            bikesLoaded: false,
        }
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount(){
      this.getUserBikes();
    }

    getUserBikes(){
        console.log('bikes')
        fetch('/profile', {
            method: 'GET',
            headers: {
                token: Auth.getToken(),
                'Authorization': `Token ${Auth.getToken()}`,
            }
        }).then(res => res.json())
        .then(res => {
            console.log(res)
            this.setState({
                myBikes: res.bikes,
                bikesLoaded: true,
              })
        }).catch(err => console.log(err));
    }

    addBike(e, data) {
        fetch('/bikes',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                token: Auth.getToken(),
                'Authorization': `Token ${Auth.getToken()}`,
            },
            body: JSON.stringify({
                bike: data,
            }),
        }).then(res=> res.json())
        .then(res=> {
            console.log(res);
            this.getUserBikes();
        }).catch(err => console.log(err));
    }

    handleDelete(){
        fetch('/bike', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        }).catch(err => console.log(err))
      }

    render(){
        return (
            <div className="dash">
            <h2> <b>Welcome </b> </h2>
            
            <AddBikeForm addBike={this.addBike} />
            {(this.state.bikesLoaded)
            ? this.state.myBikes.map(bikes => {
                return <h1 key={bikes.id}> 
                <img src={bikes.image} style={{ width: '600px' }} alt="" /> 
                <p> Model : {bikes.model} </p>
                <p>Color : {bikes.color}</p>
                <p>Condition : {bikes.condition}</p>
                <button onClick={() => this.handleDelete()}>DELETE</button>
                <button onClick= {""}>Pick Bike</button>
                <button onClick={() => {this.props.updateInfo()}} >Edit</button>
                </h1>
                
            })
            : <p>Loading ...</p>}
            
            </div>
        )
    }
}

export default Dashboard;