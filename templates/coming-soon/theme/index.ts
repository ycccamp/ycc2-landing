import { DefaultTheme, theme as chakraTheme } from '@chakra-ui/core'

export const theme: DefaultTheme = {
  ...chakraTheme,
  fonts: {
    ...chakraTheme.fonts,
    body: `'FC Lamoon','CS ChatThai',-apple-system,'Helvetica Neue',Helvetica,Arial,system-ui,sans-serif`,
  },
}
