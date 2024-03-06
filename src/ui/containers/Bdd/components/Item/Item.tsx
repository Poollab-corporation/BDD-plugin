import React from 'react'
import * as Styles from '../../styles'
import Given from '../Given'
import When from '../When'
import Then from '../Then'
import TextInput from '../../../../components/TextInput'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import Tasks from '../../containers/Tasks'

interface ItemProps {
  scenario: any
  index: number
}
const Item = ({ scenario, index }: ItemProps) => {
  const { setValue, control } = useFormContext()
  const { update } = useFieldArray({
    control: control,
    name: `scenarios.${index}.scenario_title`,
  })

  const onChangeScenarioTitle = (value: string, index: number) => {
    setValue(`scenarios.${index}.scenario_title`, value)
  }

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
                onChangeScenarioTitle(e.target.value, index)
              }}
            />
          )}
          name={`scenarios.${index}.scenario_title`}
        />
      </Styles.ScenarioTitleWrapper>
      <Tasks tasks={scenario.tasks} index={index} />
    </Styles.ScenarioWrapper>
  )
}

export default Item
