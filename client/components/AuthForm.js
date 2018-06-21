import React, { Component } from 'react'
import { Link } from 'react-router'

class AuthForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    renderErrors() {
        const { errors } = this.props
        console.log(errors)
        if (errors.length) {
            return (
                <ul>
                    {errors.map((error, index) => (<li key={index}>{error}</li>))}
                </ul>    
            )
        }
    }
    render() {
        return (
            <div className="row">
                <form className="col s6" onSubmit={(event) => {
                    event.preventDefault()
                    this.props.handleSubmit(this.state)
                }}>
                    <div className="input-field">
                        <label>Email</label>
                        <input onChange={event => this.setState({email: event.target.value})}/>
                    </div>
                    <div className="input-field">
                        <label>Password</label>
                        <input  onChange={event => this.setState({password: event.target.value})}/>
                    </div>
                    {this.renderErrors()}
                    <button className="btn">Submit</button>
                </form>
            </div>
        )
    }
}

export default AuthForm