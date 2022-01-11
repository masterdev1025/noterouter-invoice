import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${props => props.backgroundColor ? props.backgroundColor : '#141625'};
    > div {
        width: 1024px;
        margin: auto;
      }
`