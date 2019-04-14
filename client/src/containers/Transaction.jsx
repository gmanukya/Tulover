import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'
import styled from 'styled-components'
import moment from 'moment'
import { GET_ALL_STOCKHOLDERS } from '../queries'

const MainContainer = styled.div`
    width: 90%;
    margin: auto;
    font-weight: 500;
`

const ListContainer = styled.div`
    background: white;
    min-height: 600px;
    border-radius: 17px;
    border: 1px solid #d3d3d373;
`

const Title = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
`

class Transaction extends Component {
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
    }

    render() {
        return (
            <MainContainer>
                <Title>Create Transaction</Title>
                <ListContainer>
                    <input />
                </ListContainer>
            </MainContainer>
        )
    }
}

export default compose(
    graphql(GET_ALL_STOCKHOLDERS, {
        options: {
            variables: {
                date: moment().toISOString()
            }
        }
    })
)(Transaction)
