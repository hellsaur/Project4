import React, {Component } from 'react';


class AddBikeForm extends Component {
    constructor(){
        super();
        this.state={
            image: '',
            model: '',
            color: '',
            condition: '',
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
    render(){
        return(
            <div className="form">
            <form onSubmit={(e)=> this.props.addBike(e, this.state)}>
            <input type="text" name="image" placeholder="image" value={this.state.image} onChange={this.handleChange} />
                    <input type="text" name="model" placeholder="model" value={this.state.model} onChange={this.handleChange} />
                    <input type="text" name="color" placeholder="color" value={this.state.color} onChange={this.handleChange} />
                    <input type="text" name="condition" placeholder="condition" value={this.state.phone_number} onChange={this.handleChange} />
                    <button id="add-button" type="submit" value="Add bike" >Add Bike</button>
            </form>
            </div>
        )
    }
}

export default AddBikeForm;