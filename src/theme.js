import { css } from 'styled-components'

const font = 'Helvetica'

// Color palette
const black = '#000000'
const white = '#ffffff'
const error = '#c86464'
const primary = '#c06c84'
const secondary = '#6c5b7b'
const secondaryLight = '#6a6b7b'
const grey = '#f2f2f2'
const darkGrey = '#434343'

const boxShadows = [
  'box-shadow: 0px 4px 24px -8px rgba(0,0,0,0.75)',
]

const size = {
  xs: 550,
  small: 768,
  med: 992,
  large: 1200,
}

const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export default {
  above,
  below,
  boxShadows,
  font,
  spaces: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 72, 80, 64],
  colors: {
    primary,
    secondary,
    secondaryLight,
    black,
    white,
    error,
    grey,
    darkGrey,
  },
}

export const lightTheme = {
  above: above,
  below: below,
  boxShadows: boxShadows,
  font: font,
  spaces: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 72, 80, 64],
  colors: {
    white: white,
    primary: white,
    secondary: secondary,
    secondaryLight: secondaryLight,
    grey: grey,
    darkGrey: darkGrey,
    black: black,
  },
}

export const darkTheme = {
  ...lightTheme,
  colors: {
    white: white,
    black: white,
    primary: black,
    secondary: secondaryLight,
    secondaryLight: secondary,
    grey: darkGrey,
    darkGrey: grey,
  },
}

export const coloredTheme = {
  ...lightTheme,
  colors: {
    white: white,
    primary: secondary,
    secondary: secondary,
    secondaryLight: secondaryLight,
    grey: grey,
    darkGrey: darkGrey,
    black: black,
  },
}
