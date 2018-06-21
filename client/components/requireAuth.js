import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { browserHistory } from 'react-router'

import query from '../queries/current_user'

export default (WrappedComponent) => {
    class requireAuth extends Component {
        componentDidUpdate() {
            debugger
            if(!this.props.data.user && !this.props.data.loading) {
                debugger
                browserHistory.push('/login')
            }
        }
        render() {
            return (
                <WrappedComponent {...this.props} />
            )
        }
    }
    
    return graphql(query)(requireAuth)
}