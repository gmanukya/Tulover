import React, { Component } from 'react'
import { faAlignRight, faSearch } from '@fortawesome/free-solid-svg-icons'
import { HeaderContainer, SearchBar, StyledFontAwesomeIcon } from './style'

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
