import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Header = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  height: 120px;
  margin-bottom: 10px;
  background: 0% 0% no-repeat padding-box padding-box
    ${({ theme }) => theme.colors.darkGrey};
  border: 1px solid rgb(112, 112, 112);
  opacity: 1;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 1.5rem;
`

export const Links = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes[5]}px;
  font-weight: normal;
  margin: 10px;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.primary};
  opacity: 1;
`

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes[5]}px;
  font-weight: normal;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.primary};
  opacity: 1;
`
