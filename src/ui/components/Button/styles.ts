import {
  getActiveStyle,
  getHoverStyle,
  getSizeStyle,
  getStyle,
} from './Button.functions'
import { IconBoxButtonStyleProps, StyleProps } from './Button.interface'
import styled from 'styled-components'

export const Wrapper = styled.button<StyleProps>`
  display: flex;
  flex-direction: ${(props) => (props.$isIconOnLeft ? 'row' : 'row-reverse')};
  justify-content: center;
  align-items: center;
  width: ${(props) => props.$width};
  border-radius: 6px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  ${(props) => getSizeStyle(props.$size)};
  ${(props) => getStyle(props.$state, props.$style)};

  &:disabled {
    opacity: 0.3;
    box-shadow: none;
    cursor: not-allowed;
  }

  &:not(:disabled, :active):hover {
    ${(props) => getHoverStyle(props.$state, props.$style)};
  }

  &:not(:disabled):active {
    ${(props) => getActiveStyle(props.$state, props.$style)};
  }
`

export const Loading = styled.i`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid ${(props) => props.theme.colors.white};
  border-bottom-color: ${(props) => props.theme.colors.blue500};
  border-radius: 50%;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const TextLabel = styled.span`
  flex-shrink: 0;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`

export const IconWrapper = styled.button<IconBoxButtonStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  border-radius: 6px;
  ${(props) => getStyle(props.$state, props.$style)};

  &:disabled {
    opacity: 0.3;
    box-shadow: none;
    cursor: not-allowed;
  }

  &:not(:disabled, :active):hover {
    ${(props) => getHoverStyle(props.$state, props.$style)};
  }

  &:not(:disabled):active {
    ${(props) => getActiveStyle(props.$state, props.$style)};
  }
`
