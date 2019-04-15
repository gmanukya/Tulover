import React, { Component } from 'react'

import SideBar from '../../components/SideBar'
import Header from '../../components/Header'
import { WrapperContainer, MainViewContainer } from './style'

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
