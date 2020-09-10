import styled from 'styled-components'

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.black};
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
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 120px;
  grid-row-gap: 20px;
`
