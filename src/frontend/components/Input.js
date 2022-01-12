import styled from 'styled-components'

export const Input = styled.input`
    border-radius: 4px;
    padding: 10px;
    font-size: 14px;
    color: white;
    background-color: #1f213a;
    width: 100%;
    outline: none;    
    ${ props => props.error == true && 'border: 1px solid red;' }       
`