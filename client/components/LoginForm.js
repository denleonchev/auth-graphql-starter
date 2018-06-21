import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'

import AuthForm from './AuthForm'
import mutation from '../mutations/login'
import query from '../queries/current_user'

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: []
        }
    }
    handleLogin({ email, password }) {
        this.props.mutate({
            variables: {
                email,
                password
            },
            refetchQueries: [{ query }]
        }).catch((err) => {
            const messages = err.graphQLErrors.map(error => error.message)
            this.setState({ messages })
        })
        
    }
    componentDidUpdate(prevProps) {
        if(this.props.data.user) {
            this.props.router.push('/dashboard')
        }
    }
    render() {
        return (
            <div>
                <h2>Login</h2>
                <AuthForm handleSubmit={this.handleLogin.bind(this)} errors={this.state.messages}/>
            </div>
        )
    }
}

export default graphql(query)(graphql(mutation)(LoginForm))