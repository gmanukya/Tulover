import React, { Component } from 'react'
import styled from 'styled-components'

const SideBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    background: #1f263e;
    height: -webkit-fill-available;
    width: 250px;
`

const CompanyLogo = styled.img`
    padding: 20px;
    height: 60px;
    border-bottom: 1px solid #4e6092;
`

const MenuLabel = styled.div`
    color: white;
    width: 83%;
    font-size: 18px;
    margin-top: 18px;
    margin-bottom: 18px;
`

const MenuItem = styled.div`
    background: #80808029;
    border-left: 8px solid #50b8e4;
    color: white;
    height: 46px;
    display: flex;
    align-items: center;
    width: 89%;
    padding-left: 18px;
`

class SideBar extends Component {
    render() {
        return (
            <SideBarContainer>
                <CompanyLogo src={require('../images/The_Boring_Company_Logo.png')} />
                <MenuLabel>Menu</MenuLabel>
                <MenuItem>Stockholders</MenuItem>
            </SideBarContainer>
        )
    }
}

export default SideBar
