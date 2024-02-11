import { UseFormRegisterReturn } from 'react-hook-form'

export interface TextInputProps {
  type?: 'text' | 'password' | 'tel' | 'email' | 'number'
  state?: 'success' | 'error'
  defaultValue?: string
  value?: string
  placeholder?: string
  width?: string
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onClickReset?: () => void
  register?: UseFormRegisterReturn
  pattern?: string
  disabled?: boolean
  isReadOnly?: boolean
  maxLength?: number
  autoFocus?: boolean
}
