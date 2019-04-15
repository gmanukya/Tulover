import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'
import styled from 'styled-components'
import moment from 'moment'
import Creatable from 'react-select/lib/Creatable'

import {
    GET_ALL_STOCKHOLDERS,
    CREATE_TRANSACTION,
    GET_ALL_STOCKHOLDERS_WITH_SHARES
} from '../queries'
import client from '../ApolloClient'

const MainContainer = styled.div`
    width: 90%;
    margin: auto;
    font-weight: 500;
`
const ListContainerInner = styled.div`
    width: 95%;
    margin: auto;
    font-weight: 500;
    margin-top: 50px;
    height: 480px;
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

const FieldTitle = styled.div`
    margin-bottom: 20px;
    font-size: 14px;
    color: gray;
`

const AmountInput = styled.input`
    background: #8080800f;
    border: 1px solid #80808033;
    border-radius: 10px;
    height: 50px;
    width: calc(100% - 13px);
    padding-left: 10px;
    font-size: 16px;
    font-weight: 500;

    :focus {
        outline: none;
    }
`

const ActionButtonsContainer = styled.div`
    display: flex;
    width: 96%;
    align-items: center;
    justify-content: flex-end;
`

const StyledButton = styled.button`
    color: white;
    font: inherit;
    font-size: 14px;
    font-weight: 600;
    opacity: ${props => (props.disabled ? '0.5' : '0.8')};
    background: ${props => props.backgroundColor};
    border: none;
    height: 45px;
    width: 125px;
    border-radius: 10px;
    transition: opacity 0.3s;
    margin-left: 10px;

    :hover {
        ${props => !props.disabled && 'opacity: 1'};
    }
`

class Transaction extends Component {
    state = {
        stockholdersOptions: [],
        loading: true,
        amountValue: '',
        createButtonDisabled: true,
        selectedStockholder: null
    }

    componentDidMount() {
        const { data } = this.props
        const { allStockholders } = data || {}

        this.setStockholdersOptions(allStockholders)
    }

    componentWillReceiveProps(nextProps) {
        const { data } = nextProps
        const { allStockholders } = data || {}

        this.setStockholdersOptions(allStockholders)
    }

    setStockholdersOptions = allStockholders => {
        if (allStockholders) {
            const stockholdersOptions = allStockholders.map(stockholder => ({
                value: stockholder.id,
                label: stockholder.name
            }))

            this.setState({ stockholdersOptions, loading: false })
        }
    }

    handleStockholderChange = stockholder => {
        const { amountValue } = this.state
        let { createButtonDisabled } = this.state

        if (stockholder) {
            if (amountValue !== '') {
                createButtonDisabled = false
            }

            this.setState({
                selectedStockholder: {
                    id: stockholder.__isNew__ ? null : stockholder.value,
                    name: stockholder.label
                },
                createButtonDisabled
            })

            return
        }

        this.setState({ selectedStockholder: null, createButtonDisabled: true })
    }

    handleAmountChange = event => {
        const { selectedStockholder } = this.state
        let { createButtonDisabled } = this.state

        if (event.target.value !== '') {
            if (!isNaN(event.target.value) || event.target.value === '-') {
                if (selectedStockholder) {
                    createButtonDisabled = false
                }

                this.setState({ amountValue: event.target.value, createButtonDisabled })
            }

            return
        }

        this.setState({ amountValue: '', createButtonDisabled: true })
    }

    onCreate = async () => {
        const { amountValue, selectedStockholder } = this.state
        const { history } = this.props

        const queryParams = {
            stockholderId: selectedStockholder.id,
            stockholderName: selectedStockholder.name,
            amount: parseInt(amountValue),
            date: moment().toISOString()
        }

        try {
            await client.mutate({
                mutation: CREATE_TRANSACTION,
                variables: queryParams
            })

            history.push('/')
        } catch (err) {
            console.log(`An error occured: ${err}`)
        }
    }

    onCancel = () => {
        const { history } = this.props

        history.goBack()
    }

    render() {
        const { stockholdersOptions, amountValue, createButtonDisabled } = this.state

        const customSelectStyles = {
            control: () => ({
                display: 'flex',
                background: '#8080800f',
                border: '1px solid #80808033',
                borderRadius: '10px',
                height: '50px',
                marginBottom: '30px'
            }),
            placeholder: () => ({
                display: 'none'
            })
        }

        return (
            <MainContainer>
                <Title>Create Transaction</Title>
                <ListContainer>
                    <ListContainerInner>
                        <FieldTitle>Stockholder</FieldTitle>
                        <Creatable
                            isClearable
                            styles={customSelectStyles}
                            onChange={this.handleStockholderChange}
                            options={stockholdersOptions}
                        />
                        <FieldTitle>Amount</FieldTitle>
                        <AmountInput onChange={this.handleAmountChange} value={amountValue} />
                    </ListContainerInner>
                    <ActionButtonsContainer>
                        <StyledButton
                            onMouseDown={e => e.preventDefault()}
                            onClick={this.onCancel}
                            backgroundColor="lightgray"
                        >
                            Cancel
                        </StyledButton>
                        <StyledButton
                            onMouseDown={e => e.preventDefault()}
                            onClick={this.onCreate}
                            backgroundColor="#4d1fce"
                            disabled={createButtonDisabled}
                        >
                            Create
                        </StyledButton>
                    </ActionButtonsContainer>
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
            },
            fetchPolicy: 'no-cache'
        }
    })
)(Transaction)
