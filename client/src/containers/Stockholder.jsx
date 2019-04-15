import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'
import styled from 'styled-components'
import { Line } from 'react-chartjs-2'
import moment from 'moment'

import { GET_TRANSACTIONS } from '../queries'

const MainContainer = styled.div`
    width: 90%;
    margin: auto;
    font-weight: 500;
    margin-top: 50px;
    margin-bottom: 20px;
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

const ActionButtonsContainer = styled.div`
    display: flex;
    width: 94%;
    align-items: center;
    justify-content: flex-end;
`

class Stockholder extends Component {
    state = {
        transactions: []
    }

    componentDidMount(nextProps) {
        const { data } = this.props
        const { transactions } = data || {}

        if (transactions) {
            this.setState({ transactions })
        }
    }

    componentWillReceiveProps(nextProps) {
        const { data } = nextProps
        const { transactions } = data || {}

        if (transactions) {
            this.setState({ transactions })
        }
    }

    getDateRange = () => {
        const startDate = moment('2017-01-01')
        const endDate = moment().add(1, 'month')
        const result = []

        while (startDate.isBefore(endDate)) {
            result.push(startDate.format('YYYY-MM-01'))
            startDate.add(1, 'month')
        }

        return result
    }

    getShares = (date, transactions) => {
        const momentDate = moment(date)

        return transactions.reduce((total, transaction) => {
            if (moment(transaction.date).isBefore(momentDate)) {
                return total + transaction.amount
            }

            return total
        }, 0)
    }

    goBack = () => {
        const { history } = this.props

        history.goBack()
    }

    render() {
        const { transactions } = this.state
        const graphDataY = []
        const dateRange = this.getDateRange()

        if (transactions) {
            dateRange.forEach((date, i) => {
                graphDataY[i] = this.getShares(date, transactions) || 0
            })
        }

        const graphData = {
            labels: dateRange,
            datasets: [
                {
                    label: 'Shares over time',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: graphDataY
                }
            ]
        }

        return (
            <div>
                <MainContainer>
                    <Line data={graphData} />
                </MainContainer>
                <ActionButtonsContainer>
                    <StyledButton
                        onMouseDown={e => e.preventDefault()}
                        onClick={this.goBack}
                        backgroundColor="lightgray"
                    >
                        Back
                    </StyledButton>
                </ActionButtonsContainer>
            </div>
        )
    }
}

export default compose(
    graphql(GET_TRANSACTIONS, {
        options: ({ match }) => ({
            variables: {
                stockholderId: match.params.stockholderId
            }
        })
    })
)(Stockholder)
