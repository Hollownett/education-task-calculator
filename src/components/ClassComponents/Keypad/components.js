import styled from 'styled-components'

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.secondary};
  width: 9rem;
  height: 9rem;
  font-size: ${({ theme }) => theme.fontSizes[10]}px;
  background: ${({ theme }) => theme.colors.grey} 0% 0%
    no-repeat padding-box;
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  border-radius: 32px;
  opacity: 1;
  outline: none;
  margin-right: 1.5rem;
`
export const KeypadContainer = styled.div`
  position: static;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 120px;
  grid-row-gap: 20px;
  /* laptop friendly */
  @media (max-width: 1440px) {
    grid-column-gap: 65px;
    grid-row-gap: 6px;
    button {
      width: 5.8rem;
      height: 5.8rem;
      font-size: ${({ theme }) => theme.fontSizes[6]}px;
    }
  }
`
