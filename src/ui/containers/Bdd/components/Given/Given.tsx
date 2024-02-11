import * as Styles from '../../styles'
import TextInput from '../../../../components/TextInput'
import { useState } from 'react'

export const Given = () => {
  const [given, setGiven] = useState([
    {
      value: '',
      description: '',
    },
  ])
  return (
    <Styles.BddStepWrapper>
      <Styles.BddLabel>Given</Styles.BddLabel>
      <TextInput placeholder={'요소/환경을 입력해주세요.'} />
      <Styles.DescriptionWrapper>
        <TextInput placeholder={'요소/환경에 대한 설명을 입력해 주세요.'} />
      </Styles.DescriptionWrapper>
    </Styles.BddStepWrapper>
  )
}
export default Given
