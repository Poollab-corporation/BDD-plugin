import * as Styles from './styles'
import { TextInputProps } from './TextInput.interface'

function TextInput({
  type = 'text',
  state = 'success',
  defaultValue,
  value,
  placeholder,
  width = '100%',
  onClick,
  onChange,
  onKeyUp,
  register,
  pattern,
  disabled = false,
  isReadOnly = false,
  maxLength,
  autoFocus = false,
}: TextInputProps) {
  return (
    <Styles.InputContainer>
      <Styles.Input
        $width={width}
        $state={state}
        type={type}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onClick={onClick}
        onChange={onChange}
        onKeyUp={onKeyUp}
        pattern={pattern}
        disabled={disabled}
        {...register}
        readOnly={isReadOnly}
        min={0}
        maxLength={maxLength}
        autoFocus={autoFocus}
      />
    </Styles.InputContainer>
  )
}

export default TextInput
