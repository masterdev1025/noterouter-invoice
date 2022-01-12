import styled from 'styled-components'

export const Status = styled.div`
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