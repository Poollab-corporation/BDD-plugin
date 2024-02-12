import * as Styles from '../../styles'
import TextInput from '../../../../components/TextInput'
import { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import * as BddStyles from '../../styles'
import Select from 'react-select'
import { ENTERPRISE_AUTHORITY_OPTIONS } from '../../../../../constants'

export const Given = () => {
  const methods = useFormContext()
  return (
    <Styles.BddStepWrapper>
      <Styles.BddLabel>Given</Styles.BddLabel>
      <Controller
        render={({ field: { onChange } }) => (
          <TextInput
            placeholder={'요소/환경을 입력해주세요.'}
            onChange={onChange}
          />
        )}
        name={'given'}
        control={methods.control}
      />
      <Styles.DescriptionWrapper>
        <Controller
          render={({ field: { onChange } }) => (
            <TextInput
              placeholder={'요소/환경에 대한 설명을 입력해 주세요.'}
              onChange={onChange}
            />
          )}
          name={'given_description'}
          control={methods.control}
        />
      </Styles.DescriptionWrapper>
    </Styles.BddStepWrapper>
  )
}
export default Given
