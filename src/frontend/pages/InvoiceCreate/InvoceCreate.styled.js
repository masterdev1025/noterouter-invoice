import styled from 'styled-components'

export const Button = styled.div`
    width: 60%;
    margin: auto;
    border-radius: 20px;
    background-color: ${ props => 
        ( props.variant == 'primary' && '#7c5df9' ) ||
        ( props.variant == 'secondary' && '#f9fafe' ) ||
        ( props.variant == 'dark' && '#373b54' )

    };
    color: ${ props => 
        ( props.variant === 'primary' && '#e4ddfd' ) ||
        ( props.variant === 'secondary' && '#7f89c3' ) ||
        ( props.variant === 'dark' && '#dee3f9' )
    };
    font-weight:bold;
    font-size: 1.3rem;
    cursor: pointer;
    user-select: none;
    padding: 10px;
    text-align: center;
    margin-top: 15px;
    &:hover{
        background-color: green;
    }
`