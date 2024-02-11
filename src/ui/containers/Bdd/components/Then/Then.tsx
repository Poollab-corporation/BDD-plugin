import * as Styles from '../../styles'
import TextInput from '../../../../components/TextInput'
import { useState } from 'react'
import Select from 'react-select'
import { TASK_OPTIONS } from '../../../../../constants/task'

export const Then = () => {
  const [whenWithThen, setWhenWithThen] = useState([
    {
      value: '',
      then: {},
    },
  ])

  return (
    <Styles.BddStepWrapper $isSelectBox={true}>
      <Styles.BddStepWrapper>
        <Styles.BddLabel>
          Then
          <Styles.AddButton />
        </Styles.BddLabel>
        <TextInput placeholder={'액션 결과를 입력해주세요.'} />
        <Styles.TaskWrapper>
          <TextInput placeholder={'태스크 결과를 입력해주세요.'} />
          <Select options={TASK_OPTIONS} defaultValue={TASK_OPTIONS[0]} />
          <Styles.AddButton />
        </Styles.TaskWrapper>
      </Styles.BddStepWrapper>
    </Styles.BddStepWrapper>
  )
}
export default Then
