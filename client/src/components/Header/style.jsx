import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 85px;
    box-shadow: 0px 0px 8px 2px #00000021;
`

export const SearchBar = styled.div`
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

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    margin-left: 30px;
    margin-right: 10px;
`
