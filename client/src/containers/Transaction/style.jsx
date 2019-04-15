import styled from 'styled-components'

export const MainContainer = styled.div`
    width: 90%;
    margin: auto;
    font-weight: 500;
`
export const ListContainerInner = styled.div`
    width: 95%;
    margin: auto;
    font-weight: 500;
    margin-top: 50px;
    height: 480px;
`

export const ListContainer = styled.div`
    background: white;
    min-height: 600px;
    border-radius: 17px;
    border: 1px solid #d3d3d373;
`

export const Title = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
`

export const FieldTitle = styled.div`
    margin-bottom: 20px;
    font-size: 14px;
    color: gray;
`

export const AmountInput = styled.input`
    background: #8080800f;
    border: 1px solid #80808033;
    border-radius: 10px;
    height: 50px;
    width: calc(100% - 13px);
    padding-left: 10px;
    font-size: 16px;
    font-weight: 500;

    :focus {
        outline: none;
    }
`

export const ActionButtonsContainer = styled.div`
    display: flex;
    width: 96%;
    align-items: center;
    justify-content: flex-end;
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
