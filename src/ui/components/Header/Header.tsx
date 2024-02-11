import TextInput from '../TextInput'
import * as Styles from './styles'
import Select from 'react-select'
import { ENTERPRISE_AUTHORITY_OPTIONS } from '../../../constants'

export const Header = () => {
  return (
    <Styles.HeaderWrap>
      <Styles.Logo />
      <TextInput placeholder={'스토리 제목을 입력해주세요.'} />
      <Select options={ENTERPRISE_AUTHORITY_OPTIONS} />
      <TextInput placeholder={'기획서 URL을 입력해주세요.'} />
    </Styles.HeaderWrap>
  )
}

export default Header
