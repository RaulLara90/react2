import styled from 'styled-components'

export const Text = styled.p`
  ${({ title }) => title ? '20px' : '14px'};
  ${({ color }) => color && `color: ${color};`};
    fontFamily: 'Rubik', sans-serif;
    
    a{
      padding: 0 4px;
      text-decoration: none;
      ${({ color }) => color && `color: ${color};`};
    }
`
