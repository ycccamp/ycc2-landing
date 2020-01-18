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
}

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
}
