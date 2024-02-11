import * as Styles from '../../styles'
import TextInput from '../../../../components/TextInput'

export const Given = () => {
  return (
    <Styles.BddStepWrapper>
      <Styles.BddLabel>Given</Styles.BddLabel>
      <Styles.InputWrapper>
        <TextInput placeholder={'요소/환경을 입력해주세요.'} />
        <Styles.AddButton />
      </Styles.InputWrapper>
      <TextInput placeholder={'요소/환경에 대한 설명을 입력해 주세요.'} />
    </Styles.BddStepWrapper>
  )
}
export default Given
