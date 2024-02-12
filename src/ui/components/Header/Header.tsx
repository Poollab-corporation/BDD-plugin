import TextInput from '../TextInput'
import * as Styles from './styles'
import * as BddStyles from '../../containers/Bdd/styles'
import Select from 'react-select'
import { ENTERPRISE_AUTHORITY_OPTIONS } from '../../../constants'
import { Controller, useFormContext } from 'react-hook-form'

export const Header = () => {
  const methods = useFormContext()
  return (
    <Styles.HeaderWrap>
      <Styles.Logo aria-label={'스테드'} />
      <Controller
        render={({ field: { onChange } }) => (
          <BddStyles.BddInputWrapper>
            <BddStyles.BddLabel>스토리 제목</BddStyles.BddLabel>
            <TextInput
              placeholder={'스토리 제목을 입력해주세요.'}
              onChange={onChange}
            />
          </BddStyles.BddInputWrapper>
        )}
        name={'title'}
        control={methods.control}
      />
      <Controller
        render={({ field: { onChange } }) => (
          <BddStyles.BddInputWrapper>
            <BddStyles.BddLabel>권한</BddStyles.BddLabel>
            <Select
              options={ENTERPRISE_AUTHORITY_OPTIONS}
              defaultValue={ENTERPRISE_AUTHORITY_OPTIONS[0]}
              onChange={onChange}
            />
          </BddStyles.BddInputWrapper>
        )}
        name={'authority'}
        control={methods.control}
      />
      <Controller
        render={({ field: { onChange } }) => (
          <BddStyles.BddInputWrapper>
            <BddStyles.BddLabel>기획서 URL</BddStyles.BddLabel>
            <TextInput
              placeholder={'기획서 URL을 입력해주세요.'}
              onChange={onChange}
            />
          </BddStyles.BddInputWrapper>
        )}
        name={'url'}
        control={methods.control}
      />
    </Styles.HeaderWrap>
  )
}

export default Header
