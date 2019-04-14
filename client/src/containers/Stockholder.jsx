import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'
import styled from 'styled-components'
import { Line } from 'react-chartjs-2'

import { GET_STOCKHOLDER } from '../queries'

const MainContainer = styled.div`
    width: 90%;
    margin: auto;
    font-weight: 500;
`
class Stockholder extends Component {
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
    }

    render() {
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
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
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
        }

        return <Line data={data} />
    }
}

export default compose(
    graphql(GET_STOCKHOLDER, {
        options: ({ match }) => ({
            variables: {
                userId: match.params.stockholderId
            }
        })
    })
)(Stockholder)
