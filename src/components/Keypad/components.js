import styled from 'styled-components'

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.black};
  width: 150px;
  height: 150px;
  font-size: ${({ theme }) => theme.fontSizes[10]}px;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  border-radius: 32px;
  opacity: 1;
  outline: none;
  margin: 2rem;
`
export const KeypadContainer = styled.div``
