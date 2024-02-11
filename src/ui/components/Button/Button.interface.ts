export interface ButtonProps {
  state?: 'standard' | 'primary' | 'warning'
  style?: 'fill-strong' | 'fill-weak' | 'line' | 'mono'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  width?: string
  text: string
  iconSource?: string
  isIconOnLeft?: boolean
  gap?: number
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  isLoading?: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export interface LinkButtonProps extends ButtonProps {
  href: string
  isNewTab?: boolean
}

export interface IconBoxButtonProps {
  state?: 'standard' | 'primary' | 'warning'
  style?: 'fill-strong' | 'fill-weak' | 'line' | 'mono'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  iconSource?: string
  disabled?: boolean
  onClick?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export interface StyleProps {
  $size: 'xs' | 'sm' | 'md' | 'lg'
  $state: 'standard' | 'primary' | 'warning'
  $style: 'fill-strong' | 'fill-weak' | 'line' | 'mono'
  $isIconOnLeft?: boolean
  $width?: string
  $disabled?: boolean
}

export interface IconBoxButtonStyleProps {
  $state: 'standard' | 'primary' | 'warning'
  $style: 'fill-strong' | 'fill-weak' | 'line' | 'mono'
  $size: number
}

export interface IconSizes {
  [key: string]: number
}
