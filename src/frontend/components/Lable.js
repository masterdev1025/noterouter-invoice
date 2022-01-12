import styled from 'styled-components'

export const Label = styled.label`
    color: ${ props => props.color ? props.color : 'black' };
    font-size: ${ props => 
        ( props.size === 'large' && '24' ) ||
        ( props.size === 'medium' && '18' ) ||
        ( props.size === 'normal' && '14' ) ||
        ( props.size === 'small' && '12' )
    }px;
`