import {
  ColorHues,
  ITheme as _ITheme,
  theme as chakraTheme,
} from '@chakra-ui/core'

import colorLib from 'color'

import { IColors } from '../@types/IColors'

export interface ITheme extends Omit<_ITheme, 'colors'> {
  name: string
  colors: IColors
  shadow: {
    sm: string
    md: string
    lg: string
    xl: string
    '2xl': string
  }
}

export const getShade = (color: string): ColorHues => {
  const baseColor = colorLib(color)

  return {
    50: baseColor.lighten(0.8).string(),
    100: baseColor.lighten(0.5).string(),
    200: baseColor.lighten(0.375).string(),
    300: baseColor.lighten(0.25).string(),
    400: baseColor.lighten(0.125).string(),
    500: baseColor.string(),
    600: baseColor.darken(0.125).string(),
    700: baseColor.darken(0.25).string(),
    800: baseColor.darken(0.375).string(),
    900: baseColor.darken(0.5).string(),
  }
t

export const theme: ITheme = {
  ...chakraTheme,
  fonts: {
    ...chakraTheme.fonts,
    heading: `'Poppins', 'Kanit', Futura, -apple-system, 'Helvetica Neue', Helvetica, Arial, system-ui, sans-serif`,
    body: `'Prompt', -apple-system, 'Helvetica Neue', Helvetica, Arial, system-ui, sans-serif`,
  },
  name: 'dash',
  colors: {
    ...chakraTheme.colors,
    bostonBlue: getShade('#4093a4'),
    flory: getShade('#e86477'),
    cherub: getShade('#f4d7f2'),
    frenchGray: getShade('#cccace'),
    topaz: getShade('#7a7b7c'),
  } as any,
  shadow: {
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg:
      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl:
      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
}
