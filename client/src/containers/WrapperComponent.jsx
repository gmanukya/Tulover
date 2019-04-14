import React, { Component } from 'react'
import SideBar from '../components/SideBar'
// import Header from '../components/Header'

class WrapperComponent extends Component {
    render() {
        console.log('test wrapper')
        return (
            <div>
                <SideBar />
                {/* <Header /> */}
                {this.props.children}
            </div>
        )
    }
}

export default WrapperComponent
