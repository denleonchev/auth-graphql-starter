import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'

import query from '../queries/current_user'
import mutation from '../mutations/logout'

class Header extends Component {
    onLogoutClick() {
        this.props.mutate({
            refetchQueries: [{ query }]
        })
    }
    renderButtons() {
        const { data } = this.props
        if(data.loading) {
            return null
        }
        if(data.user) {
            return (
                <li><a onClick={this.onLogoutClick.bind(this)}>Logout</a></li>
            )
        }
        return (
            <div>
               <li><Link to="/login">Login</Link></li>
               <li><Link to="/signup">Signup</Link></li>
            </div>
        )
    }
    render() {
        return (
            <nav className="nav-wrapper">
                <Link to="/" className="brand-logo left">Home</Link>
                <ul className="right">
                    {this.renderButtons()}
                </ul>
            </nav>    
        )
    }
}

export default graphql(mutation)(graphql(query)(Header))