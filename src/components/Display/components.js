import styled from 'styled-components'

export const Display = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  border-color: ${({ theme }) => theme.colors.secondary};
  text-align: right;
  font-size: ${({ theme }) => theme.fontSizes[10]}px;
  padding: 1rem;
  @media (max-width: 1440px) {
    font-size: ${({ theme }) => theme.fontSizes[6]}px;
  }
`
