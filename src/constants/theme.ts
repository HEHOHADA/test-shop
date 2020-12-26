export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
}

export const THEME = {
  colors: {
    primary: '#007bff',
    secondary: '#21262d',
    gray: '#adb5bd',
    darkGrey: '#0d1117',
    light: '#e9ecef',
    dark: '#06090f',
  }
}

export type BreakPointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const mediaQueries = (breakpoint: BreakPointType) => {
  return (style: any) => `@media (min-width: ${ breakpoints[breakpoint] }px) { ${ style } }`
}
