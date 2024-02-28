import React from 'react'
import * as Styles from '../../styles'
import Given from '../Given'
import When from '../When'
import Then from '../Then'
import TextInput from '../../../../components/TextInput'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'

interface ItemProps {
  scenario: any
  index: number
}
const Item = ({ scenario, index }: ItemProps) => {
  const { control } = useFormContext()
  const { update } = useFieldArray({
    control: control,
    name: `scenarios.${index}.scenario_title.text`,
  })
  return (
    <Styles.ScenarioWrapper>
      <Styles.ScenarioTitleWrapper>
        <Styles.BddLabel>제목</Styles.BddLabel>
        <Controller
          render={(field) => (
            <TextInput
              {...field}
              placeholder={'시나리오 제목을 입력해주세요.'}
              onChange={(e) => {
                update(index, e.target.value)
              }}
            />
          )}
          name={`scenarios.${index}.scenario_title.text`}
        />
      </Styles.ScenarioTitleWrapper>
      <Styles.ItemWrapper>
        <Given index={index} />
        <When index={index} />
        <Then index={index} />
      </Styles.ItemWrapper>
    </Styles.ScenarioWrapper>
  )
}

export default Item
