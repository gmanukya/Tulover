import React, { Component } from 'react'
import styled from 'styled-components'

import SideBar from '../components/SideBar'
import Header from '../components/Header'

const WrapperContainer = styled.div`
    display: flex;
`

const MainViewContainer = styled.div`
    position: absolute;
    width: calc(100% - 250px);
    height: 91%;
    left: 250px;
    top: 86px;
    background: #e2e2e24f;
`

/*
 * Wrapper Component for all routes that renders the sidebar and
 * the header with the main container view that renders the component
 */
class WrapperComponent extends Component {
    render() {
        return (
            <WrapperContainer>
                <SideBar />
                <Header />
                <MainViewContainer>{this.props.children}</MainViewContainer>
            </WrapperContainer>
        )
    }
}

export default WrapperComponent
