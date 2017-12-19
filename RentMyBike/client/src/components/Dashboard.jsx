import React, { Component } from 'react';
import Auth from '../modules/Auth';
import AddBikeForm from './AddBikeForm';
import EditBike from './EditBike';




class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state ={
            myBikes: null,
            bikesLoaded: false,
            showBike: false,
            editIndex: null,
        }
        this.showEdit = this.showEdit.bind(this);
        this.showList = this.showList.bind(this);
       
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
                showBike: false,
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

    showEdit(id){
        this.setState({
            showBike: true,
            editIndex: id, 
        })
    }

    showList(){
        this.setState({
            showBike: false,
           
        })
    }

    render(){
        return (
            <div className="dash">
            <h2> <b>Welcome<br/> <br/> Add your bike here! </b> </h2>
            
            <AddBikeForm addBike={this.addBike} />
            {(this.state.bikesLoaded && !this.state.showBike)
            ? (
                this.state.myBikes.map(bikes => {
                    return <h1 key={bikes.id}> 
                    <img className ="bikeImg" src={bikes.image}  alt="" /> 
                    <p> Model : {bikes.model} </p>
                    <p>Color : {bikes.color}</p>
                    <p>Condition : {bikes.condition}</p>
                    <button onClick={() => this.props.handleDelete(bikes.id)}>DELETE</button>
                    <button onClick={()=> this.showEdit(bikes.id)} >EDIT</button>
                    </h1>  
            })
            ) : <p>EDIT</p>}

            {(this.state.bikesLoaded && this.state.showBike) && (
                <EditBike  
                image ={this.state.myBikes[0].image}
                model = {this.state.myBikes[0].model}
                color = {this.state.myBikes[0].color}
                condition = {this.state.myBikes[0].condition}
                id= {this.state.editIndex}
                showList = {this.showList}/>
            )}
            
            </div>
        )
    }
}

export default Dashboard;