import * as Styles from '../../styles'
import TextInput from '../../../../components/TextInput'
import { useState } from 'react'

export const When = () => {
  const [whenWithThen, setWhenWithThen] = useState([
    {
      value: '',
      then: {},
    },
  ])

  return (
    <Styles.BddStepWrapper>
      <Styles.BddStepWrapper>
        <Styles.BddLabel>
          When
          <Styles.AddButton />
        </Styles.BddLabel>
        <TextInput placeholder={'사용자 액션을 입력해주세요.'} />
        <Styles.TaskWrapper>
          <TextInput placeholder={'사용자 태스크를 입력해주세요.'} />
          <Styles.AddButton />
        </Styles.TaskWrapper>
      </Styles.BddStepWrapper>
    </Styles.BddStepWrapper>
  )
}
export default When
