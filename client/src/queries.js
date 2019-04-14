import gql from 'graphql-tag'

export const GET_ALL_STOCKHOLDERS = gql`
    query allStockholders($date: DateTime!) {
        allStockholders(date: $date) {
            id
            name
        }
    }
`

export const GET_ALL_STOCKHOLDERS_WITH_SHARES = gql`
    query allStockholders($date: DateTime!) {
        allStockholders(date: $date) {
            id
            name
            shares
        }
    }
`
