import React, { Component } from 'react'
import gql from 'graphql-tag'
import { compose, graphql } from 'react-apollo'
import moment from 'moment'

const GET_ALL_STOCKHOLDERS = gql`
    query allStockholders($date: DateTime!) {
        allStockholders(date: $date) {
            id
            name
            shares
        }
    }
`

class App extends Component {
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.data)
    }

    render() {
        return <div>test</div>
    }
}

export default compose(
    graphql(GET_ALL_STOCKHOLDERS, {
        options: () => ({
            variables: {
                date: moment('2019-01-01').toISOString()
            }
        })
    })
)(App)
