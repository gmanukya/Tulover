import React, { Component } from 'react'
import { SideBarContainer, CompanyLogo, MenuLabel, MenuItem } from './style'

class SideBar extends Component {
    render() {
        return (
            <SideBarContainer>
                <CompanyLogo src={require('../../images/The_Boring_Company_Logo.png')} />
                <MenuLabel>Menu</MenuLabel>
                <MenuItem>Stockholders</MenuItem>
            </SideBarContainer>
        )
    }
}

export default SideBar
