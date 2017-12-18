
import React, { Component } from 'react'

// This component is the input bar that appears when editing the name of a saved routine.

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
  }

  // handleChange for allowing form to receive inputs.

  handleChange(e){
    const name = e.target.name;
    const val = e.target.value;
    this.setState({
        [name]: val,
    });
}

  // handleSubmit for changing the actual data.
  // The toggleMode is to designate which saved routine is being edited.
  // Therefore, there can only be one input field open at a time.

  handleSubmit(e){
    e.preventDefault()
    this.props.updateInfo(e.target.name.value)
   
  }

  // Conditional rendering on the form.

  render(){
    return (
      <div>
        
          <form onSubmit={(e) => this.handleSubmit(e)} >
            <input className="rename-input" type="text" name="image" value={this.state.image || ""}
              onChange={(e) => this.handleChange(e)} />
              <input className="rename-input" type="text" name="model" value={this.state.model || ""}
              onChange={(e) => this.handleChange(e)} />
              <input className="rename-input" type="text" name="color" value={this.state.color || ""}
              onChange={(e) => this.handleChange(e)} />
              <input className="rename-input" type="text" name="condition" value={this.state.condition || ""}
              onChange={(e) => this.handleChange(e)} />
          <input className ="submit-rename-btn" type="submit" value="SUBMIT"/>
          </form>
        
      </div>
    )
  }

}

export default EditBike;