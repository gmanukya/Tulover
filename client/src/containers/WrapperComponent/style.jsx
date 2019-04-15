import styled from 'styled-components'

export const WrapperContainer = styled.div`
    display: flex;
`

export const MainViewContainer = styled.div`
    position: absolute;
    width: calc(100% - 250px);
    height: 91%;
    left: 250px;
    top: 86px;
    background: #e2e2e24f;

    @media screen and (max-width: 650px) {
        width: 100%;
        left: 0px;
    }
`
