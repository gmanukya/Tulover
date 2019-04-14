import React, { Component } from 'react'
import styled from 'styled-components'
import { faAlignRight, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 85px;
    box-shadow: 0px 0px 8px 2px #00000021;
`

const ProfilePicture = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: gray;
`

const SearchBar = styled.div`
    color: gray;
    font-size: 13px;
    display: flex;
    width: 250px;
    align-items: center;
    height: 32px;
    border-radius: 13px;
    background: #eeeeee78;
    margin-left: 40px;
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    margin-left: 30px;
    margin-right: 10px;
`

class Header extends Component {
    render() {
        return (
            <HeaderContainer>
                <StyledFontAwesomeIcon icon={faAlignRight} />
                <SearchBar>
                    <StyledFontAwesomeIcon icon={faSearch} />
                    Search
                </SearchBar>
            </HeaderContainer>
        )
    }
}

export default Header
