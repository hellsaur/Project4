import React, {Component } from 'react';

class LoginForm extends Component {
    constructor() {
        super();
        this.state ={
            username: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const name = e.target.name;
        const val = e.target.value;
        this.setState({
            [name]: val,
        });
    }

    render() {
        return (
            <div className="form">
            
                <form className ="login-form" onSubmit = {(e) => this.props.handleLoginSubmit(e, this.state)}>
                <h1>Please Login</h1>
                    <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
                    
                    <input type="submit" value="Login!"/>
                    <p id= "register">Not registered?<a href='/register'>Register!</a></p>
                </form>
                
            </div>
        )
    }

}

export default LoginForm;