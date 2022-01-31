import { css, useTheme, FlattenSimpleInterpolation } from 'styled-components';
import { IText } from '../Text';

function TruncateLines(props: IText['numLines']): FlattenSimpleInterpolation | undefined {
  const theme = useTheme();

  if (!props) return undefined;

  let responsiveStyles = '';

  if (Array.isArray(props) && theme?.breakpoints) {
    props.forEach((p, i) => {
      responsiveStyles += `
        @media (min-width: ${theme.breakpoints?.[i]}) {
          --line-clamp: ${p};
        }
      `;
    });
  }

  return css`
    ${responsiveStyles};

    display: -webkit-box;
    -webkit-line-clamp: var(--line-clamp, ${Array.isArray(props) ? props[0] : props});
    -webkit-box-orient: vertical;
    hyphens: auto;
    overflow: hidden;
    word-break: var(--word-break, 'none');

    // Automatically use "word-break: break-all" for single-lines
    // (https://css-tricks.com/css-switch-case-conditions)
    --is-single-line: 1 - clamp(0, calc(var(--line-clamp) - 1), var(--line-clamp));
    --delay: calc(-1s * (var(--is-single-line, 1) - 1));
    animation: states 1s var(--delay) paused;

    @keyframes states {
      0% {
        word-break: break-all;
      }
    }
  `;
}

export default TruncateLines;
