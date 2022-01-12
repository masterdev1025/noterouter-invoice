import styled from 'styled-components'

export const Button = styled.div`
    border-radius: 20px;
    background-color: ${ props => 
        ( props.variant == 'primary' && '#7c5df9' ) ||
        ( props.variant == 'secondary' && '#f9fafe' ) ||
        ( props.variant == 'dark' && '#373b54' ) ||
        ( props.variant == 'error' && '#ed5758')

    };
    color: ${ props => 
        ( props.variant === 'primary' && '#e4ddfd' ) ||
        ( props.variant === 'secondary' && '#7f89c3' ) ||
        ( props.variant === 'dark' && '#dee3f9' ) ||
        ( props.variant == 'error' && '#e4ddfd')
    };
    font-weight:bold;
    font-size: 1.1rem;
    cursor: pointer;
    user-select: none;
    padding: 10px;
    text-align: center;
    &:hover{
        box-shadow: 1px 1px 3px white;
    }
    margin-left: 10px;
`