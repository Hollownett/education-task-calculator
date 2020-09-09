import styled from 'styled-components'

export const Display = styled.p`
  border-color: ${({ theme }) => theme.colors.black};
  text-align: right;
  font-size: ${({ theme }) => theme.fontSizes[10]}px;
  padding: 1rem;
`
