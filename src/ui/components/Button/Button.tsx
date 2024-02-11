'use client'

import * as Styles from './styles'
import { ButtonProps } from './Button.interface'
import { getDefaultStyle } from './Button.functions'

const Button = ({
  size = 'sm',
  state = 'primary',
  style,
  width = '100%',
  text,
  isIconOnLeft = true,
  disabled = false,
  isLoading = false,
  type = 'button',
  onClick,
  onMouseEnter,
  onMouseLeave,
}: ButtonProps) => {
  const handleClick = () => {
    if (!onClick) return
    onClick()
  }

  if (isLoading) {
    return (
      <Styles.Wrapper
        $size={size}
        $state={state}
        $style={getDefaultStyle(state, style)}
        $width={width}
        $isIconOnLeft={isIconOnLeft}
        disabled={disabled}
        type={type}
      >
        <Styles.Loading />
      </Styles.Wrapper>
    )
  }
  return (
    <Styles.Wrapper
      $size={size}
      $state={state}
      $style={getDefaultStyle(state, style)}
      $width={width}
      $isIconOnLeft={isIconOnLeft}
      disabled={disabled}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      type={type}
    >
      <Styles.TextLabel>{text}</Styles.TextLabel>
    </Styles.Wrapper>
  )
}

export default Button
