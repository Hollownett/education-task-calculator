import styled from 'styled-components'

export const HistoryList = styled.li`
list-style-type: none;
color: ${({ theme }) => theme.colors.black}
font-size: ${({ theme }) => theme.fontSizes[5]}px;
ul{
    font-size: ${({ theme }) => theme.fontSizes[5]}px;
}
`
export const HistoryTitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes[6]}px;
`
export const HistoryContainer = styled.div`
  width: 40rem;
  padding-left: 0.5rem;
`
