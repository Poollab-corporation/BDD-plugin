import styled from 'styled-components'
import { getTypeStyles } from './Badge.factory'

interface BadgeStyleProps {
  $type?: 'standard' | 'primary' | 'warning' | 'gray' | 'proceeding' | 'success'
  $isDisabled?: boolean
  $rounded?: number
}

export const Wrapper = styled.em<BadgeStyleProps>`
  display: inline-block;
  padding: 2px 6px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  font-style: normal;
  border-radius: ${(props) => props.$rounded}px;
  max-width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${(props) => props.theme.fonts[10]};
  ${(props) => getTypeStyles(props.$type)};
  opacity: ${(props) => (props.$isDisabled ? 0.3 : 1)};
`
