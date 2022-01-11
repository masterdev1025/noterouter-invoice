import styled from 'styled-components'

export const InvoiceItemWrapper = styled.div`
    padding: 20px;
    background-color: #1f213a;
    display: flex;
    align-items: center;
    margin-bottom: 14px;
    border-radius: 5px;
    box-shadow: 1px 1px 3px white;
`

export const InvoiceItemCell = styled.div`
    flex-basis: ${props => props.per ? props.per : '100'}%;

`
export const InvoiceLabel = styled.label`
    color: ${ props => props.color ? props.color : '#feffff' };
    font-weight: ${props =>
        ( props.size === 'large' && '24px' ) ||
        ( props.size === 'medium' && '18px' ) ||
        ( props.size === 'small' && '14px' )
    }
`