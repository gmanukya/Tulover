import styled from 'styled-components'

export const MainContainer = styled.div`
    width: 90%;
    margin: auto;
    font-weight: 500;
    margin-top: 50px;
    margin-bottom: 20px;
`

export const StyledButton = styled.button`
    color: white;
    font: inherit;
    font-size: 14px;
    font-weight: 600;
    opacity: ${props => (props.disabled ? '0.5' : '0.8')};
    background: ${props => props.backgroundColor};
    border: none;
    height: 45px;
    width: 125px;
    border-radius: 10px;
    transition: opacity 0.3s;
    margin-left: 10px;

    :hover {
        ${props => !props.disabled && 'opacity: 1'};
    }
`

export const ActionButtonsContainer = styled.div`
    display: flex;
    width: 94%;
    align-items: center;
    justify-content: flex-end;
`
