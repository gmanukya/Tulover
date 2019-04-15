import DatePicker from 'react-datepicker'
import styled from 'styled-components'

export const ListContainer = styled.div`
    background: white;
    width: 90%;
    margin: auto;
    min-height: 500px;
    border-radius: 17px;
    border: 1px solid #d3d3d373;
`

export const AddTransactionButton = styled.button`
    color: white;
    font: inherit;
    font-size: 14px;
    font-weight: 600;
    background: #6f64f8;
    border: none;
    height: 45px;
    width: 170px;
    border-radius: 10px;
    transition: background 0.3s;

    :hover {
        background: #4d1fce;
    }

    :active {
        background: #6f64f8;
    }
`

export const ActionButtonsContainer = styled.div`
    display: flex;
    width: 86%;
    margin: auto;
    height: 100px;
    align-items: center;
    justify-content: space-between;
`

export const DateField = styled.div`
    width: 200px;
    font-weight: 600;
`

export const SectionTitle = styled.div`
    height: 40px;
    padding-left: 17px;
    font-weight: 500;
    display: flex;
    align-items: center;
    color: #808080a8;
`

export const ColumnSectionTitle = styled.div`
    display: flex;
    align-items: center;
    background: #e2e2e24f;
    border-top: 1px solid #d3d3d373;
    border-bottom: 1px solid #d3d3d373;
    height: 32px;
`

export const NameColumn = styled.div`
    display: flex;
    align-items: center;
    color: black;
    margin-left: 17px;
    font-size: 14px;
    font-weight: 500;

    :hover {
        cursor: pointer;
        color: #6f64f8;
    }
`

export const OtherColumn = styled.div`
    display: flex;
    align-items: center;
    min-width: 75px;
    color: black;
    font-size: 14px;
    font-weight: 500;
    margin-right: 30px;
    justify-content: flex-end;
    ${props => props.marginLeftAuto && 'margin-left: auto'};
`

export const ListItemContainer = styled.div`
    display: flex;
    border-bottom: 1px solid #d3d3d321;
    height: 32px;
    width: 100%;
`

export const StyledDatePicker = styled(DatePicker)`
    cursor: pointer;
    padding: 5px 15px;
    border: 0;
    border-radius: 10px;
    width: 93px;
    height: 35px;
    background-color: white;
    font: inherit;
    font-weight: 700;
    color: #6f64f8;
    margin-left: 10px;

    :focus {
        outline: none;
    }
`
