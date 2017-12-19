
import React, { Component } from 'react'

import Auth from '../modules/Auth';



class EditBike extends Component {

  constructor(props){
    super(props)
    this.state = {
      image: this.props.image,
      model: this.props.model,
      color: this.props.color,
      condition: this.props.condition
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateInfo = this.updateInfo.bind(this)
  }


  handleChange(e){
    const name = e.target.name;
    const val = e.target.value;
    this.setState({
        [name]: val,
    });
}

  handleSubmit(e){
    e.preventDefault()
    this.props.updateInfo(e.target.name.value)
   
  }

  updateInfo(e){
    e.preventDefault()
    fetch(`/bikes/${this.props.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        bike: {
          image: this.state.image,
          model: this.state.model,
          color: this.state.color,
          condition: this.state.condition,
        }
      }),
      headers: {
        'Content-Type': 'application/json',
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`,
      },
      
    }).then(res =>{
      this.props.showList();
    })
    .catch(err => console.log(err))

  }

  render(){
    return (
      <div>
        
          <form className="editForm" onSubmit={this.updateInfo}>
            <input className="rename-input" type="text" name="image" value={this.state.image || ""}
              onChange={(e) => this.handleChange(e)} />
              <input className="rename-input" type="text" name="model" value={this.state.model || ""}
              onChange={(e) => this.handleChange(e)} />
              <input className="rename-input" type="text" name="color" value={this.state.color || ""}
              onChange={(e) => this.handleChange(e)} />
              <input className="rename-input" type="text" name="condition" value={this.state.condition || ""}
              onChange={(e) => this.handleChange(e)} />
          <button id="edit-button" type="submit" value="Edit bike" >Edit Bike</button>
          </form>
        
      </div>
    )
  }

}

export default EditBike;