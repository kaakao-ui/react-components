import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints?: string[];
    fontSize?: Record<string | number, string> | string[];
    fontWeight?: Record<string | number, string> | string[];
    radii?: Record<string | number, string> | string[];
    shadow?: Record<string | number, string> | string[];
    space?: Record<string | number, string> | string[];
  }
}
