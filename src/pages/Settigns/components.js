import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  box-shadow: ${({ theme }) => theme.boxShadows[0]};
`
export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes[10]}px;
  margin-bottom: ${({ theme }) => theme.spaces[4]}px;
`

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.grey} 0% 0%
    no-repeat padding-box;
  border: 2px solid ${({ theme }) => theme.colors.darkGrey};
  width: 250px;
  height: 50px;
  margin-top: ${({ theme }) => theme.spaces[4]}px;
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  text-align: left;
  color: ${({ theme }) => theme.colors.black};
`

export const ThemeSelector = styled.select`
  display: inline-block;
  border: 2px solid ${({ theme }) => theme.colors.darkGrey};
  width: 250px;
  height: 50px;
  box-sizing: border-box;
  text-align: left;
  padding: ${({ theme }) => theme.spaces[2]}px;
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
`
export const SettignsContainer = styled.div`
  margin-left: ${({ theme }) => theme.spaces[4]}px;
  margin-top: ${({ theme }) => theme.spaces[5]}px;
`
