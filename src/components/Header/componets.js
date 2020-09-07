import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Header = styled.div`
  width: 100%;
  height: 120px;
  margin: 10px;
  background: #434343 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  opacity: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`

export const Links = styled(Link)`
  font-size: 32px;
  font-weight: normal;
  margin: 10px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`

export const Title = styled.h3`
  font-size: 32px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`
