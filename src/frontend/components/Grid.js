import styled from 'styled-components'

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
`
export const Col = styled.div`
    flex-basis: ${ props => 
        props.per ? props.per : '100'
    }%
`