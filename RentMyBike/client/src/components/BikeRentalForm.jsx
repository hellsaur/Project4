import React, {Component } from 'react';

import Auth from '../modules/Auth';

// import Auth from '../modules/Auth';

class BikeRentalForm extends Component {
    constructor(){
        super();
        this.state={
            f_name: '',
            l_name: '',
            email: '',
            phone: '',
            date: '',
            time: '',
            address: '',
            duration: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e){
        const name = e.target.name;
        const val = e.target.value;
        this.setState({
            [name]: val,
        });
    }

    rentalInformation(id){
        fetch(`/bikes/${id}`, {
          method: 'POST',
          body: JSON.stringify({
            
          }),
          headers: {
            'Content-Type': 'application/json',
            token: Auth.getToken(),
            'Authorization': `Token ${Auth.getToken()}`,
          },
          
        }).catch(err => console.log(err))
    
      }

      
    render(){
        return(
            <div className="form">
            
            <form onSubmit={(e)=> this.rentalInformation(this.state)}>
                    <input type="text" name="f_name" placeholder="first name" value={this.state.f_name} onChange={this.handleChange} />
                    <input type="text" name="l_name" placeholder="last name" value={this.state.l_name} onChange={this.handleChange} />
                    <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange} />
                    <input type="text" name="phone" placeholder="phone" value={this.state.phone} onChange={this.handleChange} />
                    <input type="text" name="date" placeholder="date" value={this.state.date} onChange={this.handleChange} />
                    <input type="text" name="time" placeholder="time" value={this.state.time} onChange={this.handleChange} />
                    <input type="text" name="address" placeholder="address" value={this.state.address} onChange={this.handleChange} />
                    <input type="text" name="duration" placeholder="duration" value={this.state.duration} onChange={this.handleChange} />
                    
                    <button id="add-button" type="submit" value="Add bike" >Submit</button>
            </form>
            </div>
        )
    }
}

export default BikeRentalForm;