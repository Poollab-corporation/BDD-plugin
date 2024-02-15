import TextInput from '../TextInput'
import * as Styles from './styles'
import * as BddStyles from '../../containers/Bdd/styles'
import Select from 'react-select'
import { ENTERPRISE_AUTHORITY_OPTIONS } from '../../../constants'
import { Controller, useFormContext } from 'react-hook-form'
import Button from '../Button'
import React from 'react'

interface HeaderProps {
  onClick: () => void
}

export const Header = ({ onClick }: HeaderProps) => {
  const { register, control } = useFormContext()

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
        control={control}
      />
      <Controller
        render={({ field: { onChange } }) => (
          <BddStyles.BddInputWrapper>
            <BddStyles.BddLabel>권한</BddStyles.BddLabel>
            <Select
              options={ENTERPRISE_AUTHORITY_OPTIONS}
              placeholder={'권한을 선택해주세요.'}
              onChange={onChange}
              isSearchable={false}
            />
          </BddStyles.BddInputWrapper>
        )}
        name={'authority'}
        control={control}
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
        control={control}
      />
      <Button text={'시나리오 추가'} state="standard" onClick={onClick} />
    </Styles.HeaderWrap>
  )
}

export default Header
