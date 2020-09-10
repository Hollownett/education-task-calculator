import styled from 'styled-components'

export const HistoryList = styled.ul`
position: sticky; 
height: 45rem;
list-style-type: none;
overflow-y: scroll;
color: ${({ theme }) => theme.colors.black}
font-size: ${({ theme }) => theme.fontSizes[5]}px;
ul{
    font-size: ${({ theme }) => theme.fontSizes[5]}px;
}

/* Scrollbar styles */
::-webkit-scrollbar {
    width: 12px;
    height: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #434343;
    border-radius: 10px;
  }
`
export const HistoryTitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes[6]}px;
`
export const HistoryContainer = styled.div`
  width: 20rem;
  height: 48rem;
  padding-left: 0.5rem;
`
