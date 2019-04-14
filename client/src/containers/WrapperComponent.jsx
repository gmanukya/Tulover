import React, { Component } from 'react'
import styled from 'styled-components'

import SideBar from '../components/SideBar'
import Header from '../components/Header'

const WrapperContainer = styled.div`
    display: flex;
`

class WrapperComponent extends Component {
    render() {
        return (
            <WrapperContainer style={{ display: 'flex' }}>
                <SideBar />
                <Header />
                {/* {this.props.children} */}
            </WrapperContainer>
        )
    }
}

export default WrapperComponent
