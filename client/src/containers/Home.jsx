import React, { Component } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { compose, graphql } from 'react-apollo'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import { GET_ALL_STOCKHOLDERS_WITH_SHARES } from '../queries'
import client from '../ApolloClient'

const numberWithCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

const ListContainer = styled.div`
    background: white;
    width: 90%;
    margin: auto;
    min-height: 600px;
    border-radius: 17px;
    border: 1px solid #d3d3d373;
`

const AddTransactionButton = styled.button`
    color: white;
    font: inherit;
    font-size: 14px;
    font-weight: 600;
    background: #6f64f8;
    border: none;
    height: 45px;
    width: 170px;
    border-radius: 10px;
    transition: background 0.3s;

    :hover {
        background: #4d1fce;
    }

    :active {
        background: #6f64f8;
    }
`

const ActionButtonsContainer = styled.div`
    display: flex;
    width: 86%;
    margin: auto;
    height: 100px;
    align-items: center;
    justify-content: space-between;
`

const DateField = styled.div`
    width: 200px;
    font-weight: 600;
`

const SectionTitle = styled.div`
    height: 40px;
    padding-left: 17px;
    font-weight: 500;
    display: flex;
    align-items: center;
    color: #808080a8;
`

const ColumnSectionTitle = styled.div`
    display: flex;
    align-items: center;
    background: #e2e2e24f;
    border-top: 1px solid #d3d3d373;
    border-bottom: 1px solid #d3d3d373;
    height: 32px;
`

const NameColumn = styled.div`
    display: flex;
    align-items: center;
    color: black;
    margin-left: 17px;
    font-size: 14px;
    font-weight: 500;
`

const OtherColumn = styled.div`
    display: flex;
    align-items: center;
    min-width: 75px;
    color: black;
    font-size: 14px;
    font-weight: 500;
    margin-right: 30px;
    justify-content: flex-end;
    ${props => props.marginLeftAuto && 'margin-left: auto'};
`

const ListItemContainer = styled.div`
    display: flex;
    border-bottom: 1px solid #d3d3d321;
    height: 32px;
    width: 100%;
`

const StyledDatePicker = styled(DatePicker)`
    cursor: pointer;
    padding: 5px 15px;
    border: 0;
    border-radius: 10px;
    width: 93px;
    height: 35px;
    background-color: white;
    font: inherit;
    font-weight: 700;
    color: #6f64f8;
    margin-left: 10px;

    :focus {
        outline: none;
    }
`

class Home extends Component {
    state = {
        loading: true,
        allStockholders: [],
        totalSharesAmount: 0,
        date: new Date()
    }

    componentDidMount() {
        const { data } = this.props
        const { allStockholders } = data || {}

        this.setAllStockholders(allStockholders)
    }

    componentWillReceiveProps(nextProps) {
        const { data } = nextProps
        const { allStockholders } = data || {}

        this.setAllStockholders(allStockholders)
    }

    setAllStockholders = allStockholders => {
        if (allStockholders) {
            const totalSharesAmount = allStockholders.reduce(
                (total, stockholder) => total + stockholder.shares,
                0
            )

            this.setState({ allStockholders, totalSharesAmount, loading: false })
        }
    }

    goToTransaction = () => {
        const { history } = this.props

        history.push('/transaction')
    }

    handleDateChange = async date => {
        try {
            const res = await client.query({
                query: GET_ALL_STOCKHOLDERS_WITH_SHARES,
                variables: { date: moment(date).toISOString() }
            })

            const { data } = res
            const { allStockholders } = data || {}

            this.setState({ allStockholders, date })
        } catch (err) {
            console.log(`An error occured: ${err}`)
        }
    }

    render() {
        const { allStockholders, totalSharesAmount } = this.state

        return (
            <div>
                <ActionButtonsContainer>
                    <DateField>
                        As of
                        <StyledDatePicker
                            selected={this.state.date}
                            onChange={this.handleDateChange}
                        />
                    </DateField>
                    <AddTransactionButton
                        onMouseDown={e => e.preventDefault()}
                        onClick={this.goToTransaction}
                    >
                        ADD TRANSACTION
                    </AddTransactionButton>
                </ActionButtonsContainer>
                <ListContainer>
                    <SectionTitle>{`Stockholders (${allStockholders.length})`}</SectionTitle>
                    <ColumnSectionTitle>
                        <NameColumn>Name</NameColumn>
                        <OtherColumn marginLeftAuto>Shares</OtherColumn>
                        <OtherColumn>Ownership</OtherColumn>
                    </ColumnSectionTitle>
                    {allStockholders.map(stockholder => {
                        const ownerShip = (stockholder.shares * 100) / totalSharesAmount

                        return (
                            <ListItemContainer key={stockholder.id}>
                                <NameColumn>{stockholder.name}</NameColumn>
                                <OtherColumn marginLeftAuto>
                                    {numberWithCommas(stockholder.shares)}
                                </OtherColumn>
                                <OtherColumn>{`${ownerShip.toFixed(2)}%`}</OtherColumn>
                            </ListItemContainer>
                        )
                    })}
                </ListContainer>
            </div>
        )
    }
}

export default compose(
    graphql(GET_ALL_STOCKHOLDERS_WITH_SHARES, {
        options: {
            variables: {
                date: moment().toISOString()
            }
        }
    })
)(Home)
