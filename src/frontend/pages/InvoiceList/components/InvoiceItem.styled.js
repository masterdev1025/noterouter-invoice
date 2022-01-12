import styled from 'styled-components'

export const InvoiceItemWrapper = styled.div`
    padding: 20px;
    background-color: #1f213a;
    display: flex;
    align-items: center;
    margin-bottom: 14px;
    border-radius: 5px;
    box-shadow: 1px 1px 3px #2a2c43;
`

export const InvoiceItemCell = styled.div`
    flex-basis: ${props => props.per ? props.per : '100'}%;

`
export const InvoiceLabel = styled.label`
    color: ${props => props.color ? props.color : '#feffff'};
    font-size: ${props =>
        (props.size === 'large' && '24px') ||
        (props.size === 'medium' && '18px') ||
        (props.size === 'small' && '14px')
    }
`

export const InvoiceStatusBox = styled.div`
    padding: 10px 20px;
    border-radius: 5px;
    background-color: ${props =>
        (props.status === 'paid' && '#1f2c3f') ||
        (props.status === 'pending' && '#2b2735') ||
        (props.status === 'draft' && '#2a2c43')
    };
    color: ${props =>
        (props.status === 'paid' && '#33d69f') ||
        (props.status === 'pending' && '#ff8e01') ||
        (props.status === 'draft' && 'white')
    };
    font-weight: bold;
    font-size: 16px;
    text-align: center;
`
export const ActionCell = styled.div`
    display: flex;

    align-items: center;
`
export const ActionButton = styled.span`
    user-select: none;
    font-weight: bold;
    cursor: pointer;
    font-size: 14px;
    padding: 5px 10px;
    border-radius: 5px;
    color: ${props => props.color ? props.color : 'black'};
    backgorund-color: ${props => props.color ? props.color : 'white'};
    &:hover {
        text-decoration: underline;
      }
`