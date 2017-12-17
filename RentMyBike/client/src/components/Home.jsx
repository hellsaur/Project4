import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {

  componentDidMount(){
    
  }

  render(){
    return (
      <div className='home'>
       <h1 id='title'>RentMyBike</h1>
        <h3 id='title2'>Lend your bike to someone near you!</h3>
        <div className='button'>
          <Link className='button2' to='/dash' >Lend</Link>
          <Link className='button3' to='/bikes' >Rent</Link>
        </div>
      </div>
    )
  }

}

export default Home