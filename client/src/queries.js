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

export const GET_STOCKHOLDER = gql`
    query transactions($userId: ID!) {
        transactions(userId: $userId) {
            id
            amount
            date
        }
    }
`

export const CREATE_TRANSACTION = gql`
    mutation createTransaction(
        $stockholderId: ID
        $stockholderName: String!
        $amount: Int!
        $date: DateTime!
    ) {
        createTransaction(
            stockholderId: $stockholderId
            stockholderName: $stockholderName
            amount: $amount
            date: $date
        ) {
            id
            amount
            date
            stockholder {
                id
                name
            }
        }
    }
`
