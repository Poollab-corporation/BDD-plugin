import * as Styles from '../../styles'
import TextInput from '../../../../components/TextInput'

export const WhenWithThen = () => {
  return (
    <Styles.BddStepWrapper>
      {/* When */}
      <Styles.BddStepWrapper>
        <Styles.BddLabel>When</Styles.BddLabel>
        <TextInput placeholder={'사용자 액션을 입력해주세요.'} />
        <Styles.InputWrapper>
          <TextInput placeholder={'사용자 태스크를 입력해주세요.'} />
          <Styles.AddButton />
        </Styles.InputWrapper>
      </Styles.BddStepWrapper>
      {/* Then */}
      <Styles.BddStepWrapper>
        <Styles.BddLabel>Then</Styles.BddLabel>
        <TextInput placeholder={'액션 결과를 입력해주세요.'} />
        <Styles.InputWrapper>
          <TextInput placeholder={'테스트 결과를 입력해주세요.'} />
        </Styles.InputWrapper>
      </Styles.BddStepWrapper>
    </Styles.BddStepWrapper>
  )
}
export default WhenWithThen
