import React, { Component } from 'react'
import moment from 'moment'
import { compose, graphql } from 'react-apollo'

import 'react-datepicker/dist/react-datepicker.css'
import { GET_ALL_STOCKHOLDERS_WITH_SHARES } from '../../queries'
import client from '../../ApolloClient'
import {
    ListContainer,
    AddTransactionButton,
    ActionButtonsContainer,
    DateField,
    SectionTitle,
    ColumnSectionTitle,
    NameColumn,
    OtherColumn,
    ListItemContainer,
    StyledDatePicker
} from './style'

const numberWithCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

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
                variables: {
                    date: moment(date).toISOString()
                }
            })

            const { data } = res
            const { allStockholders } = data || {}
            if (allStockholders) {
                const totalSharesAmount = allStockholders.reduce(
                    (total, stockholder) => total + stockholder.shares,
                    0
                )

                this.setState({ allStockholders, date, totalSharesAmount })
            }
        } catch (err) {
            console.log(`An error occured: ${err}`)
        }
    }

    render() {
        const { allStockholders, totalSharesAmount } = this.state
        const { history } = this.props

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
                        const ownerShip = (stockholder.shares * 100) / totalSharesAmount || 0

                        return (
                            <ListItemContainer key={stockholder.id}>
                                <NameColumn
                                    onClick={() => history.push(`/stockholder/${stockholder.id}`)}
                                >
                                    {stockholder.name}
                                </NameColumn>
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
            variables: {},
            fetchPolicy: 'no-cache'
        }
    })
)(Home)
